

export class DateUtil {
    static calculateReleaseDate(arg0: Date, arg1: string) {
        throw new Error('Method not implemented.');
    }

    public calculateReleaseDate( releaseDate:Date, mood:string ){
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const actualDate = new Date(year,month,day);
        const difference = actualDate.getTime() - releaseDate.getTime();
        const days = Math.floor(difference / (1000 * 3600 * 24));
        if(mood === 'melancolico' && days > 3650){
            return true;
        }
        return false;
    }
}