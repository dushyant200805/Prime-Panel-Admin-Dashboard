import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faAnglesLeft,
  faAnglesRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { initializeCollapseCards, handleSingleToggle } from "../../assets/collapseHandler";
import { useEffect } from "react";


function CalendarUI() {

  useEffect(() => {
  initializeCollapseCards();
}, [])

  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Days count
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // First day index
  const firstDay = new Date(year, month, 1).getDay();

  // Previous / Next Month
  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="card collapse-card h-100 border-0 shadow-sm rounded-3 position-relative">
      <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">

        Holiday Calendar
            <Link to="#"  onClick={handleSingleToggle}  className="togglecard fs-6 head-text" aria-expanded="true"  >
             <FontAwesomeIcon icon={faChevronDown} />
           </Link>

      </h2>
      <div className="calendar collapse show p-2 ">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center gap-2">
            <span className="current-month head-text">{months[month]}</span>

            <button className="btn prime-btn rounded-3" onClick={prevMonth} style={{ cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button className="btn prime-btn rounded-3" onClick={nextMonth} style={{ cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          <div className="d-flex align-items-center head-text gap-2">
            <span>{year}</span>

            <button
              className="btn prime-btn rounded-3"
              onClick={() => setYear(year - 1)}
              style={{ cursor: 'pointer' }}
            >
              <FontAwesomeIcon icon={faAnglesLeft} />
            </button>

            <button
              className="btn prime-btn rounded-3"
              onClick={() => setYear(year + 1)}
              style={{ cursor: 'pointer' }}
            >
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="d-block mb-3 prime-bg text-white py-2 rounded text-center fs-5">
          {months[month]} {year}
        </div>

        {/* Week Days */}
        <div className="row g-2 mb-2">
          {days.map((day) => (
            <div key={day} className="col text-center">
              <div className="border light-border head-text rounded-3 py-2 px-2 fw-medium smal">{day}</div>
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="row g-2">
          {/* Empty spaces */}
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="col-2 text-center">
              <div className="border light-border rounded-3 py-2" style={{ color: "transparent" }}>
                0
              </div>
            </div>
          ))}

          {/* Dates */}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const date = index + 1;

            const isToday =
              date === today.getDate() &&
              month === today.getMonth() &&
              year === today.getFullYear();

            return (
              <div className=" col-2 text-center" key={date}>
                <div className={`border light-border head-text rounded-3 py-2 ${isToday ? "prime-bg text-white fw-bold  calendar-day" : ""}`} style={{ cursor: 'pointer' }}>
                  {date}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CalendarUI;
