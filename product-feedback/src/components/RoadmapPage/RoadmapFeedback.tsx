import React from "react";
import { NavLink } from "react-router-dom";
import RoadmapStatus from "../SuggestionsPage/SideSection/RoadmapNav/RoadmapStatus";
import Upvote from "../ui/Feedback/Upvote";
import Request from "../ui/Feedback/Request";
import CommentCount from "../ui/Feedback/CommentCount";
import { FeedbackType } from "../../@types/type";

interface RoadmapFeedbackProps {
  feedback: FeedbackType;
}

const RoadmapFeedback: React.FC<RoadmapFeedbackProps> = ({ feedback }) => {
  const { id, title, status, category, upvotes, description, comments } =
    feedback;

  const calculateCommentCount = (comments: FeedbackType["comments"]) => {
    let totalComments = comments ? comments.length : 0;
    comments?.forEach((comment) => {
      totalComments += comment.replies?.length || 0;
    });
    return totalComments;
  };
  const numberOfComments = calculateCommentCount(comments);

  const getStatusBarClass = (status: string) => {
    switch (status) {
      case "planned":
        return "bg-status-planned";
      case "in-progress":
        return "bg-status-inProgress";
      case "live":
        return "bg-status-live";
      default:
        return "";
    }
  };

  return (
    <div className="group relative mx-auto flex h-[233px] w-full cursor-pointer flex-col gap-[16px] rounded-xl bg-bt-white_def p-[24px] md:h-[270px] md:w-[223px] md:items-start md:justify-between md:px-[16px] md:py-[20px] xl:w-[350px] xl:p-[24px]">
      <span
        className={`absolute left-0 top-0 h-[6px] w-full rounded-t-xl ${getStatusBarClass(
          status,
        )}`}
      />
      <div>
        <RoadmapStatus feedback={feedback} status={status} page="roadmap" />
      </div>
      <NavLink
        className="flex flex-auto flex-col items-start justify-between md:self-stretch"
        to={`/feedback/${id}`}
      >
        <Request
          category={category}
          title={title}
          description={description}
          page="roadmap"
        />
      </NavLink>
      <div className={`flex w-full justify-between`}>
        <Upvote upvotes={upvotes} feedbackId={id} page="roadmap" />
        <CommentCount numberOfComments={numberOfComments} />
      </div>
    </div>
  );
};

export default RoadmapFeedback;
