import { buildPurchaseQueue } from "../../lib/priority";

export default function PurchaseQueue({ projects, purchases }) {
  const queue = buildPurchaseQueue(projects, purchases);

  return (
    <div className="stack">
      {queue.map((item) => {
        const project = projects.find((p) => p.id === item.project_id);
        return (
          <div className="purchase-row" key={item.id}>
            <span className={`dot ${item.blocking ? "blocking" : ""}`} />
            <strong>{item.name}</strong>
            <small>{project?.name ?? "Unknown project"}</small>
            <span className="badge">Project #{item.project_priority}</span>
          </div>
        );
      })}
    </div>
  );
}
