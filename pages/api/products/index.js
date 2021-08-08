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
  res.status(200).json(products)
}
