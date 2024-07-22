import data from "./data/data.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuggestionsPage from "./components/SuggestionsPage.tsx/SuggestionsPage";
import FeedbackDetailPage from "./components/FeedbackDetailPage.tsx/FeedbackDetailPage";
import ScrollToTop from "./ScrollToTop";
import CreateFeedbackPage from "./components/CreateFeedbackPage.tsx/CreateFeedbackPage";
import { useState } from "react";

function App() {
  const [localData, setLocalData] = useState(data);

  const router = createBrowserRouter([
    {
      path: "/suggestions",
      element: (
        <>
          <ScrollToTop />
          <SuggestionsPage localData={localData} setLocalData={setLocalData} />
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
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
