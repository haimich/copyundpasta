
export interface CommentWithChallenge {
  comment: Comment;
  recaptchaChallenge: string;
}

export interface Comment {
  id?: number;
  slug?: string;
  parentCommentId?: number;
  content: string;
  author: string;
  website?: string;
  children?: Comment[];
  createdAt?: string;
  modifiedAt?: string;
}
