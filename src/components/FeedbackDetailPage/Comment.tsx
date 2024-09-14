import React, { useState } from "react";
import { Comment as CommentType } from "../../@types/type";
import Reply from "./Reply";
import AddForm from "./AddForm/AddForm";
import useFormState from "../../hooks/UseFormState";
import CommentCard from "./CommentCard";
import { useFeedbacks } from "../../contexts/FeedbackContext";

interface CommentProps {
  commentData: CommentType;
  index: number;
  feedbackId: number;
}

const Comment: React.FC<CommentProps> = ({
  commentData: { user, content, replies, id },
  index,
  feedbackId,
}) => {
  const { currentUser, addReply } = useFeedbacks();

  const [isReplying, setIsReplying] = useState(false);

  const {
    comment,
    charCount,
    emptySubmit,
    setComment,
    setCharCount,
    setEmptySubmit,
  } = useFormState();

  const resetFormState = () => {
    setComment("");
    setCharCount(250);
    setIsReplying(false);
  };

  const handleReplySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (comment.trim()) {
      const newReply = {
        content: comment,
        replyingTo: user.username,
        user: currentUser,
      };

      addReply(newReply, id, feedbackId);
      resetFormState();
    } else {
      setEmptySubmit(true);
    }
  };

  const isFirstComment = index === 0;

  return (
    <section className="flex h-auto flex-col">
      {!isFirstComment && (
        <span className="h-[1px] w-full bg-[#8C92B3] opacity-30"></span>
      )}
      <CommentCard
        user={user}
        setPostReply={setIsReplying}
        content={content}
        replyingTo={user.username}
        reply={false}
      />
      {isReplying && (
        <div className="w-full pb-[24px]">
          <form onSubmit={handleReplySubmit}>
            <AddForm
              charCount={charCount}
              setCharCount={setCharCount}
              type="reply"
              comment={comment}
              setComment={setComment}
              emptySubmit={emptySubmit}
            />
          </form>
        </div>
      )}
      {replies?.map((reply, index) => (
        <Reply
          key={index}
          reply={reply}
          addReply={addReply}
          index={index}
          commentId={id}
          feedbackId={feedbackId}
        />
      ))}
    </section>
  );
};

export default Comment;
