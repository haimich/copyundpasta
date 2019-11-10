import { Article } from "../../interfaces/Article";
import { ARTICLE_CATEGORIES } from "../categories/ArticleCategories";

const createdAt = "2019-10-20 23:25:01";
const slug = "zimtschnecken-aka-cinnamon-rolls";

const article: Article = {
  slug,
  title: "Zimtschnecken aka Cinnamon Rolls",
  categoryId: ARTICLE_CATEGORIES.rezepte.id,
  isHeroArticle: true,
  shortDescription: `Bei diesen Zimtschnecken werden Kindheitserinnerungen wach: ein feiner Zimtgeruch durchströmt beim Backen eure Wohnung und der Geschmack ist unwiderstehlich. Das Beste an diesem Rezept ist aber die Größe: Die Zimtschnecken passen perfekt in Muffinförmchen rein und bringen so Abwechslung bei eurem nächsten Kaffeeklatsch.`,
  mainImageUrl: `/images/articles/${slug}/main.jpg`,
  previewImageUrl: `/images/articles/${slug}/preview.jpg`,
  wideImageUrl: `/images/articles/${slug}/wide.jpg`,
  createdAt,
  modifiedAt: createdAt,
};

export default article;