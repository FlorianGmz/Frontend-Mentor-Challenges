import React from "react";
import { FeedbackType } from "../../@types/type";

type Status = "planned" | "in-progress" | "live";

interface NavbarStatusProps {
  status: Status;
  feedbacks: FeedbackType[];
  selectedStatus: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<Status>>;
}
const NavbarStatus: React.FC<NavbarStatusProps> = ({
  status,
  feedbacks,
  selectedStatus,
  setSelectedStatus,
}) => {
  const getStatusBarClass = (status: Status) => {
    switch (status) {
      case "planned":
        return "bg-status-planned";
      case "in-progress":
        return "bg-status-inProgress";
      case "live":
        return "bg-status-live";
      default:
        return "";
    }
  };

  const handleClick = () => {
    setSelectedStatus(status);
  };

  const isActive = selectedStatus === status;

  return (
    <div
      onClick={handleClick}
      className="flex w-full flex-col items-center justify-between"
    >
      <div className="flex flex-grow items-center justify-center">
        <p
          className={`text-[13px] font-bold capitalize text-el-font_def ${isActive ? "opacity-100" : "opacity-50"} transition-all`}
        >
          {status} ({feedbacks.length})
        </p>
      </div>
      {isActive && (
        <span className={`h-[4px] w-full ${getStatusBarClass(status)}`} />
      )}
    </div>
  );
};

export default NavbarStatus;
