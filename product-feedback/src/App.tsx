import Feedback from "./components/Feedback/Feedback";
import DropdownMenu from "./components/SuggestionsBar/DropdownMenu";
import SuggestionsBar from "./components/SuggestionsBar/SuggestionsBar";

function App() {
  return (
    <>
      <SuggestionsBar />
      <DropdownMenu />
      <Feedback />
    </>
  );
}

export default App;
