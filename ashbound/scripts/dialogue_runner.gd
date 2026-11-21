extends Control
## Loads episode JSON and drives tap-to-advance dialogue + choices.

signal episode_finished(branch_id: String)

@onready var background: ColorRect = %Background
@onready var scene_label: Label = %SceneLabel
@onready var speaker_label: Label = %SpeakerLabel
@onready var body_label: RichTextLabel = %BodyLabel
@onready var advance_hint: Label = %AdvanceHint
@onready var choices_box: VBoxContainer = %ChoicesBox
@onready var tap_area: Button = %TapArea

const DATA_PATH := "res://data/episode1.json"

var _data: Dictionary = {}
var _nodes: Dictionary = {}
var _current_id: String = ""
var _awaiting_choice: bool = false

const BG_COLORS := {
	"hall": Color(0.14, 0.1, 0.09),
	"corridor": Color(0.08, 0.1, 0.14),
	"solar": Color(0.12, 0.09, 0.16),
	"end": Color(0.05, 0.06, 0.08),
}

const BG_NAMES := {
	"hall": "Great Hall",
	"corridor": "Corridor",
	"solar": "Sealed Solar",
	"end": "Greyfen — After",
}


func _ready() -> void:
	tap_area.pressed.connect(_on_tap)
	_clear_choices()
	if not _load_data():
		speaker_label.text = "Error"
		body_label.text = "Could not load episode data."
		return
	_show_node(str(_data.get("start", "")))


func _load_data() -> bool:
	if not FileAccess.file_exists(DATA_PATH):
		push_error("Missing dialogue file: %s" % DATA_PATH)
		return false
	var raw := FileAccess.get_file_as_string(DATA_PATH)
	var parsed: Variant = JSON.parse_string(raw)
	if typeof(parsed) != TYPE_DICTIONARY:
		push_error("Invalid JSON in %s" % DATA_PATH)
		return false
	_data = parsed
	_nodes = _data.get("nodes", {})
	return not _nodes.is_empty()


func _show_node(node_id: String) -> void:
	if node_id.is_empty() or not _nodes.has(node_id):
		push_error("Unknown node: %s" % node_id)
		return
	_current_id = node_id
	var node: Dictionary = _nodes[node_id]

	if bool(node.get("ending", false)):
		_go_to_ending()
		return

	var bg_key := str(node.get("background", "hall"))
	background.color = BG_COLORS.get(bg_key, BG_COLORS["hall"])
	scene_label.text = BG_NAMES.get(bg_key, bg_key.capitalize())
	speaker_label.text = str(node.get("speaker", ""))
	body_label.text = str(node.get("text", ""))

	_clear_choices()
	var choices: Array = node.get("choices", [])
	if choices.size() > 0:
		_awaiting_choice = true
		advance_hint.visible = false
		tap_area.disabled = true
		# Keep body compact so choice buttons stay on-screen (portrait).
		body_label.custom_minimum_size = Vector2(0, 72)
		body_label.size_flags_vertical = Control.SIZE_SHRINK_BEGIN
		body_label.fit_content = true
		body_label.scroll_active = false
		for choice in choices:
			_add_choice_button(choice)
	else:
		_awaiting_choice = false
		advance_hint.visible = true
		tap_area.disabled = false
		body_label.custom_minimum_size = Vector2(0, 120)
		body_label.size_flags_vertical = Control.SIZE_EXPAND_FILL
		body_label.fit_content = false
		body_label.scroll_active = true


func _add_choice_button(choice: Dictionary) -> void:
	var btn := Button.new()
	btn.text = str(choice.get("text", "…"))
	btn.custom_minimum_size = Vector2(0, 96)
	btn.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	btn.size_flags_vertical = Control.SIZE_SHRINK_BEGIN
	btn.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	btn.add_theme_font_size_override("font_size", 20)
	btn.clip_text = false
	btn.focus_mode = Control.FOCUS_NONE
	btn.pressed.connect(_on_choice_pressed.bind(choice))
	choices_box.add_child(btn)


func _clear_choices() -> void:
	# Free immediately so layout doesn't keep stale buttons for a frame.
	for child in choices_box.get_children():
		choices_box.remove_child(child)
		child.free()


func _on_choice_pressed(choice: Dictionary) -> void:
	if not _awaiting_choice:
		return
	var flag := str(choice.get("flag", ""))
	if flag == "protect_heir":
		GameState.set_protect_heir()
	elif flag == "obey_steward":
		GameState.set_obey_steward()
	_awaiting_choice = false
	tap_area.disabled = false
	_show_node(str(choice.get("next", "")))


func _on_tap() -> void:
	if _awaiting_choice:
		return
	var node: Dictionary = _nodes.get(_current_id, {})
	var next_id := str(node.get("next", ""))
	if next_id.is_empty():
		return
	_show_node(next_id)


func _go_to_ending() -> void:
	GameState.episode_complete = true
	get_tree().change_scene_to_file("res://scenes/ending.tscn")


func _unhandled_input(event: InputEvent) -> void:
	if _awaiting_choice:
		return
	if event.is_action_pressed("ui_accept") or (
		event is InputEventKey and event.pressed and not event.echo and event.keycode == KEY_SPACE
	):
		_on_tap()
		get_viewport().set_input_as_handled()
