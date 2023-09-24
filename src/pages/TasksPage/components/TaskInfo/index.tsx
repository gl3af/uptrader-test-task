import Modal from "components/Modal";
import { format, formatDistance } from "date-fns";
import { useModal } from "hooks/useModal";
import { ListChecks, MessageSquare } from "lucide-react";
import { Task } from "types";
import Comments from "../Comments";
import Subtasks from "../Subtasks";
import "./style.scss";

export default function TaskInfo({ task }: { task: Task }) {
  const [subtasksActive, toggleSubtasks] = useModal();
  const [commentsActive, toggleComments] = useModal();

  const timeInWork = (): string => {
    const now = new Date();
    const created = new Date(task.dateCreated);

    return formatDistance(now, created);
  };

  return (
    <div className="task-info">
      <div className="task-info__header header">
        <h3 className="header__title">
          {task.title} #{task.taskNumber}
        </h3>
        <p className="header__description">{task.description}</p>
      </div>
      <div className="task-info__wrapper">
        <InfoItem label="Status" value={task.status} />
        <InfoItem label="Priority" value={task.priority} />
        <InfoItem
          label="Created"
          value={format(new Date(task.dateCreated), "dd/MM/yyyy")}
        />
        <InfoItem label="Working time" value={timeInWork()} />
        <InfoItem
          label="Finished"
          value={
            task.dateEnding
              ? format(new Date(task.dateEnding), "dd/MM/yyyy")
              : ""
          }
        />
      </div>
      <div className="task-info__actions">
        <button onClick={toggleSubtasks}>
          <ListChecks />
        </button>
        <button onClick={toggleComments}>
          <MessageSquare />
        </button>
      </div>
      {subtasksActive && (
        <Modal active={subtasksActive} toggle={toggleSubtasks}>
          <Subtasks taskId={task.id} />
        </Modal>
      )}
      {commentsActive && (
        <Modal active={commentsActive} toggle={toggleComments}>
          <Comments taskId={task.id} />
        </Modal>
      )}
    </div>
  );
}

const InfoItem = ({ label, value }: { label: string; value: any }) => {
  return (
    <div className="task-info__item item">
      <p className="item__label">{label}</p>
      <p className="item__value">{value}</p>
    </div>
  );
};
