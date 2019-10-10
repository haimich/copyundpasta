import ArticleCategories from "../../interfaces/ArticleCategories";
import { Article } from "../../interfaces/Article";

const createdAt = "2019-10-12 21:00:00";

const article: Article = {
  slug: "hello-world",
  title: "Hello World :)",
  categoryId: ArticleCategories.artikel.id,
  isHeroArticle: false,
  shortDescription: `“Hello World” - das sind typischerweise die ersten Worte, die man von einer selbst geschriebenen Software ausgeben lässt, wenn man eine neue Programmiersprache lernt. 

  Auf die gleiche Weise möchte ich euch heute gerne auf meinem neuen Foodblog “Copy & Pasta” willkommen heißen! In diesem Artikel möchte ich euch erzählen, wie es zu der Idee gekommen ist, wie der Name entstand und was euch auf diesem Blog thematisch erwartet.`,
  previewImageUrl: "/images/articles/hello-world/cover.jpg",
  createdAt,
  modifiedAt: createdAt,
};

export default article;