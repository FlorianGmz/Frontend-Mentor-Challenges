import React from "react";

interface TextAreaDesktopProps {
  comment: string;
  maxChars: number;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  emptySubmit: boolean;
  commentPost: boolean;
}

const TextAreaDesktop: React.FC<TextAreaDesktopProps> = ({
  comment,
  commentPost,
  emptySubmit,
  handleChange,
  maxChars,
}) => {
  return (
    <div className="w-full xl:flex xl:w-full xl:flex-col">
      <textarea
        className={` ${emptySubmit ? "outline outline-1 outline-bt-red_def" : ""} ${commentPost ? "md:ml-[0px] xl:ml-[0px]" : "md:ml-[71px]"} mb-[16px] h-[80px] rounded-lg bg-body-bg p-[16px] text-[13px] text-[#8C92B3] hover:cursor-pointer focus:outline focus:outline-1 focus:outline-el_active md:mb-[14px] md:text-[15px]`}
        name="text"
        value={comment}
        maxLength={maxChars}
        onChange={handleChange}
        placeholder={`Type your ${commentPost ? "comment" : "reply"} here`}
        id=""
      />
      {emptySubmit && (
        <p
          className={`relative bottom-4 hidden ${!commentPost && "md:ml-[71px] xl:block"} text-[14px] text-bt-red_def xl:bottom-1 ${commentPost && "hidden"}`}
        >
          Can't be empty
        </p>
      )}
    </div>
  );
};

export default TextAreaDesktop;
