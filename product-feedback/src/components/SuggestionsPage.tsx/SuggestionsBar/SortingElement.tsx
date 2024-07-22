import React, { useState } from "react";
import ArrowIconDown from "../../ui/icons/ArrowIconDown";
import DropdownMenu from "./DropdownMenu";
import ArrowIconUp from "../../ui/icons/ArrowIconUp";

interface SortingElementProps {
  selectedOption: { label: string; value: string };
  setSelectedOption: React.Dispatch<
    React.SetStateAction<{
      label: string;
      value: string;
    }>
  >;
}

const SortingElement: React.FC<SortingElementProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  const [toggleDropDownMenu, setToggleDropDownMenu] = useState(false);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setToggleDropDownMenu((toggle) => !toggle);
    setIsClicked((toggle) => !toggle);
  };
  return (
    <div
      onClick={handleClick}
      className="group flex cursor-pointer items-center gap-1"
    >
      <span
        className={`text-[13px] ${isClicked ? "text-el-sort_active" : "text-el_def"} md:text-[14px]`}
      >
        Sort by :
      </span>
      <p
        className={`bg-bt-dark-blue_back text-[13px] font-bold focus:outline-none ${isClicked ? "text-el-sort_active" : "text-bt-white_def"} md:text-[14px]`}
      >
        {selectedOption.label}
      </p>
      {toggleDropDownMenu ? (
        <ArrowIconUp color="#FFFFFF" />
      ) : (
        <ArrowIconDown color="#FFFFFF" />
      )}
      {toggleDropDownMenu && (
        <DropdownMenu
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      )}
    </div>
  );
};

export default SortingElement;
