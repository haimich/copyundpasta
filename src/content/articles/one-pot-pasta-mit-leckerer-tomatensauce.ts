import { Article } from "../../interfaces/Article";
import { ARTICLE_CATEGORIES } from "../categories/ArticleCategories";

const createdAt = "2019-10-27 23:00:00";

const article: Article = {
  slug: "one-pot-pasta-mit-leckerer-tomatensauce",
  title: "One Pot Pasta mit leckerer Tomatensauce",
  categoryId: ARTICLE_CATEGORIES.rezepte.id,
  isHeroArticle: false,
  mainImageUrl: "/images/articles/one-pot-pasta-mit-leckerer-tomatensauce/main.jpg",
  shortDescription: `Vor vielen Jahren hat die Amerikanerin Martha Stewart mit ihrer One Pot Pasta einen Trend losgetreten, der bis heute anhält. Lest in diesem Artikel, wie ich das Originalrezept angepasst habe, um eine geschmacksintensivere Sauce mit einer wunderbar sämigen Konsistenz zu erhalten.`,
  previewImageUrl: "/images/articles/one-pot-pasta-mit-leckerer-tomatensauce/preview.jpg",
  createdAt,
  modifiedAt: createdAt,
};

export default article;