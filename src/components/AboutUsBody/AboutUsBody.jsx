import './AboutUsBody.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutUsBody() {
    const { t } = useTranslation();

    return (
        <ul className='AboutUsBody'>
            <li>{t('About Us')}</li>
            <li>{t("Welcome to 'Finance Exchanges', your trusted partner in seamless and secure currency exchange. Our mission is to simplify the way you manage your finances across borders. Whether you're traveling, investing, or sending money to loved ones, we offer competitive exchange rates and a user-friendly platform designed to meet your needs.")}</li>
            <li>{t("At 'Finance Exchanges', we prioritize transparency, security, and customer satisfaction. With our real-time rate updates and quick transaction processing, you can exchange currencies with confidence and ease. Join our growing community of users who trust us to handle their currency exchange needs efficiently.")}</li>
            <li>{t("Experience a smarter way to manage your money—download 'Finance Exchanges' today and take control of your currency exchange like never before.")}</li>
            <li>{t("Feel free to customize this text further to match your app's branding and unique features!")}</li>
        </ul>
    );
}

export default AboutUsBody;
