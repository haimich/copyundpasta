import ArticleCategories from "../../interfaces/ArticleCategories";
import { Article } from "../../interfaces/Article";

const createdAt = "2019-06-10 08:10:28";

const article: Article = {
  slug: "oma-hildas-dampfnudeln",
  title: "Oma Hilda's Dampfnudeln",
  categoryId: ArticleCategories.herzhaft.id,
  isHeroArticle: false,
  shortDescription: "Das ist die Kurzbeschreibung, die im eigentlichen Artikel nicht angezeigt wird.",
  previewImageUrl: "/images/articles/oma-hildas-dampfnudeln/cover.jpg",
  createdAt,
  modifiedAt: createdAt,
};

export default article;