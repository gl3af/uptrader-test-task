import { bindActionCreators } from "redux";

import { store } from "store";
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  MOVE_TASK,
  SET_TASKS,
} from "store/actions/tasks";

import {
  AddTaskPayload,
  DeleteTaskPayload,
  EditTaskPayload,
  MoveTaskPayload,
  SetTasksPayload,
} from "store/payloads/tasks";

const setTasks = (payload: SetTasksPayload) => {
  return {
    type: SET_TASKS,
    payload,
  } as const;
};

const addTask = (payload: AddTaskPayload) => {
  return {
    type: ADD_TASK,
    payload,
  } as const;
};

const moveTask = (payload: MoveTaskPayload) => {
  return {
    type: MOVE_TASK,
    payload,
  } as const;
};

const editTask = (payload: EditTaskPayload) => {
  return {
    type: EDIT_TASK,
    payload,
  } as const;
};

const deleteTask = (payload: DeleteTaskPayload) => {
  return {
    type: DELETE_TASK,
    payload,
  } as const;
};

export const tasksActions = bindActionCreators(
  {
    set: setTasks,
    add: addTask,
    edit: editTask,
    move: moveTask,
    delete: deleteTask,
  },
  store.dispatch
);
