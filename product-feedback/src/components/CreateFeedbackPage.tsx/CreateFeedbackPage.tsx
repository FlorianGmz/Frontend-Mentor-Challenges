import React, { useState } from "react";
import { AppData } from "../../@types/type";
import GoBackLink from "../ui/GoBackLink";
import IconNewFeedback from "../ui/icons/IconNewFeedback";
import TitleInput from "./TitleInput";
import CategoryInput from "./CategoryInput";
import DetailInput from "./DetailInput";
import AddButton from "../ui/AddButton";
import ConfirmButton from "../ui/ConfirmButton";

const CreateFeedbackPage: React.FC<AppData> = ({ data }) => {
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("feature");
  const [description, setDescription] = useState("");

  const [newFeedback, setNewFeedback] = useState({
    id: null,
    title: { title },
    category: { selectedCategory },
    upvotes: 0,
    status: "suggestion",
    description: { description },
    comments: [],
  });

  console.log(title);
  console.log(selectedCategory);
  return (
    <div className="flex flex-col">
      <form action="">
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
          <DetailInput />
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
