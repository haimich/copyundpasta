import { Article } from "../../interfaces/Article";
import { ARTICLE_CATEGORIES } from "../categories/ArticleCategories";

const createdAt = "2019-11-24 22:00:01";
const slug = "saftiger-carrot-cake-mit-walnüssen-und-frischkaesefrosting";

const article: Article = {
  slug,
  title: "Saftiger Carrot Cake mit Walnüssen und Frischkäsefrosting",
  categoryId: ARTICLE_CATEGORIES.rezepte.id,
  isHeroArticle: false,
  shortDescription: `...`,
  mainImageUrl: `/images/articles/${slug}/main.jpg`,
  previewImageUrl: `/images/articles/${slug}/preview.jpg`,
  wideImageUrl: `/images/articles/${slug}/wide.jpg`,
  createdAt,
  modifiedAt: createdAt,
};

export default article;