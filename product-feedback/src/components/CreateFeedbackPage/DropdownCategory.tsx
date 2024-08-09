import React from "react";
import CheckIcon from "../ui/icons/CheckIcon";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import { FeedbackType } from "../../@types/type";

interface DropdownCategoryProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownCategory: React.FC<DropdownCategoryProps> = ({
  selectedCategory,
  setSelectedCategory,
  setIsMenuOpen,
  setIsFocused,
}) => {
  const { allFeedbacks } = useFeedbacks();

  const allDataCategories = allFeedbacks.map(
    (request: FeedbackType) => request.category,
  );
  const nonDataCategories = ["ui", "ux"];
  const categories = [...nonDataCategories, ...allDataCategories];

  const filteredCategories = Array.from(new Set(categories));

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setIsMenuOpen(false);
    setIsFocused(false);
  };

  return (
    <div className="relative top-2 z-10 mb-28 cursor-pointer rounded-xl shadow-2xl">
      <div className="flex h-auto w-[279px] flex-col justify-between rounded-xl bg-bt-white_def text-[13px] text-feedback-description md:w-[460px] md:text-[14px]">
        {filteredCategories.map((category, index) => (
          <React.Fragment key={category}>
            <div
              className="flex cursor-pointer items-center justify-between px-[24px] py-[10px]"
              onClick={() => handleCategoryClick(category)}
            >
              <p className="capitalize" data-value={category}>
                {category === "ui" || category === "ux"
                  ? category.toUpperCase()
                  : category}
              </p>
              {selectedCategory === category && <CheckIcon />}
            </div>
            {index !== filteredCategories.length - 1 && (
              <span className="h-[1px] w-full bg-bt-dark-blue_back bg-opacity-15" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DropdownCategory;
