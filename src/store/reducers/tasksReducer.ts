import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  MOVE_TASK,
  SET_TASKS,
  TasksActionTypes,
} from "store/actions/tasks";
import {
  AddTaskPayload,
  DeleteTaskPayload,
  EditTaskPayload,
  MoveTaskPayload,
  SetTasksPayload,
} from "store/payloads/tasks";

import { Task } from "types";
import { v4 as uuid } from "uuid";

type TasksState = {
  tasks: Task[];
};

const initialState: TasksState = {
  tasks: [],
};

export const tasksReducer = (
  state = initialState,
  action: { type: TasksActionTypes; payload: unknown }
): TasksState => {
  const { type, payload } = action;

  switch (type) {
    case SET_TASKS: {
      const tasks = payload as SetTasksPayload;

      return {
        ...state,
        tasks,
      };
    }

    case ADD_TASK: {
      const { title, taskNumber, description, status, priority, projectId } =
        payload as AddTaskPayload;

      const task: Task = {
        id: uuid(),
        projectId: projectId,
        taskNumber: taskNumber,
        title: title,
        description: description,
        dateCreated: new Date(Date.now()),
        status: status,
        priority: priority,
        files: [],
      };

      return {
        ...state,
        tasks: [...state.tasks, task],
      };
    }

    case MOVE_TASK: {
      const { id, status } = payload as MoveTaskPayload;

      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === id)
            return {
              ...task,
              status,
            };

          return task;
        }),
      };
    }

    case EDIT_TASK: {
      const { id, title, description, priority } = payload as EditTaskPayload;

      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === id)
            return {
              ...task,
              title,
              description,
              priority,
            };

          return task;
        }),
      };
    }

    case DELETE_TASK: {
      const { id } = payload as DeleteTaskPayload;

      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== id),
      };
    }

    default:
      return state;
  }
};
