import { formatAsDate, formatAsDateWithTime } from "@/filters/dateFilter";

describe("formatAsDate", () => {
  test("should return date", () => {
    expect(formatAsDate("2019-07-13 19:33:26")).toEqual("13.07.2019");
  });
});

describe("formatAsDateWithTime", () => {
  test("should return date and time", () => {
    expect(formatAsDateWithTime("2019-07-13 19:04:26")).toEqual("13.07.2019 19:04 Uhr");
  });
});