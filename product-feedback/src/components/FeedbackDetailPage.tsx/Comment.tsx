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
  commentData,
  index,
  feedbackId,
}) => {
  const { user, content, replies, id } = commentData;

  const { currentUser, addReply } = useFeedbacks();

  const [postReply, setPostReply] = useState(false);

  const {
    comment,
    charCount,
    emptySubmit,
    setComment,
    setCharCount,
    setEmptySubmit,
  } = useFormState();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim()) {
      const newReply = {
        content: comment,
        replyingTo: user.username,
        user: currentUser,
      };
      addReply(newReply, id, feedbackId);
      setComment("");
      setCharCount(250);
      setPostReply(false);
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
        setPostReply={setPostReply}
        content={content}
        replyingTo={user.username}
        reply={false}
      />
      {postReply && (
        <div className="w-full pb-[24px]">
          <form onSubmit={handleSubmit}>
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
