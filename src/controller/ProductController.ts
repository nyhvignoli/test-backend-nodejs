import { Request, Response } from 'express';
import { ProductInputDTO } from '../business/entities/Product';
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
    ) => {
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
}