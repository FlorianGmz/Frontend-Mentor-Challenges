import CategoryPicker from "./components/CategoryPicker";
import Feedback from "./components/Feedback/Feedback";
import FrontendMentorSticker from "./components/FrontendMentorSticker";
import SuggestionsBar from "./components/SuggestionsBar/SuggestionsBar";

function App() {
  return (
    <>
      <SuggestionsBar />
      <Feedback />
      <FrontendMentorSticker />
      <CategoryPicker />
    </>
  );
}

export default App;
