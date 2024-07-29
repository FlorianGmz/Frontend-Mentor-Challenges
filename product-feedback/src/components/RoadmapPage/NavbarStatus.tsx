import React from "react";
import { FeedbackType } from "../../@types/type";

interface NavbarStatusProps {
  status: string;
  feedbacks: FeedbackType[];
}
const NavbarStatus: React.FC<NavbarStatusProps> = ({ status, feedbacks }) => {
  return (
    <p className="text-[13px] font-bold capitalize text-el-font_def">
      {status}({feedbacks.length})
    </p>
  );
};

export default NavbarStatus;
