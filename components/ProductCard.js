import React from 'react';
import Link from 'next/link'
import router from 'next/router';

const ProductCard = ({product, index}) => {
    return (
        <div onClick={() => router.push(`/product/${product.id}`)} className="product-card">
                        <div className="product-card__image">
                            {product.images.length ? <img src={product.images[0]} /> : 'Нет изображения'}
                        </div>
                        <span className="product-card__id">ID: {product.id}</span>
                        {/* <h3>{product.name}</h3> */}
                        <div className="product-card__price">
                            <span>{product.price} ₽</span>
                            {/* <span>{product.oldPrice}</span> */}
                        </div>
                        {/* <div className="product-card__tags">
                            {product.tags.length && product.tags.map(tag => <Link key={tag} href={`/tags/${tag}`}><a>{tag}</a></Link>)}
                        </div> */}
                        <button>Купить</button>
                    </div>
    );
};

export default ProductCard;