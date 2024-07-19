import React, { useState } from "react";
import { Comment as CommentType, Reply as ReplyType } from "../../@types/type";
import Reply from "./Reply";
import AddForm from "./AddForm/AddForm";
import useFormState from "../../hooks/UseFormState";
import data from "../../data/data.json";
import CommentCard from "./CommentCard";

interface CommentProps {
  commentData: CommentType;
  index: number;
  addNewReply: (newReply: ReplyType, commentId: number) => void;
}

const Comment: React.FC<CommentProps> = ({
  commentData,
  index,
  addNewReply,
}) => {
  const { user, content, replies, id } = commentData;
  const currentUser = data.currentUser;

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
      addNewReply(newReply, id);
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
          addNewReply={addNewReply}
          index={index}
          commentId={id}
        />
      ))}
    </section>
  );
};

export default Comment;
