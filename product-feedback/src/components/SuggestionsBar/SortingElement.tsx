import { useState } from "react";
import ArrowIconDown from "./ArrowIconDown";
import DropdownMenu from "./DropdownMenu";
import ArrowIconUp from "./ArrowIconUp";

const SortingElement = () => {
  const [selectedOption, setSelectedOption] = useState({
    label: "Most Upvotes",
    value: "most-upvotes",
  });
  console.log(selectedOption);
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
