import { useParams } from "react-router-dom";
import Feedback from "../ui/Feedback/Feedback";
import Header from "./Header";
import React, { useState } from "react";
import { AppData } from "../../@types/type";
import CommentsSection from "./CommentsSection";
import AddForm from "./AddForm";

const FeedbackDetailPage: React.FC<AppData> = ({ data }) => {
  const currentUser = data.currentUser;
  let currentCommentId = 0;
  const [comment, setComment] = useState("");
  // const [currentFeedback, setCurrentFeedback] = useState(null);

  const currentParam = useParams();
  const currentId = currentParam?.id;
  const currentFeedback = data.productRequests.filter(
    (request) => request.id === Number(currentId),
  );

  const totalComments = data.productRequests.flatMap((request) => {
    return request.comments || [];
  });
  totalComments.forEach((comment) => {
    if (comment.id) currentCommentId += 1;
  });
  const newCommentId = currentCommentId + 1;

  const addNewComment = (currentUser, newCommentId, comment) => {
    currentFeedback[0].comments?.push({
      id: newCommentId,
      content: comment,
      user: currentUser,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addNewComment(currentUser, newCommentId, comment);
      setComment("");
    }
  };

  return (
    <div className="flex w-screen flex-col gap-[24px] py-[24px]">
      <Header />
      <Feedback feedback={currentFeedback[0]} />
      <CommentsSection feedback={currentFeedback[0]} />
      <form onSubmit={handleSubmit}>
        <AddForm
          commentType="comment"
          comment={comment}
          setComment={setComment}
        />
      </form>
    </div>
  );
};

export default FeedbackDetailPage;
