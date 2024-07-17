import React, { useState } from "react";
import { Comment as CommentType } from "../../@types/type";
import Reply from "./Reply";
import AddForm from "./AddForm";
import useFormState from "../../hooks/UseFormState";
import data from "../../data/data.json";
import CommentCard from "./CommentCard";

interface CommentProps {
  commentData: CommentType;
  index: number;
}

const Comment: React.FC<CommentProps> = ({ commentData, index }) => {
  const [commentState, setCommentState] = useState<CommentType>(commentData);
  const { user, content, replies } = commentState;

  const currentUser = data.currentUser; // Ensure this is properly defined

  const [postReply, setPostReply] = useState(false);

  const handleAddReply = (newReply: {
    content: string;
    replyingTo: string;
    user: { image: string; name: string; username: string };
  }) => {
    setCommentState((prevComment) => ({
      ...prevComment,
      replies: [...(prevComment.replies || []), newReply],
    }));
  };

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
      handleAddReply(newReply);
      setComment("");
      setCharCount(250);
      setPostReply(false);
    } else {
      setEmptySubmit(true);
    }
  };

  const isFirstComment = index === 0;

  return (
    <section className="flex h-auto w-auto flex-col">
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
        <div className="pb-[24px]">
          <form onSubmit={handleSubmit}>
            <AddForm
              charCount={charCount}
              setCharCount={setCharCount}
              commentType="reply"
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
          handleAddReply={handleAddReply}
          index={index}
        />
      ))}
    </section>
  );
};

export default Comment;
