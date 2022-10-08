import { Product } from '../entities/Product';
import { User } from '../entities/User';
import { DateUtil } from '../helpers/DateUtil';



export class RecomendationController {

    constructor(
        private readonly dateUtil: DateUtil,
    ) { }

    public recomendation(user: User,products: Product[]): Product[] {
        const recomendationList: Product[] = [];
        for (const product of products) {
            if (user.getMood() === 'triste' && this.recomendationTriste(product)) {
                recomendationList.push(product);
            } else if (user.getMood() === 'melancolico' && this.recomendationMelancolico(product)) {
                recomendationList.push(product);
            }else if(user.getMood() === 'contento' ){
                recomendationList.push(product);
            }
        }
        return recomendationList;
    }


    private recomendationTriste( product:Product ){
        if(product.getLong() > 120){
            return true;
        }
        return false;

    }

    private recomendationMelancolico( product:Product ){
        if(this.dateUtil.calculateReleaseDate(product.getReleaseDate(),'melancolico')){
            return true;
        }
        return false;
    }

}