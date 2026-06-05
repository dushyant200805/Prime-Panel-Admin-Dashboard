import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Chart from 'react-apexcharts';
import { initializeCollapseCards, handleSingleToggle } from "../../../assets/collapseHandler";
import { useEffect } from "react";
function ChartUI2({ showTitle = true} ) {
  useEffect(() => {
  initializeCollapseCards();
}, []);
  const series = [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100],
    color: '#2638F2',
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41],
    color: '#6737F5',
  }];

  const options = {
    chart: {
      height: 50,
      type: 'area',
      toolbar: {
        show: false // Hide toolbar
      },
      animations: {
        enabled: false // Disable animations if needed
      },
      width: '100%', // Ensure full width
      sparkline: {
        enabled: true // Removes axes, grid, and margins
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
      labels: {
        show: false // Hide x-axis labels
      }
    },
    yaxis: {
      labels: {
        show: false // Hide y-axis labels
      }
    },
    grid: {
      show: false // Remove grid lines
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  };

  return (
    <div>
      <div className="card collapse-card  border-0 shadow-sm rounded-3">
        {showTitle && <h2 className="fs-6 m-0 light-border-bottom border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
          series Report
          <Link to="#"  className="togglecard  fs-6 head-text"  aria-expanded="true"  onClick={handleSingleToggle} >
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </h2>}
        <div id="ds2" className={`${showTitle ?"collapse":""} show  p-2`}>
          <Chart options={options} series={series} type="area" height={"100"} />
        </div>
      </div>
    </div>
  )
}

export default ChartUI2