# Project HQ — Full Interactive Starter

A local-first project command centre for Projects, Ideas, To-Do, Purchases and KB Garage content.

## Working now
- Create/delete projects, ideas, tasks and purchases
- Drag projects to reorder global priority
- Drag tasks within/between Today, This Week, Next Month and Backlog
- Category filtering
- Project detail editing
- Purchase states: Need / Ordered / Received / Installed
- Purchase costs, quantities and URLs
- Purchase queue automatically sorted by project priority and blocking state
- KB Garage/content workspace
- Editable video style, script, thumbnail notes, editing notes and shot checklist
- Optional shared Notion link with Open Notion button
- Dashboard roll-up
- Browser localStorage persistence
- JSON export/import backup
- Supabase-ready migration and client placeholder

## Run
```bash
npm install
npm run dev
```

## Supabase
Copy `.env.example` to `.env`, create a Supabase project, run `supabase/migrations/001.sql`, then add the URL and anon key. The UI currently uses the local repository so it works immediately. `src/supabase.js` is the boundary for replacing it with authenticated cloud persistence.

## Priority model
Project drag order is the master priority. Purchases marked `Need` are automatically sorted by:
1. Project priority
2. Blocking item first
3. Item position

Tasks have an independent time horizon and manual drag order.

## Notion
The current integration safely stores a shared Notion page URL only. It does not store Notion secrets. OAuth/API sync can be added server-side later.


## GitHub Pages
This build is preconfigured for the `Project-HQ` repository and deploys automatically from `main` using `.github/workflows/deploy.yml`.
