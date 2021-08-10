import React from 'react';
import Link from 'next/link'
import router from 'next/router';
import Image from 'next/image';

const ProductCard = ({product, index}) => {
    return (
        <div onClick={() => router.push(`/product/${product.id}`)} className="product-card">
                        <div className="product-card__image">
                            {product.images.length ? <Image blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0tLeXAwACRwDX+IuHbgAAAABJRU5ErkJggg==" placeholder="blur"  width="200" height="200" src={product.images[0]} /> : 'Нет изображения'}
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