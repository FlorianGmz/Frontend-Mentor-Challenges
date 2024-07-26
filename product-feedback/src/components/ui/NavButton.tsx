import { NavLink } from "react-router-dom";
import React from "react";
import IconPlus from "./icons/IconPlus";

interface NavButtonProps {
  to: string;
  type: string;
}

const NavButton: React.FC<NavButtonProps> = ({ to, type }) => {
  const isCreateButton = type === "create";
  const isEditButton = type === "edit";

  return (
    <NavLink
      to={to}
      className={`flex cursor-pointer items-center gap-1 rounded-xl ${isCreateButton ? "bg-bt-purple_def hover:bg-bt-purple_hover" : ""} ${isEditButton ? "bg-bt-blue_def hover:bg-bt-blue_hover" : ""}md:text[14px] px-[16px] py-[11px] text-[13px] font-bold text-el_def transition-colors md:px-[24px] md:py-[12px]`}
    >
      {isCreateButton && <IconPlus />}
      <span>{isCreateButton ? "Add" : "Edit"} Feedback</span>
    </NavLink>
  );
};

export default NavButton;
