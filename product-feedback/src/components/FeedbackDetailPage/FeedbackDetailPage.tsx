import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Feedback from "../ui/Feedback/Feedback";
import Header from "./Header";
import { Comment as CommentType, FeedbackType } from "../../@types/type";
import AddForm from "./AddForm/AddForm";
import useFormState from "../../hooks/UseFormState";
import Comment from "./Comment";
import { useFeedbacks } from "../../contexts/FeedbackContext";

const FeedbackDetailPage = () => {
  const {
    comment,
    charCount,
    emptySubmit,
    setComment,
    setCharCount,
    setEmptySubmit,
  } = useFormState();

  const {
    currentFeedback,
    allFeedbacks,
    currentUser,
    getFeedback,
    addComment,
  } = useFeedbacks();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getFeedback(id);
    }
  }, [getFeedback, id]);

  const totalComments = allFeedbacks.flatMap((request: FeedbackType) => {
    return request.comments || [];
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!comment.trim()) {
      setEmptySubmit(true);
      return;
    }

    if (id) {
      setEmptySubmit(false);
      if (comment.trim()) {
        setEmptySubmit(false);
        const newComment: CommentType = {
          id: totalComments?.length + 1,
          content: comment,
          user: currentUser,
          replies: [],
        };
        addComment(newComment, id);
        setComment("");
        setCharCount(250);
      }
    }
  };

  const comments = currentFeedback?.comments || [];
  let numberOfComments = comments ? comments.length : 0;

  comments.forEach((comment: CommentType) => {
    if (comment.replies) {
      numberOfComments += comment.replies.length;
    }
  });

  return (
    <div className="flex w-full flex-col gap-[24px] px-[24px] py-[24px] md:px-0">
      <Header id={id} />
      {currentFeedback && (
        <Feedback feedback={currentFeedback} feedbackDetailPage={true} />
      )}
      <div className="mx-auto w-full rounded-xl bg-bt-white_def px-[32px] py-[24px] md:w-[689px] xl:w-[730px]">
        <h3 className="text-h3 text-el-font_def">
          {numberOfComments >= 1 ? `${numberOfComments}` : "No"} Comments
        </h3>
        {currentFeedback?.comments?.map(
          (comment: CommentType, index: number) => (
            <Comment
              key={comment.id}
              index={index}
              commentData={comment}
              feedbackId={currentFeedback.id}
            />
          ),
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <AddForm
          charCount={charCount}
          setCharCount={setCharCount}
          type="comment"
          comment={comment}
          setComment={setComment}
          emptySubmit={emptySubmit}
        />
      </form>
    </div>
  );
};

export default FeedbackDetailPage;
