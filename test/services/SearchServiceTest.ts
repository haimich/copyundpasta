import SearchService from "@/services/SearchService";

describe('searchArticles', () => {
    test('should return hits', async () => {
        try {
            let res = await SearchService.searchArticles('oma')

            console.log(res.body.hits.hits);

            expect(res.statusCode).toBe(200);
        } catch (error) {
            console.log(error);
        }
    });
});
