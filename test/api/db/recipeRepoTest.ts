import RecipeRepo from "@/api/db/recipeRepo";
import uniqid from "uniqid";

describe('getRecipes', () => {
    test('should return newest recipes', async () => {
        let recipe = await RecipeRepo.getRecipe("baileys-chocolate-cupcakes");

        console.log(recipe);

        

        expect(recipe.slug).toBeDefined();
    });
})

describe('rateRecipe', () => {
    test('should persist rating', async () => {
        await RecipeRepo.rateRecipe("baileys-chocolate-cupcakes", 4, uniqid());
    });
})
