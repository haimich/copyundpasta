import { Comment } from "./Comment";

export interface Article {
  slug: string;
  title: string;
  categoryId: string;
  isHeroArticle?: boolean;
  shortDescription: string;
  previewImageUrl: string;
  mainImageUrl: string;
  comments?: Comment[],
  createdAt: string;
  modifiedAt: string;
  totalCount?: number;
}