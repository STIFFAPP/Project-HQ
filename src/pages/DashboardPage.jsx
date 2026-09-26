import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import ProjectPriorityList from "../components/projects/ProjectPriorityList";
import PurchaseQueue from "../components/purchases/PurchaseQueue";
import { loadState } from "../lib/storage";

export default function DashboardPage() {
  const data = loadState();
  const today = data.tasks.filter((task) => task.time_bucket === "today" && !task.completed);

  return (
    <>
      <PageHeader title="Dashboard" />

      <div className="stats">
        <div><strong>{data.projects.length}</strong><span>Projects</span></div>
        <div><strong>{data.projects.filter((p) => p.status === "Active").length}</strong><span>Active</span></div>
        <div><strong>{data.tasks.filter((t) => !t.completed).length}</strong><span>Open tasks</span></div>
        <div><strong>{data.purchases.filter((p) => p.status === "need").length}</strong><span>Purchases</span></div>
      </div>

      <div className="two-col">
        <Card title="🔥 Today">
          {today.map((task) => <div className="simple-row" key={task.id}>{task.title}</div>)}
          {!today.length && <p className="muted">Nothing scheduled today.</p>}
        </Card>

        <Card title="📌 Project Priority">
          <ProjectPriorityList projects={data.projects} />
        </Card>
      </div>

      <Card title="🛒 Purchase Queue">
        <PurchaseQueue projects={data.projects} purchases={data.purchases} />
      </Card>
    </>
  );
}
