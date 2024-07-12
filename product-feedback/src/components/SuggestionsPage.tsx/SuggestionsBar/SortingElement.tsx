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

  return (
    <div
      onClick={() => setToggleDropDownMenu(!toggleDropDownMenu)}
      className="group flex cursor-pointer items-center gap-1"
    >
      <span className="text-[13px] text-el_def group-focus-within:text-el-sort_active md:text-[14px]">
        Sort by :
      </span>
      <p className="bg-bt-dark-blue_back text-[13px] font-bold text-bt-white_def focus:outline-none group-focus-within:text-el-sort_active md:text-[14px]">
        {selectedOption.label}
      </p>
      {toggleDropDownMenu ? <ArrowIconUp /> : <ArrowIconDown />}
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
