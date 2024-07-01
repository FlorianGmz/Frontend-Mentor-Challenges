import Category from "./Category";
import CommentCount from "./CommentCount";
import Request from "./Request";
import Upvote from "./Upvote";

const Feedback = () => {
  return (
    <div className="group flex h-[151px] w-[825px] cursor-pointer justify-start gap-[32px] rounded-lg bg-bt-white_def px-[32px] py-[28px]">
      <Upvote />
      {/* <Request /> */}
      <div>
        <h3 className="text-h3 text-el-font_def transition-colors group-hover:text-bt-blue_def">
          Title
        </h3>
        <p className="text-feedback-description text-body-1">Description</p>
        <Category />
      </div>
      <CommentCount />
    </div>
  );
};

export default Feedback;
