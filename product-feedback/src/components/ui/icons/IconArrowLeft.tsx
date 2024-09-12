import React from "react";

interface IconArrowLeftProps {
  page: string;
}

const IconArrowLeft: React.FC<IconArrowLeftProps> = ({ page }) => {
  const isRoadmapPage = page === "roadmap";
  return (
    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 9L2 5l4-4"
        stroke={isRoadmapPage ? "#CDD2ED" : "#4661E6"}
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default IconArrowLeft;
