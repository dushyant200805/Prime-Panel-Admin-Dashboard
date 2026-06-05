import React, { useState } from 'react';

function FaqCard1() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const data = [
        {  
            id:1,
            targetName:"profileInfo",
            title: "Profile Information",
            description: "Manage your personal details. Update your name, email, phone number, and profile picture."
        },
        {
            id:2,
            targetName:"securityPassword",
            title: "Security & Password",
            description: "Keep your account secure. Change your password, enable two-factor authentication, and monitor login activity."
        },
        {
            id:3,
            targetName:"privacySettings",
            title: "Privacy Settings",
            description: "Control your data and visibility. Manage who can see your profile, posts, and activity status."
        },
        {
            id:4,
            targetName:"notificationPreferences",
            title: "Notification Preferences",
            description: "Stay updated on what matters. Choose which notifications you receive and how you get them."
        },
        {
            id:5,
            targetName:"connectedApps",
            title: "Connected Apps",
            description: "Manage third-party integrations. View and control the apps and services connected to your account."
        },
    ]

    return (
       <>
      {data.map((item, index) => {
         const isOpen = activeIndex === index;
         return (
            <div className={`accordion-item mb-2 light-border border  rounded-3 overflow-hidden ${isOpen ? 'active-faq' : ''}`} key={index}>
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
                    className={`accordion-collapse  collapse ${isOpen ? 'show' : ''}`}
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
export default FaqCard1;