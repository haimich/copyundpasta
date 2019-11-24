import { Article } from "../../interfaces/Article";
import { ARTICLE_CATEGORIES } from "../categories/ArticleCategories";

const createdAt = "2019-11-24 22:00:01";
const slug = "saftiger-carrot-cake-mit-walnuessen-und-frischkaesefrosting";

const article: Article = {
  slug,
  title: "Saftiger Carrot Cake mit Walnüssen und Frischkäsefrosting",
  categoryId: ARTICLE_CATEGORIES.rezepte.id,
  isHeroArticle: false,
  shortDescription: `Beim Thema Carrot Cake denken viele an Starbucks, denn die amerikanische Kaffeehauskette hat hier einen regelrechten Standard in Sachen Geschmack geschaffen. Dieses Rezept kommt meiner Meinung nach sehr nah an das Original heran und ist dabei gar nicht schwer nachzubacken. Also holt die Backform aus dem Schrank und ladet eure Freunde einfach nach Hause ein! So erspart ihr euch auch, dass jemand euren Namen falsch auf einen Kaffeebecher kritzelt :)`,
  mainImageUrl: `/images/articles/${slug}/main.jpg`,
  previewImageUrl: `/images/articles/${slug}/preview.jpg`,
  createdAt,
  modifiedAt: createdAt,
};

export default article;