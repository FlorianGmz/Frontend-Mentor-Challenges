import React from "react";
import { useNavigate } from "react-router-dom";

interface ConfirmButtonProps {
  type: string;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ type }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/suggestions");
  };
  return (
    <div
      onClick={handleClick}
      className="h-[40px] w-[279px] rounded-xl bg-el-font_def py-[11px] text-center text-[13px] font-bold capitalize text-el_def"
    >
      {type}
    </div>
  );
};

export default ConfirmButton;
