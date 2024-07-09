import { useParams } from "react-router-dom";
import Feedback from "../Feedback/Feedback";
import Header from "./Header";
import React from "react";
import { AppData } from "../../@types/type";
import CommentsSection from "./CommentsSection";

const FeedbackDetailPage: React.FC<AppData> = ({ data }) => {
  const currentParam = useParams();
  const currentId = currentParam?.id;
  const currentFeedback = data.productRequests.filter(
    (request) => request.id === Number(currentId),
  );
  console.log(currentFeedback);

  return (
    <div className="mx-auto my-[100px] flex w-[730px] flex-col gap-[24px]">
      <Header />
      <Feedback feedback={currentFeedback[0]} />
      <CommentsSection />
    </div>
  );
};

export default FeedbackDetailPage;
