import{ useEffect, useRef } from "react";

import $ from "jquery";
window.$ = $;
window.jQuery = $;

// DataTable

import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";

// Responsive
import "datatables.net-responsive-bs5";
import "datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DataTable2 = () => {
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

    const taskList = [
        {
            id: 1,
            task: "Create homepage banner designs",
            team: "Design Team",
            date: "12/06/2024",
            day: "Wednesday",
            assignTo: "John Smith"
        },
        {
            id: 2,
            task: "Build login page with validation",
            team: "Development Team",
            date: "12/07/2024",
            day: "Thursday",
            assignTo: "Alice Johnson"
        },
        {
            id: 3,
            task: "Create promotional email template",
            team: "Marketing Team",
            date: "12/10/2024",
            day: "Sunday",
            assignTo: "Sarah Taylor"
        },
        {
            id: 4,
            task: "Test responsive design",
            team: "QA Team",
            date: "12/09/2024",
            day: "Monday",
            assignTo: "Michael Brown"
        },
        {
            id: 5,
            task: "Organize team meeting",
            team: "HR Team",
            date: "12/11/2024",
            day: "Tuesday",
            assignTo: "Emily Davis"
        },
        {
            id: 6,
            task: "Update project timeline",
            team: "Project Management",
            date: "12/12/2024",
            day: "Wednesday",
            assignTo: "Oliver King"
        },
        {
            id: 7,
            task: "Fix navigation menu bug",
            team: "Development Team",
            date: "12/13/2024",
            day: "Thursday",
            assignTo: "Alice Johnson"
        },
        {
            id: 8,
            task: "Design user testimonials section",
            team: "Design Team",
            date: "12/14/2024",
            day: "Friday",
            assignTo: "Emma Brown"
        },
        {
            id: 9,
            task: "Optimize website for SEO",
            team: "SEO Team",
            date: "12/15/2024",
            day: "Saturday",
            assignTo: "David Miller"
        },
        {
            id: 10,
            task: "Create user authentication system",
            team: "Development Team",
            date: "12/16/2024",
            day: "Sunday",
            assignTo: "Alice Johnson"
        },
    ];
  

  return (
     
               
                
                     <table ref={tableRef1}   className="display table-striped table-bordered" style={{ width: "100%" }} >
                        <thead>
                              <tr>
                                <th>S.no</th>
                                <th>Date</th>
                                <th>Day</th>
                                <th>Task</th>
                              </tr>
                          </thead>
                        <tbody>
                            {taskList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.date}</td>
                                        <td>{item.day}</td>
                                        <td>{item.task}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                  </table>
               
              
  );
};

export default DataTable2;
