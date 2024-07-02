import { useState } from "react";
import CheckIcon from "./CheckIcon";

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState("most-upvotes");
  console.log(selectedOption);
  const options = [
    "most-upvotes",
    "least-upvotes",
    "most-comments",
    "least-comments",
  ];
  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
  };
  return (
    <div className="relative z-10 mb-28 flex h-[192px] w-[255px] cursor-pointer flex-col justify-between rounded-xl bg-bt-white_def py-[12px] text-body-1 text-feedback-description shadow-2xl">
      {options.map((option, index) => (
        <>
          <div
            className="flex cursor-pointer items-center justify-between px-[18px]"
            onClick={() => handleOptionClick(option)}
          >
            <p data-value={option}>
              {option
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </p>
            {selectedOption === option && <CheckIcon />}
          </div>
          {index !== options.length - 1 && (
            <span className="h-[1px] w-full bg-bt-dark-blue_back bg-opacity-15" />
          )}
        </>
      ))}
    </div>
  );
};

export default DropdownMenu;
