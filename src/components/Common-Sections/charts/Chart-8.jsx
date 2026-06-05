import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Chart from 'react-apexcharts';
import { initializeCollapseCards, handleSingleToggle } from "../../../assets/collapseHandler";
import { useEffect } from "react";

function ChartUI8({ showTitle = true }) {

  useEffect(() => {
  initializeCollapseCards();
}, []);
  
const series = [
    {
      name: "Team A",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "Team B",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: "Team C",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ];

  const options = {
    chart: {
      height: 400,
      type: "line",
      stacked: false,
    },
    stroke: {
      width: [0, 2, 2],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    xaxis: {
      type: "datetime",
    },
    markers: {
      size: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => (y ? `${y.toFixed(0)} points` : y),
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontSize: "14px",
    },
  };
  return (
    <>
      <div className="card collapse-card border-0 shadow-sm rounded-3">
        {showTitle && <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">random data distributions
          <Link to="#"  onClick={handleSingleToggle}  className="togglecard fs-6 head-text" aria-expanded="true"> 
           <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </h2>}
        <div  className={`${showTitle ?"collapse":""} show  p-2`}>
           <Chart options={options} series={series} type="line" height={385} />
        </div>
      </div>
    </>
  )
}

export default ChartUI8