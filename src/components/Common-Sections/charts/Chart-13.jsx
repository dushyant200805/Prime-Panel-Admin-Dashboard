import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Chart from "react-apexcharts";
import { initializeCollapseCards, handleSingleToggle } from "../../../assets/collapseHandler";
import { useEffect } from "react";

function ChartUI3({ showTitle = true }) {

  useEffect(() => {
  initializeCollapseCards();
}, []);
  // Generate random series data
  const generateDayWiseTimeSeries = (baseval, count, yrange) => {
    let i = 0;
    let series = [];

    while (i < count) {
      let x = baseval;
      let y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);

      baseval += 86400000;
      i++;
    }

    return series;
  };

  // Chart series
  const series = [
    {
      name: "South",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        {
          min: 10,
          max: 60,
        },
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
        },
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
        },
      ),
    },
  ];

  // Chart options
  const options = {
    chart: {
      type: "area",
      height: 415,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
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
      fontSize: "14px",
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
    <div>
      <div className="card collapse-card  border-0 shadow-sm rounded-3">
        {showTitle && <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
            Chart Report

          <Link to="#"  onClick={handleSingleToggle}  className="togglecard fs-6 head-text" aria-expanded="true"  >
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </h2>}

        <div   className={`${showTitle ?"collapse":""} show  p-2`}>
          <Chart options={options} series={series} type="area" height={400} />
        </div>
      </div>
    </div>
  );
}

export default ChartUI3;
