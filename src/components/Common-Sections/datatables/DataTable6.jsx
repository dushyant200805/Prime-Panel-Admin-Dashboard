import Chart from "react-apexcharts";
import React, { useEffect, useRef } from "react"
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function FlagTable() {
    const tableRef1 = useRef(null);
    
      useEffect(() => {
         // Table 1
      
        const table = $(tableRef1.current).DataTable({
            responsive: true,
          lengthMenu: [5, 15, 20, 25],
        });
    
        return () => {
          if ($.fn.DataTable.isDataTable(tableRef1.current)) {
            table.destroy();
          }
        };
      }, []);

  const tableData = [
    {
      id: 1,
      country: "India",
      flag: "public/flaglibrary/in.svg",
      progress: 70,
      progressClass: "bg-success",
    },
    {
      id: 2,
      country: "USA",
      flag: "public/flaglibrary/us.svg",
      progress: 50,
      progressClass: "bg-info",
    },
    {
      id: 3,
      country: "Iraq",
      flag: "public/flaglibrary/iq.svg",
      progress: 85,
      progressClass: "bg-warning",
    },
    {
      id: 4,
      country: "Denmark",
      flag: "public/flaglibrary/de.svg",
      progress: 40,
      progressClass: "bg-danger",
    },
    {
      id: 5,
      country: "France",
      flag: "public/flaglibrary/fr.svg",
      progress: 90,
      progressClass: "bg-success",
    },
    {
      id: 6,
      country: "Japan",
      flag: "public/flaglibrary/jp.svg",
      progress: 60,
      progressClass: "bg-info",
    },
    {
      id: 7,
      country: "Australia",
      flag: "public/flaglibrary/au.svg",
      progress: 30,
      progressClass: "bg-warning",
    },
    {
      id: 8,
      country: "Canada",
      flag: "public/flaglibrary/ca.svg",
      progress: 80,
      progressClass: "bg-success",
    },
    {
      id: 9,
      country: "Italy",
      flag: "public/flaglibrary/it.svg",
      progress: 55,
      progressClass: "bg-info",
    },
    {
      id: 10,
      country: "Brazil",
      flag: "public/flaglibrary/br.svg",
      progress: 45,
      progressClass: "bg-danger",
    },
  ];

  // Chart Options
  const createChartOptions = () => {

    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    return {
      chart: {
        type: "area",
        height: 30,
        width: 150,

        sparkline: {
          enabled: true,
        },

        toolbar: {
          show: false,
        },
      },

      stroke: {
        curve: "smooth",
        width: 2,
      },

      fill: {
        type: "gradient",

        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.2,
        },
      },

      colors: [randomColor],

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },

      tooltip: {
        enabled: false,
      },

      dataLabels: {
        enabled: false,
      },

      grid: {
        show: false,
      },
    };
  };

  // Chart Series
  const createSeries = () => {
    return [
      {name: "Data",
        data: Array.from(
          { length: 10 },
          () => Math.floor(Math.random() * 100)
        ),
      },
    ];
  };

  return (

    <table ref={tableRef1} id="datamain3" className="table table-striped table-bordered align-middle " >
      <thead>
        <tr>
          <th>Image</th>
          <th>Chart</th>
          <th>Progress</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr key={item.id}>
            {/* Country */}
            <td>
              <div className="d-flex align-items-center gap-2">
                <img src={item.flag} width="30" height="30"  className="rounded-circle" alt={item.country} />
                <p className="m-0 text-capitalize fw-semibold head-text">
                  {item.country}
                </p>
              </div>
            </td>
            {/* Chart */}
            <td>
              <Chart options={createChartOptions()} series={createSeries()}  type="area" height={30} width={150} />
            </td>

            {/* Progress */}
            <td>
              <div className="progress">
                <div
                  className={`progress-bar progress-bar-striped ${item.progressClass}`}  role="progressbar" style={{ width: `${item.progress}%` }} 
                   aria-valuenow={item.progress} aria-valuemin="0"  aria-valuemax="100" > {item.progress}%
                </div>
              </div>
            </td>
            {/* Action */}
            <td className="d-flex gap-2">
              <button className="btn yellow-btn btn-sm rounded-1 me-2">
               <i class="bi bi-eye"></i>
              </button>
              <button className="btn prime-btn btn-sm rounded-1">
                <i class="bi bi-bookmark"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>





    </table>

  );
}

export default FlagTable;