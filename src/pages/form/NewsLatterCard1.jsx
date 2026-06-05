import { useState } from "react";
function NewsLatterCard1() {
    const ButtonclassName = [
        {
            id: 1,
            name: "prime-btn",
        },
        {
            id: 2,
            name: "second-btn",
        },
        {
            id: 3,
            name: "tertiary-btn",
        },
        {
            id: 4,
            name: "red-btn",
        },
        {
            id: 5,
            name: "blue-btn",
        },
        {
            id: 6,
            name: "yellow-btn",
        },
    ];
    const [validatedForms, setValidatedForms] = useState({});

    const handleSubmit = (event, id) => {

        event.preventDefault();

        const form = event.currentTarget;

        if (!form.checkValidity()) {
            event.stopPropagation();
        }

        setValidatedForms((prev) => ({
            ...prev,
            [id]: true,
        }));
    };
    return (
        <>
            {ButtonclassName.map((item, index) => {
                return (
                    <form className={`needs-validation mb-3 ${validatedForms[item.id] ? "was-validated" : ""}`} noValidate key={index} onSubmit={(e) => handleSubmit(e, item.id)}>
                        <div className="input-group">
                            <input type="text" className="form-control input-text bg-transparent  shadow-none light-border border" placeholder="Recipient's username"
                                aria-label="Recipient's username" aria-describedby="button-addon2" id="invalidCheck3" required />
                            <button className={`btn ${item.name} ripple`} type="submit" id="button-addon2">send
                                <span className="reffect"></span>
                            </button>
                        </div>
                    </form>
                );
            })}
        </>
    );
}

export default NewsLatterCard1;
