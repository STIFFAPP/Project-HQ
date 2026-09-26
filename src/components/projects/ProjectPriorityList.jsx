import { Link } from "react-router-dom";
import { GripVertical } from "lucide-react";
import { sortProjects } from "../../lib/priority";

export default function ProjectPriorityList({ projects }) {
  const ordered = sortProjects(projects);

  return (
    <div className="stack">
      {ordered.map((project) => (
        <Link className="project-row" to={`/projects/${project.id}`} key={project.id}>
          <GripVertical size={17} className="drag-handle" />
          <span className="rank">#{project.priority_position}</span>
          <div className="grow">
            <strong>{project.name}</strong>
            <small>{project.category} · {project.status}</small>
            <div className="progress">
              <i style={{ width: `${project.progress}%` }} />
            </div>
          </div>
          <span>{project.progress}%</span>
        </Link>
      ))}

      {/* TODO:
          Wrap this list in DndContext + SortableContext from @dnd-kit.
          On drag end, calculate the new ordered array and persist
          priority_position for affected projects. */}
    </div>
  );
}
