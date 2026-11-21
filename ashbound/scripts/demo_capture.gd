extends Node
## Lives under /root; advances the slice and writes PNGs to user://capture/


const OUT_DIR := "user://capture"


func _ready() -> void:
	call_deferred("_run")


func _run() -> void:
	DirAccess.make_dir_recursive_absolute(ProjectSettings.globalize_path(OUT_DIR))
	var state: Node = get_node("/root/GameState")
	state.call("reset")
	await _wait_frames(2)

	await _goto("res://scenes/title.tscn")
	await _shot("01_title")

	await _goto("res://scenes/dialogue.tscn")
	await _shot("02_dialogue_start")

	for _i in range(8):
		var runner: Node = get_tree().current_scene
		if runner and runner.has_method("_on_tap"):
			runner.call("_on_tap")
		await _wait_frames(2)
	await _shot("03_mid_dialogue")

	var runner2: Node = get_tree().current_scene
	if runner2 and runner2.has_method("_show_node"):
		runner2.call("_show_node", "major_choice")
	await _wait_frames(3)
	await _shot("04_major_choice")

	state.call("set_protect_heir")
	if runner2 and is_instance_valid(runner2) and runner2.has_method("_show_node"):
		runner2.call("_show_node", "heir_01")
	await _wait_frames(3)
	await _shot("05_heir_consequence")

	await _goto("res://scenes/ending.tscn")
	await _shot("06_ending_heir")

	state.call("set_obey_steward")
	await _goto("res://scenes/ending.tscn")
	await _shot("07_ending_steward")

	print("CAPTURE_DIR:", ProjectSettings.globalize_path(OUT_DIR))
	print("CAPTURE_DONE")
	get_tree().quit()


func _goto(path: String) -> void:
	get_tree().change_scene_to_file(path)
	await _wait_frames(4)


func _wait_frames(n: int) -> void:
	for _i in range(n):
		await get_tree().process_frame


func _shot(name: String) -> void:
	await get_tree().process_frame
	await RenderingServer.frame_post_draw
	var img: Image = get_tree().root.get_viewport().get_texture().get_image()
	var path := "%s/%s.png" % [OUT_DIR, name]
	var err := img.save_png(path)
	print("SAVED:", ProjectSettings.globalize_path(path), " err=", err)
