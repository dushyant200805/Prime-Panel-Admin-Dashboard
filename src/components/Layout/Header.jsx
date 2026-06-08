import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { BiGrid, BiTime, BiDisc, BiHeadphone, BiMusic, BiX } from "react-icons/bi";
import Collapse from "bootstrap/js/dist/collapse";


// import { Collapse } from "bootstrap";
// ================= UI Framework =================
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


// ================= Project CSS =================
import "../../includes/css/primepanel-main.css";
import "../../includes/css/style.css";
import { faArrowRight, faBarsStaggered, faCalendarDays, faCircleQuestion, faCog, faDownLeftAndUpRightToCenter,  faUpRightAndDownLeftFromCenter, faMoon, faRightFromBracket, faShoppingCart, faSun, faTableCells, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
function Header() {
  // preloader state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  // theme change
  const getSavedTheme = () => {
    return localStorage.getItem("theme") || "light";
  };
  const [theme, setTheme] = useState(getSavedTheme);



  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-primetheme",
      theme
    );

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  //   Full Screen Functionality
  const [isFullscreen, setIsFullscreen] = useState(false);
  const handleFullscreen = () => {
    const docEl = document.documentElement;

    if (!isFullscreen) {
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
      } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen();
      } else if (docEl.mozRequestFullScreen) {
        docEl.mozRequestFullScreen();
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  
//  collapse card alll
 const [isAllOpen, setIsAllOpen] = useState(true);

const handleAllToggle = (e) => {
  e.preventDefault();

  const cards = document.querySelectorAll(".collapse-card");

  const collapsibles = document.querySelectorAll(
    ".collapse-card .collapse"
  );

  const buttons = document.querySelectorAll(
    ".collapse-card .togglecard"
  );

  const nextState = !isAllOpen;

  // CARD HEIGHT
  cards.forEach((card) => {
    card.classList.toggle("h-100", nextState);
  });

  // SINGLE ICON ROTATE
  buttons.forEach((btn) => {
    btn.classList.toggle("rotate-icon", nextState);
  });

  // OPEN / CLOSE
  collapsibles.forEach((el) => {
    const instance = Collapse.getOrCreateInstance(el, {
      toggle: false,
    });

    nextState ? instance.show() : instance.hide();
  });

  setIsAllOpen(nextState);
};



// sidebar section
const sidebarRef = useRef(null);
const containerRef = useRef(null);
useEffect(() => {
  const sidebar = sidebarRef.current;
  if (!sidebar) return;

  const sibling = containerRef.current;

  const menuToggles = sidebar.querySelectorAll(".menu-toggle");

  const handleToggleClick = (e) => {
  };

  // attach click
  menuToggles.forEach((btn) =>
    btn.addEventListener("click", handleToggleClick)
  );

  // hover events
  const handleMouseOver = () => {
  };

  const handleMouseOut = () => {
  };

  const handleMouseLeave = () => {
  };

  sidebar.addEventListener("mouseover", handleMouseOver);
  sidebar.addEventListener("mouseout", handleMouseOut);
  sidebar.addEventListener("mouseleave", handleMouseLeave);

  // cleanup (VERY IMPORTANT)
  return () => {
    menuToggles.forEach((btn) =>
      btn.removeEventListener("click", handleToggleClick)
    );

    sidebar.removeEventListener("mouseover", handleMouseOver);
    sidebar.removeEventListener("mouseout", handleMouseOut);
    sidebar.removeEventListener("mouseleave", handleMouseLeave);
  };
}, []);

return (
  <>
    {/* preloader */}
    {loading && (
      <div id="preloader">
        <img src="public/preloader.gif" width="40" alt="" className="me-2" />
        <div className="loading">
          {"Loading...".split("").map((char, i) => (
            <div key={i} className="loading__letter">
              {char}
            </div>
          ))}
        </div>
      </div>
    )}
    {/* preloader */}

    {/* <!-- header-main --> */}
    <div className="header-main mb-3">
      <nav className="navbar navbar-expand-lg navbar-dark card-bg rounded-3" aria-label="Offcanvas navbar large">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="public/logo.png" width="200" alt="" />
          </Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
            <FontAwesomeIcon icon={faBarsStaggered} className="text-dark" />
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end gap-3 align-items-center flex-grow-1">
                <li className="nav-item">
                  <div className="maximize d-none d-lg-block">
                    <Link to="#" className="badge-purple d-flex align-items-center text-primary icon-main"
                      id="fullscreen" onClick={handleFullscreen}>Go Fullscreen</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="icon-main" data-bs-toggle="offcanvas" href="#prodcart" role="button" aria-controls="prodcart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </li>
                {/* */}
                <li className="nav-item">
                  <a href="#" id="collapseAllBtn" className="icon-main"   onClick={handleAllToggle} >
                     <FontAwesomeIcon icon={ isAllOpen ?  faDownLeftAndUpRightToCenter :faUpRightAndDownLeftFromCenter  } />
                </a>
                
              </li>
              <li className="nav-item position-relative nav-drop">
                <a href="#" className="icon-main">
                  <FontAwesomeIcon icon={faTableCells} />
                </a>
                <div className="card rounded-3 nav-drop-item">
                  <h3 className="border-bottom mb-2 fs-6 fw-bold text-uppercase p-2 head-text">view apps</h3>
                  <div className="d-flex justify-content-between gap-1 menu-box flex-wrap">
                    <a href="#" className="menu-box-item red-box">
                      <BiGrid />
                      <p className="fs-9 text-uppercase fw-semibold m-0">likes</p>
                    </a>
                    <a href="#" className="menu-box-item second-box">
                      <BiTime />
                      <p className="fs-9 text-uppercase fw-semibold m-0">history</p>
                    </a>
                    <a href="#" className="menu-box-item blue-box">
                      <BiDisc />
                      <p className="fs-9 text-uppercase fw-semibold m-0">rewind</p>
                    </a>
                    <a href="#" className="menu-box-item yellow-box">
                      <BiHeadphone />
                      <p className="fs-9 text-uppercase fw-semibold m-0">listen</p>
                    </a>
                    <a href="#" className="menu-box-item prime-box">
                      <BiMusic />
                      <p className="fs-9 text-uppercase fw-semibold m-0">love</p>
                    </a>
                    <a href="#" className="menu-box-item second-box">
                      <BiMusic />
                      <p className="fs-9 text-uppercase fw-semibold m-0">play</p>
                    </a>
                  </div>
                  <div className="p-2">
                    <button className="btn prime-btn rounded-1 w-100">view more</button>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a href="#" className="icon-main" id="btnSwitch" onClick={toggleTheme}>
                  {theme === "light" ? (
                    <FontAwesomeIcon icon={faMoon } className=" white-text" />
                  ) : (
                    <FontAwesomeIcon icon={faSun} className=" white-text" />
                  )}
                </a>
              </li>
              <li className="nav-item ps-3 border-start position-relative nav-drop">
                <img src="public/profile.jpg" width="50" height="50" className="object-fit-cover rounded-circle" alt="" />
                <div className="card rounded-3 nav-drop-item">
                  <ul className="list-unstyled text-capitalize p-1">
                    <li className="head-text mb-2 border-bottom light-border-bottom">
                      <Link to="/profile" className="d-block">
                        <FontAwesomeIcon icon={faUser} className="me-2" />
                        view profile
                      </Link>
                    </li>
                    <li className="head-text mb-2 border-bottom light-border-bottom">
                      <Link to="/settings" className="d-block">
                        <FontAwesomeIcon icon={faCog} className="me-2" />
                        settings
                      </Link>
                    </li>
                    <li className="head-text mb-2 border-bottom light-border-bottom">
                      <Link to="/faq" className="d-block">
                        <FontAwesomeIcon icon={faCircleQuestion} className="me-2" />
                        faq
                      </Link>
                    </li>
                    <li className="head-text mb-2 border-bottom light-border-bottom">
                      <Link to="/events" className="d-block">
                        <FontAwesomeIcon icon={faCalendarDays} className="me-2" />
                        events
                      </Link>
                    </li>
                    <li className="head-text mb-2">
                      <Link to="/login" className="d-block">
                        <FontAwesomeIcon icon={faRightFromBracket} className="me-2" />
                        logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </nav > 
            </div >
  {/* <!-- header-main -->  */ }

{/* Cart Canvas */ }
<div className="offcanvas offcanvas-end card-bg " tabIndex="-1" id="prodcart" aria-labelledby="prodcartLabel">
  <div className="offcanvas-header border-bottom light-border-bottom d-flex justify-content-between align-items-center p-2">
    <h5 className="offcanvas-title head-text" id="prodcartLabel">Cart Details</h5>
    <button type="button" className="btn btn-transparent p-0" data-bs-dismiss="offcanvas" aria-label="Close">
      <BiX className="head-text fs-3" />
    </button>
  </div>
  <div className="offcanvas-body p-2">
    <div className="prod-cart mb-2 border light-border position-relative">
      <div className="position-absolute end-0 top-0">
        <Link to="#" title="remove from cart" className="para-text"><FontAwesomeIcon icon={faTimes} className="fs-8" /></Link>
      </div>
      <div className="d-flex gap-2 p-2">
        <img src="/public/watch.jpg" width="50" height="50" className="object-fit-cover" alt="" />
        <div className="flex-grow-1">
          <p className="m-0 fw-medium fs-7 head-text">
            Lorem ipsum dolor sit amet.
          </p>
          <div className="fs-7 para-text">
            <del>$17</del>
            <span>$16</span>
          </div>
        </div>
      </div>
    </div>
    <div className="prod-cart mb-2 border  light-border position-relative">
      <div className="position-absolute end-0 top-0">
        <Link to="#" title="remove from cart" className="para-text"><FontAwesomeIcon icon={faTimes} className="fs-8" /></Link>
      </div>
      <div className="d-flex gap-2 p-2">
        <img src="/public/shoes.jpg " width="50" height="50" className="object-fit-cover" alt="" />
        <div className="flex-grow-1">
          <p className="m-0 fw-medium fs-7 head-text">
            Lorem ipsum dolor sit amet.
          </p>
          <div className="fs-7 para-text">
            <del>$17</del>
            <span>$16</span>
          </div>
        </div>
      </div>
    </div>
    <div className="prod-cart mb-2 border  light-border position-relative">
      <div className="position-absolute end-0 top-0">
        <Link to="#" title="remove from cart" className="para-text"><FontAwesomeIcon icon={faTimes} className="fs-8" /></Link>
      </div>
      <div className="d-flex gap-2 p-2">
        <img src="/public/watch2.jpg" width="50" height="50" className="object-fit-cover" alt="" />
        <div className="flex-grow-1">
          <p className="m-0 fw-medium fs-7 head-text">
            Lorem ipsum dolor sit amet.
          </p>
          <div className="fs-7 para-text">
            <del>$17</del>
            <span>$16</span>
          </div>
        </div>
      </div>
    </div>
    <div className="prod-cart mb-2 border  light-border position-relative">
      <div className="position-absolute end-0 top-0">
        <Link to="#" title="remove from cart" className="para-text"><FontAwesomeIcon icon={faTimes} className="fs-8" /></Link>
      </div>
      <div className="d-flex gap-2 p-2">
        <img src="/public/tv-product.jpg" width="50" height="50" className="object-fit-cover" alt="" />
        <div className="flex-grow-1">
          <p className="m-0 fw-medium fs-7 head-text">
            Lorem ipsum dolor sit amet.
          </p>
          <div className="fs-7 para-text">
            <del>$17</del>
            <span>$16</span>
          </div>
        </div>
      </div>
    </div>
    <div className="border-top light-border-top">
      <table className="table prod-cart-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Apple iPhone 14</td>
            <td>1</td>
            <td>$999</td>
            <td>$999</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Samsung Galaxy S23</td>
            <td>2</td>
            <td>$799</td>
            <td>$1,598</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>AirPods Pro</td>
            <td>1</td>
            <td>$249</td>
            <td>$249</td>
          </tr>
          <tr>
            <th scope="row" colSpan="4" className="text-end">Subtotal</th>
            <td>$2,846</td>
          </tr>
          <tr>
            <th scope="row" colSpan="4" className="text-end">Tax (10%)</th>
            <td>$284.60</td>
          </tr>
          <tr>
            <th scope="row" colSpan="4" className="text-end fw-bold">Grand Total</th>
            <td className="fw-bold">$3,130.60</td>
          </tr>
        </tbody>
      </table>
      <div className="text-end">
        <button className="btn prime-btn btn-lg w-100">proceed to checkout
          <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
        </button>
      </div>
    </div>
  </div>
</div>
{/* end Cart Canvas */ }

         
        </>
    );
}
export default Header;
