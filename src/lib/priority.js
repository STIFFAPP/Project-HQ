export function sortProjects(projects) {
  return [...projects].sort(
    (a, b) => a.priority_position - b.priority_position
  );
}

export function buildPurchaseQueue(projects, purchases) {
  const projectPriority = new Map(
    projects.map((project) => [project.id, project.priority_position])
  );

  return purchases
    .filter((item) => item.status === "need")
    .map((item) => ({
      ...item,
      project_priority: projectPriority.get(item.project_id) ?? 9999,
    }))
    .sort((a, b) => {
      if (a.project_priority !== b.project_priority) {
        return a.project_priority - b.project_priority;
      }
      if (a.blocking !== b.blocking) return a.blocking ? -1 : 1;
      return a.position - b.position;
    });
}
