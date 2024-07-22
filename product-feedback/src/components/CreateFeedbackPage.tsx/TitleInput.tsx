import React from "react";

interface TitleInputProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const TitleInput: React.FC<TitleInputProps> = ({ setTitle }) => {
  let inputValue;

  const emptySubmit = false;

  return (
    <div className="relative">
      <h3 className="text-[13px] font-bold text-el-font_def">Feedback Title</h3>
      <p className="text-[13px] text-bt-white_font">
        Add a short, descriptive headline
      </p>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        value={inputValue}
        className={`${emptySubmit ? "outline outline-1 outline-bt-red_def" : ""} mt-[16px] h-[48px] w-[279px] rounded-lg bg-body-bg px-[24px] py-[13px] text-[13px] text-el-font_def focus:outline focus:outline-1 focus:outline-bt-blue_def`}
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
