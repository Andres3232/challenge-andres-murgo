import { paymantController } from "../../controllers/payment";
import { planMock, userMock } from "../mock/data";

describe('Payment', () => {

    test('should return a paymant false', () => {
        const payment = new paymantController();
        const result = payment.paymant(userMock,planMock);
        expect(result).toBe(false);
    });

});


