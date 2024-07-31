import React from "react";
import { FeedbackType } from "../../@types/type";
import Feedback from "../ui/Feedback/Feedback";

interface RoadmapFeedbacksSectionProps {
  categorizedFeedbacks: {
    planned: FeedbackType[] | [];
    "in-progress": FeedbackType[] | [];
    live: FeedbackType[] | [];
  };
  selectedStatus: string;
}

const RoadmapFeedbacksSection: React.FC<RoadmapFeedbacksSectionProps> = ({
  categorizedFeedbacks,
  selectedStatus,
}) => {
  return (
    <div className="flex flex-col gap-[24px] p-[24px] md:w-[223px] md:px-0 md:pb-[24px] md:pt-[32px]">
      <div className="flex flex-col gap-[4px]">
        <h1 className="text-h3 capitalize text-el-font_def md:text-h4">
          {selectedStatus} ({categorizedFeedbacks[selectedStatus].length})
        </h1>
        <p className="text-[13px] text-feedback-description md:text-[14px]">
          {selectedStatus === "planned"
            ? "Ideas prioritized for research"
            : selectedStatus === "in-progress"
              ? "Currently being developed"
              : selectedStatus === "live"
                ? "Released features"
                : ""}
        </p>
      </div>
      <div className="flex flex-col gap-[16px]">
        {categorizedFeedbacks[selectedStatus].map((feedback: FeedbackType) => (
          <Feedback feedback={feedback} page="roadmap" />
        ))}
      </div>
    </div>
  );
};

export default RoadmapFeedbacksSection;
