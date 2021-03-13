import { Product } from "../business/entities/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductsDatabase extends BaseDatabase {

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
                    name: product.category,
                    product_id: product.id
                });
                    
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}