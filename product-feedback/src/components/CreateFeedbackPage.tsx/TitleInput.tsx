import React from "react";

interface TitleInputProps {
  defaultValue: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  emptySubmit: boolean;
}

const TitleInput: React.FC<TitleInputProps> = ({
  defaultValue,
  setTitle,
  emptySubmit,
}) => {
  return (
    <div className="relative">
      <h3 className="text-[13px] font-bold text-el-font_def md:text-h4">
        Feedback Title
      </h3>
      <p className="text-[13px] text-bt-white_font md:text-[14px]">
        Add a short, descriptive headline
      </p>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        defaultValue={defaultValue}
        className={`${emptySubmit ? "outline outline-1 outline-bt-red_def" : ""} mt-[16px] h-[48px] w-full rounded-lg bg-body-bg px-[24px] py-[13px] text-[13px] text-el-font_def focus:outline focus:outline-1 focus:outline-bt-blue_def md:text-[14px]`}
      />
      {emptySubmit && (
        <p
          className={`absolute bottom-[-25px] text-[14px] text-bt-red_def xl:bottom-1`}
        >
          Can't be empty
        </p>
      )}
    </div>
  );
};

export default TitleInput;
