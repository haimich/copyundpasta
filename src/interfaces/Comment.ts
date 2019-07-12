
export interface Comment {
  id?: number;
  articleSlug: string;
  parentCommentId?: number;
  content: string;
  author: string;
  email?: string;
  children?: Comment[];
  createdAt?: string;
  modifiedAt?: string;
}
