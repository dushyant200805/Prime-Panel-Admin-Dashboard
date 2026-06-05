import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { initializeCollapseCards, handleSingleToggle } from "../../../assets/collapseHandler";
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
import { Link } from "react-router";

const UserTable = () => {
  const tableRef1 = useRef(null);

  useEffect(() => {
  initializeCollapseCards();
}, []);

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
        },
        {
            id: 2,
            task: "Build login page with validation",
            team: "Development Team",
            date: "12/07/2024",
        },
        {
            id: 3,
            task: "Create promotional email template",
            team: "Marketing Team",
            date: "12/10/2024",
        },
        {
            id: 4,
            task: "Test responsive design",
            team: "QA Team",
            date: "12/09/2024",
        },
        {
            id: 5,
            task: "Organize team meeting",
            team: "HR Team",
            date: "12/11/2024",
        },
        {
            id: 6,
            task: "Update project timeline",
            team: "Project Management",
            date: "12/12/2024",
        },
        {
            id: 7,
            task: "Fix navigation menu bug",
            team: "Development Team",
            date: "12/13/2024",
        },
        {
            id: 8,
            task: "Design user testimonials section",
            team: "Design Team",
            date: "12/14/2024",
        },
        {
            id: 9,
            task: "Optimize website for SEO",
            team: "SEO Team",
            date: "12/15/2024",
        },
        {
            id: 10,
            task: "Create user authentication system",
            team: "Development Team",
            date: "12/16/2024",
        },
    ];
  

  return (
     <div className="card collapse-card h-100 border-0 shadow-sm rounded-3">
                <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">Task planning
                  <Link to="#" onClick={handleSingleToggle} className="togglecard fs-6 head-text" aria-expanded="true"  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </Link>
                </h2>
                <div className="collapse  data-entries show p-3" id="dashtable">
                     <table ref={tableRef1}   className="table table-striped table-bordered" style={{ width: "100%" }} >
                        <thead>
                              <tr>
                                  <th>S.no</th>
                                  <th>Date</th>
                                  <th>Task</th>
                                  <th>Team</th>
                              </tr>
                          </thead>
                        <tbody>
                            {taskList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.date}</td>
                                        <td>{item.task}</td>
                                        <td>
                                            <div className="d-inline-flex img-box">
                                                <img src="public/ms3.jpg" width="25" height="25" className="object-fit-cover rounded-circle" alt="" />
                                                <img src="public/ms4.jpg" width="25" height="25" className="object-fit-cover rounded-circle" alt="" />
                                                <img src="public/ms2.jpg" width="25" height="25" className="object-fit-cover rounded-circle" alt="" />
                                            </div>
                                            {item.team}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                  </table>
                </div>
      </div>          
  );
};

export default UserTable;
