import { ProductProperties } from "../interfaces/product-interface";


export class Product {


    constructor(
        private readonly productProperties: ProductProperties,
    ) { }

    public getId(): number {
        return this.productProperties.id
    }
    public getName(): string {
        return this.productProperties.name
    }

    public getCategory(): string {
        return this.productProperties.category
    }

    public getReleaseDate(): Date {
        return this.productProperties.releaseDate
    }

    public setReleaseDate(releaseDate: Date): void {
        this.productProperties.releaseDate = releaseDate
    }

    public getAwards(): string[] {
        return this.productProperties.awards
    }

    public setAwards(awards: string[]): void {
        this.productProperties.awards = awards
    }

    public getSeassons(): number | null {
        return this.productProperties.seassons
    }

    public setSeasons(seasons: number): void {
        this.productProperties.seassons = seasons
    }


    public getLong(): number {
        return this.productProperties.long
    }

    public getDescription(): string {
        return this.productProperties.description
    }



    public async isInterested() {

        if (this.productProperties.category === 'movie' && this.productProperties.awards.length > 0) {
            return true
        } else if (this.productProperties.category === 'series' && this.productProperties.seassons > 4) {
            return true
        }
        else if (this.productProperties.category === 'documental' && this.productProperties.name.includes('unofficial')) {
            return true
        }
        return false

    }



}
    