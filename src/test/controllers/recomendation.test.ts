import { RecomendationController } from "../../controllers/recomendation"
import { DateUtil } from '../../helpers/DateUtil';
import { productMock, productTwoMock, userMock } from "../mock/data";


const productList = [productMock, productTwoMock];
describe('Recomendation', () => {
    test('should return a recomendation', async () => {
        const recomendation = new RecomendationController(new DateUtil());
        const recomendationResult = await recomendation.recomendation(userMock, productList)

        expect(recomendationResult).not.toBe(null)
        expect(recomendationResult[0]).toEqual(productMock)
    });
})