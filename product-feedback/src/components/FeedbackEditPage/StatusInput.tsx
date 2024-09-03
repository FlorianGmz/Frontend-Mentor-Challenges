import React, { useState } from "react";
import ArrowIconUp from "../ui/icons/ArrowIconUp";
import ArrowIconDown from "../ui/icons/ArrowIconDown";
import DropdownStatus from "./DropdownStatus";

interface StatusInputProps {
  selectedStatus: string | undefined;
  setSelectedStatus: React.Dispatch<
    React.SetStateAction<"planned" | "in-progress" | "live" | "suggestion">
  >;
}

const StatusInput: React.FC<StatusInputProps> = ({
  selectedStatus,
  setSelectedStatus,
}) => {
  const [focus, setFocus] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setFocus((toggle) => !toggle);
    setOpenMenu((toggle) => !toggle);
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
        className={`mt-[16px] flex h-[48px] w-full items-center justify-between rounded-lg bg-body-bg px-[24px] py-[13px] text-el-font_def hover:cursor-pointer ${focus ? "outline outline-1 outline-bt-blue_def" : ""}`}
      >
        <p className="text-[13px] capitalize md:text-[14px]">
          {selectedStatus}
        </p>
        {openMenu ? (
          <ArrowIconUp color={"#4661E6"} />
        ) : (
          <ArrowIconDown color={"#4661E6"} />
        )}
      </div>
      {openMenu && (
        <div className="absolute">
          <DropdownStatus
            setOpenMenu={setOpenMenu}
            setFocus={setFocus}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />
        </div>
      )}
    </div>
  );
};

export default StatusInput;
