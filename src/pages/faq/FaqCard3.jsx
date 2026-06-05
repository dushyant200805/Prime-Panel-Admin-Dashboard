import React, { useState } from 'react';

function FaqCard3() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const data = [
        {
            id: 1,
            targetName: "paymentMethods",
            title: "Payment Methods",
            description: `Manage your saved payment methods. Add, update, or remove credit/debit cards, PayPal, and other payment options.`,
        },
        {
            id: 2,
            targetName: "billingHistory",
            title: "Billing History",
            description: "View and download past invoices. Check transaction details, invoice history, and payment receipts."
        },
        {
            id: 3,
            targetName: "subscriptionPlans",
            title: "Subscription & Plans",
            description: "Manage your subscriptions. View your current plan, upgrade or downgrade, and cancel subscriptions."
        },
        {
            id: 4,
            targetName: "autoRenewal",
            title: "Auto-Renewal Settings",
            description: "Enable or disable auto-renewal. Choose whether your subscription renews automatically to avoid service interruptions."
        },
        {
            id: 5,
            targetName: "refundPolicy",
            title: "Refund & Cancellation Policy",
            description: "Understand our refund and cancellation policies. Learn about refund eligibility, how to request a refund, and cancellation terms."
        },
    ]

    return (
        <>
            {data.map((item, index) => {
                const isOpen = activeIndex === index;
                return (
                    <div className={`accordion-item mb-2 light-border border rounded-3 overflow-hidden ${isOpen ? 'active-faq' : ''}`} key={index}>
                        <h2 className="accordion-header">
                            <button 
                                className={`accordion-button light-border border ${isOpen ? '' : 'collapsed'}`} 
                                type="button" 
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={isOpen} 
                                aria-controls={item.targetName}
                            >
                                {item.title}
                            </button>
                        </h2>
                        <div 
                            id={`${item.targetName}`} 
                            className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                        >
                            <div className="accordion-body light-border border faq-body head-text fw-bold fs-7">
                                {item.description}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
export default FaqCard3;