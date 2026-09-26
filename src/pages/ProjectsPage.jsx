import PageHeader from "../components/ui/PageHeader";
import ProjectPriorityList from "../components/projects/ProjectPriorityList";
import { CATEGORIES } from "../data/seed";
import { loadState } from "../lib/storage";

export default function ProjectsPage() {
  const { projects } = loadState();

  return (
    <>
      <PageHeader title="Projects">
        <button className="button dark">+ New Project</button>
      </PageHeader>

      <div className="filters">
        <button className="chip selected">All</button>
        {CATEGORIES.map((category) => <button className="chip" key={category}>{category}</button>)}
      </div>

      <ProjectPriorityList projects={projects} />

      {/* TODO:
          Add category filtering and project creation modal.
          Category should be user-extensible later. */}
    </>
  );
}
