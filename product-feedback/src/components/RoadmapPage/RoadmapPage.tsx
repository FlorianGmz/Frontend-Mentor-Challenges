import { useState } from "react";
import RoadmapHeader from "./RoadmapHeader";
import RoadmapNavbar from "./RoadmapNavbar";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import { FeedbackType, RoadmapStatusType } from "../../@types/type";
import RoadmapFeedbacksSection from "./RoadmapFeedbacksSection";

const RoadmapPage = () => {
  const statusType: RoadmapStatusType[] = ["planned", "in-progress", "live"];
  const [selectedStatus, setSelectedStatus] =
    useState<RoadmapStatusType>("in-progress");

  const { allFeedbacks } = useFeedbacks();

  const categorizedFeedbacks = {
    planned:
      allFeedbacks
        .filter((feedback: FeedbackType) => feedback.status === "planned")
        .sort((a, b) => b.upvotes - a.upvotes) || [],
    "in-progress":
      allFeedbacks
        .filter((feedback: FeedbackType) => feedback.status === "in-progress")
        .sort((a, b) => b.upvotes - a.upvotes) || [],
    live:
      allFeedbacks
        .filter((feedback: FeedbackType) => feedback.status === "live")
        .sort((a, b) => b.upvotes - a.upvotes) || [],
  };
  return (
    <div>
      <RoadmapHeader />

      {/* Smartphone layout */}
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

      {/* Tablet and Desktop layout */}
      <div className="mx-auto hidden md:flex md:w-full md:flex-row md:justify-center md:gap-[10px] xl:w-[1110px] xl:gap-[30px]">
        {statusType.map((status) => (
          <RoadmapFeedbacksSection
            key={status}
            categorizedFeedbacks={categorizedFeedbacks}
            selectedStatus={status}
          />
        ))}
      </div>
      {/*  */}
    </div>
  );
};

export default RoadmapPage;
