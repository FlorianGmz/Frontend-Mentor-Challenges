import CommentCount from "./CommentCount";
import Request from "./Request";
import Upvote from "./Upvote";

const Feedback = () => {
  return (
    <div className="group flex h-[151px] w-[825px] cursor-pointer justify-between rounded-lg bg-bt-white_def px-[32px] py-[28px]">
      <div className="flex gap-[32px]">
        <Upvote />
        {/* <Request /> */}
        <Request />
      </div>
      <CommentCount />
    </div>
  );
};

export default Feedback;
