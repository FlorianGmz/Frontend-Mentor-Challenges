import React, { useState } from "react";
import { FeedbackType } from "../../@types/type";
import ArrowIconUp from "../ui/icons/ArrowIconUp";
import ArrowIconDown from "../ui/icons/ArrowIconDown";
import DropdownStatus from "./DropdownStatus";

interface StatusInputProps {
  selectedStatus: string;
  setSelectedStatus: React.Dispatch<
    React.SetStateAction<FeedbackType["status"]>
  >;
}

const StatusInput: React.FC<StatusInputProps> = ({
  selectedStatus,
  setSelectedStatus,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsFocused((prevState) => !prevState);
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <h3 className="text-[13px] font-bold text-el-font_def md:text-h4">
        Update Status
      </h3>
      <p className="text-[13px] text-bt-white_font md:text-[14px]">
        Change feature state
      </p>
      <div
        onClick={handleClick}
        className={`mt-[16px] flex h-[48px] w-full items-center justify-between rounded-lg bg-body-bg px-[24px] py-[13px] text-el-font_def hover:cursor-pointer ${isFocused ? "outline outline-1 outline-bt-blue_def" : ""}`}
      >
        <p className="text-[13px] capitalize md:text-[14px]">
          {selectedStatus}
        </p>
        {isMenuOpen ? (
          <ArrowIconUp color={"#4661E6"} />
        ) : (
          <ArrowIconDown color={"#4661E6"} />
        )}
      </div>
      {isMenuOpen && (
        <div className="absolute">
          <DropdownStatus
            setOpenMenu={setIsMenuOpen}
            setFocus={setIsFocused}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />
        </div>
      )}
    </div>
  );
};

export default StatusInput;
