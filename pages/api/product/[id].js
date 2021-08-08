// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { products } from '../../../data/products'

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10mb',
        },
    },
}


export default function handler(req, res) {
    const { id } = req.query;

    const Product = products.filter(product => product.id == id)
    

    Product.length ? res.status(200).json(Product[0]) : res.status(404).json('Нет товара с таким ID');
}
