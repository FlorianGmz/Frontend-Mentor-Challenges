import CategoryPicker from "../CategoryPicker/CategoryPicker";
import FrontendMentorSticker from "../FrontendMentorSticker";
import RoadmapNav from "../RoadmapNav/RoadmapNav";
import SuggestionsBar from "../SuggestionsBar/SuggestionsBar";
import data from "../../data/data.json";
import Feedback from "../Feedback/Feedback";
import { useState } from "react";

const SuggestionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const feedbackSuggestions = data.productRequests.filter((request) => {
    return request.status === "suggestion";
  });

  const filteredSuggestions = feedbackSuggestions.filter((suggestion) =>
    selectedCategory === "all"
      ? feedbackSuggestions
      : suggestion.category === selectedCategory,
  );

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
        <SuggestionsBar suggestionsCount={feedbackSuggestions.length} />
        {filteredSuggestions.map((feedback) => (
          <Feedback key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default SuggestionsPage;
