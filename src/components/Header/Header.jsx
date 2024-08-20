import './Header.css';
import { Link, Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Exchange from '../../assets/logo-expres-xchange-01-1-e1693426771150.png'

function Header() {

    const { t } = useTranslation();
    const data = ['Main', 'Sales', 'Contacts', 'Rules', 'About Us'];

    const [isBurger, setBurger] = useState(false)

    function showBurger() {
        setBurger((prev) => !prev)
    }

    useEffect(() => {
        console.log(isBurger)
    }, [isBurger])

    return (
        <div className='header-wrap'>
            <div>
                <img src={Exchange} alt='logo' />
                <button
                    onClick={showBurger}
                    className={`burger-icon${isBurger ? 'active' : ''}`}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
            </div>
            <header>
                <ul className={`Header${isBurger ? 'active' : ''}`}>
                    {data.map((el, i) => (
                        <li key={i}>
                            <Link onClick={() => setBurger(false)} className='link' to={el === 'Main' ? '/'
                                : `/${el.replace(/\s+/g, '')}`}
                            >{t(el)}</Link >
                        </li>
                    ))}
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Header;