
export interface ArticleComment {
  id?: number;
  articleSlug: string;
  parentCommentId?: number;
  content: string;
  author: string;
  email?: string;
  children?: ArticleComment[];
  createdAt?: string;
  modifiedAt?: string;
}

export interface Article {
  slug: string;
  title: string;
  categoryId: string;
  isHeroArticle?: boolean;
  shortDescription: string;
  previewImageUrl: string;
  comments?: ArticleComment[],
  createdAt: string;
  modifiedAt: string;
  totalCount?: number;
}