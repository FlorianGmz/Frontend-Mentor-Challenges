import { useEffect, useState } from "react";
import CategoryInput from "../CreateFeedbackPage/CategoryInput";
import DetailInput from "../CreateFeedbackPage/DetailInput";
import TitleInput from "../CreateFeedbackPage/TitleInput";
import GoBackLink from "../ui/GoBackLink";
import IconNewFeedback from "../ui/icons/IconNewFeedback";
import { useNavigate, useParams } from "react-router-dom";
import StatusInput from "./StatusInput";
import { useFeedbacks } from "../../contexts/FeedbackContext";
import FormButton from "../ui/FormButton";

const FeedbackEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { getFeedback, allFeedbacks, currentFeedback, editFeedback } =
    useFeedbacks();
  const { title, category, status, description, comments, upvotes } =
    currentFeedback;

  useEffect(() => {
    getFeedback(id);
  }, [allFeedbacks]);

  const [feedbackTitle, setTitle] = useState(title);
  const [emptyTitle, setEmptyTitle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedStatus, setSelectedStatus] = useState(status);
  const [feedbackDescription, setDescription] = useState(description);
  const [emptyDescription, setEmptyDescription] = useState(false);

  const editedFeedback = {
    id: Number(id),
    title: feedbackTitle,
    category: selectedCategory,
    status: selectedStatus,
    upvotes: upvotes,
    description: feedbackDescription,
    comments: comments ? comments : [],
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isTitleEmpty = !feedbackTitle;
    const isDescriptionEmpty = !feedbackDescription;

    setEmptyTitle(isTitleEmpty);
    setEmptyDescription(isDescriptionEmpty);

    if (!isTitleEmpty && !isDescriptionEmpty) {
      editFeedback(editedFeedback);
      navigate(-1);
    }
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto w-[327px] py-[24px] md:w-[540px] md:py-[50px]">
          <GoBackLink page="edit" />{" "}
        </div>
        <div className="mx-auto mt-[20px] flex w-[327px] flex-col gap-[24px] rounded-xl bg-bt-white_def p-[24px] md:w-[540px] md:p-[40px]">
          <div className="absolute top-[60px] scale-75 md:top-[110px] md:scale-100">
            <IconNewFeedback />
          </div>
          <h1 className="mt-[20px] text-h3 text-el-font_def md:my-[16px] md:text-h1">
            {`Editing '${title}'`}
          </h1>
          <TitleInput
            defaultValue={feedbackTitle}
            setTitle={setTitle}
            emptySubmit={emptyTitle}
          />
          <CategoryInput
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <StatusInput
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />
          <DetailInput
            defaultValue={feedbackDescription}
            setDescription={setDescription}
            emptySubmit={emptyDescription}
          />

          {/* This div is rendered only on smartphone viewport */}
          <div className="mt-[8px] flex flex-col gap-[16px] md:hidden md:flex-row-reverse">
            <FormButton type="edit" feedbackId="" />
            <FormButton type="cancel" feedbackId="" />
            <FormButton type="delete" feedbackId={id} />
          </div>
          {/*  */}

          {/* This div is rendered only on tablet and desktop viewport */}
          <div className="hidden md:mt-[8px] md:flex md:flex-row-reverse md:justify-between md:gap-[16px]">
            <div className="md:flex md:flex-row-reverse md:justify-end md:gap-[16px]">
              <FormButton type="edit" feedbackId="" />
              <FormButton type="cancel" feedbackId="" />
            </div>
            <div>
              <FormButton type="delete" feedbackId={id} />
            </div>
          </div>
          {/*  */}
        </div>
      </form>
    </div>
  );
};

export default FeedbackEditPage;
