import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
} from "react";
import data from "../data/data.json";
import { AppData, Comment, FeedbackType, Reply, User } from "../@types/type";
import { ActionType } from "../@types/type.reducer";

interface FeedbacksContextType {
  currentUser: User;
  allFeedbacks: FeedbackType[];
  currentFeedback: FeedbackType | null;
  votedFeedbackId: number[];
  dispatch: React.Dispatch<ActionType>;
  addVote: (id: number) => void;
  getFeedback: (id: string) => void;
  addComment: (newComment: Comment, id: string) => void;
  addReply: (newReply: Reply, commentId: number, id: number) => void;
  createFeedback: (newFeedback: FeedbackType) => void;
  editFeedback: (feedback: FeedbackType) => void;
  deleteFeedback: (id: number) => void;
}

const FeedbacksContext = createContext<FeedbacksContextType | undefined>(
  undefined,
);

interface initialStateType {
  currentUser: User;
  votedFeedbackId: number[];
  allFeedbacks: FeedbackType[];
  currentFeedback: FeedbackType | null;
}

const localData = data as AppData["localData"];

const initialState: initialStateType = {
  currentUser: localData.currentUser,
  votedFeedbackId: [],
  allFeedbacks: localData.productRequests,
  currentFeedback: null,
};

function reducer(state: initialStateType, action: ActionType) {
  switch (action.type) {
    case "currentFeedback/set":
      return { ...state, currentFeedback: action.payload };
    case "feedback/newComment":
      return { ...state, allFeedbacks: action.payload };
    case "feedback/newReply":
      return { ...state, allFeedbacks: action.payload };
    case "feedback/create":
      return { ...state, allFeedbacks: action.payload };
    case "feedback/addVote":
      return {
        ...state,
        votedFeedbackId: action.votedFeedbackId,
        allFeedbacks: action.payload,
      };
    case "feedback/edit":
      return { ...state, allFeedbacks: action.payload };
    case "feedback/delete":
      return { ...state, allFeedbacks: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function FeedbacksProvider({ children }: { children: ReactNode }) {
  const [
    { currentUser, allFeedbacks, currentFeedback, votedFeedbackId },
    dispatch,
  ] = useReducer<
    (state: initialStateType, action: ActionType) => initialStateType
  >(reducer, initialState);

  const getFeedback = useCallback(
    (id: string) => {
      const feedback = allFeedbacks.find(
        (request: FeedbackType) => request.id === Number(id),
      );
      if (feedback) {
        dispatch({ type: "currentFeedback/set", payload: feedback });
      }
    },
    [allFeedbacks],
  );

  function addVote(id: number) {
    const newVote = allFeedbacks.map((request: FeedbackType) => {
      if (Number(id) === request.id) {
        return {
          ...request,
          upvotes: (request.upvotes += 1),
        };
      }
      return request;
    });
    dispatch({
      type: "feedback/addVote",
      payload: newVote,
      votedFeedbackId: [...votedFeedbackId, id],
    });
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

  function addReply(newReply: Reply, commentId: number, id: number) {
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

  function createFeedback(newFeedback: FeedbackType) {
    dispatch({
      type: "feedback/create",
      payload: [...allFeedbacks, newFeedback],
    });
  }

  function editFeedback(feedback: FeedbackType) {
    const editedFeedbacks = allFeedbacks.map((request: FeedbackType) => {
      if (request.id === feedback.id) {
        return feedback;
      }
      return request;
    });
    dispatch({
      type: "feedback/edit",
      payload: editedFeedbacks,
    });
  }

  function deleteFeedback(id: number) {
    const filteredFeedbacks = allFeedbacks.filter((feedback: FeedbackType) => {
      return feedback.id !== id;
    });
    dispatch({ type: "feedback/delete", payload: filteredFeedbacks });
  }

  return (
    <FeedbacksContext.Provider
      value={{
        currentUser,
        allFeedbacks,
        currentFeedback,
        votedFeedbackId,
        dispatch,
        addVote,
        getFeedback,
        addComment,
        addReply,
        createFeedback,
        editFeedback,
        deleteFeedback,
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
