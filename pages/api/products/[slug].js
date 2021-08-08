import { products } from "../../../data/products";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

export default function handler(req, res) {
  const { slug } = req.query;
  if (slug == "shoes") {
    const shoes = [
      "sneakers",
      "sabo"
    ]
    const filteredProducts = products.filter(product => shoes.some((s) => s == product.category))
    filteredProducts.length ?
      res.status(200).json(filteredProducts)
      : res.status(404).json('Категории не существует')
    return
  } else if (slug == "accessories") {
    const accessories = [
      "bags",
      "belts"
    ]
    const filteredProducts = products.filter(product => accessories.some((s) => s == product.category))
    filteredProducts.length ?
      res.status(200).json(filteredProducts)
      : res.status(404).json('Категории не существует')
    return
  } else {
    const filteredProducts = products.filter(product => product.category == slug)
    filteredProducts.length ?
      res.status(200).json(filteredProducts)
      : res.status(404).json('Категории не существует')
    return
  }

}