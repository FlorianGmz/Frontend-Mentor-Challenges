import { NavLink } from "react-router-dom";
import RoadmapStatus from "./RoadmapStatus";
import { useFeedbacks } from "../../../../contexts/FeedbackContext";
import { FeedbackType, RoadmapStatusType } from "../../../../@types/type";

const RoadmapNav = () => {
  const { allFeedbacks } = useFeedbacks();

  const statusType: RoadmapStatusType[] = ["planned", "in-progress", "live"];

  const filterFeedbackByStatus = (status: RoadmapStatusType) => {
    return allFeedbacks.filter(
      (feedback: FeedbackType) => feedback.status === status,
    );
  };

  return (
    <div className="flex h-[178px] w-[223px] flex-col justify-between rounded-xl bg-bt-white_def px-[24px] py-[19px] md:h-[178px] xl:w-[255px]">
      <div className="flex items-center justify-between">
        <h3 className="text-h3 text-bt-dark-blue_def">Roadmap</h3>
        <NavLink
          to={"/roadmap"}
          className="text-body-3 text-el_active underline transition-colors hover:text-[#8397F8]"
        >
          View
        </NavLink>
      </div>
      <div className="flex flex-col gap-[8px]">
        {statusType.map((status) => (
          <RoadmapStatus
            key={status}
            feedback={filterFeedbackByStatus(status)}
            page="suggestions"
            status={status}
          />
        ))}
      </div>
    </div>
  );
};

export default RoadmapNav;
