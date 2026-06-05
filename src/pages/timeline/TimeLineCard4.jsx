import React, { useState } from 'react';

function TimeLineCard4() {
    const [expandedItems, setExpandedItems] = useState({ 1: true });

    const data = [
        {
            id: 1,
            title: "Brainstorm",
            icon: "bi-lightbulb-fill",
            p: "Brainwriting - is a nonverbal brainstorming method in which everyone writes down three ideas that relate to the topic of the brainstorm.",
            position: "left",
            origin: "origin-right",
            image: "image-1",
        },
        {
            id: 2,
            title: "Mindmap",
            icon: "bi-signpost-2-fill",
            p: "Brainwriting - is a nonverbal brainstorming method in which everyone writes down three ideas that relate to the topic of the brainstorm.",
            position: "right",
            origin: "origin-left",
            image: "image-2",
        },
        {
            id: 3,
            title: "Write a Draft",
            icon: "bi-pencil-fill",
            p: "Brainwriting - is a nonverbal brainstorming method in which everyone writes down three ideas that relate to the topic of the brainstorm.",
            position: "left",
            origin: "origin-right",
            image: "image-3",
        },
        {
            id: 4,
            title: "Proofread",
            icon: "bi-search",
            p: "Brainwriting - is a nonverbal brainstorming method in which everyone writes down three ideas that relate to the topic of the brainstorm.",
            position: "right",
            origin: "origin-left",
            image: "image-4",
        },
    ];

    const toggleItem = (id) => {
        setExpandedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <>
            <div className="card-bg border-0 shadow-sm rounded-3 p-3">
                <div className="tl-container ps-3 pe-3">
                    <div className="main-timeline4">
                        {data.map((item,index) => {
                            const isExpanded = !!expandedItems[item.id];
                            return (
                                <div className={`timeline4 ${item.position}`} key={item.id}>
                                    <div className={`card tl-card ${item.origin}`}>
                                        <div className={`img-container ${item.image} scale`}></div>
                                        <div className="card-body p-0">
                                            <div className="accordion" id={`alwaysOpen-${item.id}`}>
                                                <div className="accordion-item">
                                                    <p className="accordion-header">
                                                        <button
                                                            className={`accordion-button fw-bold justify-content-center ${isExpanded ? '' : 'collapsed'}`}
                                                            type="button"
                                                            aria-expanded={isExpanded}
                                                            onClick={() => toggleItem(item.id)}
                                                        >
                                                            <i className={`bi ${item.icon} me-2`}></i>{item.title}
                                                        </button>
                                                    </p>
                                                    <div className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}>
                                                        <div className="accordion-body">
                                                            <p className="fw-light p-2">{item.p}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TimeLineCard4;