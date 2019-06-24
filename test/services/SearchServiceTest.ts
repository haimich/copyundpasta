import SearchService from "@/services/SearchService";

describe('search', () => {
    test('should return 0', async () => {
        let res = await SearchService.search('beast')
        console.log(res.hits.hits)

    });


});
