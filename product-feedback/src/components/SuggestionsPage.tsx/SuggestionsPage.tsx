import CategoryPicker from "../CategoryPicker/CategoryPicker";
import FrontendMentorSticker from "../FrontendMentorSticker";
import RoadmapNav from "../RoadmapNav/RoadmapNav";
import SuggestionsBar from "../SuggestionsBar/SuggestionsBar";
import data from "../../data/data.json";
import Feedback from "../Feedback/Feedback";

const SuggestionsPage = () => {
  const feedbackSuggestions = data.productRequests.filter((request) => {
    return request.status === "suggestion";
  });
  return (
    <div className="mx-auto my-[100px] flex w-[1110px] gap-[30px]">
      <div className="flex flex-col gap-[24px]">
        <FrontendMentorSticker />
        <CategoryPicker />
        <RoadmapNav />
      </div>
      <div className="flex flex-col gap-[20px]">
        <SuggestionsBar suggestionsCount={feedbackSuggestions.length} />
        {feedbackSuggestions.map((feedback) => (
          <Feedback key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default SuggestionsPage;
