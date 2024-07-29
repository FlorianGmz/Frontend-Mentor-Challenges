import React from "react";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import { FeedbackType } from "../../@types/type";
import NavbarStatus from "./NavbarStatus";

const RoadmapNavbar = () => {
  const { allFeedbacks } = useFeedbacks();
  const filterFeedbackByStatus = (status: FeedbackType["status"]) => {
    return allFeedbacks.filter(
      (feedback: FeedbackType) => feedback.status === status,
    );
  };

  const plannedFeedback = filterFeedbackByStatus("planned");
  const inProgressFeedback = filterFeedbackByStatus("in-progress");
  const liveFeedback = filterFeedbackByStatus("live");
  return (
    <div className="flex flex-col">
      <div className="flex h-[56px] w-full items-center justify-around bg-body-bg">
        <NavbarStatus status="planned" feedback={plannedFeedback} />
        <NavbarStatus status="in-progress" feedback={inProgressFeedback} />
        <NavbarStatus status="live" feedback={liveFeedback} />
      </div>
      <span className="h-[1px] w-full bg-[#DDDFEB]" />
    </div>
  );
};

export default RoadmapNavbar;
