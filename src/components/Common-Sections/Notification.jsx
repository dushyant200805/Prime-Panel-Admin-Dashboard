import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Toast } from "bootstrap";
import { initializeCollapseCards, handleSingleToggle } from "../../assets/collapseHandler";
import { useEffect } from "react";

function Notification () {

  useEffect(() => {
  initializeCollapseCards();
}, [])

    const handleShowToast = (e) => {
        e.preventDefault();
        const toastEl = document.getElementById('toast1');
        if (toastEl) {
            const toast = Toast.getOrCreateInstance(toastEl);
            toast.show();
        }
    };
    const NotificationList = [
        {
            id: 1,
            task: "Create homepage banner designs",
            date: "12/06/2024",
            Classname : "d-flex message unread p-2 mb-2 align-items-center border-4",
        },
        {
            id: 2,
            task: "Build login page with validation",
            date: "12/07/2024",
            Classname : "d-flex message read p-2 mb-2 align-items-center border-4",
        },
        {
            id: 3,
            task: "Create promotional email template",
            date: "12/10/2024",
            Classname : "d-flex message starred p-2 mb-2 align-items-center border-4",
        },
        {
            id: 4,
            task: "Test responsive design",
            date: "12/09/2024",
            Classname : "d-flex message unread p-2 mb-2 align-items-center border-4",
        },
        {
            id: 5,
            task: "Organize team meeting",
            date: "12/11/2024",
            Classname : "d-flex message unread p-2 mb-2 align-items-center border-4",
        },
    ]
    return(
        <>
            <div className="card collapse-card h-100 border-0 shadow-sm rounded-3 position-relative"> 
                <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">notifications 
                <Link to="#"  onClick={handleSingleToggle}  className="togglecard fs-6 head-text" aria-expanded="true"  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </Link>
                </h2>
                <div className="notification-main show collapse p-2 " id="notificationmain">
                    <div className="notification-filters pb-1 mb-3 border-bottom light-border-bottom">
                        <div className="input-group mb-2 border prime-border p-1 ps-2 rounded-2">
                            <input type="text" className="form-control shadow-none border-0 p-0 fs-7 bg-transparent head-text" placeholder="Search Message" 
                            aria-label="search message" aria-describedby="button-addon2" />
                            <button className="btn prime-btn rounded-2 py-1 px-2 fs-7" type="button" id="button-addon2">
                                <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                            <div className="d-flex flex-wrap align-items-center gap-2">
                                <button className="btn prime-btn flex-grow-1 fs-7 rounded-2 p-1 rounded-0">all <sup className="fs-9 fw-bold">[ 12 ]</sup> </button>
                                <button className="btn second-btn flex-grow-1 fs-7 rounded-2 p-1 rounded-0">read <sup className="fs-9 fw-bold">[ 4 ]</sup> </button>
                                <button className="btn yellow-btn flex-grow-1 fs-7 rounded-2 p-1 rounded-0">unread <sup className="fs-9 fw-bold">[ 8 ]</sup> </button>
                                <button className="btn tertiary-btn flex-grow-1 fs-7 rounded-2 p-1 rounded-0">starred <sup className="fs-9 fw-bold">[ 2 ]</sup> </button>
                            </div>
                    </div>
                    <div id="notification">
                        {NotificationList.map((notification) => (
                            <div key={notification.id} className={notification.Classname}>
                                <Link to="#" className="px-2 starred">
                                    <FontAwesomeIcon icon={faStar} className="head-text" />
                                </Link>
                                <Link to="#" className="flex-grow-1 liveToastBtn message-content" data-toast-id="toast1" onClick={handleShowToast}>
                                    <div>
                                        <h2 className="text-capitalize head-text message-text fs-6 mb-1 text-start">
                                            {notification.task}
                                        </h2>
                                        <p className="text-capitalize head-text fs-8 m-0 fw-semibold text-start">
                                            {notification.date}
                                        </p>
                                    </div>
                              </Link>
                        </div>
                        ))}
                    </div> 
                </div>
            </div>
            <div className="toast-container position-fixed top-0 start-50 translate-middle-x mt-4 border rounded">
                <div id="toast1" className="toast card-bg border-0" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header card-bg">
                    {/* <img src="..." className="rounded me-2" alt="..." /> */}
                    <strong className="me-auto second-text fs-5">
                        <i className="fa-regular fa-bell second-text"></i> 
                    Notification</strong> 
                    <button type="button" className="btn-close shadow-none" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                    <p className="m-0 fs-8 mb-1">12-16-2024</p>
                    <p className="m-0 mb-2 fs-5 fw-semibold second-text text-capitalize "> your account password has been changed </p>
                    <p className="m-0 fs-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias quod odit dolorum excepturi id.</p>
                    </div>
                </div>
            </div> 
        </>
    )
}
export default Notification;
