import CategoryPicker from "../CategoryPicker/CategoryPicker";
import FrontendMentorSticker from "../FrontendMentorSticker";
import RoadmapNav from "../RoadmapNav/RoadmapNav";
import SuggestionsBar from "../SuggestionsBar/SuggestionsBar";
import data from "../../data/data.json";
import Feedback from "../Feedback/Feedback";
import { useState } from "react";

const SuggestionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [selectedOption, setSelectedOption] = useState({
    label: "Most Upvotes",
    value: "most-upvotes",
  });

  const feedbackSuggestions = data.productRequests.filter((suggestion) => {
    return suggestion.status === "suggestion";
  });

  const filteredSuggestions = feedbackSuggestions.filter((suggestion) =>
    selectedCategory === "all"
      ? feedbackSuggestions
      : suggestion.category === selectedCategory,
  );

  function sortSuggestions(a, b) {
    if (selectedOption.value === "most-upvotes") {
      return b.upvotes - a.upvotes;
    } else if (selectedOption.value === "least-upvotes") {
      return a.upvotes - b.upvotes;
    } else if (selectedOption.value === "most-comments") {
      return b.comments?.length - a.comments?.length;
    } else if (selectedOption.value === "least-comments") {
      return a.comments?.length - b.comments?.length;
    }
  }

  filteredSuggestions.sort(sortSuggestions);
  return (
    <div className="mx-auto my-[100px] flex w-[1110px] gap-[30px]">
      <div className="flex flex-col gap-[24px]">
        <FrontendMentorSticker />
        <CategoryPicker
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <RoadmapNav />
      </div>
      <div className="flex flex-col gap-[20px]">
        <SuggestionsBar
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          suggestionsCount={filteredSuggestions.length}
        />
        {filteredSuggestions.map((feedback) => (
          <Feedback key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default SuggestionsPage;
