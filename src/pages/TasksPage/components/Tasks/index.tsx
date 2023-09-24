import { Plus } from "lucide-react";
import { Status, Task } from "types";
import TaskList from "../TaskList";

import Modal from "components/Modal";
import { useModal } from "hooks/useModal";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AddForm from "../AddForm";
import "./style.scss";

export default function Tasks({
  status,
  tasks,
}: {
  tasks: Task[] | undefined;
  status: Status;
}) {
  const [addTaskFromActive, toggleAddTaskForm] = useModal();

  if (!tasks) return;

  return (
    <>
      {addTaskFromActive && (
        <Modal active={addTaskFromActive} toggle={toggleAddTaskForm}>
          <AddForm toggleModal={toggleAddTaskForm} status={status} />
        </Modal>
      )}
      <div className="tasks">
        <div className="tasks__header">
          <h2 className={`tasks__status status-${status}`}>{status}</h2>
          <button
            className="tasks__add-new"
            title="Add new task"
            onClick={toggleAddTaskForm}
          >
            <Plus />
          </button>
        </div>

        <DndProvider backend={HTML5Backend}>
          <TaskList tasks={tasks} status={status} />
        </DndProvider>
      </div>
    </>
  );
}
