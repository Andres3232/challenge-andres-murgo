import {  UserProperties } from "../interfaces/user-interface";
import { Product } from './Product';


export class User {
    constructor(
        private readonly userProperties: UserProperties,
    ) { }

    public getCurrentCredits() {
        return this.userProperties.currentCredits;
    }

    public setCurrentCredits(currentCredits: number): void {
        this.userProperties.currentCredits = currentCredits;
    }

    public getMood(): string {
        return this.userProperties.mood;
    }

    public setMood(mood: 'triste' | 'melancolico' | 'contento') {
        this.userProperties.mood = mood;
    }

    public getProductList(): Product[] {
        return this.userProperties.productList;
    }

    public setProductList(productList: Product[]): void {
        this.userProperties.productList = productList;
    }
    public getEmail(): string {
        return this.userProperties.email;
    }

    public setEmail(mail: string): void {
        this.userProperties.email = mail;
    }

    public isInterested(product: Product): boolean {
        if (product.isInterested() ) {
            return true;
        }
        return false;
    }


}