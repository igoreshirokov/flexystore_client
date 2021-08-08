import { products } from "../../../data/products";

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '10mb',
      },
    },
  }

export default function handler(req, res) {
    const { tag } = req.query;
    const filteredProducts = products.filter(product => product.tags.includes(tag))

    filteredProducts.length ? res.status(200).json(filteredProducts) : res.status(404).json({error: 'Категории не существует'})
}