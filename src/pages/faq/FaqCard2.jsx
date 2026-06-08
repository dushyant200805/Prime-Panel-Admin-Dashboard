import React, { useState } from "react";

function FaqCard2() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    {
      id: 1,
      targetName: "profileVisibility",
      title: " Profile Visibility",
      description: `Control who can see your profile. Manage your  profile settings and decide which details are visible to others.`,
    },
    {
      id: 2,
      targetName: "dataSharing",
      title: "Data Sharing & Permissions",
      description:
        " Manage how your data is shared. Review third-party access, manage app permissions, and control data-sharing preferences.",
    },
    {
      id: 3,
      targetName: "activityStatus",
      title: "Activity Status",
      description:
        " Decide if others can see when you're active. Enable or disable your online status visibility for friends, contacts, or the .",
    },
    {
      id: 4,
      targetName: "discoverability",
      title: "Search & Discoverability",
      description:
        "Control how others find you. Choose whether your profile appears in search results and manage discoverability settings.",
    },
    {
      id: 5,
      targetName: "adPreferences",
      title: "Ad Preferences",
      description:
        "Manage your ad preferences. Control personalized ads, data tracking, and opt-out settings for targeted advertising.",
    },
  ];

  return (
    <>
      {data.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            className={`accordion-item mb-2 light-border border rounded-3 overflow-hidden ${isOpen ? "active-faq" : ""}`}
            key={index}
          >
            <h2 className="accordion-header">
              <button
                className={`accordion-button light-border border ${isOpen ? "" : "collapsed"}`}
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
              className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
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
export default FaqCard2;
