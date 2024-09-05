import React from "react";

interface FormButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  label: string;
  feedbackId?: string | undefined;
  onClick?: () => void;
}

const FormButton: React.FC<FormButtonProps> = ({ type, label, onClick }) => {
  const commentButton = type === "submit";
  const cancelButton = label === "cancel";
  const deleteButton = label === "delete";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer ${deleteButton ? "bg-bt-red_def hover:bg-bt-red_hover" : ""} ${cancelButton ? "bg-el-font_def hover:bg-bt-dark-blue_hover" : ""} rounded-xl ${commentButton ? "bg-bt-purple_def active:bg-bt-purple_hover xl:hover:bg-bt-purple_hover" : ""} px-[16px] py-[11px] text-[13px] font-bold capitalize text-el_def transition-colors md:px-[24px] md:py-[12px] md:text-[14px] xl:justify-center`}
    >
      {label}
    </button>
  );
};

export default FormButton;
