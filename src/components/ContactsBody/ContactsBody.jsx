import './ContactsBody.css';
import GetRequest from '../../utils/getRequest';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

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

    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }


    return (
        <div className='ContactsBody'>
            {data.length > 0 ? data.map((el, i) => (
                <motion.ul
                    key={i}
                    initial="hidden"
                    animate="visible"
                    variants={list}
                >
                    <motion.li variants={item} >{t(`id: ${el.id}`)}</motion.li>
                    <motion.li variants={item} >{t(`name: ${el.name}`)}</motion.li>
                    <motion.li variants={item} >{(`phone: ${el.phone}`)}</motion.li>
                </motion.ul>
            )) : null}
        </div>
    );
}


export default ContactsBody;