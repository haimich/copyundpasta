import ExpressUtil from "./utils/ExpressUtil";
import StringUtil from "./utils/StringUtil";
import ValidatorUtil from "./utils/ValidatorUtil";
import StatsRepo from "./db/StatsRepo";

let app = ExpressUtil.setupExpress();

/**
 * Configure routes
 * - prefix is "/api/stats/"
 */

app.post("/count", async (req, res) => {
  console.log("stats.count()");

  // validate params
  let type, entityId;

  try {
    type = ValidatorUtil.validateStatsType(req.body);
    entityId = ValidatorUtil.validateStatsEntityId(req.body);
  } catch (err) {
    console.error(err);

    return res.status(406).send(err.message);
  }

  // create unique identifier to prevent duplicate ratings
  const ip = ExpressUtil.getIp(req);
  const uniqueIdentifier = StringUtil.generateHashWithDate(ip);

  try {
    StatsRepo.countUniqueView(type, entityId, uniqueIdentifier);
  } catch (error) {
    // ignore
    console.log(error);
  }

  return res.sendStatus(200);
});


export default app;