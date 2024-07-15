import { FeedbackType } from "../../@types/type";
import Comment from "./Comment";

interface CommentsSectionProps {
  feedback: FeedbackType;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ feedback }) => {
  const { comments } = feedback;
  let numberOfComments = comments ? comments.length : 0;

  if (comments) {
    comments.forEach((comment) => {
      if (comment.replies) {
        numberOfComments += comment.replies.length;
      }
    });
  }
  return (
    <div className="mx-auto w-[327px] rounded-xl bg-bt-white_def px-[32px] py-[24px]">
      <h3 className="text-h3 text-el-font_def">
        {numberOfComments >= 1 ? `${numberOfComments}` : "No"} Comments
      </h3>
      {feedback.comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsSection;
