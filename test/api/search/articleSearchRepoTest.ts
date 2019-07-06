import { search } from "@/api/search/articleSearchRepo";

describe('search', () => {
    test('should return hits', async () => {
        try {
            let res = await search('oma')

            expect(res.statusCode).toBe(200);
            
            // console.log(res);
            // console.log(res.body.hits.hits);
        } catch (error) {
            console.log(error);
        }
    });
});
