import { useDrop } from "react-dnd";
import { Task } from "types";

import { store } from "store";
import { tasksActions } from "store/action-creators/tasks";
import TaskCard from "../TaskCard";
import "./style.scss";

type ListProps = {
  status: "queue" | "development" | "done";
  tasks: Task[];
};

export default function TaskList({ status, tasks }: ListProps) {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "card",
      drop: () => {
        const task = store.getState().grad.task;
        if (!task) return;

        tasksActions.move({
          id: task.id,
          status,
        });
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [status]
  );

  return (
    <div
      className="tasks-list"
      ref={drop}
      style={{ opacity: isOver ? 0.5 : 1 }}
    >
      {tasks.length === 0 && <p style={{ textAlign: "center" }}>Empty</p>}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
