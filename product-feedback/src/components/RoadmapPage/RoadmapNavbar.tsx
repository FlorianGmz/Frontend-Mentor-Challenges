import React from "react";
import { FeedbackType, RoadmapStatus } from "../../@types/type";
import NavbarStatus from "./NavbarStatus";

interface RoadmapNavbarProps {
  categorizedFeedbacks: {
    planned: FeedbackType[];
    "in-progress": FeedbackType[];
    live: FeedbackType[];
  };
  selectedStatus: RoadmapStatus;
  setSelectedStatus: React.Dispatch<React.SetStateAction<RoadmapStatus>>;
}

const RoadmapNavbar: React.FC<RoadmapNavbarProps> = ({
  categorizedFeedbacks,
  selectedStatus,
  setSelectedStatus,
}) => {
  const statusTypes: Array<RoadmapStatus> = ["planned", "in-progress", "live"];

  return (
    <div className="flex flex-col">
      <div className="flex h-[56px] w-full justify-around bg-body-bg">
        {statusTypes.map((status) => (
          <NavbarStatus
            key={status}
            status={status}
            feedbacks={categorizedFeedbacks[status]}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />
        ))}
      </div>
      <span className="h-[1px] w-full bg-[#DDDFEB]" />
    </div>
  );
};

export default RoadmapNavbar;
