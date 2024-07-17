import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Feedback from "../ui/Feedback/Feedback";
import Header from "./Header";
import {
  AppData,
  Comment as CommentType,
  FeedbackType,
} from "../../@types/type";
import AddForm from "./AddForm";
import useFormState from "../../hooks/UseFormState";
import Comment from "./Comment"; // Ensure Comment is imported correctly

const FeedbackDetailPage: React.FC<AppData> = ({ data }) => {
  const {
    comment,
    charCount,
    emptySubmit,
    setComment,
    setCharCount,
    setEmptySubmit,
  } = useFormState();

  const { id } = useParams<{ id: string }>();
  const currentId = Number(id);

  const currentFeedback = data.productRequests.find(
    (request) => request.id === currentId,
  );
  const [feedback, setFeedback] = useState<FeedbackType | undefined>(
    currentFeedback,
  );

  const currentUser = data.currentUser;

  const totalComments = data.productRequests.flatMap((request) => {
    return request.comments || [];
  });

  const currentCommentId = totalComments.length;
  const newCommentId = currentCommentId + 1;

  const addNewComment = (newComment: CommentType) => {
    setFeedback((prevFeedback) => {
      if (!prevFeedback) return prevFeedback;

      return {
        ...prevFeedback,
        comments: [...(prevFeedback.comments || []), newComment],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim()) {
      setEmptySubmit(false);
      const newComment: CommentType = {
        id: newCommentId,
        content: comment,
        user: currentUser,
        replies: [],
      };
      addNewComment(newComment);
      setComment("");
      setCharCount(250);
    } else {
      setEmptySubmit(true);
    }
  };

  const { comments } = feedback as FeedbackType;
  let numberOfComments = comments ? comments.length : 0;

  if (comments) {
    comments.forEach((comment: CommentType) => {
      if (comment.replies) {
        numberOfComments += comment.replies.length;
      }
    });
  }

  return (
    <div className="flex w-full flex-col gap-[24px] py-[24px]">
      <Header />
      <Feedback feedback={feedback} />
      <div className="mx-auto w-[327px] rounded-xl bg-bt-white_def px-[32px] py-[24px] md:w-[689px]">
        <h3 className="text-h3 text-el-font_def">
          {numberOfComments >= 1 ? `${numberOfComments}` : "No"} Comments
        </h3>
        {feedback?.comments?.map((comment, index) => (
          <Comment key={comment.id} index={index} commentData={comment} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <AddForm
          charCount={charCount}
          setCharCount={setCharCount}
          commentType="comment"
          comment={comment}
          setComment={setComment}
          emptySubmit={emptySubmit}
        />
      </form>
    </div>
  );
};

export default FeedbackDetailPage;
