import ArticleCategories from "../../interfaces/ArticleCategories";
import { Article } from "../../interfaces/Article";

const createdAt = "2019-10-12 21:00:01";

const article: Article = {
  slug: "zimtschnecken-aka-cinnamon-rolls",
  title: "Zimtschnecken aka Cinnamon Rolls",
  categoryId: ArticleCategories.rezepte.id,
  isHeroArticle: false,
  shortDescription: "Mit diesen Zimtschnecken werden Kindheitserinnerungen wahr",
  previewImageUrl: "/images/articles/zimtschnecken-aka-cinnamon-rolls/main.jpg",
  mainImageUrl: "/images/articles/zimtschnecken-aka-cinnamon-rolls/main.jpg",
  createdAt,
  modifiedAt: createdAt,
};

export default article;