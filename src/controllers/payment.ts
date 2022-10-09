import { Plan } from "../entities/Plan";
import { User } from "../entities/User";


export class paymantController {
    public paymant(user:User,plan:Plan){
        if(user.getCurrentCredits() >= plan.getMonto()){
            user.setCurrentCredits(user.getCurrentCredits() - plan.getMonto());
             this.sendEmail(user, plan.getMonto())
            return true;
        }
        console.log( `insufficient credit: ${user.getCurrentCredits()}`);
        
        return false;
    }

    public sendEmail(user:User, monto:number){
        // MANDAR MAIL DE CONFIRMACION POR EJEMPLO:
        console.log(`Mail enviado a ${user.getEmail()} con el monto de ${monto}`);
    }

}