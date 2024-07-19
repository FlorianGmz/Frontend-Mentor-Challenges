import React from "react";

interface DetailInputProps {
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const DetailInput: React.FC<DetailInputProps> = ({ setDescription }) => {
  const emptySubmit = false;

  return (
    <div className="relative">
      <h3 className="text-[13px] font-bold text-el-font_def">
        Feedback Detail
      </h3>
      <p className="text-[13px] text-bt-white_font">
        Include any specific comments on what should be improved, added, etc.
      </p>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        className={`${emptySubmit ? "outline outline-1 outline-bt-red_def" : ""} mt-[16px] h-[120px] w-[279px] rounded-lg bg-body-bg px-[24px] py-[13px] text-[13px] text-el-font_def focus:outline focus:outline-1 focus:outline-bt-blue_def`}
      />
      {emptySubmit && (
        <p className={`absolute text-[14px] text-bt-red_def xl:bottom-1`}>
          Can't be empty
        </p>
      )}
    </div>
  );
};

export default DetailInput;
