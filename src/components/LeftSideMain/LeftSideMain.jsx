import './LeftSideMain.css';
import React from 'react';
import { API_URL } from '../../constants';
import useFetch from '../../fetches/Fetch';
import { useTranslation } from 'react-i18next';

function LeftSideMain() {

    const { t } = useTranslation();

    const { exchangeRate } = useFetch(API_URL);

    return (
        <table className='courses'>
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
        </table>
    );
}

export default LeftSideMain;