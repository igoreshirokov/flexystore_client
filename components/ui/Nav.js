import React, { useContext, useEffect, useState } from 'react';
import { CatalogContext } from '../../store/CatalogContext';
import { BASE_URL } from '../../contstants';
import router, { useRouter } from 'next/router';
import Link from 'next/link';
import { LoadingComponent } from './Loading';
import { useMediaQuery } from 'react-responsive';
import SocialIcons from './SocialIcons';

export const CategoriesLinksThree = ({ categories }) => {
    const router = useRouter()
    const { setLoading } = useContext(CatalogContext)
    const goTo = (slug) => {
        setLoading(true)
        router.push(`/${slug}`)
    }
    function toggleChildrenLinks(e) {
        const parent = e.target
        if (parent.classList.contains("parent-category")) {
            const children = parent.querySelector('ul')
            children.classList.toggle('active')
        }
    }
    return (
        <ul>
            {categories.map(categoryParent => {
                return (
                    <li onClick={toggleChildrenLinks} className="parent-category" onDoubleClick={() => goTo(categoryParent.parent.slug)} key={categoryParent.parent.slug}>
                        {categoryParent.parent.name}
                        {categoryParent.children && <ul className="children-categories">
                            {categoryParent.children.map(categoryChild => {
                                return router.asPath == `/${categoryChild.slug}` ? <li className="active-menu-item" onClick={() => goTo(categoryChild.slug)} key={categoryChild.slug}>{categoryChild.name}</li>
                                    : <li onClick={() => goTo(categoryChild.slug)} key={categoryChild.slug}>{categoryChild.name}</li>

                            })}
                        </ul>}
                    </li>
                )
            })}
        </ul>
    )
}

const MainNav = () => {
    const router = useRouter()
    const pages = [
        { name: "Каталог", href: "/" },
        { name: "Доставка", href: "/delivery" },
        { name: "Оплата", href: "/payment" },
        { name: "Контакты", href: "/contacts" },
    ]
    return (
        <ul>
            {pages.map((page, index) => {
                return router.asPath == page.href ? <li className="active-menu-item2" key={String(index + "page")} onClick={() => router.push(page.href)}>{page.name}</li>
                    : <li key={String(index + "page")} onClick={() => router.push(page.href)}>{page.name}</li>

            })}
        </ul>
    )
}

const Logo = () => {
    const router = useRouter()
    return (
        <div onClick={() => router.push('/')} className="logo">
            <span className="logo-bold">FLEXY</span>
            <span className="logo-think">STORE</span>
        </div>
    )
}

const NavDesktop = ({ categoriesList }) => {

    const router = useRouter()


    return (
        <div className="header">
            <div className="header__first-line">
                <div className="logo">
                    <Logo />
                </div>
                <div className="main-nav">
                    <MainNav />
                </div>
            </div>
            {router.asPath == '/' && <div className="header__second-line">
                <div className="categories-nav">
                    {categoriesList.length ? <CategoriesLinksThree categories={categoriesList} /> : <LoadingComponent />}
                </div>
            </div>}
        </div>
    )
}
const NavMobile = ({ categoriesList }) => {
    const [open, setOpen] = useState(false);
    const onCatNavClick = (e) => {
        if (e.target.parentNode.classList.contains('children-categories')) {
            setOpen(!open)
        }
    }

    // useEffect(() => {
    //     if (open) {
    //         document.querySelector('.navigation-wrapper').addEventListener('click', (e) => {
    //             if (e.target.className == 'navigation-wrapper') {
    //                 setOpen(!open)
    //                 console.log('evev')
    //             }
    //         })
    //     }
    // }, [])

    const wrapperClick = (e) => {
        if (e.target.className == 'navigation-wrapper') {
            setOpen(false)
        }
    }


    return (
        <div className="header-mobile">
            <div className="header__first-line">
                <div className="logo">
                    <Logo />
                </div>
                <div className="navigation">
                    <div onClick={() => setOpen(!open)} className={`navigation-button ${open && 'navigation-button-close'}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {open && <div onClick={wrapperClick} className="navigation-wrapper">
                        <div onClick={onCatNavClick} className="categories-nav">
                            {categoriesList.length ? <CategoriesLinksThree categories={categoriesList} /> : <LoadingComponent />}
                            <SocialIcons />
                        </div>
                    </div>}
                </div>
            </div>
            <div className="header__second-line">
                <div className="main-nav">
                    <MainNav />
                </div>
            </div>
        </div>
    )
}

const Nav = () => {
    const { state, setCategories } = useContext(CatalogContext)
    const { categoriesList } = useContext(CatalogContext).state
    const isDesktop = useMediaQuery({ minWidth: 992 })

    useEffect(async () => {
        if (!categoriesList.length) {
            const req = await fetch(`${BASE_URL}api/categories`)
            const res = await req.json();
            setCategories(res)
        }
    }, [])

    if (categoriesList.length) {
        if (isDesktop) {
            return <NavDesktop categoriesList={categoriesList} />
        } else {
            return <NavMobile categoriesList={categoriesList} />
        }
    }
    return (<LoadingComponent />)

};



export default Nav;