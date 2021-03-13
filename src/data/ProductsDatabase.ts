import { EditCategoryInputDTO, Product } from "../business/entities/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductsDatabase extends BaseDatabase {

    private static toProductModel = (product: any) : Product => {
        return product && new Product(
            product.id,
            product.title,
            product.description,
            product.price,
            product.category
        );
    }

    public insertProduct = async (
        product: Product
    ): Promise<void> => {
        try {
            await BaseDatabase.connection(BaseDatabase.PRODUCTS_TABLE)
                .insert({
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    price: product.price
                }); 
                
            await BaseDatabase.connection(BaseDatabase.CATEGORIES_TABLE)
                .insert({
                    category: product.category,
                    product_id: product.id
                });

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public updateCategory = async (
        data: EditCategoryInputDTO
    ): Promise<void> => {
        try {
            await BaseDatabase.connection(BaseDatabase.CATEGORIES_TABLE)
                .update({
                    category: data.category,
                    product_id: data.productId
                })
                .where("product_id", data.productId);

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public selectAllProducts = async () : Promise<Product[]> => {
        try {
            const result = await BaseDatabase.connection(BaseDatabase.PRODUCTS_TABLE)
                .join(
                    BaseDatabase.CATEGORIES_TABLE, 
                    `${BaseDatabase.PRODUCTS_TABLE}.id`, 
                    `${BaseDatabase.CATEGORIES_TABLE}.product_id`
                )
                .select("*");

            const products: Product[] = [];
            
            for (let product of result) {
                products.push(ProductsDatabase.toProductModel(product));
            }

            return products;

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public selectProductsByNameOrCategory = async (
        name: string,
        category: string
    ) : Promise<Product[]> => {
        try {
            const result = await BaseDatabase.connection.raw(`
                SELECT * FROM ${BaseDatabase.PRODUCTS_TABLE}
                JOIN ${BaseDatabase.CATEGORIES_TABLE}
                ON ${BaseDatabase.PRODUCTS_TABLE}.id = ${BaseDatabase.CATEGORIES_TABLE}.product_id
                WHERE title LIKE "${name}%"
                OR category LIKE "${category}%";
            `);

            const products: Product[] = [];
            
            for (let product of result[0]) {
                products.push(ProductsDatabase.toProductModel(product));
            }

            return products;

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}