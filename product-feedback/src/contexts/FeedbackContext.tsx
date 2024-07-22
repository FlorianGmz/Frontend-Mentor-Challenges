import { createContext, ReactNode, useContext, useReducer } from "react";
import data from "../data/data.json";
import { Comment, FeedbackType, Reply, User } from "../@types/type";

const FeedbacksContext = createContext();

interface initialStateType {
  currentUser: User;
  userHasVoted: boolean;
  allFeedbacks: FeedbackType[];
  currentFeedback: FeedbackType | null;
}

const localData = data;

const initialState: initialStateType = {
  currentUser: localData.currentUser,
  userHasVoted: false,
  allFeedbacks: localData.productRequests,
  currentFeedback: null,
};

function reducer(state: initialStateType, action) {
  switch (action.type) {
    case "currentFeedback/set":
      return { ...state, currentFeedback: action.payload };
    case "feedback/newComment":
      return { ...state, allFeedbacks: action.payload };
    case "feedback/newReply":
      return { ...state, allFeedbacks: action.payload };
    case "feedback/create":
      return { ...state, currentFeedback: action.payload };
    case "feedback/addVote":
      return { ...state, userHasVoted: true, allFeedbacks: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function FeedbacksProvider({ children }: { children: ReactNode }) {
  const [{ currentUser, allFeedbacks, currentFeedback }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  function getFeedback(id: number) {
    const feedback = allFeedbacks.find(
      (request: FeedbackType) => request.id === Number(id),
    );
    dispatch({ type: "currentFeedback/set", payload: feedback });
  }

  function addVote(id: number) {
    const newVote = allFeedbacks.map((request: FeedbackType) => {
      if (Number(id) === currentFeedback.id) {
        return {
          ...request,
          upvotes: (request.upvotes += 1),
        };
      }
      return request;
    });
    dispatch({ type: "feedback/upvote", payload: newVote });
  }

  function addComment(newComment: Comment, id: string) {
    const updatedRequests = allFeedbacks.map((request: FeedbackType) => {
      if (request.id === Number(id)) {
        return {
          ...request,
          comments: request.comments
            ? [...request.comments, newComment]
            : [newComment],
        };
      }
      return request;
    });

    dispatch({ type: "feedback/newComment", payload: updatedRequests });
  }

  function addReply(newReply: Reply, commentId: number, id: string) {
    const updatedRequests = allFeedbacks.map((request: FeedbackType) => {
      if (request.id === Number(id)) {
        return {
          ...request,
          comments: request.comments?.map((comment) => {
            if (comment.id === commentId) {
              return {
                ...comment,
                replies: comment.replies
                  ? [...comment.replies, newReply]
                  : [newReply],
              };
            }
            return comment;
          }),
        };
      }
      return request;
    });
    dispatch({ type: "feedback/newReply", payload: updatedRequests });
  }

  return (
    <FeedbacksContext.Provider
      value={{
        currentUser,
        allFeedbacks,
        currentFeedback,
        dispatch,
        addVote,
        getFeedback,
        addComment,
        addReply,
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
