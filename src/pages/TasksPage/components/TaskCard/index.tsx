import Modal from "components/Modal";
import { useModal } from "hooks/useModal";
import { Pencil, X } from "lucide-react";
import { useDrag } from "react-dnd";
import { dragActions } from "store/action-creators/drag";
import { projectsActions } from "store/action-creators/projects";
import { tasksActions } from "store/action-creators/tasks";
import { Task } from "types";
import EditForm from "../EditForm";
import TaskInfo from "../TaskInfo";
import "./style.scss";

export default function TaskCard({ task }: { task: Task }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [infoActive, toggleInfo] = useModal();
  const [editActive, toggleEdit] = useModal();

  function handleEdit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    toggleEdit();
  }

  function handleDelete(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    tasksActions.delete({
      id: task.id,
    });
  }

  return (
    <>
      {infoActive && (
        <Modal active={infoActive} toggle={toggleInfo}>
          <TaskInfo task={task} />
        </Modal>
      )}
      {editActive && (
        <Modal active={editActive} toggle={toggleEdit}>
          <EditForm toggleModal={toggleEdit} taskId={task.id} />
        </Modal>
      )}
      <div
        className="task-card"
        ref={drag}
        onDragStart={() => dragActions.set(task)}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        onClick={toggleInfo}
      >
        <div className="task-card__header header">
          <h1 className="header__title">
            {task.title} #{task.taskNumber}
          </h1>
          <div className="header__actions">
            <button className="action" onClick={(e) => handleEdit(e)}>
              <Pencil />
            </button>
            <button className="action" onClick={(e) => handleDelete(e)}>
              <X color="red" />
            </button>
          </div>
        </div>

        <p className="task-card__description">{task.description}</p>
        <p className={`task-card__priority priority-${task.priority}`}>
          {task.priority}
        </p>
      </div>
    </>
  );
}
