import { bindActionCreators } from "redux";
import { store } from "store";
import {
  ADD_SUBTASK,
  FINISH_SUBTASK,
  SET_SUBTASKS,
} from "store/actions/subtasks";
import {
  AddSubtaskPayload,
  FinishSubtaskPayload,
  SetSubtasksPayload,
} from "store/payloads/subtasks";

const setSubtasks = (payload: SetSubtasksPayload) => {
  return {
    type: SET_SUBTASKS,
    payload,
  } as const;
};

const addSubtask = (payload: AddSubtaskPayload) => {
  return {
    type: ADD_SUBTASK,
    payload,
  } as const;
};

const finishSubtask = (payload: FinishSubtaskPayload) => {
  return {
    type: FINISH_SUBTASK,
    payload,
  } as const;
};

export const subtasksActions = bindActionCreators(
  {
    set: setSubtasks,
    add: addSubtask,
    finish: finishSubtask,
  },
  store.dispatch
);
