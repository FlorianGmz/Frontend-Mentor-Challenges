import StatusCircle from "./StatusCircle";
import data from "../../../../data/data.json";
import React from "react";

interface RoadmapStatusProps {
  color: string;
  statusName: { label: string; value: string };
}

const RoadmapStatus: React.FC<RoadmapStatusProps> = ({ color, statusName }) => {
  const filteredStatus = data.productRequests.filter((request) => {
    return request.status === statusName.value;
  });
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-start gap-[16px]">
        <StatusCircle color={color} />
        <p className="text-body-1 text-feedback-description">
          {statusName.label}
        </p>
      </div>
      <p className="items-center text-comment-count">{filteredStatus.length}</p>
    </div>
  );
};

export default RoadmapStatus;
