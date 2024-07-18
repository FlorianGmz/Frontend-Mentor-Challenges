import React, { useState } from "react";
import ArrowIconDown from "../ui/icons/ArrowIconDown";
import DropdownCategory from "./DropdownCategory";
import ArrowIconUp from "../ui/icons/ArrowIconUp";

interface CategoryInputProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [focus, setFocus] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setFocus((toggle) => !toggle);
    setOpenMenu((toggle) => !toggle);
  };

  return (
    <div>
      <h3 className="text-[13px] font-bold text-el-font_def">Category</h3>
      <p className="text-[13px] text-bt-white_font">
        Choose a category for your feedback
      </p>
      <div
        onClick={handleClick}
        className={`mt-[16px] flex h-[48px] w-[279px] items-center justify-between rounded-lg bg-body-bg px-[24px] py-[13px] text-el-font_def ${focus ? "outline outline-1 outline-bt-blue_def" : ""}`}
      >
        <p className="text-[13px] capitalize">
          {selectedCategory === "ui" || selectedCategory === "ux"
            ? selectedCategory.toUpperCase()
            : selectedCategory}
        </p>
        {openMenu ? (
          <ArrowIconUp color={"#4661E6"} />
        ) : (
          <ArrowIconDown color={"#4661E6"} />
        )}
        {openMenu && (
          <DropdownCategory
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
      </div>
    </div>
  );
};

export default CategoryInput;
