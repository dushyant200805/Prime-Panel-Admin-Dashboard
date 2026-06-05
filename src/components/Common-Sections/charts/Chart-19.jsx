import React from "react";
import Chart from "react-apexcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { initializeCollapseCards, handleSingleToggle } from "../../../assets/collapseHandler";
import { useEffect } from "react";
import { Link } from "react-router";
function ChartUI19({ showTitle = true }) {
    useEffect(() => {
  initializeCollapseCards();
}, [])

  // Generate Random Data
  const generateData = (baseval, count, yrange) => {
    const data = [];

    for (let i = 0; i < count; i++) {
      const x = baseval + i * 86400000;

      const y =
        Math.floor(
          Math.random() * (yrange.max - yrange.min + 1)
        ) + yrange.min;

      const z = Math.floor(Math.random() * (75 - 15 + 1));

      data.push({
        x: new Date(x).toISOString().split("T")[0],
        y,
        z,
      });
    }

    return data;
  };

  const series = [
    {
      name: "Bubble1",
      data: generateData(
        new Date("11 Dec 2024 GMT").getTime(),
        20,
        { min: 10, max: 60 }
      ),
    },

    {
      name: "Bubble2",
      data: generateData(
        new Date("11 Dec 2024 GMT").getTime(),
        20,
        { min: 10, max: 60 }
      ),
    },

    {
      name: "Bubble3",
      data: generateData(
        new Date("11 Dec 2024 GMT").getTime(),
        20,
        { min: 10, max: 60 }
      ),
    },

    {
      name: "Bubble4",
      data: generateData(
        new Date("11 Dec 2024 GMT").getTime(),
        20,
        { min: 10, max: 60 }
      ),
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "bubble",

      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },

    fill: {
      opacity: 0.8,
    },

    xaxis: {
      type: "category",

      labels: {
        rotate: -45,

        formatter: function (value) {
          const date = new Date(value);

          const mm = String(date.getMonth() + 1).padStart(
            2,
            "0"
          );

          const dd = String(date.getDate()).padStart(2, "0");

          const yy = String(date.getFullYear()).slice(-2);

          return `${mm}-${dd}-${yy}`;
        },
      },

      tickAmount: 12,
    },

    yaxis: {
      max: 70,
    },

    legend: {
      position: "top",
      horizontalAlign: "left",
      fontSize: "14px",
    },
  };

  return (
    <div className="card collapse-card  border-0 shadow-sm rounded-3">

      {showTitle && <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
        Random Data Distributions

        <Link to="#"  onClick={handleSingleToggle}  className="togglecard fs-6 head-text" aria-expanded="true"  >
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
      </h2>
      }
      <div className={`${showTitle ?"collapse":""} show  p-2`}>
        <Chart options={options} series={series} type="bubble"  height={350}  />
      </div>
    </div>
  );
}

export default ChartUI19;