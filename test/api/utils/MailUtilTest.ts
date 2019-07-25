import MailUtil from "@/api/utils/MailUtil";

describe('sendMail', () => {
  test.skip('should send a mail', async () => {
    await MailUtil.sendMail("subject", "content");
  });
});
