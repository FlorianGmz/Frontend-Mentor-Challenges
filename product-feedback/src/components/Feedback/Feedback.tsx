import CommentCount from "./CommentCount";
import Request from "./Request";
import Upvote from "./Upvote";

const Feedback = () => {
  return (
    <div className="group flex h-[151px] w-[825px] cursor-pointer justify-between rounded-xl bg-bt-white_def px-[32px] py-[28px]">
      <div className="flex gap-[32px]">
        <Upvote />
        <Request />
      </div>
      <CommentCount />
    </div>
  );
};

export default Feedback;
