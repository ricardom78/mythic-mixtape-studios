extends Node
## Persistent flags for the Episode 1 vertical slice.

enum Branch {
	NONE,
	PROTECT_HEIR,
	OBEY_STEWARD,
}

var major_branch: Branch = Branch.NONE
var episode_complete: bool = false


func reset() -> void:
	major_branch = Branch.NONE
	episode_complete = false


func set_protect_heir() -> void:
	major_branch = Branch.PROTECT_HEIR


func set_obey_steward() -> void:
	major_branch = Branch.OBEY_STEWARD


func branch_id() -> String:
	match major_branch:
		Branch.PROTECT_HEIR:
			return "protect_heir"
		Branch.OBEY_STEWARD:
			return "obey_steward"
		_:
			return "none"
