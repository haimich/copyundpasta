import StatsRepo from "@/api/db/StatsRepo";
import uniqid from "uniqid";

describe('countUniqueView', () => {
    test('should count view', async () => {
        await StatsRepo.countUniqueView("articles", "baileys-213", uniqid());
    });
});
