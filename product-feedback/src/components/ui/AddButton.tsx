import React from "react";

interface AddButtonProps {
  commentType: string;
}

const AddButton: React.FC<AddButtonProps> = ({ commentType }) => {
  const commentPost = commentType === "comment";
  const feedbackPost = commentType === "feedback";
  return (
    <button
      type="submit"
      className={`flex cursor-pointer items-center justify-center gap-1 rounded-xl bg-bt-purple_def px-[16px] py-[11px] text-[13px] font-bold text-el_def transition-colors active:bg-bt-purple_hover md:px-[24px] md:py-[12px] md:text-[14px] xl:hover:bg-bt-purple_hover ${commentPost ? "xl:w-[142px]" : "xl:w-[117px]"} xl:justify-center`}
    >
      <span className="capitalize">{`${feedbackPost ? "Add" : "Post"} ${commentType}`}</span>
    </button>
  );
};

export default AddButton;
