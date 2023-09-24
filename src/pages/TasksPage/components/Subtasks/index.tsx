import { useState } from "react";
import { subtasksActions } from "store/action-creators/subtasks";
import { useAppSelector } from "store/hooks";
import { Subtask } from "types";
import "./style.scss";

export default function Subtasks({ taskId }: { taskId: string }) {
  const [name, setName] = useState<string>("");

  const subtasks = useAppSelector((state) => state.subtasks.subtasks);
  const subtasksOfGivenTask = subtasks.filter(
    (subtask) => subtask.taskId === taskId
  );

  const handleNewSubtask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    subtasksActions.add({
      taskId,
      name,
    });
    setName("");
  };

  return (
    <div className="subtasks">
      <div className="subtasks__header header">
        <h3 className="header__title">Subtasks</h3>
        <form
          onSubmit={(e) => handleNewSubtask(e)}
          className="header__form form"
        >
          <input
            className="form__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="New subtask..."
          />
        </form>
      </div>

      <div className="subtasks__list">
        {subtasksOfGivenTask.map((subtask) => (
          <SubtaskItem key={subtask.id} subtask={subtask} />
        ))}
      </div>
    </div>
  );
}

const SubtaskItem = ({ subtask }: { subtask: Subtask }) => {
  return (
    <div className="subtask">
      <input
        id={`subtask-${subtask.id}`}
        className="subtask__checkbox"
        type="checkbox"
        checked={subtask.completed}
        onChange={() =>
          subtasksActions.finish({
            id: subtask.id,
          })
        }
      />
      <label className="subtask__label" htmlFor={`subtask-${subtask.id}`}>
        {subtask.name}
      </label>
    </div>
  );
};
