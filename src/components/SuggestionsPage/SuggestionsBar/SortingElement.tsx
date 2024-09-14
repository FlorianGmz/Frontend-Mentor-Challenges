import React, { useState } from "react";
import ArrowIconDown from "../../ui/icons/ArrowIconDown";
import DropdownSortMenu from "./DropdownSortMenu";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div
      onClick={handleClick}
      className="group flex cursor-pointer items-center gap-1"
    >
      <span
        className={`text-[13px] ${isMenuOpen ? "text-el-sort_active" : "text-el_def"} md:text-[14px]`}
      >
        Sort by :
      </span>
      <p
        className={`bg-bt-dark-blue_back text-[13px] font-bold focus:outline-none ${isMenuOpen ? "text-el-sort_active" : "text-bt-white_def"} md:text-[14px]`}
      >
        {selectedOption.label}
      </p>
      {isMenuOpen ? (
        <ArrowIconUp color="#FFFFFF" />
      ) : (
        <ArrowIconDown color="#FFFFFF" />
      )}
      {isMenuOpen && (
        <DropdownSortMenu
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      )}
    </div>
  );
};

export default SortingElement;
