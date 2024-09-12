import React from "react";

interface FormButtonProps {
  type: "submit" | "reset" | "button";
  label: string;
  feedbackId?: string | undefined;
  onClick?: () => void;
}

const FormButton: React.FC<FormButtonProps> = ({ type, label, onClick }) => {
  const isCommentButton = type === "submit";
  const isCancelButton = label.toLocaleLowerCase() === "cancel";
  const isDeleteButton = label.toLocaleLowerCase() === "delete";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer ${isDeleteButton ? "bg-bt-red_def hover:bg-bt-red_hover" : ""} ${isCancelButton ? "bg-el-font_def hover:bg-bt-dark-blue_hover" : ""} rounded-xl ${isCommentButton ? "bg-bt-purple_def active:bg-bt-purple_hover xl:hover:bg-bt-purple_hover" : ""} px-[16px] py-[11px] text-[13px] font-bold capitalize text-el_def transition-colors md:px-[24px] md:py-[12px] md:text-[14px] xl:justify-center`}
    >
      {label}
    </button>
  );
};

export default FormButton;
