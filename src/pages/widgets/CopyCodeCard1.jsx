import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BiCodeAlt } from "react-icons/bi";
function CopyCodeCard1() {

    const [showCode, setShowCode] = useState(false);
    const [copyText, setCopyText] = useState("Copy Code");

    const codeString = `
<div className="progress mb-2">
    <div className="progress-bar" style={{ width: '40%' }}></div>
</div>

<div className="progress mb-2">
    <div className="progress-bar" style={{ width: '20%' }}></div>
</div>

<div className="progress mb-2">
    <div className="progress-bar" style={{ width: '50%' }}></div>
</div>
`;

    const copyCode = async () => {

        await navigator.clipboard.writeText(codeString);

        setCopyText("Copied!");

        setTimeout(() => {
            setCopyText("Copy Code");
        }, 1500);
    };

    return (
        <>
            <div className="cardnew card h-100 border-0 shadow-sm rounded-3">
                <div className="text-end">
                    <button className="btn prime-btn btn-sm text-capitalize fw-semibold p-1 rounded-1" onClick={() => setShowCode(!showCode)} >
                        {showCode ? "Hide Code" : "Show Code"}
                        <i className="bi bi-code-slash ms-1"></i> 
                    </button>
                </div>
                <div className="progress-container">
                    <div className="progress mb-2">
                        <div className="progress-bar" style={{ width: "40%" }}></div>
                    </div>
                    <div className="progress mb-2">
                        <div className="progress-bar" style={{ width: "20%" }}></div>
                    </div>
                    <div className="progress mb-2">
                        <div className="progress-bar" style={{ width: "50%" }}></div>
                    </div>
                </div>

                {showCode && (
                    <div className="code-box" style={{ display: 'block' }}>
                        <div className="codeboxss">
                            <button className="copy-button btn prime-btn rounded-1 btn-sm" onClick={copyCode}>
                                {copyText}
                            </button>
                            <pre>{codeString}</pre>
                        </div>
                    </div>
                )}

            </div>
        </>
    );
}

export default CopyCodeCard1;


