import { NavLink } from "react-router-dom";
import IconPlus from "./SuggestionsBar/IconPlus";
import React from "react";

interface NavButtonProps {
  to: string;
  bgColor: "bt-blue_def" | "bt-purple_def";
  bgHoverColor: "bt-blue_hover" | "bt-purple_hover";
}

const NavButton: React.FC<NavButtonProps> = ({ to, bgColor, bgHoverColor }) => {
  const isAddButton = to === "/feedback/add";

  const bgClasses = {
    "bt-blue_def": "bg-bt-blue_def",
    "bt-purple_def": "bg-bt-purple_def",
  };

  const hoverClasses = {
    "bt-blue_hover": "hover:bg-bt-blue_hover",
    "bt-purple_hover": "hover:bg-bt-purple_hover",
  };
  return (
    <NavLink
      to={to}
      className={`flex cursor-pointer items-center gap-1 rounded-xl ${bgClasses[bgColor]} md:text[14px] px-[16px] py-[11px] text-[13px] font-bold text-bt-white_def transition-colors md:px-[24px] md:py-[12px] ${hoverClasses[bgHoverColor]}`}
    >
      {isAddButton && <IconPlus />}
      <span>{isAddButton ? "Add" : "Edit"} Feedback</span>
    </NavLink>
  );
};

export default NavButton;
