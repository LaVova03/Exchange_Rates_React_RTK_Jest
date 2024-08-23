import './AboutUsBody.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

function AboutUsBody() {
    const { t } = useTranslation();

    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }

    return (
        <motion.ul
            className='AboutUsBody'
            initial="hidden"
            animate="visible"
            variants={list}
        >
            <motion.li variants={item}>{t('About Us')}</motion.li>
            <motion.li variants={item}>{t("Welcome to 'Finance Exchanges', your trusted partner in seamless and secure currency exchange. Our mission is to simplify the way you manage your finances across borders. Whether you're traveling, investing, or sending money to loved ones, we offer competitive exchange rates and a user-friendly platform designed to meet your needs.")}</motion.li>
            <motion.li variants={item}>{t("At 'Finance Exchanges', we prioritize transparency, security, and customer satisfaction. With our real-time rate updates and quick transaction processing, you can exchange currencies with confidence and ease. Join our growing community of users who trust us to handle their currency exchange needs efficiently.")}</motion.li>
            <motion.li variants={item}>{t("Experience a smarter way to manage your money—download 'Finance Exchanges' today and take control of your currency exchange like never before.")}</motion.li>
            <motion.li variants={item}>{t("Feel free to customize this text further to match your app's branding and unique features!")}</motion.li>
        </motion.ul>
    );
}

export default AboutUsBody;
