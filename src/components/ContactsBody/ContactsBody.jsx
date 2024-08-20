import './ContactsBody.css';
import GetRequest from '../../utils/getRequest';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function ContactsBody() {
    const { t } = useTranslation();
    const [data, setData] = useState([]);

    useEffect(() => {
        GetRequest(setData)
    }, []);

    if (data.length === 0) {
        return (
            <div className='ContactsBody-load'>{t('Loading...')}</div>
        )
    }

    return (
        <div className='ContactsBody'>
            {data.length > 0 ? data.map((el, i) => (
                <ul key={i}>
                    <li>{t(`id: ${el.id}`)}</li>
                    <li>{t(`name: ${el.name}`)}</li>
                    <li>{(`phone: ${el.phone}`)}</li>
                </ul>
            )) : null}
        </div>
    );
}


export default ContactsBody;