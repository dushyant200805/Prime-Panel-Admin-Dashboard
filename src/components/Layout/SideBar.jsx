import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
// ================= UI Framework =================
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// ================= Project CSS =================
import "../../includes/css/primepanel-main.css";
import "../../includes/css/style.css";
function SideBar() {
      const { pathname } = useLocation();
    return (
        <>
            {/* <!-- sidebar starts here -->  */}
                <div className="sidebar-nav menu" id="menu">  
                        <ul> 
                            <li className={` ${ ["/", "/dashboard2", "/dashboard2"].includes(pathname) ? "active" : ""}`}>   
                                <Link to="#"  className="text-capitalize menu-toggle"> 
                                        <i className="bi bi-house"></i>
                                        <span className="ms-2">
                                            dashboard
                                        </span> 
                                         <span className="menu-toggle-icon">  
                                               <FontAwesomeIcon icon={faChevronDown} />
                                        </span>
                                </Link> 
                                <ul className="sub-menu">
                                    <li className={` ${pathname === "/" ? "active" : ""}`}><Link to="/">dashboard</Link></li>
                                    <li  className={` ${pathname === "/dashboard2" ? "active" : ""}`}><Link to="/dashboard2">dashboard 2</Link></li> 
                                    <li className={` ${pathname === "/dashboard3" ? "active" : ""}`}><Link to="/dashboard3">dashboard 3</Link></li>
                                </ul>
                            </li> 
                            <li className={` ${pathname === "/charts" ? "active" : ""}`}>   
                                <Link to="/charts" className="text-capitalize"> 
                                    <i className="bi bi-bar-chart"></i>
                                        <span className="ms-2">
                                            charts
                                        </span> 
                                </Link>  
                            </li> 
                            <li className={` ${pathname === "/tables" ? "active" : ""}`}>   
                                <Link to="/tables" className="text-capitalize"> 
                                    <i className="bi bi-table"></i>
                                    <span className="ms-2">
                                        tables
                                    </span> 
                                </Link>  
                            </li> 
                            <li className={` ${pathname === "/chats" ? "active" : ""}`}>   
                                <Link to="/chats" className="text-capitalize"> 
                                    <i className="bi bi-chat-left-text"></i>
                                        <span className="ms-2">
                                            chats
                                        </span> 
                                </Link>  
                            </li> 
                            <li className={` ${pathname === "/events" ? "active" : ""}`}>
                                <Link to="/events" className="text-capitalize"> 
                                <i className="bi bi-calendar4-event"></i>
                                        <span className="ms-2">
                                            events
                                        </span> 
                                </Link>  
                            </li> 
                            <li className={` ${pathname === "/forms" ? "active" : ""}`}>  
                                <Link to="/forms" className="text-capitalize"> 
                                <i className="bi bi-file-earmark-text"></i> 
                                        <span className="ms-2">
                                            forms
                                        </span> 
                                </Link>  
                            </li>
                            <li className={` ${pathname === "/widgets" ? "active" : ""}`}>  
                                <Link to="/widgets" className="text-capitalize"> 
                                    <i className="bi bi-sliders"></i>
                                        <span className="ms-2">
                                            widgets
                                        </span> 
                                </Link>  
                            </li>
                            <li className={` ${pathname === "/settings" ? "active" : ""}`}>  
                                <Link to="/settings" className="text-capitalize"> 
                                    <i className="bi bi-sliders2-vertical"></i>
                                        <span className="ms-2">
                                            settings
                                        </span> 
                                </Link>  
                            </li>
                            <li className={` ${pathname === "/cards" ? "active" : ""}`}>  
                                <Link to="/cards" className="text-capitalize"> 
                                <i className="bi bi-card-text"></i>
                                        <span className="ms-2">
                                            cards
                                        </span> 
                                </Link>  
                            </li>
                            <li className={` ${pathname === "/faq" ? "active" : ""}`}>   
                                <Link to="/faq" className="text-capitalize"> 
                                    <i className="bi bi-patch-question"></i>
                                        <span className="ms-2">
                                            faq
                                        </span> 
                                </Link>  
                            </li> 
                            <li className={` ${pathname === "/timeline" ? "active" : ""}`}>   
                                <Link to="/timeline" className="text-capitalize"> 
                                <i className="bi bi-list-columns"></i>
                                        <span className="ms-2">
                                            timeline
                                        </span> 
                                </Link>  
                            </li> 
                            <li className={` ${ ["/page1"].includes(pathname) ? "active" : ""}`}>   
                                <Link to="#" className="text-capitalize menu-toggle"> 
                                    <i className="bi bi-file-earmark"></i>
                                        <span className="ms-2">
                                            pages
                                        </span> 
                                        <span className="menu-toggle-icon">  
                                               <FontAwesomeIcon icon={faChevronDown} />
                                        </span>
                                </Link> 
                                <ul className="sub-menu">
                                    <li>
                                        <Link to="#" className="menu-toggle">
                                            <span className="ms-2"> 
                                                <i className="bi bi-file-earmark"></i>
                                                    page 1
                                            </span>
                                              <span className="menu-toggle-icon">  
                                               <FontAwesomeIcon icon={faChevronDown} />
                                        </span>
                                        </Link> 
                                        <ul className="sub-menu">
                                            <li className={` ${pathname === "/page1" ? "active" : ""}`}>
                                                <Link to="/page1" className="text-capitalize"> 
                                                    <i className="bi bi-file-earmark"></i>
                                                    <span className="ms-2">
                                                        inner page 
                                                    </span> 
                                                </Link>  
                                            </li>
                                        </ul>
                                    </li> 
                                </ul>
                            </li>  
                            <li className={` ${ ["/addproduct","/editproduct","/cart","/checkout","/product","/productdetail"].includes(pathname) ? "active" : ""}`}>   
                                <Link to="#" className="text-capitalize menu-toggle"> 
                                    <i className="bi bi-shop"></i>
                                        <span className="ms-2">
                                            ecommerce
                                        </span> 
                                        <span className="menu-toggle-icon">  
                                               <FontAwesomeIcon icon={faChevronDown} />
                                        </span>
                                </Link> 
                                <ul className="sub-menu">
                                    <li className={` ${pathname === "/addproduct" ? "active" : ""}`}>
                                        <Link to="/addproduct">
                                            <span > 
                                                <i className="bi bi-folder-plus me-2" ></i>
                                                add product
                                            </span>
                                        </Link>  
                                    </li> 
                                    <li className={` ${pathname === "/editproduct" ? "active" : ""}`}>
                                        <Link to="/editproduct">
                                            <span >
                                                <i className="bi bi-pencil-square me-2" ></i> edit products
                                            </span>
                                        </Link>  
                                    </li> 
                                    <li className={` ${pathname === "/cart" ? "active" : ""}`}>
                                        <Link to="/cart">
                                            <span >
                                            <i className="bi bi-basket me-2" ></i> cart
                                            </span>
                                        </Link>  
                                    </li> 
                                    <li className={` ${pathname === "/checkout" ? "active" : ""}`}>
                                        <Link to="/checkout">
                                            <span >
                                                <i className="bi bi-receipt me-2" ></i> checkout
                                            </span>
                                        </Link>  
                                    </li> 
                                    <li className={` ${pathname === "/product" ? "active" : ""}`}>
                                        <Link to="/product">
                                            <span >
                                                <i className="bi bi-box-seam me-2" ></i> products listing
                                            </span>
                                        </Link>  
                                    </li> 
                                    <li className={` ${pathname === "/productdetail" ? "active" : ""}`}>
                                        <Link to="/productdetail">
                                            <span >
                                                <i className="bi bi-tv me-2" ></i> product detail
                                            </span>
                                        </Link>  
                                    </li> 
                                </ul>
                            </li>  
                        </ul> 
                </div>
           {/* <!-- sidebar ends here -->  */}
        </>
    );
}

export default SideBar;   