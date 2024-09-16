import {
  // createBrowserRouter,
  HashRouter,
  Navigate,
  Route,
  // RouterProvider,
  Routes,
} from "react-router-dom";
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
  /*   const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Navigate to={"/suggestions"} replace />,
      },
      {
        path: "/suggestions",
        element: (
          <>
            <ScrollToTop />
            <SuggestionsPage />
          </>
        ),
      },
      {
        path: "/feedback/:id",
        element: (
          <>
            <ScrollToTop />
            <FeedbackDetailPage />
          </>
        ),
      },
      {
        path: "/feedback/create",
        element: (
          <>
            <ScrollToTop />
            <CreateFeedbackPage />
          </>
        ),
      },
      {
        path: "/feedback/:id/edit",
        element: (
          <>
            <ScrollToTop />
            <FeedbackEditPage />
          </>
        ),
      },
      {
        path: "/roadmap",
        element: (
          <>
            <ScrollToTop />
            <RoadmapPage />
          </>
        ),
      },
      {
        path: "*",
        element: (
          <>
            <ScrollToTop />
            <ErrorPage />
          </>
        ),
      },
    ],
    {
      basename: "/Frontend-Mentor-Challenges_Product-Feedback",
    }
  );

  return (
    <>
      <FeedbacksProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster position="top-center" />
      </FeedbacksProvider>
    </>
  ); */
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
