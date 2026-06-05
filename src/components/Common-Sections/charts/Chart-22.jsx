import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Chart from 'react-apexcharts';
import { initializeCollapseCards, handleSingleToggle } from "../../../assets/collapseHandler";
import { useEffect } from "react";


function ChartUI22({ showTitle = true }) {

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
      id: 'sparkline3',
          group: 'sparklines5',
          type: 'area', 
          height: 150,
          sparkline: {
              enabled: true
          },
    },
    stroke: {
      curve: 'stepStart',
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
    colors: ['#0E5E64'],
    title: {
     text: '$424,652',
          offsetX: 0,
          style: {
              fontSize: '16px',
              cssClass: 'apexcharts-yaxis-title'
          }
    },
   
  };

  return (
    <div>
      <div className="card collapse-card  border-0 shadow-sm rounded-3">
        <div className="text-end">
          {showTitle && <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
            expenses
            <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                <FontAwesomeIcon icon={faChevronDown} />
            </Link>
          </h2>}
        </div>
        <div id="ds2-3" className={`${showTitle ?"collapse":""} show  p-2`}>
          <Chart options={options} series={series} type="area" height={"100"} />
        </div>
      </div>
    </div>
  )
}

export default ChartUI22