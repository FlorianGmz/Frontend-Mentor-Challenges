import { createContext, useContext, useEffect, useReducer } from "react";
import data from "../data/data.json";

const FeedbacksContext = createContext();

const initialState = {
  currentUser: {},
  productRequests: [],
  currentFeedback: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "currentUser/set":
      return { ...state, currentUser: action.payload };
    case "productRequests/set":
      return { ...state, productRequests: action.payload };
    case "feedback/create":
      return { ...state, currentFeedback: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function FeedbacksProvider({ children }) {
  const [{ currentUser, productRequests, currentFeedback }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "currentUser/set", payload: data.currentUser });
    dispatch({ type: "productRequests/set", payload: data.productRequests });
  }, []);

  return (
    <FeedbacksContext.Provider
      value={{
        currentUser,
        productRequests,
        currentFeedback,
        dispatch,
      }}
    >
      {children}
    </FeedbacksContext.Provider>
  );
}

function useFeedbacks() {
  const context = useContext(FeedbacksContext);
  if (context === undefined) {
    throw new Error("useFeedbacks must be used within a FeedbackProvider");
  }
  return context;
}

export { FeedbacksProvider, useFeedbacks };
