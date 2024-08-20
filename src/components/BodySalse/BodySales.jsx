import './BodySales.css';
import getGoods from '../../utils/getGoods';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function BodySales() {

    const { t } = useTranslation();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getGoods(setOrders)
    }, []);

    if (orders.length === 0) {
        return <div className='BodySales'>{t('Loading...')}</div>
    }

    return (
        <div className='BodySales'>
            {orders.map((el, i) => (
                <ul key={i}>
                    <li>date: {el.date}</li>
                    <li>id: {el.id}</li>
                    <li>order: {el.order}</li>
                    <li>photo: {el.photo}</li>
                    <li>serialNumber: {el.serialNumber}</li>
                    <li>title: {el.title}</li>
                </ul>
            ))}
        </div>
    );
}

export default BodySales;