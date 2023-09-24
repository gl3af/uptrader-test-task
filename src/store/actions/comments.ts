export const SET_COMMENTS = "SET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_REPLY = "ADD_REPLY";

export type CommentsActionTypes =
  | typeof SET_COMMENTS
  | typeof ADD_COMMENT
  | typeof ADD_REPLY;
