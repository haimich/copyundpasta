import ArticleCategories from "../../interfaces/ArticleCategories";
import { Article } from "../../interfaces/Article";

const createdAt = "2019-10-27 21:00:00";

const article: Article = {
  slug: "one-pot-pasta-mit-leckerer-tomatensauce",
  title: "One Pot Pasta mit leckerer Tomatensauce",
  categoryId: ArticleCategories.rezepte.id,
  isHeroArticle: false,
  mainImageUrl: "/images/articles/one-pot-pasta-mit-leckerer-tomatensauce/main.jpg",
  shortDescription: `Als ich vor vielen Jahren zum ersten Mal eine One Pot Pasta zubereitet habe, war ich begeistert von der sämigen Konsistenz der Sauce.`,
  previewImageUrl: "/images/articles/one-pot-pasta-mit-leckerer-tomatensauce/preview.jpg",
  createdAt,
  modifiedAt: createdAt,
};

export default article;