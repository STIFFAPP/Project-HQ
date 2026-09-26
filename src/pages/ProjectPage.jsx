import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import NotionLink from "../components/content/NotionLink";
import { loadState } from "../lib/storage";

export default function ProjectPage() {
  const { projectId } = useParams();
  const data = loadState();
  const project = data.projects.find((item) => item.id === projectId);

  if (!project) return <p>Project not found.</p>;

  const tasks = data.tasks.filter((item) => item.project_id === project.id);
  const purchases = data.purchases.filter((item) => item.project_id === project.id);

  return (
    <>
      <Link to="/projects" className="back-link">← Projects</Link>
      <PageHeader title={project.name} />
      <div className="project-meta">
        <span className="badge">{project.category}</span>
        <span className="badge">{project.status}</span>
        <span className="badge">Priority #{project.priority_position}</span>
        <span className="badge">{project.progress}% complete</span>
      </div>

      <p className="page-intro">{project.description}</p>

      <div className="two-col">
        <Card title="Tasks">
          {tasks.map((task) => <div className="simple-row" key={task.id}>{task.title}</div>)}
          <button className="button">+ Add task</button>
        </Card>

        <Card title="Parts / Purchases">
          {purchases.map((item) => <div className="simple-row" key={item.id}>{item.name}</div>)}
          <button className="button">+ Add part</button>
        </Card>
      </div>

      {(project.category === "KB Garage" || project.content_type) && (
        <Card title="🎬 Content Workspace">
          <p className="muted">
            Optional Notion workspace for video style, shots, shot checklist,
            script, thumbnail and editing notes.
          </p>
          <NotionLink url={project.notion_url} />
        </Card>
      )}

      {/* TODO:
          Turn this into a full project editor:
          - editable project metadata
          - project notes
          - task detail modal
          - part statuses
          - costs/budget
          - Notion checkbox + URL
          - content type selector */}
    </>
  );
}
