import React from "react";

const DetailInput = () => {
  return (
    <div>
      <h3 className="text-[13px] font-bold text-el-font_def">
        Feedback Detail
      </h3>
      <p className="text-[13px] text-bt-white_font">
        Include any specific comments on what should be improved, added, etc.
      </p>
      <textarea className="mt-[16px] h-[120px] w-[279px] rounded-lg bg-body-bg px-[24px] py-[13px] text-[13px] text-el-font_def" />
    </div>
  );
};

export default DetailInput;
