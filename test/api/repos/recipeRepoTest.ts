import {getRecipe} from "@/api/repos/recipeRepo";

describe('getRecipes', () => {
    test('should return newest recipes', async () => {
        let recipe = await getRecipe(1);

        expect(recipe.id).toBe(1);
    });
    
})
