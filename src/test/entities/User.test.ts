
import { userMock } from "../mock/data";


describe('user', () => {
    test('should return a user', () => {
        expect(userMock).not.toBe(null);
    });
    test('should return the current credits', () => {
        expect(userMock.getCurrentCredits()).toBe(100);
    });
    test('should return the mood', () => {
        expect(userMock.getMood()).toBe('triste');
    });
    test('should return the email', () => {
        expect(userMock.getEmail()).toBe('test@test.com');
    });
});