import React, { useState } from 'react';

function TimeLineCard2() {
    const [expandedItems, setExpandedItems] = useState({});

    const data = [
        {
            id: "1",
            title: "Unix Epoch",
            description: "January 1, 1970",
            para: "This is the day the Unix clock began (or December 31, 1969 if you live behind UTC 😉).",
        },
        {
            id: "2",
            title: "Digits Within ISO 8601 Format",
            description: "October 17, 1973",
            para: "At 6:36:57 PM UTC, the date in ISO 8601 format (1973-10-17) within the time digits (119731017) appeared for the first time.",
        },
        {
            id: "3",
            title: "1 Billion Seconds",
            description: "September 9, 2001",
            para: "The date and time 1:10:00 09/09/2001 in all formats (MM/DD/YYYY HH:MM:SS, DD/MM/YYYY HH:MM:SS, YYYY/MM/DD HH:MM:SS) appeared for the first time in history.",
        },
        {
            id: "4",
            title: "100,000,000th Day",
            description: "September 20, 2777",
            para: "This is the only date in the 28th century that will be written with a single digit 7 and a double-digit 7 (09/20/2777). In the 29th century, 09/20/2888 will be the only such date.",
        },
        {
            id: "5",
            title: "First Message",
            description: "October 29, 1969",
            para: 'The first message ever sent over the ARPANET was "lo". The system crashed before they could type "log".',
        },
        {
            id: "6",
            title: "The Millennial Bug",
            description: "January 1, 2000",
            para: "Despite Y2K panic, computers mostly handled the millennium change just fine—turns out, most systems were already Y2K-compliant (or close enough).",
        },
    ];

    const toggleItem = (id) => {
        setExpandedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const expandAll = () => {
        const allExpanded = {};
        data.forEach((item) => {
            allExpanded[item.id] = true;
        });
        setExpandedItems(allExpanded);
    };

    const collapseAll = () => {
        setExpandedItems({});
    };

    return (
        <>
            <svg display="none">
                <symbol id="arrow">
                    <polyline points="7 10,12 15,17 10" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </symbol>
            </svg>
            <div id="timeline2" className="timeline2 p-3">
                <div className="btn-group2">
                    <button className="btn prime-btn" type="button" onClick={expandAll}>Expand All</button>
                    <button className="btn prime-btn" type="button" onClick={collapseAll}>Collapse All</button>
                </div>
                {data.map((item) => {
                    const isExpanded = !!expandedItems[item.id];
                    return (
                        <div className="timeline2__item" key={item.id}>
                            <div className="timeline2__item-header">
                                <button
                                    className="timeline2__arrow btn prime-btn"
                                    type="button"
                                    aria-expanded={isExpanded}
                                    onClick={() => toggleItem(item.id)}
                                >
                                    <svg className="timeline2__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                                        <use href="#arrow" />
                                    </svg>
                                </button>
                                <span className="timeline2__dot"></span>
                                <span className="timeline2__meta">
                                    <h4 className="fs-5 fw-semibold m-0 head-text">{item.title}</h4>
                                    <p className="para-text m-0">{item.description}</p>
                                </span>
                            </div>
                            <div
                                className={`timeline2__item-body ${isExpanded ? 'timeline2__item-body--expanded' : ''}`}
                                role="region"
                                aria-hidden={!isExpanded}
                            >
                                <div className="timeline2__item-body-content">
                                    <p className="timeline2__item-p para-text">{item.para}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default TimeLineCard2;