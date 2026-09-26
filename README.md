# Project HQ

Project HQ is a personal command centre for turning ideas into prioritised projects, tasks, purchases and content workflows.

## Core idea

The **project order is the master priority**.

A high-priority project should surface:
- its next actions higher on the dashboard;
- its required purchases higher in the purchase queue;
- its linked content work more prominently.

## Included starter features

- Dashboard
- Projects
- Ideas inbox
- To-do board:
  - Today
  - This Week
  - Next Month
  - Backlog
- Categories:
  - Personal
  - Business
  - Hobby
  - KB Garage
  - Eden GMC
  - Life
  - Other
- Project detail structure
- Parts / purchase queue
- Content Projects section
- Optional Notion link per project
- KB Garage content fields/placeholders:
  - Video style
  - Shot list
  - Shot checklist
  - Script
  - Thumbnail notes
  - Editing notes
- Supabase-ready schema
- dnd-kit dependencies for project/task drag-and-drop

## Tech

- React
- Vite
- React Router
- dnd-kit
- Supabase (optional backend)
- localStorage fallback for the starter build

## Run locally

```bash
npm install
npm run dev
```

## Environment

Copy:

```bash
cp .env.example .env
```

Then add Supabase credentials if you want persistence/auth:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

If they are omitted, the starter app uses local browser storage.

## Repository structure

```text
project-hq/
├── .github/workflows/
├── supabase/migrations/
├── src/
│   ├── components/
│   │   ├── content/
│   │   ├── layout/
│   │   ├── projects/
│   │   ├── purchases/
│   │   ├── tasks/
│   │   └── ui/
│   ├── data/
│   ├── lib/
│   ├── pages/
│   └── styles/
├── .env.example
├── index.html
├── package.json
└── README.md
```

## Data relationships

```text
CATEGORY
   |
PROJECT (priority_position)
   |---- TASKS (time_bucket + position)
   |---- PARTS / PURCHASES
   |---- CONTENT PROJECT
   |         |
   |         ---- NOTION URL
   |         ---- VIDEO STYLE
   |         ---- SHOT LIST
   |         ---- SCRIPT
   |
   ---- NOTES / COSTS (future)
```

## Priority logic

`projects.priority_position` is the primary ordering value.

Purchase queue ordering should use:

1. project priority;
2. purchase blocking status;
3. purchase priority;
4. item position.

Task ordering should use:

1. time bucket (`today`, `this_week`, `next_month`, `backlog`);
2. manual position;
3. project priority as useful secondary context.

## Notion

The starter version supports a shared Notion URL. Clicking **Open Notion** opens the linked page in a new tab/device handler.

A production OAuth/API integration should be implemented server-side. Never put a Notion secret in frontend source code.

## Next implementation steps

1. Connect CRUD operations to Supabase.
2. Add Supabase Auth.
3. Wire `ProjectPriorityList` to dnd-kit and persist reordered `priority_position` values.
4. Wire task cards to draggable time buckets.
5. Add purchase states: Need / Ordered / Received / Installed.
6. Add dedicated project editor/detail route.
7. Add full KB Garage content-production editor.
8. Add Notion OAuth/API integration if bidirectional sync is wanted.
9. Add JSON backup/import/export.
