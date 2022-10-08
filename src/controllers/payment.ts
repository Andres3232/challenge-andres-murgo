import { Plan } from "../entities/Plan";
import { User } from "../entities/User";


class paymantController {
    public paymant(user:User,plan:Plan){
        if(user.getCurrentCredits() >= plan.getMonto()){
            user.setCurrentCredits(user.getCurrentCredits() - plan.getMonto());
            // MANDAR MAIL DE CONFIRMACION POR EJEMPLO:
            // sendMail(user, plan.getMonto())
            //que sea una funncion q recibe como parametro el usuario y el monto y le dig usuario tanto se debitaron tantos creditos y le quedan tato
            return true;
        }
        console.log('insufficient credit');
        
        return false;
    }

}