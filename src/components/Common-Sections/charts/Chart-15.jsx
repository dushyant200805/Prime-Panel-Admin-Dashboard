import React from "react";
import Chart from "react-apexcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { initializeCollapseCards, handleSingleToggle } from "../../../assets/collapseHandler";
import { useEffect } from "react";
import { Link } from "react-router";
function ChartUI15({ showTitle = true }) {
    useEffect(() => {
  initializeCollapseCards();
}, []);
  // Generate Random Data
  const generateDayWiseTimeSeries = (baseval, count, yrange) => {
    let series = [];

    for (let i = 0; i < count; i++) {
      const x = baseval;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
        yrange.min;

      series.push([x, y]);
      baseval += 86400000; // 1 day
    }

    return series;
  };

  const series = [
    {
      name: "South",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: "North",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        {
          min: 10,
          max: 20,
        }
      ),
    },
    {
      name: "Central",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        {
          min: 10,
          max: 15,
        }
      ),
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 400,
      stacked: true,

      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min));
        },
      },

      toolbar: {
        show: false,
      },
    },

    colors: ["#008FFB", "#00E396", "#CED4DC"],

    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "straight",
      width: 2,
    },

    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      },
    },

    legend: {
      position: "top",
      horizontalAlign: "left",
      fontSize: "18px",
    },

    xaxis: {
      type: "datetime",

      labels: {
        show: false,
      },

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      show: false,

      labels: {
        show: false,
      },

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },
    },

    grid: {
      show: false,
    },
  };

  return (
    <div className="card collapse-card   border-0 shadow-sm rounded-3">
      
      {showTitle &&<h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
        Global Ratings
         <Link to="#"  onClick={handleSingleToggle}  className="togglecard fs-6 head-text" aria-expanded="true"  >
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
      </h2>}

      <div  className={`${showTitle ?"collapse":""} show  p-2`}>
        <Chart options={options}  series={series}  type="area" height={350} />
      </div>
    </div>
  );
}

export default ChartUI15;