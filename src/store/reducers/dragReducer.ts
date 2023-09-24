import { SET_DRAGGABLE } from "store/actions/drag";
import { Task } from "types";

type DragState = {
  task: Task | null;
};

const initialState: DragState = {
  task: null,
};

export const dragReducer = (state = initialState, action: any): DragState => {
  const { type, payload } = action;

  switch (type) {
    case SET_DRAGGABLE: {
      const task = payload as Task;

      return {
        task,
      };
    }

    default:
      return state;
  }
};
