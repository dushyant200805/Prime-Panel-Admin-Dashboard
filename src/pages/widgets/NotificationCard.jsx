import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function NotificationCard() {
    const data = [ 
        {
            id: 1,
            title: "Notification",
            count: "250",
            borderclass: "second-border",
            iconbg:"second-shade",
            iconcolor: "second-text",
        },
        {
            id: 2,
            title: "Notification",
            count: "250",
            borderclass: "prime-border",
            iconbg:"prime-shade",
            iconcolor: "prime-text",
        },
         {
            id: 3,
            title: "Notification",
            count: "250",
            borderclass: "red-border",
            iconbg:"red-shade",
            iconcolor: "red-text",
        },
         {
            id: 4,
            title: "Notification",
            count: "250",
            borderclass: "blue-border",
            iconbg:"blue-shade",
            iconcolor: "blue-text",
        },
         {
            id: 5,
            title: "Notification",
            count: "250",
            borderclass: "yellow-border",
            iconbg:"yellow-shade",
            iconcolor: "yellow-text",
        },
         {
            id: 6,
            title: "Notification",
            count: "250",
            borderclass: "tertiary-border",
            iconbg:"tertiary-shade",
            iconcolor: "tertiary-text",
        },
    ];
    return (
       <>
        {data.map((item,index)=>{
            return (
               
                    <div className={`msg-box-small border ${item.borderclass} d-flex border p-2`} key={index}>
                        <div className={`rounded-3 p-3 me-3 ${item.iconbg}`}>
                            <FontAwesomeIcon icon={faBell} className={`fs-1 ${item.iconcolor}`} />
                        </div>
                        <div className="msg-text">
                            <h5 className={`fs-5 fw-semibold ${item.iconcolor} m-0 prime-font`}>Notification</h5>
                            <p className="m-0 para-text fs-7">250</p>
                        </div>
                    </div>
                
            );
        })}
       </>
    )
}
export default NotificationCard;