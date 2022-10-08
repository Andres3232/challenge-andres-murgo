import { Product } from "../entities/Product"

export interface UserProperties {
     id: string,
     userName: string,
     email: string,
     password: string,
     currentCredits: number,
     mood: 'triste' | 'melancolico' | 'contento'
     productList: Product[]
}

export interface Mood {
     mood: 'triste' | 'melancolico' | 'contento'
}