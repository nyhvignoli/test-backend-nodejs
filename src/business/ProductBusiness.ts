import { ProductsDatabase } from "../data/ProductsDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Validator } from "../services/Validator";
import { EditCategoryInputDTO, Product, ProductInputDTO } from "./entities/Product";

export class ProductBusiness {

    constructor (
        private idGenerator: IdGenerator,
        private validator: Validator,
        private productsDatabase: ProductsDatabase
    ) { }

    public createProduct = async (
        input: ProductInputDTO
    ): Promise<void> => {
        try {
            this.validator.validateProperties(input);
            this.validator.checkIfIsNumber(input.price);

            const product: Product = new Product(
                this.idGenerator.generate(),
                input.title,
                input.description,
                input.price,
                input.category
            );

            await this.productsDatabase.insertProduct(product);

        } catch (error) {
            throw new Error(error.message);
        }
    }

    public editCategory = async (
        input: EditCategoryInputDTO
    ): Promise<void> => {
        try {
            this.validator.validateProperties(input);

            await this.productsDatabase.updateCategory(input);

        } catch (error) {
            throw new Error(error.message);
        }
    }
}