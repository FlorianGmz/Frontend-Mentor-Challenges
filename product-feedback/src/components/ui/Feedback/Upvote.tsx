import React from "react";
import { useFeedbacks } from "../../../contexts/FeedbackContext";

interface UpvoteProps {
  upvotes: number;
  feedbackId: number;
  page: string;
}

const Upvote: React.FC<UpvoteProps> = ({ upvotes, feedbackId, page }) => {
  const { addVote, votedFeedbackId } = useFeedbacks();

  const handleClick = () => {
    addVote(feedbackId);
  };

  const roadmapPage = page === "roadmap";

  const voted = votedFeedbackId.some((vote: number) => vote === feedbackId);

  return (
    <button
      type="button"
      disabled={voted}
      className={`group flex h-[32px] w-[69px] items-center justify-around rounded-xl bg-el_def px-[13px] py-[6px] transition-colors hover:bg-el_hover focus:text-bt-white_def disabled:bg-el_active ${
        roadmapPage
          ? "md:flex md:w-[69px] md:flex-row"
          : "md:h-[53px] md:w-[40px] md:flex-col md:px-[9px]"
      }`}
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
