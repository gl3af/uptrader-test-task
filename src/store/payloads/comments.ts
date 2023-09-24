import { Comment } from "types";

export type AddCommentPayload = Pick<Comment, "taskId" | "text">;
export type AddReplyPayload = Pick<Comment, "parentId" | "text">;
export type SetCommentsPayload = Comment[];
