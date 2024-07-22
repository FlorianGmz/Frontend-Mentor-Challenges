import React from "react";
import CommentCount from "./CommentCount";
import Request from "./Request";
import Upvote from "./Upvote";
import { NavLink } from "react-router-dom";
import { FeedbackType } from "../../../@types/type";

interface FeedbackProps {
  feedback: FeedbackType;
  feedbackDetailPage: boolean;
  addVote: (
    feedbackId: number,
    hasVoted: React.Dispatch<React.SetStateAction<boolean>>,
  ) => void;
}

const Feedback: React.FC<FeedbackProps> = ({
  feedback,
  feedbackDetailPage,
  addVote,
}) => {
  const { id, title, category, upvotes, description, comments } = feedback;

  let numberOfComments = comments ? comments.length : 0;

  if (comments) {
    comments.forEach((comment) => {
      if (comment.replies) {
        numberOfComments += comment.replies.length;
      }
    });
  }

  return (
    <div
      className={`group mx-auto flex h-[200px] w-[327px] cursor-pointer flex-col gap-[12px] rounded-xl bg-bt-white_def p-[24px] md:mx-auto md:h-[151px] md:w-[689px] md:flex-row md:items-center md:justify-between md:px-[32px] md:py-[28px] ${feedbackDetailPage ? "xl:w-[730px]" : "xl:w-[825px]"}`}
    >
      <div className="hidden md:mr-[40px] md:block md:self-start">
        <Upvote upvotes={upvotes} addVote={addVote} feedbackId={id} />
      </div>
      <NavLink
        className="flex flex-auto flex-col items-start justify-between md:self-stretch"
        to={`/feedback/${id}`}
      >
        <Request category={category} title={title} description={description} />
      </NavLink>
      <div className="flex justify-between md:hidden">
        <Upvote upvotes={upvotes} addVote={addVote} feedbackId={id} />
        <CommentCount numberOfComments={numberOfComments} />
      </div>
      <div className="hidden md:block">
        <CommentCount numberOfComments={numberOfComments} />
      </div>
    </div>
  );
};

export default Feedback;
