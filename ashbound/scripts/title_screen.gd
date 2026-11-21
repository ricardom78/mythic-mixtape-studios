extends Control


func _ready() -> void:
	GameState.reset()


func _on_start_pressed() -> void:
	get_tree().change_scene_to_file("res://scenes/dialogue.tscn")


func _on_quit_pressed() -> void:
	get_tree().quit()
