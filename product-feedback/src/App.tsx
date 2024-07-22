import data from "./data/data.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuggestionsPage from "./components/SuggestionsPage.tsx/SuggestionsPage";
import FeedbackDetailPage from "./components/FeedbackDetailPage.tsx/FeedbackDetailPage";
import ScrollToTop from "./ScrollToTop";
import CreateFeedbackPage from "./components/CreateFeedbackPage.tsx/CreateFeedbackPage";
import { useState } from "react";
import { FeedbacksProvider } from "./contexts/FeedbackContext";

function App() {
  const [localData, setLocalData] = useState(data);

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
          <FeedbackDetailPage
            localData={localData}
            setLocalData={setLocalData}
          />
        </>
      ),
    },
    {
      path: "/feedback/create",
      element: (
        <>
          <ScrollToTop />
          <CreateFeedbackPage
            localData={localData}
            setLocalData={setLocalData}
          />
        </>
      ),
    },
  ]);

  return (
    <>
      <FeedbacksProvider>
        <RouterProvider router={router}></RouterProvider>
      </FeedbacksProvider>
    </>
  );
}

export default App;
