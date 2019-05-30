import {getRecipe} from "@/api/repos/recipeRepo";

describe('getRecipes', () => {
    test('should return newest recipes', async () => {
        const knex = require("knex")({
            client: "mysql",
            connection: {
              host : "127.0.0.1",
              user : "haimich",
              password : "haimich",
              database : "haimich"
            }
        });

        let recipe = await getRecipe(knex, 1);

        expect(recipe.id).toBe(1);
    });
    
})
