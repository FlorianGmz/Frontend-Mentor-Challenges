export interface User {
  image: string;
  name: string;
  username: string;
}

export interface Comment {
  id: number;
  content: string;
  user: User;
  replies?: Reply[];
}

export interface Reply {
  content: string;
  replyingTo: string;
  user: User;
}

export interface FeedbackType {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: Comment[];
}

export interface AppData {
  data: { currentUser: User; productRequests: FeedbackType[] };
}
