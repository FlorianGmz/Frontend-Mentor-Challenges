import React from "react";

interface CategoryProps {
  categoryName: string;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Category: React.FC<CategoryProps> = ({
  categoryName,
  selectedCategory,
  setSelectedCategory,
  setSidebarIsOpen,
}) => {
  const isSelected = categoryName === selectedCategory;

  const handleClick = () => {
    if (!isSelected) {
      setSelectedCategory(categoryName);
    }
    setSidebarIsOpen(false);
  };

  const formattedCategoryName =
    categoryName === "ui" || categoryName === "ux"
      ? categoryName.toUpperCase()
      : categoryName;

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer items-start rounded-xl px-[16px] py-[5px] text-body-3 capitalize transition-colors ${isSelected ? "bg-el_active text-bt-white_def" : "bg-el_def text-bt-blue_def hover:bg-el_hover"}`}
    >
      {formattedCategoryName}
    </div>
  );
};

export default Category;
