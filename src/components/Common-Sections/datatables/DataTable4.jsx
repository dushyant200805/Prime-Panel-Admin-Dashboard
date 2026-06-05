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
            amount: "$500",
            date: "12/06/2024",
            paymentMethod: "Credit Card",           
            paymentProgress: 50,
            progressbg:"bg-success"
        },
        {
            id: 2,
            name: "Jane Smith",
            amount: "$1500",
            date: "12/07/2024",
            paymentMethod: "PayPal",          
            paymentProgress: 100,
            progressbg:"bg-success",
        },
        {
            id: 3,
            name: "Bob Johnson",
            amount: "$2000",
            date: "12/08/2024",
            paymentMethod: "Bank Transfer",     
            paymentProgress: 75,
            progressbg:"bg-warning"
        },
        {
            id: 4,
            name: "Alice Johnson",
            amount: "$2500",
            date: "12/09/2024",
            paymentMethod: "Credit Card",
            paymentProgress: 25,
            progressbg:"bg-danger"
        },
        {
            id: 5,
            name: "Charlie Wilson",
            amount: "$3000",
            date: "12/10/2024",
            paymentMethod: "PayPal",
            paymentProgress: 100,
            progressbg:"bg-success",
        },
        {
            id: 6,
            name: "David Miller",
            amount: "$3500",
            date: "12/11/2024",
            paymentMethod: "Bank Transfer",
            paymentProgress: 75,
            progressbg:"bg-warning"
        },
        {
            id: 7,
            name: "Eve Davis",
            amount: "$4000",
            date: "12/12/2024",
            paymentMethod: "Credit Card",
            paymentProgress: 50,
            progressbg:"bg-danger"
        },
        {
            id: 8,
            name: "Frank Wilson",
            amount: "$4500",
            date: "12/13/2024",
            paymentMethod: "PayPal",
            paymentProgress: 100,
            progressbg:"bg-success",
        },
        {
            id: 9,
            name: "Grace Lee",
            amount: "$5000",
            date: "12/14/2024",
            paymentMethod: "Bank Transfer",
            paymentProgress: 75,
            progressbg:"bg-warning"
        },
        {
            id: 10,
            name: "Henry Moore",
            amount: "$5500",
            date: "12/15/2024",
            paymentMethod: "Credit Card",
            paymentProgress: 25,
            progressbg:"bg-info"
        },

    ];
  

  return (
     
                     <table ref={tableRef1}   className="table table-striped table-bordered" style={{ width: "100%" }} >
                        <thead>
                              <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Payment</th>
                                    <th>Payment Method</th>
                                    <th>Total</th>
                              </tr>
                          </thead>
                        <tbody>
                            {taskList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.date}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.paymentMethod}</td>
                                        <td>
                                        <div className="progress rounded-pill">
                                            <div className={`progress-bar rounded-pill text-white fs-9 ${item.progressbg}`} style={{ width: `${item.paymentProgress}%` }}>{item.paymentProgress}%</div>
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
