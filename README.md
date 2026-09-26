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
