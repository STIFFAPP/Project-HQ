import PageHeader from "../components/ui/PageHeader";
import ContentProjectPanel from "../components/content/ContentProjectPanel";
import { loadState } from "../lib/storage";

export default function ContentPage() {
  const { projects } = loadState();
  const contentProjects = projects.filter(
    (project) => project.category === "KB Garage" || project.content_type
  );

  return (
    <>
      <PageHeader title="Content Projects" />
      <p className="page-intro">
        Project HQ tracks the overall work. Link a Notion page when a project needs
        detailed video style, shot lists, checklists, scripts and production notes.
      </p>
      <div className="stack">
        {contentProjects.map((project) => (
          <ContentProjectPanel project={project} key={project.id} />
        ))}
      </div>
    </>
  );
}
