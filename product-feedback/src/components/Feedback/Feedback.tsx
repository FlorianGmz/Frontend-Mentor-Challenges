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
    <div className="group flex h-[151px] cursor-pointer rounded-xl bg-bt-white_def px-[32px] py-[28px]">
      <Upvote upvotes={upvotes} />
      <NavLink to={`/feedback/${id}`} className="flex w-full justify-between">
        <Request category={category} title={title} description={description} />
        <CommentCount numberOfComments={comments?.length} />
      </NavLink>
    </div>
  );
};

export default Feedback;
