import { Article } from "../../interfaces/Article";
import { ARTICLE_CATEGORIES } from "../categories/ArticleCategories";

const createdAt = "2019-12-08 23:00:00";
const slug = "kuerbissuppe-mit-ingwer";

const article: Article = {
  slug,
  title: "Kürbissuppe mit Ingwer",
  categoryId: ARTICLE_CATEGORIES.rezepte.id,
  isHeroArticle: false,
  shortDescription: `Diese Suppe passt wunderbar in die kalte Jahreszeit und spendet euch nicht nur Wärme, sondern auch ein leckeres und gesundes Feierabendgericht, das schnell zubereitet ist. Die Kombination von Ingwer, Knoblauch und einem Schuss Orangensaft ist dabei ein Fest für die Geschmacksnerven!`,
  mainImageUrl: `/images/articles/${slug}/main.jpg`,
  previewImageUrl: `/images/articles/${slug}/preview.jpg`,
  wideImageUrl: `/images/articles/${slug}/wide.jpg`,
  createdAt,
  modifiedAt: createdAt,
};

export default article;