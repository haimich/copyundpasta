import { Article } from "../../interfaces/Article";
import { ARTICLE_CATEGORIES } from "../categories/ArticleCategories";

const createdAt = "2019-10-12 21:00:00";
const slug = "hello-world";

const article: Article = {
  slug,
  title: "Hello World :)",
  categoryId: ARTICLE_CATEGORIES.allgemeines.id,
  isHeroArticle: false,
  shortDescription: `“Hello World” - das sind typischerweise die ersten Worte, die man von einer selbst geschriebenen Software ausgeben lässt, wenn man eine neue Programmiersprache lernt. 

  Auf die gleiche Weise möchte ich euch heute gerne auf meinem neuen Foodblog “Copy & Pasta” willkommen heißen! In diesem Artikel möchte ich euch erzählen, wie es zu der Idee gekommen ist, wie der Name entstand und was euch auf diesem Blog thematisch erwartet.`,
  mainImageUrl: `/images/articles/${slug}/main.jpg`,
  previewImageUrl: `/images/articles/${slug}/preview.jpg`,
  createdAt,
  modifiedAt: createdAt,
};

export default article;