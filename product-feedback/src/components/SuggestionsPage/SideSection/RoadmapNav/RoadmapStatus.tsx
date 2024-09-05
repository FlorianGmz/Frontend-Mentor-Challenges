import { FeedbackType } from "../../../../@types/type";
import StatusCircle from "./StatusCircle";
import React from "react";

interface RoadmapStatusProps {
  feedback: FeedbackType[] | FeedbackType;
  status: FeedbackType["status"];
  page: string;
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

  const roadmapPage = page === "roadmap";

  const statusColor = statusColors[status];

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
      <p
        className={`${roadmapPage ? "md:text-[13px]" : ""} items-center text-body-1 text-comment-count xl:text-[16px]`}
      >
        {Array.isArray(feedback) ? feedback.length : ""}
      </p>
    </div>
  );
};

export default RoadmapStatus;
