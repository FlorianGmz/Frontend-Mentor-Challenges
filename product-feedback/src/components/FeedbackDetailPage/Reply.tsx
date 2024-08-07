import React, { useState } from "react";
import { Reply as ReplyType } from "../../@types/type";
import AddForm from "./AddForm/AddForm";
import useFormState from "../../hooks/UseFormState";
import CommentCard from "./CommentCard";
import { useFeedbacks } from "../../contexts/FeedbackContext";

interface ReplyProps {
  reply: ReplyType;
  index: number;
  addReply: (
    newReply: ReplyType,
    commentId: number,
    feedbackId: number,
  ) => void;
  commentId: number;
  feedbackId: number;
}

const Reply: React.FC<ReplyProps> = ({
  commentId,
  reply,
  index,
  addReply,
  feedbackId,
}) => {
  const { content, replyingTo, user } = reply;
  const firstReply = index === 0;
  const commentUsername = user.username;
  const { currentUser } = useFeedbacks();
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
        replyingTo: commentUsername,
        user: currentUser,
      };
      console.log([commentId, feedbackId]);
      addReply(newReply, commentId, feedbackId);
      setComment("");
      setCharCount(250);
      setPostReply(false);
    } else {
      setEmptySubmit(true);
    }
  };

  return (
    <div>
      {firstReply && (
        <span className="relative top-0 h-full w-[1px] bg-[#8C92B3] opacity-30"></span>
      )}
      <div className="ml-[24px] md:ml-[46px]">
        <CommentCard
          user={user}
          setPostReply={setPostReply}
          content={content}
          reply={true}
          replyingTo={replyingTo}
        />
        {postReply && (
          <div className="pb-[24px]">
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
      </div>
    </div>
  );
};

export default Reply;
