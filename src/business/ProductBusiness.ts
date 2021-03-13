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

    public editProduct = async (
        productId: string,
        input: ProductInputDTO
    ): Promise<void> => {
        try {

            if (!input.title && !input.description && !input.price && !input.category) {
                throw new Error(`Please inform at least on property to update`);
            }

            input.price && this.validator.checkIfIsNumber(input.price);

            const productFromDB: Product = await this.productsDatabase.selectProductById(productId);

            if (!productFromDB) {
                throw new Error(`Product not found`);
            }

            const product: Product = new Product(
                productFromDB.id,
                input.title || productFromDB.title,
                input.description || productFromDB.description,
                input.price || productFromDB.price,
                input.category || productFromDB.category
            );

            await this.productsDatabase.updateProduct(productId, product);

        } catch (error) {
            throw new Error(error.message);
        }
    }

    public removeProduct = async (
        productId: string
    ): Promise<void> => {
        try {
            this.validator.validateProperties(productId);

            const productFromDB: Product = await this.productsDatabase.selectProductById(productId);

            if (!productFromDB) {
                throw new Error(`Product not found`);
            }

            await this.productsDatabase.deleteProduct(productId);

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

    public getAllProducts = async () : Promise<Product[]> => {
        try {
            const products: Product[] = await this.productsDatabase.selectAllProducts();

            return products;

        } catch (error) {
            throw new Error(error.message);
        }
    }

    public getProductsByNameOrCategory = async (
        name: string,
        category: string
    ): Promise<Product[]> => {
        try {
            if (!name && !category) {
                throw new Error(`At least one of query params must be informed: 'name' or 'category'`);
            }

            const products: Product[] = await this.productsDatabase
                .selectProductsByNameOrCategory(name, category);

            if (products && products.length === 0) {
                throw new Error(`No products has matched the params`);
            }   

            return products;

        } catch (error) {
            throw new Error(error.message);
        }
    }
}