import { productsData } from "../constants/product-data"

export const  ProductDAO = {


    getAllByReleaseDate: async ( year :number, operation :'equal' | 'greater' | 'lower' ) => {
        // aquí deberíamos obtener la información desde una base de datos

        const products = await productsData

        switch (operation) {
            case "equal":
                return products.filter(product => +product.releaseDate.split("-")[0] === year)
                break;
        
            case "greater":
                return products.filter(product => +product.releaseDate.split("-")[0] >= year)
                break;

            case "lower":
                return products.filter(product => +product.releaseDate.split("-")[0] <= year)
                break;

            default:
                break;
        }

    },

    getById: async ( id:number ) => {

        // aquí deberíamos obtener la información desde una base de datos filtrando por award
        const product = await productsData.filter(product => product.id === id)

        return  product[0] 

    },

    

    getAllByExtension: async ( long :number, operation :'equal' | 'greater' | 'lower' ) => {
        // aquí deberíamos obtener la información desde una base de datos

        const products = await productsData

        switch (operation) {
            case "equal":
                return products.filter(product => product.long === long)
                break;
        
            case "greater":
                return products.filter(product => product.long >= long)
                break;

            case "lower":
                return products.filter(product => product.long <= long)
                break;

            default:
                break;
        }

    },

    getRandomProducts: async (quantity :number) => {

        // aquí deberíamos obtener la información desde una base de datos
        const products = await productsData

        let arrayRandom = []
        
        for (let i:number; i <= quantity; i++){
            let randomNumber = Math.floor(Math.random()*quantity)
            arrayRandom.push(randomNumber)
        }

        return arrayRandom.map(indexRandom => products[indexRandom])

    }

}

