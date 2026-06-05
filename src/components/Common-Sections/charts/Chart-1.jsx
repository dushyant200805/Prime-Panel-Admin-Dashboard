
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { initializeCollapseCards, handleSingleToggle } from "../../../assets/collapseHandler";
import { useEffect } from "react";
function ChartUI1({ showTitle = true }) {
  useEffect(() => {
  initializeCollapseCards();
}, []);
  const randomizeArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const sparklineData = [
    10, 15, 20, 25, 30, 35, 40, 45,
    50, 55, 60, 65, 70, 75, 80, 85,
    90, 95, 100, 105, 110, 115, 120, 125
  ];

  const series = [
    {
      name: "hours",
      data: randomizeArray(sparklineData),
    },
  ];

  const options = {
    chart: {
      id: "sparkline1",
      group: "sparklines",
      type: "area",
      height: 50,
      sparkline: { enabled: true },
    },
    stroke: {
      curve: "stepline",
      width: 2,
    },
    fill: {
      opacity: 1,
    },
    labels: [...Array(24).keys()].map(n => `2018-09-${String(n + 1).padStart(2, "0")}`),
    yaxis: {
      min: 0,
    },
    xaxis: {
      type: "datetime",
    },
    colors: ["#38BDF8"],
    title: {
      text: "700 hours",
      offsetX: -10,
      offsetY: -3.5,
      style: {
        fontSize: "16px",
        cssClass: 'apexcharts-yaxis-title',
        color: "#5a5a5a",
      },
    },
    tooltip: {
      x: { format: "dd/MM/yy" },
    },
  };



  return (
    <div className="card collapse-card border-0 shadow-sm rounded-3 " >
      <div className="d-flex justify-content-between align-items-center border-bottom light-border-bottom p-2">
        {showTitle && <h2 className="fs-6 m-0 fw-bold head-text text-capitalize">
          Work Report
        </h2>}
        <Link  to="#"  className="togglecard fs-6 head-text"  onClick={handleSingleToggle} >
          <FontAwesomeIcon icon={faChevronDown} id="dropIcon"  />
        </Link>
      </div>

      <div id="ds1" className={`${showTitle ?"collapse":""} show  p-2`}>
        <Chart options={options} series={series} type="area" height={"95"} />
      </div>
    </div>
  );
}

export default ChartUI1;