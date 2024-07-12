import React from "react";
import SortingElement from "./SortingElement";
import SuggestionsIcon from "./SuggestionsIcon";
import NavButton from "../NavButton";

interface SuggestionsBarProps {
  suggestionsCount: number;
  selectedOption: { label: string; value: string };
  setSelectedOption: React.Dispatch<
    React.SetStateAction<{
      label: string;
      value: string;
    }>
  >;
}

const SuggestionsBar: React.FC<SuggestionsBarProps> = ({
  suggestionsCount,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className="flex h-[56px] w-screen items-center justify-between bg-bt-dark-blue_back px-[24px] py-[8px] md:mx-auto md:h-[72px] md:w-[689px] md:rounded-xl md:px-[12px] md:py-[14px]">
      <div className="flex items-center justify-start">
        <div className="hidden md:mr-[16px] md:block">
          <SuggestionsIcon />
        </div>
        <h3 className="hidden text-h3 text-bt-white_def md:mr-[38px] md:block">
          {suggestionsCount > 0
            ? suggestionsCount === 1
              ? `${suggestionsCount} Suggestion`
              : `${suggestionsCount} Suggestions`
            : "No Suggestions"}
        </h3>
        <SortingElement
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <NavButton
        to="/feedback/add"
        bgColor="bt-purple_def"
        bgHoverColor="bt-purple_hover"
      />
    </div>
  );
};

export default SuggestionsBar;
