import { Link } from "react-router";
import React, { useEffect, useRef ,useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
function ProductDetailCard (){
    
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
        ProductName: "Shoes"
    },
];
    const data =[
        {
            id:"1",
            Title:"Premium Leather Strap",
            Desc:"Soft, durable, and designed for all-day comfort",
        },
         {
            id:"2",
            Title:"Stainless Steel Case",
            Desc:"Sleek and sturdy build for a timeless look",
        },
         {
            id:"3",
            Title:"Quartz Movement",
            Desc:"Ensures precise and accurate timekeeping",
        },
         {
            id:"4",
            Title:" Water-Resistant (30M)",
            Desc:"Suitable for everyday splashes and light rain.",
        },
         {
            id:"5",
            Title:"Scratch-Resistant Glass",
            Desc:" Protects the dial from scratches and minor impacts",
        },
         {
            id:"6",
            Title:" Classic Analog Display",
            Desc:"Elegant and easy-to-read dial with luminous hands.",
        },
         {
            id:"7",
            Title:"Multi-Function Subdials",
            Desc:"Date, day, and stopwatch functionality.",
        },
        {
            id:"8",
            Title:" Scratch-Resistant Glass",
            Desc:"Protects the dial from scratches and minor impacts",
        },
    ];
    return (
        <>
            <div className="col-lg-6 col-xxl-5">
                <div className="card-bg p-3 rounded-2">
                    <h2 className="text-capitalize head-text fs-6 fw-semibold m-0 mb-2">
                        TIMECRAFT Elegance 42mm Brown Leather Strap Watch, Stainless Steel Case & Water-Resistant Design - Analog Wristwatch for Men (Quartz Movement, Classic Style, Multi-Function Dial)
                    </h2> 
                    <div className="mb-2">
                        <div className="rating four-half d-inline-flex align-items-center gap-2"></div>  
                        <div className="d-inline-flex para-text fw-semibold fs-7">
                            (14k+ of ratings)
                        </div>
                    </div> 
                    <h3 className="fw-bold mb-1 fs-2 head-text">$478 <del className="red-text fs-7 fw-semibold">$500</del></h3>
                    <p className="second-text fw-bold text-capitalize fs-7 mb-2">save upto 30% off</p> 
                    <div className="mb-2 fs-7">
                        <span className="fw-bold blue-text text-capitalize">description :</span>
                        <span className="para-text fw-medium text-capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem nostrum, quas alias placeat eius facilis rerum magnam dolores reprehenderit, fugiat dignissimos atque neque pariatur vero! Enim illum ipsum sed incidunt odit eos libero nobis porro mollitia accusantium delectus laudantium eum doloribus dolorem corporis quia veritatis, pariatur tenetur dolor. Officia minus vitae molestias exercitationem eaque voluptate rem error praesentium esse eos, corporis illum debitis culpa suscipit nisi ducimus aperiam dolor odio cum nemo. Velit officiis, expedita, nihil, facere illum fugit quos qui rerum eveniet nulla aspernatur autem dicta? Beatae rerum corrupti blanditiis distinctio vero. Ipsum autem quod culpa qui nobis.</span>
                    </div> 
                    <div className="mb-2 fs-7">
                        <span className="fw-bold blue-text text-capitalize">features :</span>
                            <table className="table table-bordered table-striped">
                                <tbody>
                                    {data.map((item,index)=>{
                                        return(
                                             <tr key={index}>
                                                <td className="fs-7 para-text fw-semibold">
                                                    {item.Title}
                                                </td>
                                                <td className="fs-7 para-text fw-semibold">
                                                    {item.Desc}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                    </div> 
                    <div className="fs-7 mb-3">
                        <span className="fw-bold blue-text text-capitalize">tags :</span>
                        <span className="para-text fw-medium text-capitalize">#watch #leatherwatch #watchcombo #wristwatch</span>
                    </div> 
                    <div className="color-box d-flex align-items-center gap-3 px-2 mb-2">
                        <Link to="#" className="color-pick red">
                        <input type="text" defaultValue="red" hidden/>
                        </Link>
                        <Link to="#" className="color-pick yellow">
                        <input type="text" defaultValue="orange" hidden/> 
                        </Link>
                        <Link to="#" className="color-pick green">
                        <input type="text" defaultValue="yellow" hidden/> 
                        </Link>
                        <Link to="#" className="color-pick blue">
                        <input type="text" defaultValue="blue" hidden/> 
                        </Link>
                        <Link to="#" className="color-pick purple">
                        <input type="text" defaultValue="pink" hidden/>
                        </Link>
                    </div>
                        {taskList.map((item,index)=>{
                                return(                     
                                <div className="counter justify-content-start" key={index}>
                                    <button  type="button" className="decrease" onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <input type="text" className="quantity"  min="0"  value={quantities[item.id]} readOnly/>
                                    <button  type="button" className="increase" onClick={() => increaseQuantity(item.id)}>+</button> 
                                </div>
                                );
                            })}
                    <div className="d-flex gap-2 align-items-center my-2">
                        <button className="btn second-btn btn-sm rounded-1 fw-bold"><i className="bi bi-lightning-charge"></i> buy now</button>
                        <button className="btn red-btn btn-sm rounded-1 fw-bold"><i className="bi bi-cart"></i> add to cart</button>
                        <button className="btn tertiary-btn btn-sm rounded-1 fw-bold"><i className="bi bi-heart"></i> add to wishlist</button>  
                    </div>  
                </div>
            </div>
        </>
    );
}
export default ProductDetailCard