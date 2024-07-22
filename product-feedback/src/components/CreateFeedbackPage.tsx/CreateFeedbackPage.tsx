import React, { useState } from "react";
import { FeedbackType, User } from "../../@types/type";
import GoBackLink from "../ui/GoBackLink";
import IconNewFeedback from "../ui/icons/IconNewFeedback";
import TitleInput from "./TitleInput";
import CategoryInput from "./CategoryInput";
import DetailInput from "./DetailInput";
import AddButton from "../ui/AddButton";
import ConfirmButton from "../ui/ConfirmButton";
import { useNavigate } from "react-router-dom";

interface CreateFeedbackPageProps {
  localData: { currentUser: User; productRequests: FeedbackType[] };
  setLocalData: React.Dispatch<
    React.SetStateAction<{
      currentUser: User;
      productRequests: FeedbackType[];
    }>
  >;
}

const CreateFeedbackPage: React.FC<CreateFeedbackPageProps> = ({
  localData,
  setLocalData,
}) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [emptyTitle, setEmptyTitle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("feature");
  const [description, setDescription] = useState("");
  const [emptyDescription, setEmptyDescription] = useState(false);

  const totalComments = localData.productRequests.flatMap((request) => {
    return request.comments || [];
  });
  const currentCommentId = totalComments.length;
  const newCommentId = currentCommentId + 1;

  const newFeedback: FeedbackType = {
    id: newCommentId,
    title: title,
    category: selectedCategory,
    upvotes: 0,
    status: "suggestion",
    description: description,
    comments: [],
  };

  const addNewFeedback = (newFeedback: FeedbackType) => {
    setLocalData((prevData) => {
      const updatedRequests = [...prevData.productRequests, newFeedback];

      return {
        ...prevData,
        productRequests: updatedRequests,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setEmptyTitle(true);
    }
    if (!description) {
      setEmptyDescription(true);
    }
    if (title && description) {
      addNewFeedback(newFeedback);
      navigate("/suggestions");
    }
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto w-[327px] py-[24px]">
          <GoBackLink />{" "}
        </div>
        <div className="mx-auto mt-[20px] flex w-[327px] flex-col gap-[24px] rounded-xl bg-bt-white_def p-[24px]">
          <div className="absolute top-[60px] scale-75">
            <IconNewFeedback />
          </div>
          <h1 className="mt-[20px] text-h3 text-el-font_def">
            Create New Feedback
          </h1>
          <TitleInput setTitle={setTitle} />
          <CategoryInput
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <DetailInput setDescription={setDescription} />
          <div className="mt-[16px] flex flex-col gap-[16px]">
            <AddButton commentType="feedback" />
            <ConfirmButton type="cancel" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateFeedbackPage;
