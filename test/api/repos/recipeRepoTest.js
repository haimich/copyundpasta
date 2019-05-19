import {getRecipes} from "@/api/repos/recipeRepo";

describe('getRecipes', () => {
    test('should return newest recipes', async () => {
        let recipes = await getRecipes();

        console.log(recipes[0].a);
    })
})
