import { Article } from "../../interfaces/Article";
import { ARTICLE_CATEGORIES } from "../categories/ArticleCategories";

const createdAt = "2019-11-10 23:00:00";
const slug = "moehren-quiche-mit-bergkaese";

const article: Article = {
  slug,
  title: "Möhren-Quiche mit Bergkäse",
  categoryId: ARTICLE_CATEGORIES.rezepte.id,
  isHeroArticle: false,
  shortDescription: `Quiches zählen zu meinen absoluten Lieblingsgerichten, weil sie so wunderbar vielseitig und dabei auch noch richtig lecker sind. In diesem Artikel stelle ich euch eine tolle Möhren-Quiche vor, die ihr nach Belieben vegetarisch oder mit Speck zubereiten könnt. Das Gericht nimmt zwar etwas Zeit in Anspruch, aber der Aufwand lohnt sich!`,
  mainImageUrl: `/images/articles/${slug}/main.jpg`,
  previewImageUrl: `/images/articles/${slug}/preview.jpg`,
  wideImageUrl: `/images/articles/${slug}/wide.jpg`,
  createdAt,
  modifiedAt: createdAt,
};

export default article;