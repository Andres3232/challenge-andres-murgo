import { RecomendationController } from "../controllers/recomendation"
import { Product } from "../entities/Product";
import { User } from "../entities/User";
import { DateUtil } from '../helpers/DateUtil';

const user = new User({
    currentCredits: 100,
    email: 'test@test.com',
    id: '1',
    mood: 'triste',
    password: '1234',
    productList: [],
    userName: 'pepe'
});

const productOne = new Product({
    id: 1,
    name: 'test',
    releaseDate: new Date('2020-01-01'),
    description: 'test',
    category: 'movie',
    long: 160,
    seassons: null,
    awards: ['test'],

});
const productTwo = new Product({
    id: 2,
    name: 'test',
    releaseDate: new Date('2020-01-01'),
    description: 'test',
    category: 'series',
    long: 120,
    seassons: 5,
    awards: ['test']
});

const productList = [productOne, productTwo];
describe('Recomendation', () => {
    test('should return a recomendation', async () => {
        const recomendation = new RecomendationController(new DateUtil());
        const recomendationResult = await recomendation.recomendation(user, productList)
        console.log(recomendationResult);
        
        expect(recomendationResult).not.toBe(null)
        expect(recomendationResult[0]).toEqual(productOne)
    }
    )
})