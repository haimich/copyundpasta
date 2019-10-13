import RecipeRepo from "@/api/db/RecipeRepo";
import uniqid from "uniqid";

// TODO activate
describe.skip('getRecipes', () => {
    test('should return newest recipes', async () => {
        let recipe = await RecipeRepo.getRecipe("zimtschnecken-aka-cinnamon-rolls");

        console.log(recipe);

        expect(recipe.slug).toBeDefined();
    });
});

// describe('getRating', () => {
//     test('should return average', async () => {
//         let rating = await RecipeRepo.getRating("zimtschnecken-aka-cinnamon-rolls");

//         // console.log(rating);

//         expect(rating.average).toBeGreaterThanOrEqual(0);
//         expect(rating.average).toBeLessThanOrEqual(5);

//         // expect(rating.numRatings).toBeGreaterThanOrEqual(1);
//     });
// })

// describe('rateRecipe', () => {
//     test('should persist rating', async () => {
//         await RecipeRepo.rateRecipe("zimtschnecken-aka-cinnamon-rolls", 4, uniqid());
//     });
// });
