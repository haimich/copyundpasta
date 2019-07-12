
export interface Comment {
  id?: number;
  slug?: string;
  parentCommentId?: number;
  content: string;
  author: string;
  email?: string;
  children?: Comment[];
  createdAt?: string;
  modifiedAt?: string;
}
