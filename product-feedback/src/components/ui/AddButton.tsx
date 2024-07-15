import React from "react";

interface AddButtonProps {
  commentType: string;
}

const AddButton: React.FC<AddButtonProps> = ({ commentType }) => {
  return (
    <button
      type="submit"
      className={`md:text[14px] flex cursor-pointer items-center gap-1 rounded-xl bg-bt-purple_def px-[16px] py-[11px] text-[13px] font-bold text-bt-white_def transition-colors hover:bg-bt-purple_hover md:px-[24px] md:py-[12px]`}
    >
      <span className="capitalize">{`Post ${commentType}`}</span>
    </button>
  );
};

export default AddButton;
