extends Control

const DATA_PATH := "res://data/episode1.json"

@onready var title_label: Label = %EndingTitle
@onready var body_label: RichTextLabel = %EndingBody
@onready var tease_label: Label = %TeaseLabel
@onready var branch_badge: Label = %BranchBadge


func _ready() -> void:
	var branch := GameState.branch_id()
	var ending := _load_ending(branch)
	title_label.text = str(ending.get("title", "Episode 1"))
	body_label.text = str(ending.get("body", ""))
	tease_label.text = str(ending.get("tease", ""))
	match branch:
		"protect_heir":
			branch_badge.text = "Choice: Protect the heir"
		"obey_steward":
			branch_badge.text = "Choice: Obey the steward"
		_:
			branch_badge.text = "Choice: unresolved"


func _load_ending(branch: String) -> Dictionary:
	if not FileAccess.file_exists(DATA_PATH):
		return {}
	var parsed: Variant = JSON.parse_string(FileAccess.get_file_as_string(DATA_PATH))
	if typeof(parsed) != TYPE_DICTIONARY:
		return {}
	var endings: Dictionary = parsed.get("endings", {})
	if endings.has(branch):
		return endings[branch]
	return endings.get("none", {})


func _on_replay_pressed() -> void:
	GameState.reset()
	get_tree().change_scene_to_file("res://scenes/title.tscn")
