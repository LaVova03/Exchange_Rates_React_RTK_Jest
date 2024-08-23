import './LeftSideMain.css';
import React from 'react';
import { API_URL } from '../../constants';
import useFetch from '../../fetches/Fetch';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

function LeftSideMain() {

    const { t } = useTranslation();

    const { exchangeRate } = useFetch(API_URL);

    const list = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -1000 },
    }

    return (
        <motion.table
            className='courses'
            initial="hidden"
            animate="visible"
            variants={list}
        >
            <thead>
                <tr>
                    <th><h3>{t('Валюта')}</h3></th>
                    <th><h3>{t('Курс до грн')}</h3></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>EUR</td>
                    <td>{exchangeRate.eur}</td>
                </tr>
                <tr>
                    <td>USD</td>
                    <td>{exchangeRate.usd}</td>
                </tr>
            </tbody>
        </motion.table>
    );
}

export default LeftSideMain;