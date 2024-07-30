import React, { useState } from "react";
import { FeedbackType } from "../../@types/type";
import NavbarStatus from "./NavbarStatus";

interface RoadmapNavbarProps {
  categorizedFeedbacks: {
    planned: FeedbackType[] | [];
    inProgress: FeedbackType[] | [];
    live: FeedbackType[] | [];
  };
  selectedStatus: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
}

const RoadmapNavbar: React.FC<RoadmapNavbarProps> = ({
  categorizedFeedbacks,
  selectedStatus,
  setSelectedStatus,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex h-[56px] w-full justify-around bg-body-bg">
        <NavbarStatus
          status="planned"
          feedbacks={categorizedFeedbacks.planned}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
        <NavbarStatus
          status="in-progress"
          feedbacks={categorizedFeedbacks.inProgress}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
        <NavbarStatus
          status="live"
          feedbacks={categorizedFeedbacks.live}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
      </div>
      <span className="h-[1px] w-full bg-[#DDDFEB]" />
    </div>
  );
};

export default RoadmapNavbar;
