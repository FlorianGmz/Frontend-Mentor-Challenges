import React from "react";

interface DetailInputProps {
  value?: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  isEmpty: boolean;
}

const DetailInput: React.FC<DetailInputProps> = ({
  value,
  setDescription,
  isEmpty,
}) => {
  return (
    <div className="relative">
      <label htmlFor="feedback-detail">
        <h3 className="text-[13px] font-bold text-el-font_def md:text-h4">
          Feedback Detail
        </h3>
        <p className="text-[13px] text-bt-white_font md:text-[14px]">
          Include any specific comments on what should be improved, added, etc.
        </p>
      </label>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        defaultValue={value}
        className={`mt-[16px] h-[120px] w-full rounded-lg bg-body-bg px-[24px] py-[13px] text-[13px] text-el-font_def hover:cursor-pointer focus:outline focus:outline-1 focus:outline-bt-blue_def md:text-[14px] ${isEmpty ? "outline outline-1 outline-bt-red_def" : ""}`}
        aria-invalid={isEmpty}
        aria-describedby={isEmpty ? "error, the field is empty" : undefined}
      />
      {isEmpty && (
        <p className={`absolute text-[14px] text-bt-red_def`}>Can't be empty</p>
      )}
    </div>
  );
};

export default DetailInput;
