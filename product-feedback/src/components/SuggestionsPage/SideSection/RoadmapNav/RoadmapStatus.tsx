import { FeedbackType } from "../../../../@types/type";
import StatusCircle from "./StatusCircle";
import React from "react";

interface RoadmapStatusProps {
  feedback: FeedbackType[];
  status: "planned" | "in-progress" | "live";
}

const RoadmapStatus: React.FC<RoadmapStatusProps> = ({ feedback, status }) => {
  const statusColors = {
    planned: "#F49F85",
    "in-progress": "#AD1FEA",
    live: "#62BCFA",
  };

  const statusColor = statusColors[status];

  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-start gap-[16px]">
        <StatusCircle color={statusColor} />
        <p className="text-body-1 capitalize text-feedback-description">
          {status}
        </p>
      </div>
      <p className="items-center text-comment-count">{feedback.length}</p>
    </div>
  );
};

export default RoadmapStatus;
