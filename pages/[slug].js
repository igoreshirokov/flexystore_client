import { CatalogContext } from "../store/CatalogContext"
import { useContext, useEffect, useState } from "react"
import ProductsList from "../components/ProductsList"
import router, { useRouter } from "next/router"
import { BASE_URL } from '../contstants'
import MainLayout from '../layouts/MainLayout'

export default function Slug({ products, message }) {
    const router = useRouter()
    const { slug } = router.query
    const { loading, currentCategory } = useContext(CatalogContext).state
    const { setProducts, setLoading } = useContext(CatalogContext)
    const [errorMessage, setErrorMessage] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            if (products[0].categories !== slug) {
                const req = await fetch(BASE_URL + 'api' + '/' + 'products' + '/' + router.query.slug);
                req.status === 404 ? router.push('/404') : setProducts(await req.json());
    
            }
    
        }
        fetchData();
    }, [router])

    return (
        <MainLayout title={`Каталог - ${currentCategory}`}>
            <div>
                {!loading && currentCategory && <div className="category-title"><h1>{currentCategory}</h1></div>}
                <ProductsList />
            </div>
        </MainLayout>
    )
}


export async function getStaticPaths() {
    const res = await fetch(BASE_URL + 'api' + '/' + 'categories');
    const categories = await res.json()
    const paths = []

    categories.forEach(category => {
        paths.push({ params: { slug: category.parent.slug } })
        category.children.forEach(child => paths.push({ params: { slug: child.slug } }))
    });

    return { paths, fallback: false }

}
export async function getStaticProps({ params }) {

    const req = await fetch(BASE_URL + 'api' + '/' + 'products' + '/' + params.slug)
    if (req.status === 404) {
        return { props: { products: null, message: await req.text() } }
    } else {
        return { props: { products: await req.json(), message: null } }
    }
}