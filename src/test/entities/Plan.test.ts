import { planMock } from "../mock/data";


describe('Plan', () => {
    test('should return a plan', () => {
        expect(planMock).not.toBe(null);
    });
    test('should return the monto', () => {
        expect(planMock.getMonto()).toBe(1000);
    });

});
