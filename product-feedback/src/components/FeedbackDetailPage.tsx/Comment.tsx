import React from "react";
import { Comment as CommentType } from "../../@types/type";
import Reply from "./Reply";

interface CommentProps {
  comment: CommentType;
  index: number;
}

const Comment: React.FC<CommentProps> = ({ comment, index }) => {
  const { content, user, replies } = comment;
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
          <p className="text-body-3 text-el_active">Reply</p>
        </div>
        <p className="text-[13px] text-feedback-description">{content}</p>
      </div>
      <div className="flex">
        {replies && (
          <span className="mr-[24px] h-[240px] w-[1px] bg-[#8C92B3] opacity-30"></span>
        )}
        <div>
          {replies?.map((reply) => <Reply key={reply.content} reply={reply} />)}
        </div>
      </div>
    </div>
  );
};

export default Comment;
