export const SET_TASKS = "SET_TASKS";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const MOVE_TASK = "MOVE_TASK";
export const DELETE_TASK = "DELETE_TASK";

export type TasksActionTypes =
  | typeof SET_TASKS
  | typeof ADD_TASK
  | typeof EDIT_TASK
  | typeof MOVE_TASK
  | typeof DELETE_TASK;
