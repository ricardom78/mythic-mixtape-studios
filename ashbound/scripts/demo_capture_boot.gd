extends Node
## Spawns a root-level capture keeper, then removes itself.


func _ready() -> void:
	var keeper := Node.new()
	keeper.name = "CaptureKeeper"
	keeper.set_script(preload("res://scripts/demo_capture.gd"))
	get_tree().root.add_child.call_deferred(keeper)
	queue_free()
