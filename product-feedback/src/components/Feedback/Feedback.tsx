import React from "react";
import CommentCount from "./CommentCount";
import Request from "./Request";
import Upvote from "./Upvote";
import { FeedbackType } from "../../@types/type";

interface FeedbackProps {
  feedback: FeedbackType;
}

const Feedback: React.FC<FeedbackProps> = ({ feedback }) => {
  const { title, category, upvotes, description, comments } = feedback;

  return (
    <div className="group flex h-[151px] w-[825px] cursor-pointer justify-between rounded-xl bg-bt-white_def px-[32px] py-[28px]">
      <div className="flex gap-[32px]">
        <Upvote upvotes={upvotes} />
        <Request category={category} title={title} description={description} />
      </div>
      <CommentCount numberOfComments={comments?.length} />
    </div>
  );
};

export default Feedback;
