import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import PageTitle from "../../components/Common/PageTitle";
import { useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { initializeCollapseCards, handleSingleToggle } from "../../assets/collapseHandler";
function EventCalendar() {

    const externalEventsRef = useRef(null);

    useEffect(() => {
        initializeCollapseCards();
        document.querySelectorAll(".togglecard").forEach((toggle) => {
            toggle.addEventListener("click", handleSingleToggle);
        });

        // Make external events draggable
        let draggable = null;
        if (externalEventsRef.current) {
            draggable = new Draggable(externalEventsRef.current, {
                itemSelector: ".fc-event",
                eventData: function (eventEl) {
                    return {
                        title: eventEl.innerText.trim(),
                    };
                },
            });
        }

        // Cleanup to prevent duplicate Draggable instances (e.g. React StrictMode)
        return () => {
            if (draggable) {
                draggable.destroy();
            }
        };
    }, []);

    return (
        <>
         <PageTitle title="Event Calendar" />
            <div className="row flex-row-reverse g-3">
                <div className="col-xxl-9">
                    <div className="collapse-card  card-bg rounded-3">
                        <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
                            event calendar
                            <Link to="#" onClick={handleSingleToggle} className="togglecard fs-6 head-text" aria-expanded="true"  >
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                        </h2>
                        
                        <div className="collapse show p-3" id="calenderbox">
                            <div id="calendar">
                                <FullCalendar plugins={[
                                        dayGridPlugin,
                                        timeGridPlugin,
                                        interactionPlugin
                                    ]}

                                    eventReceive={(info) => {

                                            info.event.setProp("backgroundColor", "#6f42c1");

                                            info.event.setProp("borderColor", "#6f42c1");

                                            info.event.setProp("textColor", "#ffffff");
                                            /* Add clock icon dynamically */
                                        info.event.setProp(
                                            "title",
                                            ` ${info.event.title}`
                                        );

                                        }}
                                        eventDidMount={(info) => {
                                        info.el.classList.add("p-2");
                                        }}

                                    initialView="timeGridWeek"

                                    headerToolbar={{
                                        left: "timeGridWeek,dayGridMonth,timeGridDay,today",
                                        center: "title",
                                        right: "prev,next",
                                    }}
                                    height="750px"
                                    editable={true}
                                    droppable={true}
                                    selectable={true}

                                    slotMinTime="10:00:00"
                                    slotMaxTime="21:00:00"
                                    
                                    drop={(info) => {
                                        const checkbox =
                                            document.getElementById("drop-remove");

                                        if (checkbox.checked) {
                                            info.draggedEl.parentNode.removeChild(
                                                info.draggedEl
                                            );
                                        }
                                    }}  />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xxl-3">
                    <div className="collapse-card card-bg h-100 rounded-3">
                        <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
                            add events
                            <Link to="#" onClick={handleSingleToggle} className="togglecard fs-6 head-text" aria-expanded="true"  >
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                        </h2>
                        <div className="collapse show p-3" id="addeventbox">
                            <div id="external-events" ref={externalEventsRef}>
                                <p className="mb-2 d-flex align-items-center gap-1">
                                    <input  type="checkbox"  id="drop-remove"  defaultChecked/>
                                    <label htmlFor="drop-remove" className="text-capitalize fs-7 para-text fw-semibold">
                                        remove after drop
                                    </label>
                                </p>
                                <div className="d-flex flex-wrap gap-1 mb-3">

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>Code Review Jams</div>
                                    </div>

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>Developer Bootcamps</div>
                                    </div>

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>Innovation Sprints</div>
                                    </div>

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>API Development Contests</div>
                                    </div>

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>Dev Showcases</div>
                                    </div>

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>Open-Source Contribution Days</div>
                                    </div>

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>Bug Bash Days</div>
                                    </div>

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>Code Retreats</div>
                                    </div>

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>AI/ML Hackathons</div>
                                    </div>

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>UX Collaboration Workshops</div>
                                    </div>

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>DevOps Days</div>
                                    </div>

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>Project Retrospectives</div>
                                    </div>

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>Tech Stack Showcase</div>
                                    </div>

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>Lunch</div>
                                    </div>

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>Meeting</div>
                                    </div>

                                    <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                                        <div className='fc-event-main'>(CI/CD) Challenges</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventCalendar;