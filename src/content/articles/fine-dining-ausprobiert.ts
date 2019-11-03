import { Article } from "../../interfaces/Article";
import { ARTICLE_CATEGORIES } from "../categories/ArticleCategories";

const createdAt = "2019-11-01 20:00:00";
const slug = "fine-dining-ausprobiert";

// mein Ausflug in die Sterneküche (man versteht nicht, dass es nur ums selber Essen ging)
// (Mein) Besuch in einem Sternerestaurant: das Restaurant "Showroom" in München

const article: Article = {
  slug,
  title: `Fine Dining ausprobiert: das Restaurant "Showroom" in München`,
  categoryId: ARTICLE_CATEGORIES.allgemeines.id,
  isHeroArticle: false,
  shortDescription: `...`,
  mainImageUrl: `/images/articles/${slug}/main.jpg`,
  previewImageUrl: `/images/articles/${slug}/preview.jpg`,
  createdAt,
  modifiedAt: createdAt,
};

export default article;