
import { productMock } from "../mock/data";

describe('Product', () => {
    test('should return a product', () => {
        expect(productMock).not.toBe(null);
    });
    test('should return the id', () => {
        expect(productMock.getId()).toBe(1);
    });
    test('should return the name', () => {
        expect(productMock.getName()).toBe('test');
    });
    test('should return the release date', () => {
        expect(productMock.getReleaseDate()).toEqual(new Date('2020-01-01'));
    });
    test('should return the description', () => {
        expect(productMock.getDescription()).toBe('test');
    });
    test('should return the category', () => {
        expect(productMock.getCategory()).toBe('movie');
    });
    test('should return the long', () => {
        expect(productMock.getLong()).toBe(160);
    });
    test('should return the seassons', () => {
        expect(productMock.getSeassons()).toBe(null);
    });
    test('should return the awards', () => {
        expect(productMock.getAwards()).toEqual(['test']);
    });
});