import { RxCaretUp } from "react-icons/rx";

const Upvote = () => {
  return (
    <button
      type="button"
      className="pr group flex h-[53px] w-[40px] flex-col items-center justify-center rounded-lg bg-el_def pr-[32px] transition-colors hover:bg-el_hover focus:bg-el_active"
    >
      <RxCaretUp className="font-[800] text-bt-blue_def group-focus:text-bt-white_def" />
      <span className="text-body-3 text-el-font_def group-focus:text-bt-white_def">
        123
      </span>
    </button>
  );
};

export default Upvote;
