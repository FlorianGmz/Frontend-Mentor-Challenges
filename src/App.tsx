import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import SuggestionsPage from "./components/SuggestionsPage/SuggestionsPage";
import FeedbackDetailPage from "./components/FeedbackDetailPage/FeedbackDetailPage";
import ScrollToTop from "./ScrollToTop";
import CreateFeedbackPage from "./components/CreateFeedbackPage/CreateFeedbackPage";
import { FeedbacksProvider } from "./contexts/FeedbackContext";
import { Toaster } from "react-hot-toast";
import FeedbackEditPage from "./components/FeedbackEditPage/FeedbackEditPage";
import RoadmapPage from "./components/RoadmapPage/RoadmapPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  //  We use HashRouter instead of BrowserRouter for Github pages hosting
  return (
    <>
      <FeedbacksProvider>
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Navigate to="/suggestions" />} />
            <Route path="/suggestions" element={<SuggestionsPage />} />
            <Route path="/feedback/:id" element={<FeedbackDetailPage />} />
            <Route path="/feedback/create" element={<CreateFeedbackPage />} />
            <Route path="/feedback/:id/edit" element={<FeedbackEditPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </HashRouter>
        <Toaster position="top-center" />
      </FeedbacksProvider>
    </>
  );
}

export default App;
