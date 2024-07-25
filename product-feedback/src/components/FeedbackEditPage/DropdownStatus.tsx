import React from "react";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import { FeedbackType } from "../../@types/type";
import CheckIcon from "../ui/icons/CheckIcon";

interface DropdownStatusProps {
  selectedStatus: string;
  setSelectedStatus: React.Dispatch<React.SetStateAction<string>>;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownStatus: React.FC<DropdownStatusProps> = ({
  selectedStatus,
  setSelectedStatus,
  setOpenMenu,
  setFocus,
}) => {
  const { allFeedbacks } = useFeedbacks();

  const allDataStatus = allFeedbacks.map(
    (request: FeedbackType) => request.status,
  );

  const filteredStatus: string[] = Array.from(new Set(allDataStatus));

  const handleCategoryClick = (status: string) => {
    setSelectedStatus(status);
    setOpenMenu(false);
    setFocus(false);
  };

  return (
    <div className="relative top-2 z-10 mb-28 cursor-pointer rounded-xl shadow-2xl">
      <div className="flex h-auto w-[279px] flex-col justify-between rounded-xl bg-bt-white_def text-[13px] text-feedback-description md:w-[460px] md:text-[14px]">
        {filteredStatus.map((status: string, index) => (
          <React.Fragment key={status}>
            <div
              className="flex cursor-pointer items-center justify-between px-[24px] py-[10px]"
              onClick={() => handleCategoryClick(status)}
            >
              <p className="capitalize" data-value={status}>
                {status}
              </p>
              {selectedStatus === status && <CheckIcon />}
            </div>
            {index !== filteredStatus.length - 1 && (
              <span className="h-[1px] w-full bg-bt-dark-blue_back bg-opacity-15" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default DropdownStatus;
