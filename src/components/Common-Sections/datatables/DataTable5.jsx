import React, { useEffect, useRef } from "react"
import Chart from "react-apexcharts";

function DataTable5() {
      const tableRef1 = useRef(null);

  useEffect(() => {
     // Table 1
  
    const table = $(tableRef1.current).DataTable({
        responsive: true,
      lengthMenu: [6, 15, 20, 25],
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
      date: "12/06/2024",
      day: "Wednesday",
      assign: "John Smith",
      team: "Design Team",
    },
    {
      id: 2,
      date: "12/07/2024",
      day: "Thursday",
      assign: "Alice Johnson",
      team: "Development Team",
    },
    {
      id: 3,
      date: "12/08/2024",
      day: "Friday",
      assign: "Emma Brown",
      team: "Content Team",
    },
    {
      id: 4,
      date: "12/09/2024",
      day: "Saturday",
      assign: "Mark Wilson",
      team: "QA Team",
    },
    {
      id: 5,
      date: "12/10/2024",
      day: "Thursday",
      assign: "Sarah Taylor",
      team: "Marketing Team",
    },
    {
      id: 6,
      date: "12/11/2024",
      day: "Monday",
      assign: "Oliver King",
      team: "HR Team",
    },
    {
      id: 7,
      date: "12/12/2024",
      day: "Tuesday",
      assign: "Emily Davis",
      team: "Project Management",
    },
    {
      id: 8,
      date: "12/13/2024",
      day: "Wednesday",
      assign: "Chris Brown",
      team: "Development Team",
    },
    {
      id: 9,
      date: "12/14/2024",
      day: "Thursday",
      assign: "Lisa White",
      team: "Design Team",
    },
    {
      id: 10,
      date: "12/15/2024",
      day: "Friday",
      assign: "David Moore",
      team: "SEO Team",
    },
  ];

  // Random Chart Data
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

  const createSeries = () => {
    return [
      {
        name: "Data",

        data: Array.from(
          { length: 10 },
          () => Math.floor(Math.random() * 100)
        ),
      },
    ];
  };

  return (

    <table ref={tableRef1}  id="datamain2"className="table table-striped table-bordered align-middle">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Date</th>
          <th>Day</th>
          <th>Chart</th>
          <th>Assign To</th>
          <th>Team</th>
        </tr>

      </thead>

      <tbody>

        {tableData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.date}</td>
            <td>{item.day}</td>
            <td>
              <Chart options={createChartOptions()} series={createSeries()} type="area" height={30} width={150}/>
            </td>
            <td>{item.assign}</td>
            <td>{item.team}</td>
          </tr>
        ))}
      </tbody>
    </table>

  );
}

export default DataTable5;