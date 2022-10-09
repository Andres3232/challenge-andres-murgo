import { Plan } from "../../entities/Plan";
import { Product } from "../../entities/Product";
import { User } from "../../entities/User";


export const userMock = new User({
    currentCredits: 100,
    email: 'test@test.com',
    id: '1',
    mood: 'triste',
    password: '1234',
    productList: [],
    userName: 'pepe'
});

export const productMock = new Product({
    id: 1,
    name: 'test',
    releaseDate: new Date('2020-01-01'),
    description: 'test',
    category: 'movie',
    long: 160,
    seassons: null,
    awards: ['test'],
});
export const productTwoMock = new Product({
    id: 2,
    name: 'test',
    releaseDate: new Date('2020-01-01'),
    description: 'test',
    category: 'series',
    long: 120,
    seassons: 5,
    awards: ['test']
});

export const planMock = new Plan(1000);



