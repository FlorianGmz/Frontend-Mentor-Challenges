import React from "react";
import CategoryBadge from "./CategoryBadge.tsx";

interface RequestProps {
  category: string;
  title: string;
  description: string;
}

const Request: React.FC<RequestProps> = ({ category, title, description }) => {
  return (
    <>
      <h3 className="mb-[9px] text-[13px] font-bold text-el-font_def group-hover:text-bt-blue_def">
        {title}
      </h3>
      <p className="text-[13px] text-feedback-description">{description}</p>
      <CategoryBadge categoryName={category} />
    </>
  );
};

export default Request;
