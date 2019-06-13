export interface ArticleComment {
  id: number;
  parentCommentId: number;
  content: string;
  email?: string;
  author: string;
  avatarUrl?: string;
}

export interface Article {
  slug: string;
  isHeroArticle?: boolean;
  title: string;
  shortDescription: string;
  previewImageUrl: string;
  comments?: ArticleComment[],
  createdAt: string;
  modifiedAt: string;
  totalCount?: number;
}