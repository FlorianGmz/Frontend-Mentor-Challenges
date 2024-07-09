import data from "./data/data.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuggestionsPage from "./components/SuggestionsPage.tsx/SuggestionsPage";
import FeedbackDetailPage from "./components/FeedbackDetailPage.tsx/FeedbackDetailPage";

const router = createBrowserRouter([
  {
    path: "/suggestions",
    element: <SuggestionsPage data={data} />,
  },
  {
    path: "/feedback/:id",
    element: <FeedbackDetailPage data={data} />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
