import React from "react";
import data from "../../data/data.json";
import CheckIcon from "../ui/icons/CheckIcon";

interface DropdownCategoryProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownCategory: React.FC<DropdownCategoryProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const allDataCategories = data.productRequests.map(
    (request) => request.category,
  );
  const nonDataCategories = ["all", "ui", "ux"];
  const categories = [...nonDataCategories, ...allDataCategories];

  const filteredCategories = Array.from(new Set(categories));

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="absolute top-[140px] z-10 mb-28 flex h-[192px] w-[255px] cursor-pointer flex-col justify-between rounded-xl bg-bt-white_def py-[12px] text-body-1 text-feedback-description drop-shadow-lg md:top-[340px] xl:top-[140px]">
      {filteredCategories.map((category, index) => (
        <React.Fragment key={category}>
          <div
            className="flex cursor-pointer items-center justify-between px-[18px]"
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
  );
};

export default DropdownCategory;
