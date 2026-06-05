import React from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { initializeCollapseCards, handleSingleToggle } from "../../../assets/collapseHandler";
import { useEffect } from "react";

const ChartUI6 = ({ showTitle = true }) => {

    useEffect(() => {
    initializeCollapseCards();
  }, []);
  const series = [
    {
      name: "In-Progress Task",
      data: [80, 50, 30, 40, 100, 20],
      color: "#FF7F50",
    },
    {
      name: "Completed Task",
      data: [20, 30, 40, 80, 20, 80],
      color: "#4CAF50",
    },
    {
      name: "New Task",
      data: [44, 76, 78, 13, 43, 10],
      color: "#1E90FF",
    },
  ];

  const options = {
    chart: {
      type: "radar",
      height: 400,
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
      },
    },
    stroke: {
      width: 2,
      curve: "smooth",
    },
    fill: {
      opacity: 0.2,
    },
    grid: {
      show: false,
    },
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColors: ["#FF7F50", "#4CAF50", "#1E90FF"],
      strokeWidth: 2,
    },
    yaxis: {
      show: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
      labels: {
        style: {
          colors: "#333",
          fontSize: "13px",
          fontWeight: 500,
        },
      },
    },
    tooltip: {
      enabled: true,
      theme: "light",
      style: {
        fontSize: "12px",
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: { height: 350 },
        },
      },
    ],
  };

  return (
     <>
     <div className="card collapse-card h-100 border-0 shadow-sm rounded-3">  
            {showTitle && <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
                year overview 
                <Link to="#"  onClick={handleSingleToggle}  className="togglecard fs-6 head-text"> 
                   <FontAwesomeIcon icon={faChevronDown} />
                </Link>
            </h2>}
                <div className={`${showTitle ?"collapse":""} show  p-2`}>
                    <Chart options={options} series={series} type="radar" height={400}/>
                </div>
        </div> 
     </>
  );
};

export default ChartUI6;