import {
  ADD_SUBTASK,
  FINISH_SUBTASK,
  SET_SUBTASKS,
  SubtasksActionTypes,
} from "store/actions/subtasks";
import {
  AddSubtaskPayload,
  FinishSubtaskPayload,
  SetSubtasksPayload,
} from "store/payloads/subtasks";

import { Subtask } from "types";
import { v4 as uuid } from "uuid";

type SubtasksState = {
  subtasks: Subtask[];
};

const initialState: SubtasksState = {
  subtasks: [],
};

export const subtasksReducer = (
  state = initialState,
  action: { type: SubtasksActionTypes; payload: unknown }
): SubtasksState => {
  const { type, payload } = action;

  switch (type) {
    case SET_SUBTASKS: {
      const subtasks = payload as SetSubtasksPayload;

      return {
        ...state,
        subtasks,
      };
    }

    case ADD_SUBTASK: {
      const { taskId, name } = payload as AddSubtaskPayload;

      const subtask: Subtask = {
        id: uuid(),
        taskId,
        name,
        completed: false,
      };

      return {
        ...state,
        subtasks: [...state.subtasks, subtask],
      };
    }

    case FINISH_SUBTASK: {
      const { id } = payload as FinishSubtaskPayload;

      return {
        ...state,
        subtasks: state.subtasks.map((subtask) => {
          if (subtask.id === id)
            return {
              ...subtask,
              completed: !subtask.completed,
            };

          return subtask;
        }),
      };
    }

    default:
      return state;
  }
};
