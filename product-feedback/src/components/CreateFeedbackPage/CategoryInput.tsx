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
    <div className="relative">
      <h3 className="text-[13px] font-bold text-el-font_def md:text-h4">
        Category
      </h3>
      <p className="text-[13px] text-bt-white_font md:text-[14px]">
        Choose a category for your feedback
      </p>
      <div
        onClick={handleClick}
        className={`mt-[16px] flex h-[48px] w-full items-center justify-between rounded-lg bg-body-bg px-[24px] py-[13px] text-el-font_def hover:cursor-pointer ${focus ? "outline outline-1 outline-bt-blue_def" : ""}`}
      >
        <p className="text-[13px] capitalize md:text-[14px]">
          {selectedCategory === "ui" || selectedCategory === "ux"
            ? selectedCategory.toUpperCase()
            : selectedCategory}
        </p>
        {openMenu ? (
          <ArrowIconUp color={"#4661E6"} />
        ) : (
          <ArrowIconDown color={"#4661E6"} />
        )}
      </div>
      {openMenu && (
        <div className="absolute">
          <DropdownCategory
            setOpenMenu={setOpenMenu}
            setFocus={setFocus}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      )}
    </div>
  );
};

export default CategoryInput;
