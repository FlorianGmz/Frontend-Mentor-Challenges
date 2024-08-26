import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useFeedbacks } from "../../contexts/FeedbackContext";

interface FormButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  label: string;
  feedbackId?: string | undefined;
  onClick?: () => void;
}

const FormButton: React.FC<FormButtonProps> = ({
  type,
  feedbackId,
  label,
  onClick,
}) => {
  const { deleteFeedback } = useFeedbacks();

  const commentButton = type === "submit";
  const cancelButton = label === "cancel";
  const deleteButton = label === "delete";

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
    if (cancelButton) {
      navigate(-1);
    }
    if (deleteButton) {
      deleteFeedback(Number(feedbackId));
      navigate("/suggestions");
      toast.success("Feedback successfully deleted!");
    }
  };

  const buttonText = buttonTexts[type];

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
