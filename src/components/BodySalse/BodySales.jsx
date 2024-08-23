import './BodySales.css';
import getGoods from '../../utils/getGoods';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"

function BodySales() {

    const { t } = useTranslation();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getGoods(setOrders)
    }, []);

    if (orders.length === 0) {
        return <div className='BodySales'>{t('Loading...')}</div>
    }

    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }

    return (
        <div className='BodySales'>
            {orders.map((el, i) => (
                <motion.ul
                    key={i}
                    initial="hidden"
                    animate="visible"
                    variants={list}
                >
                    <motion.li variants={item} >date: {el.date}</motion.li>
                    <motion.li variants={item} >id: {el.id}</motion.li>
                    <motion.li variants={item} >order: {el.order}</motion.li>
                    <motion.li variants={item} >photo: {el.photo}</motion.li>
                    <motion.li variants={item} >serialNumber: {el.serialNumber}</motion.li>
                    <motion.li variants={item} >title: {el.title}</motion.li>
                </motion.ul>
            ))}
        </div>
    );
}

export default BodySales;