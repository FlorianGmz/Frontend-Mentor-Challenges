import React, { useState } from "react";
import data from "../../data/data.json";
import { Comment as CommentType } from "../../@types/type";
import Reply from "./Reply";
import AddForm from "./AddForm";

interface CommentProps {
  comment: CommentType;
  index: number;
}

const Comment: React.FC<CommentProps> = ({ comment, index }) => {
  const { content, user, replies } = comment;
  const commentUsername = user.username;
  const currentUser = data.currentUser;
  const [reply, setReply] = useState("");
  const [charCount, setCharCount] = useState(250);
  const [postReply, setPostReply] = useState(false);
  const [emptySubmit, setEmpySubmit] = useState(false);

  const addNewReply = (
    currentUser: { image: string; name: string; username: string },
    commentUsername: string,
    reply: string,
  ) => {
    comment.replies?.push({
      content: reply,
      replyingTo: commentUsername,
      user: currentUser,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (reply.trim()) {
      if (!comment.replies) {
        comment.replies = [];
      }
      setEmpySubmit(false);
      addNewReply(currentUser, commentUsername, reply);
      setReply("");
      setCharCount(250);
      setPostReply((toggle) => !toggle);
    } else {
      setEmpySubmit(true);
    }
  };

  const isFirstComment = index === 0;

  return (
    <div className="flex flex-col">
      {!isFirstComment && (
        <span className="h-[1px] w-full bg-[#8C92B3] opacity-30"></span>
      )}
      <div className="flex flex-col gap-[16px] py-[24px]">
        <div className="flex items-center justify-between">
          <div className="flex gap-[16px]">
            <img
              src={user.image}
              alt="User profile"
              className="h-[40px] w-[40px] rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-[13px] font-bold text-el-font_def">
                {user.name}
              </p>
              <p className="text-[13px] text-feedback-description">
                @{user.username}
              </p>
            </div>
          </div>
          <span
            onClick={() => setPostReply((toggle) => !toggle)}
            className="text-body-3 text-el_active"
          >
            Reply
          </span>
        </div>
        <p className="text-[13px] text-feedback-description">{content}</p>
        {postReply && (
          <form onSubmit={handleSubmit}>
            <AddForm
              charCount={charCount}
              setCharCount={setCharCount}
              commentType="reply"
              comment={reply}
              setComment={setReply}
              emptySubmit={emptySubmit}
            />
          </form>
        )}
      </div>
      <div className="flex">
        <div>
          {replies && (
            <span className="mr-[24px] h-1/2 w-[1px] bg-[#8C92B3] opacity-30"></span>
          )}
        </div>
        <div>
          {replies?.map((reply) => <Reply key={reply.content} reply={reply} />)}
        </div>
      </div>
    </div>
  );
};

export default Comment;
