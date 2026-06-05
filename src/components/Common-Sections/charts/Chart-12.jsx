
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { initializeCollapseCards, handleSingleToggle } from "../../../assets/collapseHandler";
import { useEffect } from "react";

function ChartUI12({ showTitle = true }) {

   useEffect(() => {
  initializeCollapseCards();
}, []);

   // Donut Series
  const series = [44, 55, 41, 17, 15];

  // Donut Options
  const options = {
    chart: {
      type: "donut",
      height: 95,
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },

    stroke: {
      width: 0,
    },

    colors: [
      "#2638F2",
      "#6737F5",
      "#00C49F",
      "#FEB019",
      "#FF4560",
    ],

    plotOptions: {
      pie: {
        donut: {
          size: "65%",
        },
      },
    },
  };


  return (
        <div className="card collapse-card h-100 border-0 shadow-sm rounded-3"> 
            <div className="text-end">
          {showTitle && <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
                 overview
                  <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                     <FontAwesomeIcon icon={faChevronDown} />
                 </Link>
                </h2>}

        </div>
                <div  className={`${showTitle ?"collapse":""} show  p-2`}>
                    <Chart options={options} series={series} type="donut" height={"95"} />
                </div> 
        </div>
  );
}

export default ChartUI12;