import { FeedbackType } from "../../@types/type";

interface CommentsSectionProps {
  feedback: FeedbackType;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ feedback }) => {
  const { comments } = feedback;
  return (
    <div className="w-[730px] rounded-xl bg-bt-white_def px-[32px] py-[24px]">
      <h3 className="text-h3 text-el-font_def">
        {comments?.length >= 1 ? `${comments?.length}` : "No"} Comments
      </h3>
    </div>
  );
};

export default CommentsSection;
