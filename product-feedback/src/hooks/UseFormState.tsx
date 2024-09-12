import { useState } from "react";

interface UseFormStateProps {
  initialCharCount?: number;
}

const useFormState = ({ initialCharCount = 250 }: UseFormStateProps = {}) => {
  const [comment, setComment] = useState("");
  const [charCount, setCharCount] = useState(initialCharCount);
  const [emptySubmit, setEmptySubmit] = useState(false);

  return {
    comment,
    charCount,
    emptySubmit,
    setComment,
    setCharCount,
    setEmptySubmit,
  };
};

export default useFormState;
