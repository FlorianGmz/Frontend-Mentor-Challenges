import React from "react";

interface CategoryBadgeProps {
  categoryName: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ categoryName }) => {
  const handleClick = () => {};
  return (
    <div
      onClick={handleClick}
      className="rounded-xl bg-el_def px-[16px] py-[5px] text-body-3 capitalize text-bt-blue_def"
    >
      {categoryName === "ui" || categoryName === "ux"
        ? categoryName.toUpperCase()
        : categoryName}
    </div>
  );
};

export default CategoryBadge;
