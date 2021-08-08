
import '../styles/global.sass'
import { useContext, useEffect, useReducer } from "react"
import { CatalogContext } from "../store/CatalogContext"
import { reducer } from "../store/reducer"
import { SET_CURRENT_CATEGORY, SET_LOADING, SET_PRODUCT, SET_CATEGORIES, SET_PRODUCTS } from '../store/actionTypes'
import Nav from '../components/ui/Nav'



const CatalogContextProvider = ({ children }) => {
  const initialState = {
    categoriesList: [],
    productsSelectedList: [],
    selectedProduct: [],
    currentCategory: null,
    loading: true,
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const setLoading = () => dispatch({ type: SET_LOADING })
  const setCategories = (categories) => dispatch({ type: SET_CATEGORIES, payload: categories })
  const setProducts = (products) => dispatch({ type: SET_PRODUCTS, payload: products })
  const setProduct = (product) => dispatch({ type: SET_PRODUCT, payload: product })
  const setCurrentCategory = (str) => dispatch({type: SET_CURRENT_CATEGORY, payload: str})

  return (
    <CatalogContext.Provider value={{ state, setCurrentCategory, setCategories, setProducts, setProduct, setLoading }}>
      {children}
    </CatalogContext.Provider>
  )
}

function MyApp({ Component, pageProps }) {
  
  return (
    <CatalogContextProvider>
      {/* <Nav /> */}
      <Component {...pageProps} />
    </CatalogContextProvider>)
}



export default MyApp
