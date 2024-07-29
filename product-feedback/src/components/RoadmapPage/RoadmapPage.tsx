import { useState } from "react";
import RoadmapHeader from "./RoadmapHeader";
import RoadmapNavbar from "./RoadmapNavbar";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import { FeedbackType } from "../../@types/type";
import Feedback from "../ui/Feedback/Feedback";

const RoadmapPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("in-progress");
  const [isActive, setIsActive] = useState();

  return (
    <div>
      <RoadmapHeader />
      <RoadmapNavbar />
    </div>
  );
};

export default RoadmapPage;
