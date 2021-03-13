export class Product {
    constructor (
        public readonly id: string,
        public readonly title: string,
        public readonly description: string,
        public readonly price: number,
        public readonly category: string
    ) { }
}

export interface ProductInputDTO {
    title: string,
    description: string,
    price: number,
    category: string
}