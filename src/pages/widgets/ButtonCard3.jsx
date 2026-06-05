import { useEffect } from "react";
import * as bootstrap from "bootstrap";

function ButtonCard3() {

    const data = [
        {
            id: 1,
            side: "top",
            buttonName: "Popover on top",
            className: "prime-btn"
        },
        {
            id: 2,
            side: "right",
            buttonName: "Popover on right",
            className: "second-btn"
        },
        {
            id: 3,
            side: "bottom",
            buttonName: "Popover on bottom",
            className: "tertiary-btn"
        },
        {
            id: 4,
            side: "left",
            buttonName: "Popover on left",
            className: "btn-primary"
        }
    ];

    useEffect(() => {

        // Initialize all popovers
        const popoverTriggerList = document.querySelectorAll(
            '[data-bs-toggle="popover"]'
        );

        [...popoverTriggerList].forEach((popoverTriggerEl) => {
            new bootstrap.Popover(popoverTriggerEl);
        });

    }, []);

    return (
        <>
            {data.map((item) => {
                return (
                    <button
                        type="button"
                        key={item.id}
                        className={`btn ${item.className} me-2 mb-2`}
                        data-bs-container="body"
                        data-bs-toggle="popover"
                        data-bs-placement={item.side}
                        data-bs-content={`${item.buttonName} content`}
                    >
                        {item.buttonName}
                    </button>
                );
            })}
        </>
    );
}

export default ButtonCard3;