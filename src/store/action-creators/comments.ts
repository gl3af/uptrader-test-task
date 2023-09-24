import { bindActionCreators } from "redux";
import { store } from "store";
import { ADD_COMMENT, ADD_REPLY, SET_COMMENTS } from "store/actions/comments";
import {
  AddCommentPayload,
  AddReplyPayload,
  SetCommentsPayload,
} from "store/payloads/comments";

const setComments = (payload: SetCommentsPayload) => {
  return {
    type: SET_COMMENTS,
    payload,
  } as const;
};

const addComment = (payload: AddCommentPayload) => {
  return {
    type: ADD_COMMENT,
    payload,
  } as const;
};

const addReply = (payload: AddReplyPayload) => {
  return {
    type: ADD_REPLY,
    payload,
  } as const;
};

export const commentsActions = bindActionCreators(
  {
    set: setComments,
    comment: addComment,
    reply: addReply,
  },
  store.dispatch
);
