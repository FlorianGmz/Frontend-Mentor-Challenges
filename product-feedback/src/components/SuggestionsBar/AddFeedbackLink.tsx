import { NavLink } from "react-router-dom";
import IconPlus from "./IconPlus";

const AddFeedbackLink = () => {
  // TODO: create a link
  return (
    <div className="flex cursor-pointer items-center gap-1 rounded-xl bg-bt-purple_def px-[24px] py-[12px] text-h4 text-bt-white_def transition-colors hover:bg-bt-purple_hover">
      <IconPlus />
      <span>Add Feedback</span>
    </div>
  );
};

export default AddFeedbackLink;
