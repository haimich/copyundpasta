import ArticleCategories from "../../interfaces/ArticleCategories";
import { Article } from "../../interfaces/Article";

const createdAt = "2019-10-12 21:00:00";

const article: Article = {
  slug: "zimtschnecken-aka-cinnamon-rolls",
  title: "Zimtschnecken aka Cinnamon Rolls",
  categoryId: ArticleCategories.rezept.id,
  isHeroArticle: false,
  shortDescription: "TODO",
  previewImageUrl: "/images/articles/zimtschnecken-aka-cinnamon-rolls/cover.jpg",
  createdAt,
  modifiedAt: createdAt,
};

export default article;