import {getRecipe} from "@/api/repos/recipeRepo";

describe('getRecipes', () => {
    test('should return newest recipes', async () => {
        let recipe = await getRecipe("baileys-chocolate-cupcakes");

        expect(recipe.slug).toBeDefined();
    });
    
})
