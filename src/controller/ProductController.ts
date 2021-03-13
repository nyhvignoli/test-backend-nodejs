import { Request, Response } from 'express';
import { EditCategoryInputDTO, ProductInputDTO } from '../business/entities/Product';
import { ProductBusiness } from '../business/ProductBusiness';
import { ProductsDatabase } from '../data/ProductsDatabase';
import { IdGenerator } from '../services/IdGenerator';
import { Validator } from '../services/Validator';

const productBusiness = new ProductBusiness(
    new IdGenerator(),
    new Validator(),
    new ProductsDatabase()
)

export class ProductController {

    public createProduct = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const input: ProductInputDTO = {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category
            }

            await productBusiness.createProduct(input);

            res.status(201).send(`Product registered successfuly`);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    public editCategory = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const input: EditCategoryInputDTO = {
                productId: req.params.productId,
                category: req.body.category
            }

            await productBusiness.editCategory(input);

            res.status(201).send(`Product category was updated successfuly`);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}