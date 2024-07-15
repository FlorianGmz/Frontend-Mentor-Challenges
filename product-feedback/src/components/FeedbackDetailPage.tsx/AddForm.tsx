import { useState } from "react";
import AddButton from "../ui/AddButton";
import data from "../../data/data.json";
import TextField from "./TextField";

interface AddFormProps {
  commentType: string;
}

const AddForm: React.FC<AddFormProps> = ({ commentType }) => {
  const [comment, setComment] = useState("");
  const [completeComment, setCompleteComment] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const currentUser = data.currentUser;
  console.log(comment);
  return (
    <div className="mx-auto h-[234px] w-[327px] rounded-xl bg-bt-white_def p-[24px]">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-[24px] text-h3 capitalize text-el-font_def">
          add {commentType}
        </h1>
        <TextField commentType={commentType} setComment={setComment} />
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-feedback-description">250 char left</p>{" "}
          <AddButton commentType={commentType} />
        </div>
      </form>
    </div>
  );
};

export default AddForm;
