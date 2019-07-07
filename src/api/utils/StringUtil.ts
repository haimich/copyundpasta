import crypto from "crypto";

export default class StringUtil {

  public static generateHashWithDate(ip): string {
    let now = new Date();
    let dateStr = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;

    let key = dateStr + "_" + ip;

    return crypto.createHash('md5').update(key).digest("hex");
  }

}