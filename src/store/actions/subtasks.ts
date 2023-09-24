export const SET_SUBTASKS = "SET_SUBTASKS";
export const ADD_SUBTASK = "ADD_SUBTASK";
export const FINISH_SUBTASK = "FINISH_SUBTASK";

export type SubtasksActionTypes =
  | typeof SET_SUBTASKS
  | typeof ADD_SUBTASK
  | typeof FINISH_SUBTASK;
