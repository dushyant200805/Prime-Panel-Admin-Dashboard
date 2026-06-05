import React, { useEffect, useRef ,useState } from "react";
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
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DataTable9 = () => {
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

    const [quantities, setQuantities] = useState({
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
});

const decreaseQuantity = (id) => {

    const currentValue = quantities[id];

    if (currentValue <= 1) {
        alert("quantity of product can't be less than 1");
        return;
    }

    setQuantities((prev) => ({
        ...prev,
        [id]: prev[id] - 1,
    }));

};

const increaseQuantity = (id) => {

    const currentValue = quantities[id];

    if (currentValue >= 10) {
        alert("your can add upto 10 products only!");
        return;
    }

    setQuantities((prev) => ({
        ...prev,
        [id]: prev[id] + 1,
    }));

};

    const taskList = [
        {
            id: 1,
            image: "public/shoes.jpg",
            ProductName:" leather dummy shoes",
            color:"gray",
            size:"compact",
            Discount:"75% off",
            Stock :"In Stock",
            price1:"$25.99",
            price2:  "$389.85",
        },
        {
            id: 2,
            image: "public/watch.jpg",
            ProductName:"gold platted watch ",
            color:"gray",
            size:"compact",
            Discount:"75% off",
            Stock :"In Stock",
            price1: "$75.99",
            price2: "$0",
        },
        {
            id: 3,
            image: "public/watch2.jpg",
            ProductName:"silver gold platted watch ",
            color:"gray",
            size:"compact",
            Discount:"75% off",
            Stock :"In Stock",
            price1: "$299.99",
            price2: "$2,399.92",
        },
        {
            id: 4,
            image: "public/tv-product.jpg",
            ProductName:"samsung led tv",
            color:"gray",
            size:"compact",
            Discount:"75% off",
            Stock :"In Stock",
            price1: "$19.99",
            price2: "$999.50",
        },
        {
            id: 5,
            image: "public/tv-product.jpg",
            ProductName:" LG TV ",
            color:"gray",
            size:"compact",
            Discount:"75% off",
            Stock :"In Stock",
            price1: "$389.85",
            price2: "$25.99",
        }
    ];
  

  return (
               <div id="cartmain" className="p-2 show"> 
                     <table ref={tableRef1}   className="display" style={{ width: "100%" }} >
                        <thead >
                                <tr> 
                                    <th >Product Name</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Availability</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-center">Total</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                          </thead>
                        <tbody>
                            {taskList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                            <td className="p-2">
                                                <div className="d-flex gap-3">
                                                    <img src={`${item.image}`}  width="100" height="80" className="rounded-2 object-fit-cover" alt=""/>
                                                    <div>
                                                        <h2 className="fs-7 prime-text fw-bold m-0 text-capitalize">
                                                            {item.ProductName}
                                                        </h2>
                                                       
                                                        <p className="m-0 text-capitalize para-text">
                                                            <span className="fw-semibold head-text">color:</span> {item.color}
                                                        </p>
                                                        <p className="m-0 text-capitalize para-text">
                                                            <span className="fw-semibold head-text">size:</span> {item.size}
                                                        </p> 
                                                        <p className="m-0 text-capitalize para-text">
                                                            <span className="fw-semibold head-text">discount:</span>
                                                            <span className="second-text fw-semibold fs-8"> {item.Discount}</span>
                                                        </p> 
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center">{item.price1}</td>
                                            <td className="text-center">
                                                <span className="second-shade border second-border px-2 rounded-pill fw-semibold fs-8 second-text">{item.Stock}</span>
                                            </td>
                                            <td >
                                                    <div className="counter ">
                                                        <button  type="button" className="decrease" onClick={() => decreaseQuantity(item.id)}>-</button>
                                                        <input type="text" className="quantity"  min="0"  value={quantities[item.id]} readOnly/>
                                                        <button  type="button" className="increase" onClick={() => increaseQuantity(item.id)}>+</button> 
                                                    </div>
                                            </td>
                                            <td className="text-center">{item.price2}</td>
                                            <td className="actions text-center gap-2">
                                                <button className="ms-2 btn blue-btn btn-sm rounded-1"><i className="bi bi-pencil-square"></i></button> 
                                                <button className="ms-2 btn tertiary-btn btn-sm rounded-1"><i className="bi bi-heart"></i></button>
                                                <button className="ms-2 btn red-btn btn-sm rounded-1"><i className="bi bi-trash"></i></button>
                                            </td>
                                        </tr>
                                )
                            })}
                        </tbody>
                  </table>
                </div>  
         
  );
};

export default DataTable9;
