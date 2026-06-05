import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Chart from 'react-apexcharts';
import { initializeCollapseCards, handleSingleToggle } from "../../../assets/collapseHandler";
import { useEffect } from "react";
function ChartUI7({ showTitle = true }) {

    useEffect(() => {
    initializeCollapseCards();
  }, []);

    const series = [
    {
      data: [
      {
          x: '2008',
          y: [2800, 4500],
          fillColor: '#6737F5'
      },
      {
          x: '2009',
          y: [3200, 4100],
          fillColor: '#6737F5'
      },
      {
          x: '2010',
          y: [2950, 7800],
          fillColor: '#6737F5'
      },
      {
          x: '2011',
          y: [3000, 4600],
          fillColor: '#6737F5'
      },
      {
          x: '2012',
          y: [3500, 4100],
          fillColor: '#6737F5'
      },
      {
          x: '2013',
          y: [4500, 6500],
          fillColor: '#6737F5'
      },
      {
          x: '2014',
          y: [4100, 5600],
          fillColor: '#6737F5'
      }
      ]
    },
  ];

  const options = {
    chart: {
      height: 400,
      type: "rangeBar",
      zoom: { enabled: false },
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 3,
        dumbbellColors: [["#6737F5", "#4737F5"]],
      },
    },
    legend: {
      show: true,
      position: "top",
      fontSize: "14px",
      horizontalAlign: "left",
      customLegendItems: ["Product A", "Product B"],
      markers: {
        fillColors: ["#6737F5", "#4737F5"],
        size: 8,
      },
    },
    grid: {
      borderColor: "#e0e0e0",
      strokeDashArray: 4,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
    },
    xaxis: {
      tickPlacement: "on",
    },
  };
  return (
    <>
      <div className="card collapse-card border-0 shadow-sm rounded-3 position-relative">
        {showTitle && <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">activities
          <Link to="#"  onClick={handleSingleToggle}  className="togglecard fs-6 head-text"> 
           <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </h2>}
        <div className={`${showTitle ?"collapse":""} show  p-2`}>
           <Chart options={options} series={series} type="rangeBar" height={"375"} />
        </div>
      </div>
    </>
  )
}

export default ChartUI7