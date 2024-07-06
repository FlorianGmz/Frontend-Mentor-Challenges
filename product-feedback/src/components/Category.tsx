import React from "react";

interface CategoryProps {
  categoryName: string;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Category: React.FC<CategoryProps> = ({
  categoryName,
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleClick = () => {
    setSelectedCategory("");
    setSelectedCategory(categoryName);
  };
  console.log(selectedCategory);
  const isSelected = categoryName === selectedCategory;
  const bgColor = isSelected ? "bg-el_active" : "bg-el_def";
  const textColor = isSelected ? "text-bt-white_def" : "text-bt-blue_def";
  const hoverColor = isSelected ? "" : "hover:bg-el_hover";
  return (
    <div
      onClick={() => handleClick()}
      className={`cursor-pointer items-start rounded-xl ${bgColor} px-[16px] py-[5px] text-body-3 capitalize ${textColor} transition-colors ${hoverColor}`}
    >
      {categoryName === "ui" || categoryName === "ux"
        ? categoryName.toUpperCase()
        : categoryName}
    </div>
  );
};

export default Category;
