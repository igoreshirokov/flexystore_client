import React, { useContext, useEffect, useState } from 'react';
import { CatalogContext } from '../store/CatalogContext';
import Link from 'next/link'
import { LoadingComponent, LoadingScreen } from './ui/Loading'
import ProductCard from './ProductCard';
import router, { useRouter } from 'next/router';

const ProductsList = () => {
    const { state, setLoading, setCurrentCategory } = useContext(CatalogContext);
    const { currentCategory, productsSelectedList, loading, categoriesList } = useContext(CatalogContext).state;

    useEffect(() => {
        !state.loading && categoriesList.forEach(c => {
            if (c.parent.slug !== router.query.slug) {
                c.children.forEach(ch => {
                    if (ch.slug !== router.query.slug) {

                    } else {
                        return setCurrentCategory(ch.name)
                    }
                })
            } else {
                return setCurrentCategory(c.parent.name)
            }
        })
    }, [state.loading])
    return (
        <div>
            
            {loading ? <LoadingComponent /> : (

                <div className="products-list">
                    {productsSelectedList.map((product, index) => {
                        return (
                            <ProductCard key={String(index)} product={product} index={index} />
                        )

                    })}

                </div>
            )}
        </div>
    );
};

export default ProductsList;