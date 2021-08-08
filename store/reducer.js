import { SET_CURRENT_CATEGORY, SET_PRODUCT, SET_CATEGORIES, SET_LOADING, SET_PRODUCTS } from './actionTypes';

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, categoriesList: action.payload, loading: false }
        case SET_PRODUCTS:
            return { ...state, productsSelectedList: action.payload, loading: false }
        case SET_PRODUCT:
            return { ...state, selectedProduct: action.payload, loading: false }
        case SET_CURRENT_CATEGORY:
            return { ...state, currentCategory: action.payload }
        case SET_LOADING:
            return { ...state, loading: true }
        default:
            return state
        }
}