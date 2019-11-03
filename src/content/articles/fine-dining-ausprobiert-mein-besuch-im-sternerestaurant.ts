import { Article } from "../../interfaces/Article";
import { ARTICLE_CATEGORIES } from "../categories/ArticleCategories";

const createdAt = "2019-11-01 20:00:00";
const slug = "fine-dining-ausprobiert-mein-besuch-im-sternerestaurant";

const article: Article = {
  slug,
  title: `Fine Dining ausprobiert: mein Besuch im Sternerestaurant`,
  categoryId: ARTICLE_CATEGORIES.allgemeines.id,
  isHeroArticle: false,
  shortDescription: `Ich habe schon lange den Wunsch gehabt, mal in einem echten Sternerestaurant essen zu gehen. Bisher hatten mich aber unter anderem die hohen Kosten abgeschreckt. Lest in diesem Artikel, wie ich mir den Wunsch am Ende doch noch erfüllt habe, welche Erfahrungen ich dabei gemacht habe und was der Abend am Ende gekostet hat :-)`,
  mainImageUrl: `/images/articles/${slug}/main.jpg`,
  previewImageUrl: `/images/articles/${slug}/preview.jpg`,
  createdAt,
  modifiedAt: createdAt,
};

export default article;