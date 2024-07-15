import React from "react";
import { Reply as ReplyType } from "../../@types/type";

interface ReplyProps {
  reply: ReplyType;
}

const Reply: React.FC<ReplyProps> = ({ reply }) => {
  const { content, replyingTo, user } = reply;
  return (
    <div className="mb-[24px] flex flex-col gap-[16px]">
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
      <p className="text-[13px] text-feedback-description">
        <span className="text-[13px] font-bold text-bt-purple_def">
          @{replyingTo}
        </span>
        {` ${content}`}
      </p>
    </div>
  );
};

export default Reply;
