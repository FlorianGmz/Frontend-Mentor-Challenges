import React from "react";
import CheckIcon from "../../ui/icons/CheckIcon";

interface DropDownMenuProps {
  selectedOption: { label: string; value: string };
  setSelectedOption: React.Dispatch<
    React.SetStateAction<{
      label: string;
      value: string;
    }>
  >;
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  const options = [
    { label: "Most Upvotes", value: "most-upvotes" },
    { label: "Least Upvotes", value: "least-upvotes" },
    { label: "Most Comments", value: "most-comments" },
    { label: "Least Comments", value: "least-comments" },
  ];

  const handleOptionSelect = (label: string, value: string) => {
    setSelectedOption({ label, value });
  };

  return (
    <div className="absolute top-[140px] z-10 mb-28 flex h-[192px] w-[255px] cursor-pointer flex-col justify-between rounded-xl bg-bt-white_def py-[12px] text-body-1 text-feedback-description drop-shadow-lg md:top-[340px] xl:top-[140px]">
      {options.map((option, index) => (
        <React.Fragment key={option.value}>
          <div
            className="flex cursor-pointer items-center justify-between px-[18px]"
            onClick={() => handleOptionSelect(option.label, option.value)}
          >
            <p data-value={option.value}>{option.label}</p>
            {selectedOption.value === option.value && <CheckIcon />}
          </div>

          {/* Add divider only if not the last item */}
          {index !== options.length - 1 && (
            <span className="h-[1px] w-full bg-bt-dark-blue_back bg-opacity-15" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DropdownMenu;
