import { CatalogContext } from "../../store/CatalogContext"
import { useContext, useEffect, useState } from "react"
import ProductPage from "../../components/ProductPage"
import router, { useRouter } from "next/router"
import { BASE_URL } from '../../contstants'
import MainLayout from "../../layouts/MainLayout"
import { CategoriesLinksThree } from "../../components/ui/Nav"
import { useMediaQuery } from "react-responsive"

export default function Product({ product, message }) {
    const router = useRouter()
    const { id } = router.query
    const { loading, categoriesList } = useContext(CatalogContext).state
    const { setProduct, setLoading } = useContext(CatalogContext)
    const [errorMessage, setErrorMessage] = useState(false)
    const isDesktop = useMediaQuery({ minWidth: 992 })


    useEffect(() => {
        if (message) {
            return setErrorMessage(message.error)
        }
        product ? setProduct(product) : async () => {
            setLoading(true)
            const req = await fetch(BASE_URL + 'api' + '/' + 'product' + '/' + id);
            const product = await req.json();
            setProduct(product);
        }
    }, [])


    return (
        <MainLayout>
            <div>
                <button className="back-button" onClick={() => router.back()}>Назад</button>
                <ProductPage />
            </div>
        </MainLayout>
    )
}


export async function getStaticPaths() {
    const res = await fetch(BASE_URL + 'api' + '/' + 'products');
    const products = await res.json()
    const paths = []

    products.forEach(product => {
        paths.push({ params: { id: String(product.id) } })
    });

    return { paths, fallback: false }

}
export async function getStaticProps({ params }) {

    const req = await fetch(BASE_URL + 'api' + '/' + 'product' + '/' + params.id)
    if (req.status === 404) {
        return { props: { product: null, message: await req.json() } }
    } else {
        return { props: { product: await req.json(), message: null } }
    }
}