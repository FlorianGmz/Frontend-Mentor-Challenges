import React, { useState } from "react";
import ArrowIconDown from "./ArrowIconDown";
import DropdownMenu from "./DropdownMenu";
import ArrowIconUp from "./ArrowIconUp";

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
      className="group ml-[22px] flex cursor-pointer items-center gap-1"
    >
      <span className="text-[14px] text-bt-white_def group-focus-within:text-el-sort_active">
        Sort by :
      </span>
      <p className="bg-bt-dark-blue_back text-h4 text-bt-white_def focus:outline-none group-focus-within:text-el-sort_active">
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
