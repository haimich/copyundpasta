import RecipeRepo from "@/api/db/recipeRepo";
import uniqid from "uniqid";

describe('getRecipes', () => {
    test('should return newest recipes', async () => {
        let recipe = await RecipeRepo.getRecipe("baileys-chocolate-cupcakes");

        // console.log(recipe);

        expect(recipe.slug).toBeDefined();
    });
});

describe('getRating', () => {
    test('should return average', async () => {
        let rating = await RecipeRepo.getRating("baileys-chocolate-cupcakes");

        // console.log(rating);

        expect(rating.average).toBeGreaterThanOrEqual(0);
        expect(rating.average).toBeLessThanOrEqual(5);

        expect(rating.numRatings).toBeGreaterThanOrEqual(1);
    });
})

describe('rateRecipe', () => {
    test('should persist rating', async () => {
        await RecipeRepo.rateRecipe("baileys-chocolate-cupcakes", 4, uniqid());
    });
});
