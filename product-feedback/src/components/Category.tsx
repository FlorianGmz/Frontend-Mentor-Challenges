import React from "react";

interface CategoryProps {
  categoryName: string;
  categorySelected: string;
  setCategorySelected: React.Dispatch<React.SetStateAction<string>>;
}

const Category: React.FC<CategoryProps> = ({ categoryName }) => {
  const handleClick = () => {};
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer items-start rounded-xl bg-el_def px-[16px] py-[5px] text-body-3 capitalize text-bt-blue_def transition-colors hover:bg-el_hover"
    >
      {categoryName === "ui" || categoryName === "ux"
        ? categoryName.toUpperCase()
        : categoryName}
    </div>
  );
};

export default Category;
