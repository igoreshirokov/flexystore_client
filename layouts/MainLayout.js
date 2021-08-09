import Head from 'next/head'
import React, { useEffect } from 'react';
import Nav, { CategoriesLinksThree } from '../components/ui/Nav'
import { useContext, useState } from 'react';
import { CatalogContext } from '../store/CatalogContext';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import { LoadingComponent } from '../components/ui/Loading';



const MainLayout = ({ children, title }) => {
    const { categoriesList, loading } = useContext(CatalogContext).state;
    const [isIndex, setIsIndex] = useState(true)
    const router = useRouter()
    const isDesktop = useMediaQuery({ minWidth: 992 })

    useEffect(() => router.route === '/' ? setIsIndex(true) : setIsIndex(false), [router])
    const badPages = [
        '/delivery',
        '/payment',
        '/contacts'
    ]



    return (
        <div>
            <Head>
                <title>Обувь и акссессуары - {title}</title>
                <link rel="icon" type="image/svg+xml" href="favicon.svg" />
                <meta name='viewport' content={`width=device-width,initial-scale=1,maximum-scale=1.0`} />
                <meta content='true' name='HandheldFriendly' />
                <meta content='width' name='MobileOptimized' />
                <meta content='yes' name='apple-mobile-web-app- capable' />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <Nav />
            <div className={isIndex ? "content content-index" : "content"}>
                {!isIndex  && !badPages.includes(router.asPath) && isDesktop && <div className="left-side"><CategoriesLinksThree categories={categoriesList} /></div>}
                <div className={isIndex ? "main-layout-index" : "main-layout"}>
                    {children}
                </div>
            </div> 
        </div>
    );
};

export default MainLayout;