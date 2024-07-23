import { useEffect, useState } from "react";
import CategoryInput from "../CreateFeedbackPage.tsx/CategoryInput";
import DetailInput from "../CreateFeedbackPage.tsx/DetailInput";
import TitleInput from "../CreateFeedbackPage.tsx/TitleInput";
import AddButton from "../ui/AddButton";
import ConfirmButton from "../ui/ConfirmButton";
import GoBackLink from "../ui/GoBackLink";
import IconNewFeedback from "../ui/icons/IconNewFeedback";
import { useParams } from "react-router-dom";
import StatusInput from "./StatusInput";
import { useFeedbacks } from "../../contexts/FeedbackContext";

const FeedbackEditPage = () => {
  const { id } = useParams();

  const { getFeedback, currentFeedback } = useFeedbacks();
  const { title, category, status, description } = currentFeedback;

  useEffect(() => {
    getFeedback(id);
  }, []);

  const [feedbackTitle, setTitle] = useState(title);
  const [emptyTitle, setEmptyTitle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedStatus, setSelectedStatus] = useState(status);
  const [feedbackDescription, setDescription] = useState(description);
  const [emptyDescription, setEmptyDescription] = useState(false);

  const handleSubmit = () => {};
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto w-[327px] py-[24px] md:w-[540px] md:py-[50px]">
          <GoBackLink />{" "}
        </div>
        <div className="mx-auto mt-[20px] flex w-[327px] flex-col gap-[24px] rounded-xl bg-bt-white_def p-[24px] md:w-[540px] md:p-[40px]">
          <div className="absolute top-[60px] scale-75 md:top-[110px] md:scale-100">
            <IconNewFeedback />
          </div>
          <h1 className="mt-[20px] text-h3 text-el-font_def md:my-[16px] md:text-h1">
            {`Editing '${feedbackTitle}'`}
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
          <div className="mt-[8px] flex flex-col gap-[16px] md:flex-row-reverse">
            <AddButton commentType="feedback" />
            <ConfirmButton type="cancel" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeedbackEditPage;
