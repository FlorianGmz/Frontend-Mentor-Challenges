import React from "react";
import { FeedbackType } from "../../@types/type";
import NavbarStatus from "./NavbarStatus";

interface RoadmapNavbarProps {
  categorizedFeedbacks: {
    planned: FeedbackType[] | [];
    inProgress: FeedbackType[] | [];
    live: FeedbackType[] | [];
  };
}

const RoadmapNavbar: React.FC<RoadmapNavbarProps> = ({
  categorizedFeedbacks,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex h-[56px] w-full items-center justify-around bg-body-bg">
        <NavbarStatus
          status="planned"
          feedbacks={categorizedFeedbacks.planned}
        />
        <NavbarStatus
          status="in-progress"
          feedbacks={categorizedFeedbacks.inProgress}
        />
        <NavbarStatus status="live" feedbacks={categorizedFeedbacks.live} />
      </div>
      <span className="h-[1px] w-full bg-[#DDDFEB]" />
    </div>
  );
};

export default RoadmapNavbar;
