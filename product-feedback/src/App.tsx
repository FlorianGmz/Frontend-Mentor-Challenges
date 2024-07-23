import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuggestionsPage from "./components/SuggestionsPage.tsx/SuggestionsPage";
import FeedbackDetailPage from "./components/FeedbackDetailPage.tsx/FeedbackDetailPage";
import ScrollToTop from "./ScrollToTop";
import CreateFeedbackPage from "./components/CreateFeedbackPage.tsx/CreateFeedbackPage";
import { FeedbacksProvider } from "./contexts/FeedbackContext";
import { Toaster } from "react-hot-toast";
import FeedbackEditPage from "./components/FeedbackEditPage/FeedbackEditPage";

function App() {
  const router = createBrowserRouter([
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
  ]);

  return (
    <>
      <FeedbacksProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster position="top-center" />
      </FeedbacksProvider>
    </>
  );
}

export default App;
