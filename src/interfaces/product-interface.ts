
export interface ProductProperties {
     id: number,
     name: string,
     releaseDate: Date,
     description: string,
     category:'movie' | 'series' | 'documental' ,
     long: number,
     seassons: number | null,
     awards: string[],
}