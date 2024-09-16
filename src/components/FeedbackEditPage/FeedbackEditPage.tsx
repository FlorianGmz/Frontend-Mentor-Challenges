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
import toast from "react-hot-toast";
import { FeedbackType } from "../../@types/type";

const FeedbackEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { getFeedback, currentFeedback, editFeedback, deleteFeedback } =
    useFeedbacks();

  useEffect(() => {
    if (id) {
      getFeedback(id);
    }
  }, [id, getFeedback]);

  const [feedbackTitle, setFeedbackTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] =
    useState<FeedbackType["status"]>("suggestion");
  const [feedbackDescription, setDescription] = useState("");

  const [emptyTitle, setEmptyTitle] = useState(false);
  const [emptyDescription, setEmptyDescription] = useState(false);

  // Update the form fields when currentFeedback is loaded
  useEffect(() => {
    if (currentFeedback) {
      setFeedbackTitle(currentFeedback.title);
      setSelectedCategory(currentFeedback.category);
      setSelectedStatus(currentFeedback.status);
      setDescription(currentFeedback.description);
    }
  }, [currentFeedback]);

  const validateForm = () => {
    const isTitleEmpty = !feedbackTitle?.trim();
    const isDescriptionEmpty = !feedbackDescription?.trim();
    setEmptyTitle(isTitleEmpty);
    setEmptyDescription(isDescriptionEmpty);
    return !isTitleEmpty && !isDescriptionEmpty;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const updatedFeedback = {
      ...currentFeedback,
      id: Number(id),
      title: feedbackTitle.trim(),
      category: selectedCategory.trim(),
      status: selectedStatus,
      description: feedbackDescription.trim(),
      upvotes: currentFeedback?.upvotes ?? 0,
    };

    editFeedback(updatedFeedback);
    navigate(-1);
    toast.success("Modification succesfully saved!");
  };

  const handleDelete = (id: string | undefined) => {
    deleteFeedback(Number(id));
    navigate("/suggestions");
    toast.success("Feedback successfully deleted!");
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto w-[327px] py-[24px] md:w-[540px] md:py-[50px]">
          <GoBackLink page="edit" />{" "}
        </div>
        <div className="mx-auto mb-[24px] mt-[20px] flex w-[327px] flex-col gap-[24px] rounded-xl bg-bt-white_def p-[24px] md:w-[540px] md:p-[40px]">
          <div className="absolute top-[60px] scale-75 md:top-[110px] md:scale-100">
            <IconNewFeedback />
          </div>
          <h1 className="mt-[20px] text-h3 text-el-font_def md:my-[16px] md:text-h1">
            {`Editing '${feedbackTitle}'`}
          </h1>
          <TitleInput
            value={feedbackTitle}
            setTitle={setFeedbackTitle}
            isEmpty={emptyTitle}
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
            value={feedbackDescription}
            setDescription={setDescription}
            isEmpty={emptyDescription}
          />

          {/* This div is rendered only on smartphone viewport */}
          <div className="mt-[8px] flex flex-col gap-[16px] md:hidden md:flex-row-reverse">
            <FormButton type="submit" label="save changes" />
            <FormButton
              type="button"
              label="cancel"
              onClick={() => navigate(-1)}
            />
            <FormButton
              type="submit"
              label="delete"
              onClick={() => handleDelete(id)}
            />
          </div>
          {/*  */}

          {/* This div is rendered only on tablet and desktop viewport */}
          <div className="hidden md:mt-[8px] md:flex md:flex-row-reverse md:justify-between md:gap-[16px]">
            <div className="md:flex md:flex-row-reverse md:justify-end md:gap-[16px]">
              <FormButton type="submit" label="save changes" />
              <FormButton
                type="button"
                label="cancel"
                onClick={() => navigate(-1)}
              />
            </div>
            <div>
              <FormButton
                type="button"
                label="delete"
                onClick={() => handleDelete(id)}
              />
            </div>
          </div>
          {/*  */}
        </div>
      </form>
    </div>
  );
};

export default FeedbackEditPage;
