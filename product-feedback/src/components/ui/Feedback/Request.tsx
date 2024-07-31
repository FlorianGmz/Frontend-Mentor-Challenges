import React from "react";
import CategoryBadge from "./CategoryBadge.tsx";

interface RequestProps {
  category: string;
  title: string;
  description: string;
  page: string;
}

const Request: React.FC<RequestProps> = ({
  category,
  title,
  description,
  page,
}) => {
  const roadmapPage = page === "roadmap";
  return (
    <>
      <h3
        className={`mb-[9px] text-[13px] font-bold text-el-font_def group-hover:text-bt-blue_def md:mb-0 md:flex md:flex-col md:justify-between md:text-h3 ${roadmapPage ? "xl:text-h3" : ""}`}
      >
        {title}
      </h3>
      <p
        className={`h-[45px] ${roadmapPage ? "xl:text-[16pa]" : ""} text-[13px] text-feedback-description md:h-auto md:text-body-1`}
      >
        {description}
      </p>
      <CategoryBadge categoryName={category} />
    </>
  );
};

export default Request;
