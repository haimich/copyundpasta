import {validateId} from "@/api/utils/validatorUtil";

describe('validateId', () => {
    test('should allow integer', () => {
        validateId({
            id: 123,
        });
    })

    test('should throw error on negative integer', () => {
        expect(() => {
            validateId({
                id: -123,
            });
          }).toThrow();
    })

    test('should throw error on string', () => {
        expect(() => {
            validateId({
                id: "abc",
            });
          }).toThrow();
    })
})
