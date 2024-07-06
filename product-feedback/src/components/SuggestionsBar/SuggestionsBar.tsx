import React from "react";
import AddFeedbackLink from "./AddFeedbackLink";
import SortingElement from "./SortingElement";
import SuggestionsIcon from "./SuggestionsIcon";

interface SuggestionsBarProps {
  suggestionsCount: number;
}

const SuggestionsBar: React.FC<SuggestionsBarProps> = ({
  suggestionsCount,
}) => {
  return (
    <div className="mb-[4px] flex h-[72px] w-[825px] items-center justify-between rounded-xl bg-bt-dark-blue_back px-[16px] py-[14px]">
      <div className="flex items-center gap-[16px]">
        <SuggestionsIcon />
        <h3 className="text-h3 text-bt-white_def">
          {suggestionsCount > 0
            ? `${suggestionsCount} Suggestions`
            : "No Suggestions"}
        </h3>
        <SortingElement />
      </div>
      <AddFeedbackLink />
    </div>
  );
};

export default SuggestionsBar;
