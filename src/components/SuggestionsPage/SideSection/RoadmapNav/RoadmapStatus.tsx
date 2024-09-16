import { FeedbackType } from "../../../../@types/type";
import StatusCircle from "./StatusCircle";
import React from "react";

interface RoadmapStatusProps {
  feedback: FeedbackType | FeedbackType[];
  status: FeedbackType["status"];
  page: "roadmap" | "suggestions";
}

const RoadmapStatus: React.FC<RoadmapStatusProps> = ({
  feedback,
  status,
  page,
}) => {
  const statusColors = {
    planned: "#F49F85",
    "in-progress": "#AD1FEA",
    live: "#62BCFA",
    suggestion: "#f0f",
  };
  const statusColor = statusColors[status];

  const roadmapPage = page === "roadmap";

  const feedbackCount = Array.isArray(feedback) ? feedback.length : 1;

  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-start gap-[16px]">
        <StatusCircle color={statusColor} />
        <p
          className={`${roadmapPage ? "md:text-[13px]" : ""} text-body-1 capitalize text-feedback-description xl:text-[16px]`}
        >
          {status}
        </p>
      </div>
      {!roadmapPage && (
        <p
          className={`${roadmapPage ? "md:text-[13px]" : ""} items-center text-body-1 text-comment-count text-bt-white_font xl:text-[16px] xl:font-bold`}
        >
          {feedbackCount}
        </p>
      )}
    </div>
  );
};

export default RoadmapStatus;
