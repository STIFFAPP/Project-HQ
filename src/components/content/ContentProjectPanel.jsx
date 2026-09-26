import NotionLink from "./NotionLink";

export default function ContentProjectPanel({ project }) {
  return (
    <section className="card">
      <div className="section-heading">
        <div>
          <span className="badge">{project.category}</span>
          <h2>{project.name}</h2>
        </div>
        <NotionLink url={project.notion_url} />
      </div>

      <div className="content-grid">
        <div>🎨 Video Style</div>
        <div>🎥 Shots List</div>
        <div>✅ Shot Checklist</div>
        <div>📝 Script</div>
        <div>🖼️ Thumbnail Notes</div>
        <div>✂️ Editing Notes</div>
      </div>

      {/* TODO:
          These tiles become editors or links into a dedicated content record.
          KB Garage can use Notion as the detailed production workspace while
          Project HQ remains the high-level command centre. */}
    </section>
  );
}
