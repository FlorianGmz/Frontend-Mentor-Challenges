import React from "react";
import { FeedbackType } from "../../@types/type";

interface NavbarStatusProps {
  status: string;
  feedbacks: FeedbackType[];
  selectedStatus: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
}
const NavbarStatus: React.FC<NavbarStatusProps> = ({
  status,
  feedbacks,
  selectedStatus,
  setSelectedStatus,
}) => {
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
        <span
          className={`h-[4px] w-full ${
            status === "planned"
              ? "bg-status-planned"
              : status === "in-progress"
                ? "bg-status-inProgress"
                : status === "live"
                  ? "bg-status-live"
                  : ""
          }`}
        />
      )}
    </div>
  );
};

export default NavbarStatus;
