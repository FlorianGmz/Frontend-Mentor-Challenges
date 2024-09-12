import SuggestionsBar from "./SuggestionsBar/SuggestionsBar";
import Feedback from "../ui/Feedback/Feedback";
import { useEffect, useMemo, useState } from "react";
import { FeedbackType } from "../../@types/type";
import NoFeedback from "./EmptySuggestions.tsx/EmptySuggestion";
import SideSection from "./SideSection/SideSection";
import { useFeedbacks } from "../../contexts/FeedbackContext";

const SuggestionsPage = () => {
  const { allFeedbacks } = useFeedbacks();

  useEffect(() => {}, [allFeedbacks]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedOption, setSelectedOption] = useState({
    label: "Most Upvotes",
    value: "most-upvotes",
  });

  const suggestionsFeedbacks = allFeedbacks.filter(
    (feedback: FeedbackType) => feedback.status === "suggestion",
  );

  const filteredSuggestions = suggestionsFeedbacks.filter(
    (suggestion: FeedbackType) =>
      selectedCategory === "all"
        ? suggestionsFeedbacks
        : suggestion.category === selectedCategory,
  );

  // Function to get total comment count, including replies
  const getTotalCommentCount = (feedback: FeedbackType) => {
    const commentCount = feedback.comments?.length ?? 0;

    const repliesCount = feedback.comments
      ? feedback.comments.reduce(
          (acc, comment) => acc + (comment.replies?.length ?? 0),
          0,
        )
      : 0;
    return commentCount + repliesCount;
  };

  // Sorting logic for suggestions
  const sortedSuggestions = useMemo(() => {
    return [...filteredSuggestions].sort((a, b) => {
      switch (selectedOption.value) {
        case "most-upvotes":
          return b.upvotes - a.upvotes;
        case "least-upvotes":
          return a.upvotes - b.upvotes;
        case "most-comments":
          return getTotalCommentCount(b) - getTotalCommentCount(a);
        case "least-comments":
          return getTotalCommentCount(a) - getTotalCommentCount(b);
        default:
          return 0;
      }
    });
  }, [filteredSuggestions, selectedOption]);

  return (
    <div className="flex flex-col xl:mx-auto xl:my-[50px] xl:w-[1110px] xl:flex-row xl:justify-center xl:gap-[30px]">
      {/* Side section with category picker and roadmap navigation */}
      <SideSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Suggestions bar with sorting options */}
      <div>
        <SuggestionsBar
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          suggestionsCount={sortedSuggestions.length}
        />

        {/* Displaying sorted suggestions */}
        <section className="mb-[70px] mt-[32px] flex flex-col gap-[16px] px-[24px] md:mt-[24px] md:px-0 xl:gap-[20px]">
          {sortedSuggestions.length >= 1 ? (
            sortedSuggestions.map((feedback: FeedbackType) => (
              <Feedback
                key={feedback.id}
                feedback={feedback}
                feedbackDetailPage={false}
              />
            ))
          ) : (
            <NoFeedback />
          )}
        </section>
      </div>
    </div>
  );
};

export default SuggestionsPage;
