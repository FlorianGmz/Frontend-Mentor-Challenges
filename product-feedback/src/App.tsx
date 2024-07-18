import data from "./data/data.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuggestionsPage from "./components/SuggestionsPage.tsx/SuggestionsPage";
import FeedbackDetailPage from "./components/FeedbackDetailPage.tsx/FeedbackDetailPage";
import ScrollToTop from "./ScrollToTop";
import CreateFeedbackPage from "./components/CreateFeedbackPage.tsx/CreateFeedbackPage";

const router = createBrowserRouter([
  {
    path: "/suggestions",
    element: (
      <>
        <ScrollToTop />
        <SuggestionsPage data={data} />
      </>
    ),
  },
  {
    path: "/feedback/:id",
    element: (
      <>
        <ScrollToTop />
        <FeedbackDetailPage data={data} />
      </>
    ),
  },
  {
    path: "/feedback/create",
    element: (
      <>
        <ScrollToTop />
        <CreateFeedbackPage data={data} />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
