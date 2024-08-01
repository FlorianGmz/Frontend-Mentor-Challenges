import React from "react";
import CommentCount from "./CommentCount";
import Request from "./Request";
import Upvote from "./Upvote";
import { NavLink } from "react-router-dom";
import { FeedbackType } from "../../../@types/type";
import RoadmapStatus from "../../SuggestionsPage/SideSection/RoadmapNav/RoadmapStatus";

interface FeedbackProps {
  feedback: FeedbackType;
  page: string;
}

const Feedback: React.FC<FeedbackProps> = ({ feedback, page }) => {
  const { id, title, status, category, upvotes, description, comments } =
    feedback;

  const detailPage = page === "detail";
  const roadmapPage = page === "roadmap";

  let numberOfComments = comments ? comments.length : 0;

  if (comments) {
    comments.forEach((comment) => {
      if (comment.replies) {
        numberOfComments += comment.replies.length;
      }
    });
  }

  return (
    // <div
    //   className={`group relative flex ${roadmapPage ? "h-[233px] gap-[16px] md:h-[270px] md:w-[223px] md:px-[16px] md:py-[20px] xl:w-[350px] xl:p-[24px]" : "mx-auto h-[200px] gap-[12px] md:mx-auto md:h-[151px] md:w-[689px] md:flex-row md:items-center md:justify-between md:px-[32px] md:py-[28px]"} w-full cursor-pointer flex-col rounded-xl bg-bt-white_def p-[24px] ${detailPage ? "xl:w-[730px]" : "xl:w-[825px]"}`}
    // >
    <div
      className={`group relative mx-auto flex h-[200px] w-full cursor-pointer flex-col gap-[12px] rounded-xl bg-bt-white_def p-[24px] md:h-[151px] md:flex-row md:items-center md:justify-between md:px-[32px] md:py-[28px] ${
        roadmapPage
          ? "h-[233px] gap-[16px] md:h-[270px] md:w-[223px] md:flex-col md:items-start md:px-[16px] md:py-[20px] xl:w-[350px] xl:p-[24px]"
          : detailPage
            ? "md:w-[689px] xl:w-[730px]"
            : "md:w-[689px] xl:w-[825px]"
      }`}
    >
      {roadmapPage && (
        <>
          <span
            className={`absolute left-0 top-0 h-[6px] w-full rounded-t-xl ${
              status === "planned"
                ? "bg-status-planned"
                : status === "in-progress"
                  ? "bg-status-inProgress"
                  : status === "live"
                    ? "bg-status-live"
                    : ""
            }`}
          />
          <div>
            <RoadmapStatus feedback={feedback} status={status} page="roadmap" />
          </div>
        </>
      )}
      {/* Visible on tablet and desktop viewport */}
      <div
        className={`hidden ${roadmapPage ? "" : "md:mr-[40px] md:block md:self-start"}`}
      >
        <Upvote upvotes={upvotes} feedbackId={id} page="roadmap" />
      </div>
      {/*  */}

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

      {/* Visible on smartphone viewport */}
      <div className={`flex justify-between ${roadmapPage ? "" : "md:hidden"}`}>
        <Upvote upvotes={upvotes} feedbackId={id} page="roadmap" />
        <CommentCount numberOfComments={numberOfComments} />
      </div>
      {/*  */}

      {/* Visible on tablet and desktop viewport */}
      <div className={`hidden ${roadmapPage ? "" : "md:block"}`}>
        <CommentCount numberOfComments={numberOfComments} />
      </div>
      {/*  */}
    </div>
  );
};

export default Feedback;
