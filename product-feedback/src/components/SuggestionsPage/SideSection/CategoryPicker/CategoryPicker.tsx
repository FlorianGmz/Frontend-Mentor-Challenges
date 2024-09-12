import React from "react";
import Category from "./Category";
import data from "../../../../data/data.json";

interface CategoryPickerProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryPicker: React.FC<CategoryPickerProps> = ({
  selectedCategory,
  setSelectedCategory,
  setSidebarIsOpen,
}) => {
  const nonDataCategories = ["all", "ui", "ux"];
  const uniqueCategories = [
    ...nonDataCategories,
    ...new Set(data.productRequests.map((request) => request.category)),
  ];

  return (
    <div className="flex h-[178px] w-[223px] flex-wrap items-center gap-[8px] rounded-xl bg-bt-white_def px-[18px] py-[24px] md:h-[178px] md:w-[223px] md:gap-[10px] xl:h-[166px] xl:w-[255px] xl:gap-[10px] xl:p-[24px]">
      {uniqueCategories.map((category) => (
        <Category
          key={category}
          categoryName={category}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setSidebarIsOpen={setSidebarIsOpen}
        />
      ))}
    </div>
  );
};

export default CategoryPicker;
