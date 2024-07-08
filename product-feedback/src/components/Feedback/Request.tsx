import React from "react";
import CategoryBadge from "./CategoryBadge.tsx";

interface RequestProps {
  category: string;
  title: string;
  description: string;
}

const Request: React.FC<RequestProps> = ({ category, title, description }) => {
  return (
    <div className="flex flex-col items-start justify-between">
      <h3 className="text-h3 text-el-font_def group-hover:text-bt-blue_def">
        {title}
      </h3>
      <p className="text-body-1 text-feedback-description">{description}</p>
      <CategoryBadge categoryName={category} />
    </div>
  );
};

export default Request;
