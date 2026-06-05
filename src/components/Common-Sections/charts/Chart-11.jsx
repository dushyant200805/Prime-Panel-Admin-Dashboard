
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { initializeCollapseCards, handleSingleToggle } from "../../../assets/collapseHandler";
import { useEffect } from "react";

function ChartUI10({ showTitle = true }) {

  useEffect(() => {
  initializeCollapseCards();
}, []);

  // ✅ Randomize function (converted)
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
      id: "sparkline2",
      group: "sparklines4",
      type: "area",
      height: 100,
      sparkline: { enabled: true },
    },
    stroke: {
       curve: 'stepline',
       width: 2
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
    colors: ["#CBD5E1"],
    title: {
      text: "$50000",
      offsetX: 0,
      style: {
        fontSize: "20px",
       cssClass: 'apexcharts-yaxis-title'
      },
    }
  };

  return (
        <div className="card collapse-card   border-0 shadow-sm rounded-3"> 
            <div className="text-end">
                {showTitle && <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
                  target 
                  <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                     <FontAwesomeIcon icon={faChevronDown} />
                 </Link>
                </h2>}
            </div> 
                <div  className={`${showTitle ?"collapse":""} show  p-2`}>
                    <Chart options={options} series={series} type="area" height={"120"} />
                </div> 
        </div>
  );
}

export default ChartUI10;