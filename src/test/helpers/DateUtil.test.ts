import { DateUtil } from "../../helpers/DateUtil";

describe('DateUtil', () => {
    test('should return true if the release date is greater than 10 years', () => {
        const dateUtil = new DateUtil();
        const releaseDate = new Date('2000-01-01');
        const mood = 'melancolico';
        const result = dateUtil.calculateReleaseDate(releaseDate, mood);
        expect(result).toBe(true);
    });
    test('should return false if the release date is less than 10 years', () => {
        const dateUtil = new DateUtil();
        const releaseDate = new Date('2020-01-01');
        const mood = 'melancolico';
        const result = dateUtil.calculateReleaseDate(releaseDate, mood);
        expect(result).toBe(false);
    });
});