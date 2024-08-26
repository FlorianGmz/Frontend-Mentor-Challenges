import React, { useState } from "react";
import { FeedbackType } from "../../@types/type";
import { useNavigate } from "react-router-dom";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import toast from "react-hot-toast";

import GoBackLink from "../ui/GoBackLink";
import IconNewFeedback from "../ui/icons/IconNewFeedback";
import TitleInput from "./TitleInput";
import CategoryInput from "./CategoryInput";
import DetailInput from "./DetailInput";
import FormButton from "../ui/FormButton";

const CreateFeedbackPage = () => {
  const navigate = useNavigate();
  const { allFeedbacks, createFeedback } = useFeedbacks();

  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("feature");
  const [description, setDescription] = useState("");

  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const titleIsEmpty = !title.trim();
    const descriptionIsEmpty = !description.trim();

    setIsTitleEmpty(titleIsEmpty);
    setIsDescriptionEmpty(descriptionIsEmpty);

    if (titleIsEmpty || descriptionIsEmpty) return;

    const newFeedbackId = allFeedbacks.length + 1;

    const newFeedback: FeedbackType = {
      id: newFeedbackId,
      title: title,
      category: selectedCategory,
      upvotes: 0,
      status: "suggestion",
      description: description,
      comments: [],
    };

    createFeedback(newFeedback);
    navigate("/suggestions");
    toast.success("Feedback successfully created!");
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto w-[327px] py-[24px] md:w-[540px] md:py-[50px]">
          <GoBackLink page="create" />{" "}
        </div>
        <div className="mx-auto mt-[20px] flex w-[327px] flex-col gap-[24px] rounded-xl bg-bt-white_def p-[24px] md:w-[540px] md:p-[40px]">
          <div className="absolute top-[60px] scale-75 md:top-[110px] md:scale-100">
            <IconNewFeedback />
          </div>
          <h1 className="mt-[20px] text-h3 text-el-font_def md:my-[16px] md:text-h1">
            Create New Feedback
          </h1>
          <TitleInput setTitle={setTitle} isEmpty={isTitleEmpty} />
          <CategoryInput
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <DetailInput
            setDescription={setDescription}
            isEmpty={isDescriptionEmpty}
          />
          <div className="mt-[8px] flex flex-col gap-[16px] md:flex-row-reverse">
            <FormButton type="submit" label="add feedback" />
            <FormButton
              type="button"
              label="cancel"
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateFeedbackPage;
