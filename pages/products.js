import { CatalogContext } from "../store/CatalogContext"
import { useContext, useEffect, useState } from "react"
import ProductsList from "../components/ProductsList"
import router, { useRouter } from "next/router"
import { BASE_URL } from '../contstants'

export default function Slug({ products, message }) {
    const router = useRouter()
    const { slug } = router.query
    const { loading } = useContext(CatalogContext).state
    const { setLoading } = useContext(CatalogContext)
    const { setProducts } = useContext(CatalogContext)
    const [errorMessage, setErrorMessage] = useState(false)

    const [sort, setSort] = useState(false)


    useEffect(() => {
        if (message) {
            return setErrorMessage(message.error)
        }
        products ? setProducts(products) : async () => {
            const req = await fetch(BASE_URL + 'api' + '/' + 'products');
            const products = await req.json();
            setProducts(products);
        }
    }, [])

    return (
        <MainLayout>
            <div>
                {errorMessage ? <div className="error-message">{errorMessage}</div> : loading ? <p>loading - true</p> : <p>loading - false</p>}
            </div>
            <div>
                <ProductsList />
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