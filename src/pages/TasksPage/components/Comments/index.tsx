import { useState } from "react";
import { commentsActions } from "store/action-creators/comments";
import { useAppSelector } from "store/hooks";
import { Comment } from "types";
import "./style.scss";

export default function Comments({ taskId }: { taskId: string }) {
  const allComments = useAppSelector((state) => state.comments.comments);
  const taskComments = allComments.filter(
    (comment) => comment.taskId === taskId
  );

  const [newComment, setNewComment] = useState<string>("");

  const handleNewComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newComment.trim().length === 0) return;

    commentsActions.comment({
      taskId,
      text: newComment,
    });

    setNewComment("");
  };

  return (
    <div className="comments">
      <h3 className="comments__title">Comments</h3>
      <form className="comments__form" onSubmit={(e) => handleNewComment(e)}>
        <input
          type="text"
          placeholder="Add new comment"
          className="comments__input"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </form>
      <CommentsList comments={taskComments} />
    </div>
  );
}

const CommentsList = ({ comments }: { comments: Comment[] }) => {
  return (
    <div className="comments__list">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

const CommentItem = ({ comment }: { comment: Comment }) => {
  const allComments = useAppSelector((state) => state.comments.comments);
  const replies = allComments.filter((reply) => reply.parentId === comment.id);

  const [reply, setReply] = useState<string>("");

  const handleReply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (reply.trim().length === 0) return;

    commentsActions.reply({
      parentId: comment.id,
      text: reply,
    });

    setReply("");
  };

  return (
    <div className="comment">
      <p className="comment__text">{comment.text}</p>
      <form className="reply-form" onSubmit={handleReply}>
        <input
          type="text"
          placeholder="Reply"
          className="reply-form__input"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
      </form>
      {replies.length > 0 && (
        <div className="comment__replies">
          <CommentsList comments={replies} />
        </div>
      )}
    </div>
  );
};
