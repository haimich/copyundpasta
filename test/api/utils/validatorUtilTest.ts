import { validateId, validatePagingParams } from "@/api/utils/validatorUtil";

describe('validateId', () => {
  test('should allow integer', () => {
    validateId({
      id: 123,
    });
  });

  test('should throw error on negative integer', () => {
    expect(() => {
      validateId({
        id: -123,
      });
    }).toThrow();
  });

  test('should throw error on string', () => {
    expect(() => {
      validateId({
        id: "abc",
      });
    }).toThrow();
  });
});

describe('validatePagingParams', () => {
  test('should validate', () => {
    validatePagingParams({
      page: 5,
      pageSize: 10,
    });
  });

  test('should throw error on negative integer', () => {
    expect(() => {
      validatePagingParams({
        page: 5,
        pageSize: -1,
      });
    }).toThrow();
  });

  test('should throw error if param is missing', () => {
    expect(() => {
      validateId({
        page: 0,
        pageSizzle: 21
      });
    }).toThrow();

    expect(() => {
      validateId({
        pageant: 0,
        pageSize: 21
      });
    }).toThrow();
  });
});