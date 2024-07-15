import { useState } from "react";
import AddButton from "../ui/AddButton";

interface AddFormProps {
  commentType: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
}

const AddForm: React.FC<AddFormProps> = ({ commentType, setComment }) => {
  const [charCount, setCharCount] = useState(250);
  const maxChars = 250;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
    setCharCount(maxChars - e.target.value.length);
  };

  return (
    <div className="mx-auto h-[234px] w-[327px] rounded-xl bg-bt-white_def p-[24px]">
      <h1 className="mb-[24px] text-h3 capitalize text-el-font_def">
        add {commentType}
      </h1>
      <textarea
        className="mb-[16px] h-[80px] w-full rounded-lg bg-body-bg p-[16px] text-[13px] text-[#8C92B3] focus:outline focus:outline-1 focus:outline-el_active"
        name="text"
        maxLength={maxChars}
        onChange={handleChange}
        placeholder={`Type your ${commentType} here`}
        id=""
      />
      <div className="flex items-center justify-between">
        <p className="text-[13px] text-feedback-description">
          {charCount} Characters left
        </p>{" "}
        <AddButton commentType={commentType} />
      </div>
    </div>
  );
};

export default AddForm;
