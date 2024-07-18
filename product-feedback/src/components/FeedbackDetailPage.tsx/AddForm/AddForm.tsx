import AddButton from "../../ui/AddButton";
import CharCount from "./CharCount";
import TextAreaDesktop from "./TextAreaDesktop";
import TextAreaResponsive from "./TextAreaResponsive";

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
      className={`mx-auto flex h-auto flex-col ${commentPost ? "mb-[50px] w-[327px] p-[24px] md:h-[246px] md:w-[689px] xl:w-[730px]" : ""} rounded-xl bg-bt-white_def`}
    >
      {commentPost && (
        <h1 className="mb-[24px] text-h3 capitalize text-el-font_def md:mb-[16px]">
          add {commentType}
        </h1>
      )}

      {/* This div content is only rendered on desktop screen */}
      <div className="hidden gap-[16px] xl:flex xl:w-full xl:justify-between">
        <TextAreaDesktop
          comment={comment}
          commentPost={commentPost}
          emptySubmit={emptySubmit}
          handleChange={handleChange}
          maxChars={maxChars}
        />
        <div className={`${!commentPost ? "hidden xl:block" : "hidden"}`}>
          <AddButton commentType="reply" />
        </div>
      </div>
      {/*  */}

      {/* This div content is rendered on smartphone and tablet */}
      <TextAreaResponsive
        comment={comment}
        commentPost={commentPost}
        emptySubmit={emptySubmit}
        handleChange={handleChange}
        maxChars={maxChars}
      />
      {/*  */}

      <div
        className={`flex items-center justify-between ${!commentPost && "xl:hidden"}`}
      >
        <CharCount commentPost={commentPost} charCount={charCount} />
        <AddButton commentType={commentType} />
      </div>
    </div>
  );
};

export default AddForm;
