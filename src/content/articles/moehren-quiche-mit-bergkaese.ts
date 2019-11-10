import { Article } from "../../interfaces/Article";
import { ARTICLE_CATEGORIES } from "../categories/ArticleCategories";

const createdAt = "2019-11-10 23:00:00";
const slug = "moehren-quiche-mit-bergkaese";

const article: Article = {
  slug,
  title: "Möhren-Quiche mit Bergkäse",
  categoryId: ARTICLE_CATEGORIES.rezepte.id,
  isHeroArticle: true,
  shortDescription: `...`,
  mainImageUrl: `/images/articles/${slug}/main.jpg`,
  previewImageUrl: `/images/articles/${slug}/preview.jpg`,
  createdAt,
  modifiedAt: createdAt,
};

export default article;