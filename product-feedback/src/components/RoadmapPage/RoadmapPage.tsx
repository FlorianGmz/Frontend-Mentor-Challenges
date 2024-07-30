import { useState } from "react";
import RoadmapHeader from "./RoadmapHeader";
import RoadmapNavbar from "./RoadmapNavbar";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import { FeedbackType } from "../../@types/type";

const RoadmapPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("in-progress");

  const { allFeedbacks } = useFeedbacks();

  const categorizedFeedbacks = {
    planned:
      allFeedbacks.filter(
        (feedback: FeedbackType) => feedback.status === "planned",
      ) || [],
    inProgress:
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
    </div>
  );
};

export default RoadmapPage;
