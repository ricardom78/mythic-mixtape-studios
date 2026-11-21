# Ashbound — Episode 1 (vertical slice)

Godot **4.3+** 2D portrait story game. Title → tap dialogue → one major branch (protect the heir vs obey the steward) → ending that reflects your choice.

## Open in Godot

1. Install [Godot 4.3+](https://godotengine.org/download) (Standard build is fine).
2. **Import** → select this folder (`ashbound/`) → open `project.godot`.
3. Press **F5** (or Play). Main scene is `scenes/title.tscn`.

Portrait layout is **720×1280**. In the editor, use a narrow window or the mobile emulator.

## How to play

- **Tap** (or click / Space / Enter) to advance dialogue.
- Soft choices appear as buttons; the **major** choice is protect heir vs obey steward.
- End screen title/body changes with `GameState` branch flags.

Dialogue lives in `data/episode1.json` (not hard-coded in UI scripts).

Optional screenshot pass (dev only): run main scene `scenes/demo_capture.tscn` — PNGs land in Godot user data `capture/`.

## Project layout

```
ashbound/
  project.godot
  data/episode1.json      # story + choices + endings
  scenes/                 # title, dialogue, ending
  scripts/                # UI runners + GameState autoload
  assets/                 # placeholder icon
  export_presets.cfg      # Android preset (fill SDK paths locally)
```

## Export Android (later)

Not required for this slice. When ready:

1. In Godot: **Editor → Manage Export Templates** → download for your engine version.
2. Install Android SDK / JDK; set paths under **Editor → Editor Settings → Export → Android**.
3. **Project → Export → Android** (preset in `export_presets.cfg`).
4. For Play Store later: prefer **AAB**; use debug APK for sideload smoke tests.

Debug APK smoke test (once SDK + templates are set):

```bash
godot --headless --path . --export-debug "Android" build/ashbound-debug.apk
```

## Creative locks (Episode 1)

- Title: **Ashbound**
- Protagonist: **Kael Renn**
- Tone: political thriller + one supernatural hint (the warm/wrong seal)
- Major choice: protect heir **vs** obey steward
- No combat
