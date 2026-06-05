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
      lengthMenu: [4, 15, 20, 25],
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
            image: "public/tv-product.jpg",
            Sku: " lg TV @2546  Lorem ipsum dolor sit amet.",
            price: "$2000",
        },
        {
            id: 2,
            image: "public/shoes.jpg",
            Sku: " lg TV @2546  Lorem ipsum dolor sit amet.",
            price: "$2000",
        },
        {
            id: 3,
            image: "public/can.jpg",
            Sku: " lg TV @2546  Lorem ipsum dolor sit amet.",
            price: "$2000",
        },
        {
            id: 4,
            image: "public/earrings.jpg",
            Sku: " lg TV @2546  Lorem ipsum dolor sit amet.",
            price: "$2000",
        },
        {
            id: 5,
            image: "public//watch.jpg",
            Sku: " lg TV @2546  Lorem ipsum dolor sit amet.",
            price: "$2000",
        },
        {
            id: 6,
            image: "public/watch2.jpg",
            Sku: " lg TV @2546  Lorem ipsum dolor sit amet.",
            price: "$2000",
        },
        {
            id: 7,
            image: "public/tv-product.jpg",
            Sku: " lg TV @2546  Lorem ipsum dolor sit amet.",
            price: "$2000",
        },
        {
            id: 8,
            image: "public/tv-product.jpg",
            Sku: " lg TV @2546  Lorem ipsum dolor sit amet.",
            price: "$2000",
        },
        {
            id: 9,
            image: "public/tv-product.jpg",
            Sku: " lg TV @2546  Lorem ipsum dolor sit amet.",
            price: "$2000",
        },
        {
            id: 10,
            image: "public/tv-product.jpg",
            Sku: " lg TV @2546  Lorem ipsum dolor sit amet.",
            price: "$2000",
        },
    ];
  

  return (
               <div className="data-entries p-3 collapse show" id="dataentriesmain"> 
                     <table ref={tableRef1}   className="table table-striped table-bordered" style={{ width: "100%" }} >
                        <thead>
                                <tr> 
                                    <th>Product</th> 
                                    <th>Sku</th> 
                                    <th>Price</th> 
                                </tr>
                          </thead>
                        <tbody>
                            {taskList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src={`${item.image}`} width="100" height="50" className="object-fit-contain" alt=""/>
                                            </div>
                                        </td>
                                        <td>{item.Sku}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                  </table>
                </div>  
         
  );
};

export default UserTable;
