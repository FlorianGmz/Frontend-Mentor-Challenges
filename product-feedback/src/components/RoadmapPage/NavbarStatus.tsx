import React from "react";
import { FeedbackType } from "../../@types/type";

interface NavbarStatusProps {
  status: string;
  feedback: FeedbackType[];
}
const NavbarStatus: React.FC<NavbarStatusProps> = ({ status, feedback }) => {
  return (
    <p className="text-[13px] font-bold capitalize text-el-font_def">
      {status}({feedback.length})
    </p>
  );
};

export default NavbarStatus;
