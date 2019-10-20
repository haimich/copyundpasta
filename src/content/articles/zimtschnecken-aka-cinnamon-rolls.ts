import ArticleCategories from "../../interfaces/ArticleCategories";
import { Article } from "../../interfaces/Article";

const createdAt = "2019-10-20 23:25:01";

const article: Article = {
  slug: "zimtschnecken-aka-cinnamon-rolls",
  title: "Zimtschnecken aka Cinnamon Rolls",
  categoryId: ArticleCategories.rezepte.id,
  isHeroArticle: false,
  mainImageUrl: "/images/articles/zimtschnecken-aka-cinnamon-rolls/main.jpg",
  shortDescription: `Bei diesen Zimtschnecken werden Kindheitserinnerungen wach: ein feiner Zimtgeruch durchströmt beim Backen eure Wohnung und der Geschmack ist unwiderstehlich. Das Beste an diesem Rezept ist aber die Größe: Die Zimtschnecken passen perfekt in Muffinförmchen rein und bringen so Abwechslung an eurem nächsten Kaffeeklatsch.`,
  previewImageUrl: "/images/articles/zimtschnecken-aka-cinnamon-rolls/preview.jpg",
  createdAt,
  modifiedAt: createdAt,
};

export default article;