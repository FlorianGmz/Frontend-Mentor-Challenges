import React from "react";

interface UpvoteProps {
  upvotes: number;
}

const Upvote: React.FC<UpvoteProps> = ({ upvotes }) => {
  return (
    <button
      type="button"
      className="focus:text-bt-white_de group flex h-[53px] w-[40px] flex-col items-center justify-around rounded-lg bg-el_def py-[8px] transition-colors hover:bg-el_hover focus:bg-el_active"
    >
      <svg
        width="10"
        height="7"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-bt-blue_def group-focus:stroke-bt-white_def"
      >
        <path
          d="M1 6l4-4 4 4"
          stroke-width="2.3"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
      <span className="text-body-3 text-el-font_def group-focus:text-bt-white_def">
        {upvotes}
      </span>
    </button>
  );
};

export default Upvote;
