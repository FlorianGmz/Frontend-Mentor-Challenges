import React from "react";

interface CommentCountProps {
  numberOfComments: number | undefined;
}

const CommentCount: React.FC<CommentCountProps> = ({ numberOfComments }) => {
  return (
    <div className="flex items-center gap-[4px]">
      <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.]866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
          fill="#CDD2EE"
          fill-rule="nonzero"
        />
      </svg>
      <span
        className={`text-[13px] font-bold md:text-[16px] ${numberOfComments ? "text-el-font_def" : "text-el-comment"}`}
      >
        {numberOfComments ? numberOfComments : "0"}
      </span>
    </div>
  );
};

export default CommentCount;
