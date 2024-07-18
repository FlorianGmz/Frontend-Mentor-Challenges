import React from "react";

interface CharCountProps {
  commentPost: boolean;
  charCount: number;
}

const CharCount: React.FC<CharCountProps> = ({ commentPost, charCount }) => {
  return (
    <p
      className={`text-[13px] text-feedback-description ${!commentPost && "md:ml-[71px]"}`}
    >
      {charCount} Characters left
    </p>
  );
};

export default CharCount;
