import React from "react";
import { FeedbackType, RoadmapStatusType } from "../../@types/type";
import RoadmapFeedback from "./RoadmapFeedback";

interface RoadmapFeedbacksSectionProps {
  categorizedFeedbacks: {
    planned: FeedbackType[];
    "in-progress": FeedbackType[];
    live: FeedbackType[];
  };
  selectedStatus: RoadmapStatusType;
}

const RoadmapFeedbacksSection: React.FC<RoadmapFeedbacksSectionProps> = ({
  categorizedFeedbacks,
  selectedStatus,
}) => {
  const getStatusDescription = (status: RoadmapStatusType) => {
    switch (status) {
      case "planned":
        return "Ideas prioritized for research";
      case "in-progress":
        return "Currently being developed";
      case "live":
        return "Released features";
      default:
        return "";
    }
  };

  const feedbacks = categorizedFeedbacks[selectedStatus];
  const statusDescription = getStatusDescription(selectedStatus);

  return (
    <div className="flex flex-col gap-[24px] p-[24px] md:w-[223px] md:px-0 md:pb-[24px] md:pt-[32px] xl:w-[350px]">
      <div className="flex flex-col gap-[4px]">
        <h1 className="text-h3 capitalize text-el-font_def md:text-h4 xl:text-h3">
          {selectedStatus} ({feedbacks.length})
        </h1>
        <p className="text-[13px] text-feedback-description md:text-[14px] xl:text-[16px]">
          {statusDescription}
        </p>
      </div>
      <div className="flex flex-col gap-[16px]">
        {feedbacks.map((feedback: FeedbackType) => (
          <RoadmapFeedback key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default RoadmapFeedbacksSection;
