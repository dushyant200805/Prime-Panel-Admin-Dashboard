import React from "react";
import Chart from "react-apexcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { initializeCollapseCards, handleSingleToggle } from "../../../assets/collapseHandler";
import { useEffect } from "react";

function ChartUI4({name, showTitle = true }) {
    
  useEffect(() => {
  initializeCollapseCards();
}, []);
    const series = [
        {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 40, 50, 35],
            color: "#1997F5",
        },
        {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 70, 80, 75],
            color: "#9737F5",
        },
        {
            name: "Free Cash Flow",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 90, 100, 50],
            color: "#1837F5",
        },
    ];

    const options = {
        chart: {
            type: "bar",
            height: 400,
            stacked: true,
            toolbar: {
                show: true,
            },
            zoom: {
                enabled: true,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "30%",
                borderRadius: 5,
                borderRadiusApplication: "end",
                dataLabels: {
                    position: "top",
                },
            },
        },
        dataLabels: {
            enabled: false,
            formatter: (val) => `${val}k`,
        },
        stroke: {
            show: true,
            width: 1,
            colors: ["#fff"],
        },
        grid: {
            borderColor: "#e0e0e0",
            strokeDashArray: 5,
        },
        xaxis: {
            categories: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ],
            labels: {
                style: {
                    colors: "#5a5a5a",
                    fontSize: "12px",
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#916464",
                    fontSize: "12px",
                },
                formatter: (val) => `${val}k`,
            },
        },
        legend: {
            show: true,
            position: "top",
            horizontalAlign: "left",
            fontSize: "14px",
            fontWeight: "bold",
            labels: {
                colors: "#5a5a5a",
            }
        },
        annotations: {
            yaxis: [
                {
                    y: 100,
                    borderColor: "#FF5733",
                    label: {
                        style: {
                            color: "#fff",
                            background: "#FF5733",
                        },
                        text: "High Revenue",
                    },
                },
            ],
        },
        responsive: [
            {
                breakpoint: 768,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: "60%",
                        },
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
        tooltip: {
            theme: "dark",
            y: {
                formatter: (val) => `$ ${val}K`,
            },
        },
    };





    return (
        <div className="card collapse-card  border-0 shadow-sm rounded-3" >
            <div className="d-flex justify-content-between align-items-center border-bottom light-border-bottom p-2">
                {showTitle && <h2 className="fs-6 m-0 fw-bold text-capitalize head-text"> timeline</h2>}
                <Link to="#"  onClick={handleSingleToggle}  className="togglecard fs-6 head-text" >
                    <FontAwesomeIcon icon={faChevronDown} />
                </Link>
            </div>
            <div id="ds4" className={`${showTitle ?"collapse":""} show  p-2`}>
                <Chart options={options} series={series} type="bar" height={380} />
            </div>

        </div >
    );
}

export default ChartUI4;