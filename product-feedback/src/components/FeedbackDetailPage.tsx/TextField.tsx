import React from "react";

interface TextFieldProps {
  commentType: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
}

const TextField: React.FC<TextFieldProps> = ({ commentType, setComment }) => {
  const [charCount, setCharCount] = useState(0);
  const maxChars = 250;
  return (
    <>
      <textarea
        className="mb-[16px] h-[80px] w-full rounded-lg bg-body-bg p-[16px] text-[13px] text-[#8C92B3] focus:outline focus:outline-1 focus:outline-el_active"
        name="text"
        maxLength={maxChars}
        onChange={(e) => setComment(e.target.value)}
        placeholder={`Type your ${commentType} here`}
        id=""
      />
      <div className="text-[12px] text-[#8C92B3]">
        {charCount}/{maxChars} characters
      </div>
    </>
  );
};

export default TextField;
