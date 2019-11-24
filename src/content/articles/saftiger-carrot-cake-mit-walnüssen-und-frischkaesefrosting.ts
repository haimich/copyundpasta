import { Article } from "../../interfaces/Article";
import { ARTICLE_CATEGORIES } from "../categories/ArticleCategories";

const createdAt = "2019-11-24 22:00:01";
const slug = "saftiger-carrot-cake-mit-walnüssen-und-frischkaesefrosting";

const article: Article = {
  slug,
  title: "Saftiger Carrot Cake mit Walnüssen und Frischkäsefrosting",
  categoryId: ARTICLE_CATEGORIES.rezepte.id,
  isHeroArticle: false,
  shortDescription: `Beim Thema Carrot Cake denken viele an Starbucks, denn die amerikanische Kaffeehauskette hat hier echt einen Standard in Sachen Geschmack geschaffen. Dieses Rezept kommt sehr nah an das Original heran und ist gar nicht schwer nachzubacken Spart euch den Weg in die City und holt die Backform aus dem Schrank!`,
  mainImageUrl: `/images/articles/${slug}/main.jpg`,
  previewImageUrl: `/images/articles/${slug}/preview.jpg`,
  createdAt,
  modifiedAt: createdAt,
};

export default article;