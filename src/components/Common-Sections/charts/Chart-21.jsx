import Chart from "react-apexcharts";

function ChartUI21() {

  // =========================
  // RangeBar Chart
  // =========================

  const rangeSeries = [
    {
      data: [
        {
          x: "2008",
          y: [2800, 4500],
          fillColor: "#6737F5",
        },
        {
          x: "2009",
          y: [3200, 4100],
          fillColor: "#6737F5",
        },
        {
          x: "2010",
          y: [2950, 7800],
          fillColor: "#6737F5",
        },
        {
          x: "2011",
          y: [3000, 4600],
          fillColor: "#6737F5",
        },
        {
          x: "2012",
          y: [3500, 4100],
          fillColor: "#6737F5",
        },
        {
          x: "2013",
          y: [4500, 6500],
          fillColor: "#6737F5",
        },
        {
          x: "2014",
          y: [4100, 5600],
          fillColor: "#6737F5",
        },
      ],
    },
  ];

  const rangeOptions = {
    chart: {
      height: 400,
      type: "rangeBar",

      zoom: {
        enabled: false,
      },
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
      horizontalAlign: "top",

      customLegendItems: ["Product A", "Product B"],

      markers: {
        fillColors: ["#6737F5", "#4737F5"],
        size: 8,
      },
    },

    grid: {
      borderColor: "#e0e0e0",
      strokeDashArray: 4,
    },

    xaxis: {
      tickPlacement: "on",
    },
  };

  // =========================
  // Radar Chart
  // =========================

  const radarSeries = [
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

  const radarOptions = {
    chart: {
      height: 400,
      type: "radar",

      toolbar: {
        show: false,
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
      position: "top",
      horizontalAlign: "center",
    },

    xaxis: {
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
      ],
    },
  };

  return (
    <>
      {/* Radar Chart */}
      <div className="col-6">
        <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
          Personal Details
        </h2>

        <Chart
          options={radarOptions}
          series={radarSeries}
          type="radar"
          height={"410"}
        />
      </div>

      {/* RangeBar Chart */}
      <div className="col-6">
        <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
          Progress Statics
        </h2>

        <Chart
          options={rangeOptions}
          series={rangeSeries}
          type="rangeBar"
          height={"410"}
        />
      </div>
    </>
  );
}

export default ChartUI21;