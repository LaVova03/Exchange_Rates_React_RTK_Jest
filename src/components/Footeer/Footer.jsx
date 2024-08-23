import './Footer.css';
import React from 'react';
import Utub from '../../assets/utub.png';
import Fb from '../../assets/FB.png';
import Inst from '../../assets/Inst.png';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Footer() {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const data = [
        [
            'Зворотнiй зв’язок', 'Пн - Нд: 08:00 - 20:00',
            '+38 (096) 044 95 95', '+38 (050) 044 95 95', 'contactus@quickclick.ua'
        ],
        [
            'Розділи', 'Про нас', 'Контакти', 'Умови використання'
        ],
        [
            'Нашi акаунти',
            { name: 'YouTube', icon: Utub },
            { name: 'Facebook', icon: Fb },
            { name: 'Instagram', icon: Inst }
        ]
    ];

    const openUrl = (link) => {
        if (link === 'YouTube') {
            window.location.href = 'https://youtu.be/cEP_qicW6ck';
        } else if (link === 'Facebook') {
            window.location.href = 'https://www.facebook.com/profile.php?id=100008929712628';
        } else {
            window.location.href = 'https://www.instagram.com/_voha_jan_/';
        }
    }

    const changePage = (item) => {
        if (item === 'Про нас' || item === 'About Us') {
            navigate('/aboutUs');
        } else if (item === 'Умови використання' || item === 'Terms of use') {
            navigate('/rules');
        } else {
            navigate('/contacts');
        }
    }

    if (data.length === 0) {
        return (
            <div className='Footer'>
                {t('Loading...')}
            </div>
        );
    }

    return (
        <div className='Footer'>
            {data.map((el, i) => (
                <ul key={i}>
                    {el.map((item, j) => (
                        <li key={j}>
                            {i === 1 && j > 0 ? (<button onClick={() => changePage(item)}>{t(item)}</button>)
                                : i === 2 && j > 0 && typeof item === 'object' ? (
                                    <div key={item.name}>
                                        <div>{item.name}</div>
                                        <button onClick={() => openUrl(item.name)}>
                                            <img src={item.icon} alt={item.name} />
                                        </button>
                                    </div>
                                ) : (
                                    typeof item === 'string' ? t(item) : null
                                )}
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
}

export default Footer;
