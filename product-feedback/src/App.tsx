import CategoryPicker from "./components/CategoryPicker/CategoryPicker";
import Feedback from "./components/Feedback/Feedback";
import FrontendMentorSticker from "./components/FrontendMentorSticker";
import RoadmapNav from "./components/RoadmapNav/RoadmapNav";
import SuggestionsBar from "./components/SuggestionsBar/SuggestionsBar";

function App() {
  return (
    <>
      <SuggestionsBar />
      <Feedback />
      <FrontendMentorSticker />
      <CategoryPicker />
      <RoadmapNav />
    </>
  );
}

export default App;
