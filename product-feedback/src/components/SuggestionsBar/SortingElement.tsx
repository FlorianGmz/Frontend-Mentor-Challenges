import { useState } from "react";
import ArrowIconDown from "./ArrowIconDown";
import DropdownMenu from "./DropdownMenu";
import ArrowIconUp from "./ArrowIconUp";

const SortingElement = () => {
  const [selectedOption, setSelectedOption] = useState("most-upvotes");
  const [toggleOptions, setToggleOptions] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div
      onClick={() => setToggleOptions(!toggleOptions)}
      className="group flex cursor-pointer items-center gap-1"
    >
      <span className="group-focus-within:text-el-sort_active text-[14px] text-bt-white_def">
        Sort by :
      </span>
      <p className="group-focus-within:text-el-sort_active bg-bt-dark-blue_back text-h4 text-bt-white_def focus:outline-none">
        {selectedOption}
      </p>
      {toggleOptions ? <ArrowIconUp /> : <ArrowIconDown />}
      {toggleOptions && <DropdownMenu />}
    </div>
  );
};

export default SortingElement;
