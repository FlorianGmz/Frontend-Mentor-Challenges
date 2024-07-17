import AddButton from "../ui/AddButton";

interface AddFormProps {
  charCount: number;
  setCharCount: React.Dispatch<React.SetStateAction<number>>;
  commentType: string;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  emptySubmit: boolean;
}

const AddForm: React.FC<AddFormProps> = ({
  charCount,
  setCharCount,
  commentType,
  comment,
  setComment,
  emptySubmit,
}) => {
  const maxChars = 250;

  const commentPost = commentType === "comment";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
    setCharCount(maxChars - e.target.value.length);
  };

  return (
    <div
      className={`mx-auto flex h-auto flex-col ${commentPost ? "mb-[50px] w-[327px] p-[24px] md:h-[246px] md:w-[689px]" : ""} rounded-xl bg-bt-white_def`}
    >
      {commentPost && (
        <h1 className="mb-[24px] text-h3 capitalize text-el-font_def md:mb-[16px]">
          add {commentType}
        </h1>
      )}
      <textarea
        className={` ${emptySubmit && "outline outline-1 outline-bt-red_def"} ${commentPost && "md:ml-0"} mb-[16px] h-[80px] rounded-lg bg-body-bg p-[16px] text-[13px] text-[#8C92B3] focus:outline focus:outline-1 focus:outline-el_active md:mb-[14px] md:ml-[71px] md:text-[15px]`}
        name="text"
        value={comment}
        maxLength={maxChars}
        onChange={handleChange}
        placeholder={`Type your ${commentType} here`}
        id=""
      />
      {emptySubmit && (
        <p
          className={`relative bottom-4 ${!commentPost && "md:ml-[71px]"} text-[14px] text-bt-red_def`}
        >
          Can't be empty
        </p>
      )}
      <div className="flex items-center justify-between">
        <p
          className={`text-[13px] text-feedback-description ${!commentPost && "md:ml-[71px]"}`}
        >
          {charCount} Characters left
        </p>{" "}
        <AddButton commentType={commentType} />
      </div>
    </div>
  );
};

export default AddForm;
