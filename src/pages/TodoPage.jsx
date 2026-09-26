import PageHeader from "../components/ui/PageHeader";
import TaskBoard from "../components/tasks/TaskBoard";
import { loadState } from "../lib/storage";

export default function TodoPage() {
  const data = loadState();

  return (
    <>
      <PageHeader title="To-Do">
        <button className="button dark">+ Add Task</button>
      </PageHeader>
      <TaskBoard tasks={data.tasks} projects={data.projects} />
    </>
  );
}
