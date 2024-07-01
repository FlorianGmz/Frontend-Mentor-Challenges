import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";

const CommentCount = () => {
  return (
    <div className="flex items-center justify-between gap-[8px]">
      <FaComment className="text-el-comment" />
      <span className="text-body-3">6</span>
    </div>
  );
};

export default CommentCount;
