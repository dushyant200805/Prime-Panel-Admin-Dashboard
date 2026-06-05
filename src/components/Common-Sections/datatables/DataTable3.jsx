import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
window.$ = $;
window.jQuery = $;

// DataTable
import DataTable from "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";

// Responsive
import "datatables.net-responsive-bs5";
import "datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const UserTable = () => {
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
            name: "John Doe",
            amount: "$1000",
            status: "Pending",
            paymentProgressbG:"bg-success",
            paymentProgress: 100,
        },
        {
            id: 2,
            name: "Jane Smith",
            amount: "$1500",
            status: "Completed",
            paymentProgressbG:" bg-danger",
            paymentProgress: 20,
        },
        {
            id: 3,
            name: "Bob Johnson",
            amount: "$2000",
            status: "In Progress",
            paymentProgressbG:"bg-success",
            paymentProgress: 100,
        },
        {
            id: 4,
            name: "Alice Johnson",
            amount: "$2500",
            status: "Pending",
            paymentProgressbG:" bg-warning",
            paymentProgress: 50,
        },
        {
            id: 5,
            name: "Charlie Wilson",
            amount: "$3000",
            status: "Completed",
            paymentProgressbG:"bg-success",
            paymentProgress: 100,
        },
        {
            id: 6,
            name: "David Miller",
            amount: "$3500",
            status: "In Progress",
            paymentProgressbG:"bg-danger",
            paymentProgress: 30,
        },
        {
            id: 7,
            name: "Eve Davis",
            amount: "$4000",
            status: "Pending",
            paymentProgressbG:"bg-success",
            paymentProgress: 100,
        },
        {
            id: 8,
            name: "Frank Wilson",
            amount: "$4500",
            status: "Completed",
            paymentProgressbG:"bg-warning",
            paymentProgress: 40,
        },
        {
            id: 9,
            name: "Grace Lee",
            amount: "$5000",
            status: "In Progress",
            paymentProgressbG:"bg-success",
            paymentProgress: 100,
        },
        {
            id: 10,
            name: "Henry Moore",
            amount: "$5500",
            status: "Pending",
            paymentProgressbG:"bg-danger",
            paymentProgress: 10,
        },

    ];
  

  return (
     
                     <table ref={tableRef1}   className="table table-striped table-bordered" style={{ width: "100%" }} >
                        <thead>
                              <tr>
                                  <th>Name</th>
                                  <th>Amount</th>
                                  <th>Status</th>
                                  <th>Payment Progress</th>
                              </tr>
                          </thead>
                        <tbody>
                            {taskList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.status}</td>
                                        <td>
                                        <div className="progress rounded-pill">
                                            <div className={`progress-bar progress-bar-striped rounded-pill text-white fs-9
                                                 ${item.paymentProgressbG}`} style={{ width: `${item.paymentProgress}%` }}>{item.paymentProgress}%</div>
                                        </div>
                                    </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                  </table>
         
  );
};

export default UserTable;
