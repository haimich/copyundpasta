import { Recipe, RecipeIngredient, IngredientUnit } from "@/interfaces/Recipe";
import NumberUtil from "@/utils/NumberUtil";
import { $n } from "@/filters/numberFilter";

export default class RecipeUtil {

  public static formatServings(recipe: Recipe, servingsMultiplier = 1): string {
    if (recipe == null || recipe.servings == null) {
      return "";
    }

    let amount = recipe.servings.amount * servingsMultiplier;
    let unit = recipe.servings.unit.name;

    return amount + " " + unit;
  }

  public static formatIngredient(ingredient: RecipeIngredient, servingsMultiplier = 1): string {
    let actualAmount = ingredient.amount * servingsMultiplier;

    let amount = RecipeUtil.formatAmount(ingredient, servingsMultiplier);
    let preparation = ingredient.preparation != null ? ", " + ingredient.preparation.name : "";
    let ingredientName = RecipeUtil.formatIngredientName(ingredient)
    let description = "";
    let unit = RecipeUtil.formatUnit(ingredient.unit);
    let unitBeforeIngredient = false;

    if (ingredient.unit != null && ingredient.unit.id === "einige") {
      unitBeforeIngredient = true;
    }

    if (ingredient.description != null && ingredient.description !== "") {
      description = " " + ingredient.description;
    }

    if (unitBeforeIngredient) {
      return `${unit} ${amount} ${ingredientName}${description}${preparation}`
    } else {
      return `${amount} ${unit} ${ingredientName}${description}${preparation}`
    }
  }

  public static formatAmount(ingredient: RecipeIngredient, servingsMultiplier = 1): string {
    if (NumberUtil.isNumberDefined(ingredient.amount)) {
      let amount = ingredient.amount * servingsMultiplier;

      if (amount === 0.25) {
        return "&frac14;";
      } else if (amount === 0.5) {
        return "&frac12;";
      } else if (amount === 0.75) {
        return "&frac34;";
      } else if (amount === 1.5) {
        return "1 &frac12;";
      } else {
        // just format the number nicely
        return $n(amount);
      }
    } else if (NumberUtil.isNumberDefined(ingredient.amountFrom) && NumberUtil.isNumberDefined(ingredient.amountTo)) {
      let amountFrom = ingredient.amountFrom * servingsMultiplier;
      let amountTo = ingredient.amountTo * servingsMultiplier;

      return $n(amountFrom) + "‐" + $n(amountTo);
    } else {
      return "";
    }
  }

  public static formatUnit(unit: IngredientUnit) {
    console.log(unit)
    if (unit == null || unit.id == null) {
      return "";
    } else if (unit.namePlural != null) {
      return unit.namePlural;
    } else {
      return unit.name
    }
  }

  public static formatIngredientName(entry: RecipeIngredient): string {
    if (entry == null || entry.ingredient == null) {
      return "";
    }

    if ((NumberUtil.isNumberDefined(entry.amount) && entry.amount >= 2) ||
        (NumberUtil.isNumberDefined(entry.amountFrom) && NumberUtil.isNumberDefined(entry.amountTo))) {
      if (entry.ingredient.namePlural != null) {
        return entry.ingredient.namePlural;
      } else {
        return entry.ingredient.name;
      }
    } else {
      return entry.ingredient.name;
    }
  }

}