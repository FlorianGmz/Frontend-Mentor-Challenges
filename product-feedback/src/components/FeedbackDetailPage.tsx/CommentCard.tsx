import React from "react";
import { User } from "../../@types/type";

interface CommentCardProps {
  user: User;
  setPostReply: React.Dispatch<React.SetStateAction<boolean>>;
  content: string;
  reply: boolean;
  replyingTo: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  user,
  setPostReply,
  content,
  reply,
  replyingTo,
}) => {
  return (
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

      <p className="text-[13px] text-feedback-description">
        <span className="text-[13px] font-bold text-bt-purple_def">
          {reply && `@${replyingTo} `}
        </span>
        {content}
      </p>
    </div>
  );
};

export default CommentCard;
