import { useState } from "react";
import RoadmapHeader from "./RoadmapHeader";
import RoadmapNavbar from "./RoadmapNavbar";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import { FeedbackType } from "../../@types/type";
import RoadmapFeedbacksSection from "./RoadmapFeedbacksSection";

const RoadmapPage = () => {
  const [selectedStatus, setSelectedStatus] = useState<
    "planned" | "in-progress" | "live"
  >("in-progress");

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
  console.log(categorizedFeedbacks);
  return (
    <div>
      <RoadmapHeader />

      {/* This layout is displayed only on smartphone */}
      <div className="md:hidden">
        <RoadmapNavbar
          categorizedFeedbacks={categorizedFeedbacks}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
        <RoadmapFeedbacksSection
          categorizedFeedbacks={categorizedFeedbacks}
          selectedStatus={selectedStatus}
        />
      </div>
      {/*  */}
      <div className="mx-auto hidden md:flex md:w-full md:flex-row md:justify-center md:gap-[10px] xl:w-[1110px] xl:gap-[30px]">
        <RoadmapFeedbacksSection
          categorizedFeedbacks={categorizedFeedbacks}
          selectedStatus={"planned"}
        />
        <RoadmapFeedbacksSection
          categorizedFeedbacks={categorizedFeedbacks}
          selectedStatus={"in-progress"}
        />
        <RoadmapFeedbacksSection
          categorizedFeedbacks={categorizedFeedbacks}
          selectedStatus={"live"}
        />
      </div>
    </div>
  );
};

export default RoadmapPage;
