import React from "react";
import CommentCount from "./CommentCount";
import Request from "./Request";
import Upvote from "./Upvote";
import { FeedbackType } from "../../@types/type";
import { NavLink } from "react-router-dom";

interface FeedbackProps {
  feedback: FeedbackType;
}

const Feedback: React.FC<FeedbackProps> = ({ feedback }) => {
  const { id, title, category, upvotes, description, comments } = feedback;

  return (
    <NavLink
      to={`/feedback/${id}`}
      className="group flex h-[151px] w-[825px] cursor-pointer justify-between rounded-xl bg-bt-white_def px-[32px] py-[28px]"
    >
      <div className="flex gap-[32px]">
        <Upvote upvotes={upvotes} />
        <Request category={category} title={title} description={description} />
      </div>
      <CommentCount numberOfComments={comments?.length} />
    </NavLink>
  );
};

export default Feedback;
