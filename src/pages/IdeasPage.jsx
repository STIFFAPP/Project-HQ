import PageHeader from "../components/ui/PageHeader";
import { loadState } from "../lib/storage";

export default function IdeasPage() {
  const { ideas } = loadState();

  return (
    <>
      <PageHeader title="Ideas">
        <button className="button dark">+ Add Idea</button>
      </PageHeader>

      <div className="idea-grid">
        {ideas.map((idea) => (
          <article className="card" key={idea.id}>
            <span className="badge">{idea.category}</span>
            <h2>{idea.title}</h2>
            <p className="muted">Develop this idea into a full project when you are ready.</p>
          </article>
        ))}
      </div>

      {/* TODO: Add "Convert to project" action. */}
    </>
  );
}
