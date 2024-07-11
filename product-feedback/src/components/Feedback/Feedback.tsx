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
    <div className="group mx-[24px] flex h-[200px] cursor-pointer flex-col gap-[12px] rounded-xl bg-bt-white_def p-[24px]">
      <NavLink
        className="flex flex-auto flex-col items-start justify-between"
        to={`/feedback/${id}`}
      >
        <Request category={category} title={title} description={description} />
      </NavLink>
      <div className="flex justify-between">
        <Upvote upvotes={upvotes} />
        <CommentCount numberOfComments={comments?.length} />
      </div>
    </div>
  );
};

export default Feedback;
