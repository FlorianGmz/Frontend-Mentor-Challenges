import React from "react";
import { useParams } from "react-router-dom";
import Feedback from "../ui/Feedback/Feedback";
import Header from "./Header";
import {
  Comment as CommentType,
  FeedbackType,
  Reply,
  User,
} from "../../@types/type";
import AddForm from "./AddForm/AddForm";
import useFormState from "../../hooks/UseFormState";
import Comment from "./Comment";
import Upvote from "../ui/Feedback/Upvote";

interface FeedbackDetailPageProps {
  localData: { currentUser: User; productRequests: FeedbackType[] };
  setLocalData: React.Dispatch<
    React.SetStateAction<{
      currentUser: User;
      productRequests: FeedbackType[];
    }>
  >;
}

const FeedbackDetailPage: React.FC<FeedbackDetailPageProps> = ({
  localData,
  setLocalData,
}) => {
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

  const currentFeedback = localData?.productRequests?.find(
    (request) => request.id === currentId,
  );
  console.log(currentFeedback);
  const currentUser = localData.currentUser;

  const totalComments = localData?.productRequests?.flatMap((request) => {
    return request.comments || [];
  });

  const currentCommentId = totalComments?.length;
  const newCommentId = currentCommentId + 1;

  const addNewComment = (newComment: CommentType) => {
    setLocalData((prevData) => {
      const updatedRequests = prevData.productRequests.map((request) => {
        if (request.id === currentId) {
          return {
            ...request,
            comments: request.comments
              ? [...request.comments, newComment]
              : [newComment],
          };
        }
        return request;
      });

      return {
        ...prevData,
        productRequests: updatedRequests,
      };
    });
  };

  const addNewReply = (newReply: Reply, commentId: number) => {
    setLocalData((prevData) => {
      const updatedRequests = prevData.productRequests.map((request) => {
        if (request.id === currentId) {
          return {
            ...request,
            comments: request.comments?.map((comment) => {
              if (comment.id === commentId) {
                return {
                  ...comment,
                  replies: comment.replies
                    ? [...comment.replies, newReply]
                    : [newReply],
                };
              }
              return comment;
            }),
          };
        }
        return request;
      });

      return {
        ...prevData,
        productRequests: updatedRequests,
      };
    });
  };

  const addVote = (feedbackId: number) => {
    setLocalData((prevData) => {
      const newVote = prevData.productRequests.map((request) => {
        if (request.id === feedbackId) {
          return {
            ...request,
            upvotes: (request.upvotes += 1),
          };
        }
        return request;
      });
      return {
        ...prevData,
        productRequests: newVote,
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

  const comments = currentFeedback?.comments || [];
  let numberOfComments = comments ? comments.length : 0;

  comments.forEach((comment: CommentType) => {
    if (comment.replies) {
      numberOfComments += comment.replies.length;
    }
  });

  return (
    <div className="flex w-full flex-col gap-[24px] py-[24px]">
      <Header />
      {currentFeedback && (
        <Feedback
          feedback={currentFeedback}
          feedbackDetailPage={true}
          addVote={addVote}
        />
      )}
      <div className="mx-auto w-[327px] rounded-xl bg-bt-white_def px-[32px] py-[24px] md:w-[689px] xl:w-[730px]">
        <h3 className="text-h3 text-el-font_def">
          {numberOfComments >= 1 ? `${numberOfComments}` : "No"} Comments
        </h3>
        {currentFeedback?.comments?.map((comment, index) => (
          <Comment
            key={comment.id}
            index={index}
            commentData={comment}
            addNewReply={addNewReply}
          />
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
