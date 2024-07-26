import { useNavigate } from "react-router-dom";
import IconArrowLeft from "../ui/icons/IconArrowLeft";
import React from "react";

interface GoBackLinkProps {
  page: string;
}

const GoBackLink: React.FC<GoBackLinkProps> = ({ page }) => {
  const isRoadmapPage = page === "roadmap";

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-[16px] hover:cursor-pointer hover:underline"
    >
      <IconArrowLeft page={page} />
      <span
        className={`text-h4 ${isRoadmapPage ? "text-bt-white_def" : "text-bt-white_font"}`}
      >
        Go Back
      </span>
    </div>
  );
};

export default GoBackLink;
