import { useState } from "react";
import RoadmapHeader from "./RoadmapHeader";
import RoadmapNavbar from "./RoadmapNavbar";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import { FeedbackType } from "../../@types/type";
import StatusCard from "./StatusCard";

const RoadmapPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("in-progress");

  const { allFeedbacks } = useFeedbacks();

  const categorizedFeedbacks = {
    planned:
      allFeedbacks.filter(
        (feedback: FeedbackType) => feedback.status === "planned",
      ) || [],
    "in-progress":
      allFeedbacks.filter(
        (feedback: FeedbackType) => feedback.status === "in-progress",
      ) || [],
    live:
      allFeedbacks.filter(
        (feedback: FeedbackType) => feedback.status === "live",
      ) || [],
  };

  return (
    <div>
      <RoadmapHeader />
      <RoadmapNavbar
        categorizedFeedbacks={categorizedFeedbacks}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      <div className="flex flex-col gap-[24px] p-[24px]">
        <div className="flex flex-col gap-[4px]">
          <h1 className="text-h3 capitalize text-el-font_def">
            {selectedStatus} ({categorizedFeedbacks[selectedStatus].length})
          </h1>
          <p className="text-[13px] text-feedback-description">
            Features currently being developed
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          {categorizedFeedbacks[selectedStatus].map(
            (feedback: FeedbackType) => (
              <StatusCard feedback={feedback} feedbackDetailPage={false} />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
