import { FeedbackType } from "./type";

interface SetCurrentFeedbackAction {
  type: "currentFeedback/set";
  payload: FeedbackType;
}

interface AddCommentAction {
  type: "feedback/newComment";
  payload: FeedbackType[];
}

interface AddReplyAction {
  type: "feedback/newReply";
  payload: FeedbackType[];
}

interface AddVoteAction {
  type: "feedback/addVote";
  payload: FeedbackType[];
  votedFeedbackId: number[];
}

interface CreateFeedbackAction {
  type: "feedback/create";
  payload: FeedbackType[];
}

interface EditFeedbackAction {
  type: "feedback/edit";
  payload: FeedbackType[];
}

interface DeleteFeedbackAction {
  type: "feedback/delete";
  payload: FeedbackType[];
}

export type ActionType =
  | SetCurrentFeedbackAction
  | AddCommentAction
  | AddReplyAction
  | AddVoteAction
  | CreateFeedbackAction
  | EditFeedbackAction
  | DeleteFeedbackAction;
