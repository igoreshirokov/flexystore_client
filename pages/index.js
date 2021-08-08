import { CatalogContext } from "../store/CatalogContext"
import { useContext, useEffect, useState } from "react"
import ProductsList from "../components/ProductsList"
import router, { useRouter } from "next/router"
import { BASE_URL } from '../contstants'
import Banners from "../components/Banners"
import MainLayout from "../layouts/MainLayout"


export default function Home({ products, message }) {
  const { loading, categoriesList } = useContext(CatalogContext).state
  const { setLoading } = useContext(CatalogContext)
  const { setProducts } = useContext(CatalogContext)
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {

    if (message) {
      return setErrorMessage(message.error)
    }
    products ? setProducts(products) : async () => {
      const req = await fetch(BASE_URL + 'api' + '/' + 'tags' + '/' + 'top');
      const products = await req.json();
      setProducts(products);
    }
  }, [])



  return (
    <MainLayout>
      <Banners />
      <div>
        {/* {errorMessage && <div className="error-message">{errorMessage}</div>} */}
      </div>
      <div className="aboutus">
        <p><h3>Продаем и доставляем обувь и акссессуары для девушек.</h3> Весь товар отличного качества, модели подобраны в соответствии с актуальными модными трендами. <br />
        Доставляем на примерку по городу Москва и ближайшему подмосковью.<br /> 
        Отправка Почтой России и СДЭК.<br />
        Магазин ориентирован на постоянного клиента знакомого с качеством нашего товара.<br />
        Сайт - актуальный каталог продукции.<br />
        Заказы принимаем whatsapp и telegram, а так же по телефону.</p>
      </div>
      <div>
        <h2>Популярные модели</h2>
        <ProductsList />
      </div>
    </MainLayout>
  )
}



export async function getStaticProps() {
  const req = await fetch(BASE_URL + 'api' + '/' + 'tags' + '/' + 'top')
  if (req.status === 404) {
    return { props: { products: null, message: await req.json() } }
  } else {
    return { props: { products: await req.json(), message: null } }
  }
}