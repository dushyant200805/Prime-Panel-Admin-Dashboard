import { faArrowUpRightFromSquare, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function BoxCard1({Smallbox=true}) {
    const data = [
        {
            id: 1,
            title: "New Orders",
            cardBg: "second-bg",
            ButtonClass:"second-btn",
            count: "40+",
        },
         {
            id: 2,
            title: "hours completed",
            cardBg: "prime-bg",
            ButtonClass:"prime-btn",
            count: "80+",
        },
         {
            id: 3,
            title: "task completed",
            cardBg: "tertiary-bg",
            ButtonClass:"tertiary-btn",
            count: "25+",
        },
         {
            id: 4,
            title: "task completed",
            cardBg: "red-bg",
            ButtonClass:"red-btn",
            count: "25+",
        },
         {
            id: 5,
            title: "task completed",
            cardBg: "blue-bg",
            ButtonClass:"blue-btn",
            count: "25+",
        },
         {
            id: 6,
            title: "task completed",
            cardBg: "yellow-bg",
            ButtonClass:"yellow-btn",
            count: "25+",
        },
    ];
    return (
        <>
                     {data.map((item) => {
                         if (Smallbox) {
                             return (
                                 <div className={`sm-info-box ${item.cardBg} py-2 px-3`} key={item.id}>
                                     <h5 className="text-white display-4 prime-font fw-bold">{item.count}</h5>
                                     <p className="text-white fs-7 fw-semibold text-uppercase">{item.title}</p>
                                     <FontAwesomeIcon icon={faShoppingCart} className="fs-1" />
                                 </div>
                             );
                         }

                         return (
                             <div className={`sm-info-box lg ${item.cardBg} py-2 px-3`} key={item.id}>
                                 <h5 className="text-white display-4 prime-font fw-bold">{item.count}</h5>
                                 <p className="text-white fs-7 fw-semibold text-uppercase">{item.title}</p>
                                 <FontAwesomeIcon icon={faShoppingCart} className="fs-1" />
                                 <button className={`btn ${item.ButtonClass} text-white`}>more info <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </button>
                             </div>
                         );
                     })}
        </>
    );
}
export default BoxCard1;