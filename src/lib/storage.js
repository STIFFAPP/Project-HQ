import {
  seedIdeas,
  seedProjects,
  seedPurchases,
  seedTasks,
} from "../data/seed";

const KEY = "project-hq-v1";

const defaultState = {
  projects: seedProjects,
  tasks: seedTasks,
  purchases: seedPurchases,
  ideas: seedIdeas,
};

export function loadState() {
  try {
    const saved = localStorage.getItem(KEY);
    return saved ? JSON.parse(saved) : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

export function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

// TODO: replace/augment with Supabase repository functions.
// Keep components independent of the persistence provider.
