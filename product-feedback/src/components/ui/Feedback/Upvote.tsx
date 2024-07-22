import React, { useState } from "react";

interface UpvoteProps {
  upvotes: number;
  addVote: (
    feedbackId: number,
    hasVoted: React.Dispatch<React.SetStateAction<boolean>>,
  ) => void;
  feedbackId: number;
}

const Upvote: React.FC<UpvoteProps> = ({ upvotes, addVote, feedbackId }) => {
  const [voted, setVoted] = useState(false);
  console.log(voted);

  const handleClick = () => {
    addVote(feedbackId, setVoted);
  };

  return (
    <button
      type="button"
      disabled={voted}
      className="focus:text-bt-white_de group flex h-[32px] w-[69px] items-center justify-around rounded-xl bg-el_def px-[13px] py-[6px] transition-colors hover:bg-el_hover disabled:bg-el_active md:h-[53px] md:w-[40px] md:flex-col md:px-[9px]"
      onClick={handleClick}
    >
      <svg
        width="10"
        height="7"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-bt-blue_def group-disabled:stroke-bt-white_def"
      >
        <path
          d="M1 6l4-4 4 4"
          stroke-width="2.3"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
      <span className="text-[13px] font-bold text-el-font_def group-disabled:text-bt-white_def">
        {upvotes}
      </span>
    </button>
  );
};

export default Upvote;
