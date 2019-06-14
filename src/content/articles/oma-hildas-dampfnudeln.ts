import ArticleCategories from "../../interfaces/ArticleCategories";
import { Article } from "../../interfaces/Article";

const createdAt = "2019-06-10 08:10:28";

const article: Article = {
  title: "Oma Hilda's Dampfnudeln",
  slug: "oma-hildas-dampfnudeln",
  isHeroArticle: false,
  shortDescription: "Das ist die Kurzbeschreibung, die im eigentlichen Artikel nicht angezeigt wird.",
  previewImageUrl: "/images/articles/oma-hildas-dampfnudeln/cover.jpg",
  createdAt,
  modifiedAt: createdAt,
};

export default article;