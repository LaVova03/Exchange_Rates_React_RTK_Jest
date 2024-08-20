import './RulesBody.css';
import React from 'react';

function RulesBody() {
    return (
        <ul className='RulesBody'>
            <li>Rules and Guidelines</li>
            <li>
                Account Security: Protect your account by using a strong password and enabling two-factor
                authentication. Never share your login details with anyone.
            </li>
            <li>
                Identity Verification: To comply with legal requirements and ensure the safety of all users,
                identity verification is mandatory for transactions above a certain limit. Please provide accurate
                information during the verification process.
            </li>
            <li>
                Transaction Limits: Daily and monthly transaction limits apply based on your verification level.
                These limits are in place to ensure security and compliance with financial regulations.
            </li>
            <li>
                Exchange Rates: Currency exchange rates fluctuate in real-time. The rate displayed at the time of
                initiating a transaction will be the rate applied to your exchange. Please review the rate before
                confirming your transaction.
            </li>
            <li>
                Fees: A small fee may apply to each transaction, depending on the amount and the currencies involved.
                All fees will be clearly displayed before you finalize your exchange.
            </li>
            <li>
                Cancellations and Refunds: Once a transaction is confirmed, it cannot be canceled or refunded.
                Please double-check all details before proceeding.
            </li>
            <li>
                Compliance: All users must comply with local and international financial regulations. Any suspicious .
                activity may result in account suspension or termination.
            </li>
            <li>
                Customer Support: For any issues or questions, our customer support team is available to assist you.
                Please reach out through the app or our official contact channels.
            </li>
            <li>
                Prohibited Activities: Engaging in illegal activities, including but not limited to money laundering
                or fraud, is strictly prohibited. Violating this rule will result in immediate account termination and
                may be reported to relevant authorities.
            </li>
            <li>
                Updates to Terms: We reserve the right to update these rules as needed. Users will be notified of any
                significant changes, and continued use of the app constitutes acceptance of the updated terms.
            </li>
            <li>
                These rules ensure a secure and smooth experience for all users of your currency exchange app.
            </li>
        </ul>
    );
}

export default RulesBody;