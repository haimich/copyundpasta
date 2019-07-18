import KnexUtil from "../utils/KnexUtil";

export default class StatsRepo {

  public static async countUniqueView(type: string, entityId: string, uniqueIdentifier: string): Promise<void> {
    const knex = KnexUtil.getConnection();

    const entries = await knex
      .table("unique_views")
      .select("*")
      .where({
        "type": type,
        "entityId": entityId,
        "uniqueIdentifier": uniqueIdentifier,
      });

    if (entries == null || entries.length === 0) {
      await knex
        .insert({
          type,
          entityId,
          uniqueIdentifier,
        })
        .into("unique_views");
    }
  }
  
}
