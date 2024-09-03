import React, { useState } from "react";
import ArrowIconDown from "../ui/icons/ArrowIconDown";
import DropdownCategory from "./DropdownCategory";
import ArrowIconUp from "../ui/icons/ArrowIconUp";

interface CategoryInputProps {
  selectedCategory: string | undefined;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsFocused((prev) => !prev);
    setIsMenuOpen((prev) => !prev);
  };

  const formattedCategory =
    selectedCategory === "ui" || selectedCategory === "ux"
      ? selectedCategory.toUpperCase()
      : selectedCategory;

  return (
    <div className="relative">
      <h3 className="text-[13px] font-bold text-el-font_def md:text-h4">
        Category
      </h3>
      <p className="text-[13px] text-bt-white_font md:text-[14px]">
        Choose a category for your feedback
      </p>
      <div
        onClick={toggleDropdown}
        className={`mt-[16px] flex h-[48px] w-full items-center justify-between rounded-lg bg-body-bg px-[24px] py-[13px] text-el-font_def hover:cursor-pointer ${isFocused ? "outline outline-1 outline-bt-blue_def" : ""}`}
      >
        <p className="text-[13px] capitalize md:text-[14px]">
          {formattedCategory}
        </p>
        {isMenuOpen ? (
          <ArrowIconUp color={"#4661E6"} />
        ) : (
          <ArrowIconDown color={"#4661E6"} />
        )}
      </div>
      {isMenuOpen && (
        <div className="absolute">
          <DropdownCategory
            setIsMenuOpen={setIsMenuOpen}
            setIsFocused={setIsFocused}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      )}
    </div>
  );
};

export default CategoryInput;
