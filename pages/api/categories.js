// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

export default function handler(req, res) {
  res.status(200).json([
    {
      parent: {id: 1, name: "Обувь", slug: "shoes", parent: 0},
      children: [
        {id: 11, name: "Кроссовки", slug: "sneakers", parent: 1},
        {id: 12, name: "Сабо", slug: "sabo", parent: 1}
      ]
    },
    {
      parent: {id: 2, name: "Аксессуары", slug: "accessories", parent: 0},
      children: [{id: 21, name: "Сумки", slug: "bags", parent: 2}]
    },
  ])
}
