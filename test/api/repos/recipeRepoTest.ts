import { getRecipe, rateRecipe } from "@/api/repos/recipeRepo";
import uniqid from "uniqid";

describe('getRecipes', () => {
    test('should return newest recipes', async () => {
        let recipe = await getRecipe("baileys-chocolate-cupcakes");

        expect(recipe.slug).toBeDefined();
    });
})

describe('rateRecipe', () => {
    test('should persist rating', async () => {
        await rateRecipe("baileys-chocolate-cupcakes", 4, uniqid());
    });
})
