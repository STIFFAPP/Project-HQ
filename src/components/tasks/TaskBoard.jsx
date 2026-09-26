import { GripVertical } from "lucide-react";
import { TIME_BUCKETS } from "../../data/seed";

export default function TaskBoard({ tasks, projects }) {
  const projectName = (id) =>
    projects.find((project) => project.id === id)?.name ?? "General";

  return (
    <div className="task-board">
      {TIME_BUCKETS.map((bucket) => {
        const bucketTasks = tasks
          .filter((task) => task.time_bucket === bucket.id)
          .sort((a, b) => a.position - b.position);

        return (
          <section className="task-column" key={bucket.id}>
            <div className="column-title">
              <strong>{bucket.label}</strong>
              <span>{bucketTasks.filter((task) => !task.completed).length}</span>
            </div>

            {bucketTasks.map((task) => (
              <article className="task-card" key={task.id}>
                <GripVertical size={15} className="drag-handle" />
                <div>
                  <strong>{task.title}</strong>
                  <small>{projectName(task.project_id)}</small>
                </div>
              </article>
            ))}

            {/* TODO:
                Make each column droppable and each task sortable.
                Dragging a task between columns updates time_bucket.
                Dragging within a column updates position. */}
          </section>
        );
      })}
    </div>
  );
}
