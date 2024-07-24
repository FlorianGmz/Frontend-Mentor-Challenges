import React from "react";
import { useNavigate } from "react-router-dom";

interface FormButtonProps {
  type: string;
}

const FormButton: React.FC<FormButtonProps> = ({ type }) => {
  const commentButton = type === "comment" || "feedback" || "reply" || "edit";
  const cancelButton = type === "cancel";
  const deleteButton = type === "delete";

  const buttonTexts: { [key: string]: string } = {
    comment: "post comment",
    feedback: "add feedback",
    edit: "save changes",
    reply: "post reply",
    cancel: "cancel",
    delete: "delete",
  };

  const navigate = useNavigate();

  const handleClickCancel = () => {
    navigate(-1);
  };

  const buttonText = buttonTexts[type];

  return (
    <button
      type={commentButton ? "submit" : "button"}
      onClick={commentButton ? undefined : handleClickCancel}
      className={`cursor-pointer ${deleteButton ? "bg-bt-red_def" : ""} ${cancelButton ? "bg-el-font_def" : ""} rounded-xl bg-bt-purple_def px-[16px] py-[11px] text-[13px] font-bold capitalize text-el_def transition-colors active:bg-bt-purple_hover md:px-[24px] md:py-[12px] md:text-[14px] xl:hover:bg-bt-purple_hover ${commentButton ? "xl:w-[142px]" : "xl:w-[117px]"} xl:justify-center`}
    >
      {buttonText}
    </button>
  );
};

export default FormButton;
