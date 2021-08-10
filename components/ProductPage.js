import React, { useContext, useEffect, useState } from 'react';
import { CatalogContext } from '../store/CatalogContext';
import Link from 'next/link'
import ProductGallery from './ProductGallery'
import { LoadingComponent } from './ui/Loading';
import PopupBuy from './PopupBuy';

const ProductPage = () => {
    const [popup, setPopup] = useState(false)
    const { state, setLoading } = useContext(CatalogContext);
    const { productsSelectedList, selectedProduct, loading } = useContext(CatalogContext).state;
    const product = selectedProduct
    const close = () => {
        setPopup(false)
    }

    return (
        <div className="product-page">
            {!product.id ? <LoadingComponent /> : <div className="product">
                <div className="product-gallery">
                    {product.images.length ? <ProductGallery images={product.images} /> : 'Нет изображения'}
                </div>
                <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="product-id">
                        <span className="product-parametr-title">id</span>
                        <span className="product-parametr-value">{product.id}</span>
                    </div>
                    <div className="product-sizes">
                        <span className="product-parametr-title">размеры</span>
                        <span className="product-parametr-value">35-41</span>
                    </div>
                    <div className="product-price">
                        <span className="product-parametr-title">цена</span>
                        <span className="porduct-price__current">{product.price} ₽</span>
                        {product.oldPrice > 0 && <span className="porduct-price__old">{product.oldPrice} ₽</span>}
                    </div>
                    <button className={popup ? `button-inactive` : ''} onClick={() => setPopup(!popup)}>Как заказать?</button>
                    {popup && <PopupBuy />}
                    <a href={product.images[0]} className="download" download={product.id}>Скачать изображение</a>
                </div>
            </div>}
        </div>
    );
};

export default ProductPage;