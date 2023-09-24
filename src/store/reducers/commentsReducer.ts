import {
  ADD_COMMENT,
  ADD_REPLY,
  CommentsActionTypes,
  SET_COMMENTS,
} from "store/actions/comments";
import {
  AddCommentPayload,
  AddReplyPayload,
  SetCommentsPayload,
} from "store/payloads/comments";

import { Comment } from "types";
import { v4 as uuid } from "uuid";

type CommentsState = {
  comments: Comment[];
};

const initialState: CommentsState = {
  comments: [],
};

export const commentsReducer = (
  state = initialState,
  action: { type: CommentsActionTypes; payload: unknown }
): CommentsState => {
  const { type, payload } = action;

  switch (type) {
    case SET_COMMENTS: {
      const comments = payload as SetCommentsPayload;

      return {
        ...state,
        comments,
      };
    }

    case ADD_COMMENT: {
      const { taskId, text } = payload as AddCommentPayload;

      const comment: Comment = {
        id: uuid(),
        taskId,
        text,
        parentId: null,
      };

      return {
        ...state,
        comments: [...state.comments, comment],
      };
    }

    case ADD_REPLY: {
      const { text, parentId } = payload as AddReplyPayload;

      const reply: Comment = {
        id: uuid(),
        taskId: null,
        text,
        parentId,
      };

      return {
        ...state,
        comments: [...state.comments, reply],
      };
    }

    default:
      return state;
  }
};
