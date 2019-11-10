import { Comment } from "./Comment";

/* Article Categories */

export interface ArticleCategory {
  id: string;
  name: string;
  parentCategory?: string;
}

export interface ArticleCategories {
  [key: string]: ArticleCategory;
}

export interface AllArticleCategories {
  parentCategories: ArticleCategory[];
  childCategories: ArticleCategory[];
  categoriesById: ArticleCategories;
}

/* Article */

export interface Article {
  slug: string;
  title: string;
  categoryId: string;
  isHeroArticle?: boolean;
  shortDescription: string;
  mainImageUrl: string;
  previewImageUrl: string;
  wideImageUrl?: string;
  comments?: Comment[],
  createdAt: string;
  modifiedAt: string;
  totalCount?: number;
}