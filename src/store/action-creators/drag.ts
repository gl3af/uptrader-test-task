import { bindActionCreators } from "redux";
import { store } from "store";
import { SET_DRAGGABLE } from "store/actions/drag";
import { Task } from "types";

const setDraggable = (payload: Task) => {
  return {
    type: SET_DRAGGABLE,
    payload,
  } as const;
};

export const dragActions = bindActionCreators(
  {
    set: setDraggable,
  },
  store.dispatch
);
