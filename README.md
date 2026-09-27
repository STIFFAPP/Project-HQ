# Project HQ — Capture First Edition

A lightweight personal project command centre built around one rule: **capture now, organise later**.

## Main workflow

1. Open **Inbox** on your phone.
2. Tap **Capture**.
3. Dictate into the large text field using your Whisper keyboard/app dictation (or type/paste text).
4. Save it to the Inbox without classifying it.
5. Later, open the capture and turn it into a Task, Purchase, Idea, or Project.

Project HQ keeps the original capture archived after sorting so the source thought is not lost.

## Navigation

- Inbox — raw captures waiting to be sorted
- Today — current actions, project priority and next purchases
- Projects — ordered master project list
- Purchases — purchase queue driven by project priority
- Content — KB Garage/content production workspace

## Run locally

```bash
npm install
npm run dev
```

## GitHub Pages

The repo already includes `.github/workflows/deploy.yml` and `vite.config.js` with:

```js
base: '/Project-HQ/'
```

Push the files to the `main` branch of the `Project-HQ` repository. GitHub Actions will build and deploy the site.

## Whisper note

This web app does not control a separate Whisper iPhone app directly. The Capture screen is intentionally designed so you can focus the text field and use Whisper as your phone's dictation/keyboard input, or paste a Whisper transcript. The text then saves locally in Project HQ.

## Storage

The current version uses browser `localStorage`, preserving the existing `project-hq-full-v1` data key. Existing projects/tasks/purchases from the earlier Project HQ version are retained; the new Inbox field is added automatically.

Use **Backup** regularly to export a JSON copy of your data.


## Notes export
Inbox captures can be downloaded individually as TXT, all together as TXT, or all together as CSV. The full JSON backup remains available from the sidebar. Raw capture text is preserved when a capture is sorted and archived.

## Command-centre priority logic

The Dashboard is designed as a small command centre rather than a data-entry screen. Reorder **Do Next** tasks by drag/drop (desktop) or the ↑/↓ controls (phone). Reorder projects on the Projects screen. **Buy Next** is then calculated from project priority, linked task priority, blocking status and item position. Purchases can optionally be linked to a task.

Notion remains the detailed documentation layer: raw captures, research, scripts, measurements and collapsible project sections can live there while Project HQ shows the useful snippets. A real automatic Notion write/sync requires a Notion integration token and database/page IDs; the project-link UI can be used until those credentials are configured.

Cross-device cloud sync/login requires Supabase credentials and auth/database wiring. The current build remains local-first so it works immediately and does not expose secrets in GitHub Pages.

## Priority-driven command centre update
- Dashboard now shows Do Next, Buy Next, planned spend, unsorted captures, and project priority.
- Tasks can be reordered by drag-and-drop or accessible up/down buttons on phone.
- Purchases can optionally link to a task; Buy Next is calculated from project priority, linked task priority, blocking state, then purchase position.
- Mobile remains capture-first and desktop exposes the full command centre.
- Notion links remain project-level. Automatic Notion writes and cross-device login require configuring Supabase + a Notion integration/token; those credentials are intentionally not embedded in this public GitHub Pages bundle.

## Visual dashboard refresh
This edition uses a warmer, modular workspace aesthetic: large editorial headings, softly tinted metric cards, rounded dashboard modules, distinct planning columns, and a calmer mobile layout. It keeps Project HQ's own priority engine and capture-first workflow rather than copying any third-party template.


## iPhone + Mac responsive edition
- iPhone safe-area support for the notch, Dynamic Island and Home indicator.
- Fixed mobile bottom navigation with larger touch targets.
- Full-screen mobile drawers and bottom-sheet capture modal.
- 16px form controls to prevent Safari auto-zoom.
- Responsive task boards/cards for small iPhones, iPad and resizable Mac browser windows.
- macOS typography/rendering polish and wider desktop layouts.
- Apple web-app metadata so Project HQ behaves better when added to the iPhone Home Screen.
