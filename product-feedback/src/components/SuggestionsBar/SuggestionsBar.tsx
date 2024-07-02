import SortingElement from "./SortingElement";
import SuggestionsIcon from "./SuggestionsIcon";

const SuggestionsBar = () => {
  return (
    <div className="flex h-[72px] w-[825px] items-center justify-between rounded-xl bg-bt-dark-blue_back px-[16px] py-[14px]">
      <div className="flex gap-[16px]">
        <SuggestionsIcon />
        <h3 className="text-h3 text-bt-white_def">6 Suggestions</h3>
      </div>
      <SortingElement />
      <div></div>
    </div>
  );
};

export default SuggestionsBar;
