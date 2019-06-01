import {getRecipe} from "@/api/repos/recipeRepo";
import knexfile from "/Users/CrisMich/Desktop/dev/copyundpasta/knexfile";

console.log("arsch");

describe('getRecipes', () => {
    test('should return newest recipes', async () => {
        let recipe = await getRecipe(1);

        expect(recipe.id).toBe(1);
    });
    
})
