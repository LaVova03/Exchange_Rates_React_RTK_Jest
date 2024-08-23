import './RulesBody.css';
import React from 'react';
import { motion } from "framer-motion";

function RulesBody() {

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
            className='RulesBody'
            initial="hidden"
            animate="visible"
            variants={list}
        >
            <motion.li variants={item}>Rules and Guidelines</motion.li>
            <motion.li variants={item}>
                Account Security: Protect your account by using a strong password and enabling two-factor
                authentication. Never share your login details with anyone.
            </motion.li>
            <motion.li variants={item}>
                Identity Verification: To comply with legal requirements and ensure the safety of all users,
                identity verification is mandatory for transactions above a certain limit. Please provide accurate
                information during the verification process.
            </motion.li>
            <motion.li variants={item}>
                Transaction Limits: Daily and monthly transaction limits apply based on your verification level.
                These limits are in place to ensure security and compliance with financial regulations.
            </motion.li>
            <motion.li variants={item}>
                Exchange Rates: Currency exchange rates fluctuate in real-time. The rate displayed at the time of
                initiating a transaction will be the rate applied to your exchange. Please review the rate before
                confirming your transaction.
            </motion.li>
            <motion.li variants={item}>
                Fees: A small fee may apply to each transaction, depending on the amount and the currencies involved.
                All fees will be clearly displayed before you finalize your exchange.
            </motion.li>
            <motion.li variants={item}>
                Cancellations and Refunds: Once a transaction is confirmed, it cannot be canceled or refunded.
                Please double-check all details before proceeding.
            </motion.li>
            <motion.li variants={item}>
                Compliance: All users must comply with local and international financial regulations. Any suspicious .
                activity may result in account suspension or termination.
            </motion.li>
            <motion.li variants={item}>
                Customer Support: For any issues or questions, our customer support team is available to assist you.
                Please reach out through the app or our official contact channels.
            </motion.li>
            <motion.li variants={item}>
                Prohibited Activities: Engaging in illegal activities, including but not limited to money laundering
                or fraud, is strictly prohibited. Violating this rule will result in immediate account termination and
                may be reported to relevant authorities.
            </motion.li>
            <motion.li variants={item}>
                Updates to Terms: We reserve the right to update these rules as needed. Users will be notified of any
                significant changes, and continued use of the app constitutes acceptance of the updated terms.
            </motion.li>
            <motion.li variants={item}>
                These rules ensure a secure and smooth experience for all users of your currency exchange app.
            </motion.li>
        </motion.ul>
    );
}

export default RulesBody;