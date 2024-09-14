import React from "react";

interface TextAreaResponsiveProps {
  comment: string;
  maxChars: number;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  emptySubmit: boolean;
  commentPost: boolean;
}

const TextAreaResponsive: React.FC<TextAreaResponsiveProps> = ({
  comment,
  commentPost,
  emptySubmit,
  handleChange,
  maxChars,
}) => {
  return (
    <>
      <textarea
        className={` ${emptySubmit ? "outline outline-1 outline-bt-red_def" : ""} ${commentPost ? "md:ml-[0px] xl:ml-[0px]" : "md:ml-[71px]"} mb-[16px] h-[80px] rounded-lg bg-body-bg p-[16px] text-[13px] text-[#8C92B3] hover:cursor-pointer focus:outline focus:outline-1 focus:outline-el_active md:mb-[14px] md:text-[15px] xl:hidden`}
        name="text"
        value={comment}
        maxLength={maxChars}
        onChange={handleChange}
        placeholder={`Type your ${commentPost ? "comment" : "reply"} here`}
        id=""
      />
      {emptySubmit && (
        <p
          className={`relative bottom-2 ${!commentPost ? "md:ml-[71px] xl:hidden" : ""} text-[14px] text-bt-red_def xl:bottom-1`}
        >
          Can't be empty
        </p>
      )}
    </>
  );
};

export default TextAreaResponsive;
