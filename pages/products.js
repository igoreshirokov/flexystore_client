import { CatalogContext } from "../store/CatalogContext"
import { useContext, useEffect, useState } from "react"
import ProductsList from "../components/ProductsList"
import router, { useRouter } from "next/router"
import { BASE_URL } from '../contstants'
import MainLayout from "../layouts/MainLayout"
import { LoadingComponent, LoadingScreen } from "../components/ui/Loading"

export default function Slug({ products, message }) {
    const router = useRouter()
    const { slug } = router.query
    const { loading } = useContext(CatalogContext).state
    const { setLoading } = useContext(CatalogContext)
    const { setProducts } = useContext(CatalogContext)
    const [errorMessage, setErrorMessage] = useState(false)

    const [sort, setSort] = useState(false)


    useEffect(() => {
        (async () => {
            if (products.length) {
                setProducts(products);
                return
            } else {
                const req = await fetch(BASE_URL + 'api' + '/' + 'products')
                if (req.status === 404) {
                    setErrorMessage(await req.json());
                } else {
                    setProducts(await req.json());
                }
                return
            }
        })()
    }, []);
    
    return (
        <MainLayout title="Каталог">
            <div>
                {errorMessage ? <div className="error-message">{errorMessage}</div> : loading && <LoadingComponent />}
            </div>
            <div>
                {loading ? <LoadingScreen /> : <ProductsList />}
            </div>
        </MainLayout>
    )
}

export async function getStaticProps() {

    const req = await fetch(BASE_URL + 'api' + '/' + 'products')
    if (req.status === 404) {
        return { props: { products: null, message: await req.json() } }
    } else {
        return { props: { products: await req.json(), message: null } }
    }

}