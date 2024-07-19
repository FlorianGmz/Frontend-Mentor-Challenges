import SuggestionsBar from "./SuggestionsBar/SuggestionsBar";
import Feedback from "../ui/Feedback/Feedback";
import React, { useState } from "react";
import { FeedbackType, User } from "../../@types/type";
import NoFeedback from "./EmptySuggestions.tsx/EmptySuggestion";
import SideSection from "./SideSection/SideSection";
interface SuggestionsPageProps {
  localData: { currentUser: User; productRequests: FeedbackType[] };
  setLocalData: React.Dispatch<
    React.SetStateAction<{
      currentUser: User;
      productRequests: FeedbackType[];
    }>
  >;
}

const SuggestionsPage: React.FC<SuggestionsPageProps> = ({
  localData,
  setLocalData,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [selectedOption, setSelectedOption] = useState({
    label: "Most Upvotes",
    value: "most-upvotes",
  });

  const feedbackSuggestions = localData.productRequests.filter((suggestion) => {
    return suggestion.status === "suggestion";
  });

  const filteredSuggestions = feedbackSuggestions.filter(
    (suggestion: FeedbackType) =>
      selectedCategory === "all"
        ? feedbackSuggestions
        : suggestion.category === selectedCategory,
  );

  function sortSuggestions(a: FeedbackType, b: FeedbackType) {
    if (selectedOption.value === "most-upvotes") {
      return b.upvotes - a.upvotes;
    } else if (selectedOption.value === "least-upvotes") {
      return a.upvotes - b.upvotes;
    } else if (selectedOption.value === "most-comments") {
      return (
        ((b as FeedbackType).comments?.length ?? 0) -
        ((a as FeedbackType).comments?.length ?? 0)
      );
    } else if (selectedOption.value === "least-comments") {
      return (
        ((a as FeedbackType).comments?.length ?? 0) -
        ((b as FeedbackType).comments?.length ?? 0)
      );
    }
    return 0;
  }

  const addVote = (feedbackId: number) => {
    setLocalData((prevData) => {
      const newVote = prevData.productRequests.map((request) => {
        if (request.id === feedbackId) {
          return {
            ...request,
            upvotes: (request.upvotes += 1),
          };
        }
        return request;
      });
      return {
        ...prevData,
        productRequests: newVote,
      };
    });
  };
  filteredSuggestions.sort(sortSuggestions);

  return (
    <div className="flex flex-col xl:mx-auto xl:my-[50px] xl:w-[1110px] xl:flex-row xl:justify-center xl:gap-[30px]">
      <SideSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div>
        <SuggestionsBar
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          suggestionsCount={filteredSuggestions.length}
        />
        <section className="mb-[70px] mt-[32px] flex flex-col gap-[16px] md:mt-[24px] xl:gap-[20px]">
          {filteredSuggestions.length >= 1 ? (
            filteredSuggestions.map((feedback) => (
              <Feedback
                key={feedback.id}
                feedback={feedback}
                feedbackDetailPage={false}
                addVote={addVote}
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
