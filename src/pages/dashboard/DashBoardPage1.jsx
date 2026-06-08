import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ChartUI1 from "../../components/Common-Sections/charts/Chart-1";
import ChartUI2 from "../../components/Common-Sections/charts/Chart-2";
import ChartUI22 from "../../components/Common-Sections/charts/Chart-22";
import ChartUI4 from "../../components/Common-Sections/charts/Chart-4";
import ChartUI5 from "../../components/Common-Sections/charts/Chart-5";
import ChartUI6 from "../../components/Common-Sections/charts/Chart-6";
import ChartUI7 from "../../components/Common-Sections/charts/Chart-7";
import ChartUI8 from "../../components/Common-Sections/charts/Chart-8";
import TaskList from "../../components/Common-Sections/TaskList";
import DataTable1 from "../../components/Common-Sections/datatables/DataTable1";
import Notification from "../../components/Common-Sections/Notification";
import CalendarUI from "../../components/Common-Sections/CalendarUI";
import {
  initializeCollapseCards,
  handleSingleToggle,
} from "../../assets/collapseHandler";
// ================= UI Framework =================
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// ================= Project CSS =================
import "../../includes/css/primepanel-main.css";
import "../../includes/css/style.css";

import {
  faInstagram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faMobileScreen,
  faUserClock,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../../components/Common/PageTitle";
import { useEffect } from "react";
function DashBoardPage1(ShowTitle = true) {
  const Chartdetails = {
    name1: "series Report",
  };
  useEffect(() => {
    initializeCollapseCards();
  }, []);
  return (
    <>
      <PageTitle title="Dashboard" />
      <div className="row g-3">
        <div className="col-xl-9">
          <div className="row g-3">
            <div className="col-md-6 col-lg-6 col-xxl-4">
              <div className="card collapse-card  border-0 shadow-sm rounded-3">
                <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
                  Account Details
                  <Link
                    to="#"
                    className="togglecard fs-6 head-text"
                    onClick={handleSingleToggle}
                  >
                    <FontAwesomeIcon icon={faChevronDown} id="dropIcon" />
                  </Link>
                </h2>
                <div id="accdetail" className="collapse p-2 show">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src="/profile.jpg"
                      width="100"
                      height="100"
                      className="rounded-3 object-fit-cover"
                      alt=""
                    />
                    <div>
                      <h2 className="prime-font fs-6 fw-semibold text-capitalize head-text m-0 mb-2 head-text">
                        Daniel Phillips
                      </h2>
                      <div className="d-flex flex-wrap gap-2 mb-2">
                        <span className="rounded-3 second-shade fw-medium second-text py-1 px-2 fs-7">
                          <FontAwesomeIcon icon={faCode} /> Sr. Developer
                        </span>
                        <span className="rounded-3 prime-shade prime-text py-1 px-2 fs-7">
                          <FontAwesomeIcon icon={faUserClock} />{" "}
                          <span>3.5 Years</span>
                        </span>
                      </div>
                      <div className="d-flex flex-wrap gap-2">
                        <Link
                          to="#"
                          title="connect on instagram"
                          className="rounded-2 btn red-btn d-flex align-items-center"
                        >
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="fs-6"
                          />
                        </Link>
                        <Link
                          to="#"
                          title="connect on twitter"
                          className="rounded-2 btn blue-btn d-flex align-items-center"
                        >
                          <FontAwesomeIcon icon={faXTwitter} className="fs-6" />
                        </Link>
                        <Link
                          to="#"
                          title="connect on whatsapp"
                          className="rounded-2 btn second-btn d-flex align-items-center"
                        >
                          <FontAwesomeIcon icon={faWhatsapp} className="fs-6" />
                        </Link>
                        <Link
                          to="tel:#"
                          title="+1-0123456789"
                          className="rounded-2 btn prime-btn d-flex align-items-center"
                        >
                          <FontAwesomeIcon
                            icon={faMobileScreen}
                            className="fs-6"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xxl-3">
              <ChartUI1 showTitle={ShowTitle} />
            </div>

            <div className="col-md-6 col-lg-6 col-xxl-3">
              <ChartUI2 showTitle={ShowTitle} />
            </div>
            <div className="col-md-6 col-lg-6 col-xxl-2">
              <ChartUI22 showTitle={ShowTitle} />
            </div>
            <div className="col-lg-8">
              <ChartUI5 showTitle={ShowTitle} name={Chartdetails.name2} />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ChartUI6 showTitle={ShowTitle} />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ChartUI7 showTitle={ShowTitle} />
            </div>
            <div className="col-lg-8">
              <ChartUI8 showTitle={ShowTitle} />
            </div>
            <div className="col-sm-5 col-lg-4">
              <TaskList />
            </div>
            <div className="col-sm-7 col-lg-8">
              <DataTable1 />
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="row g-3">
            <div className="col-sm-4 col-xl-12">
              <ChartUI4 showTitle={ShowTitle} />
            </div>
            <div className="col-sm-6 col-xl-12">
              <Notification />
            </div>
            <div className="col-sm-6 col-xl-12">
              <CalendarUI />
            </div>
            <div className="col-sm-6 col-xl-12">
              <div className="card currency-card  collapse-card h-100 border-0 shadow-sm rounded-3 position-relative">
                <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
                  {" "}
                  convert
                </h2>
                <div className="p-3">
                  <form action="" noValidate="noValidate">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control input-bg input-text"
                        placeholder="Select Currency"
                        aria-label="Text input with dropdown button"
                      />
                      <select className="form-select ps-2 currn-select">
                        <option value="USD">&#36; USD</option>
                        <option value="EUR">&#8364; EUR</option>
                        <option value="GBP">&#163; GBP</option>
                        <option value="INR">&#8377; INR</option>
                        <option value="JPY">&#165; JPY</option>
                        <option value="CNY">&#165; CNY </option>
                        <option value="CAD">&#36; CAD </option>
                        <option value="AUD">&#36; AUD </option>
                        <option value="CHF">&#8355; CHF </option>
                        <option value="SGD">&#36; SGD </option>
                        <option value="HKD">&#36; HKD </option>
                        <option value="NZD">&#36; NZD </option>
                        <option value="KRW">&#8361; KRW </option>
                        <option value="BRL">&#82;&#36; BRL </option>
                        <option value="MXN">&#36; MXN </option>
                        <option value="RUB">&#8381; RUB </option>
                        <option value="ZAR">&#82; ZAR </option>
                        <option value="THB">&#3647; THB </option>
                        <option value="MYR">&#82; MYR </option>
                        <option value="IDR">&#82; IDR </option>
                        <option value="PHP">&#8369; PHP </option>
                        <option value="VND">&#8363; VND </option>
                        <option value="EGP">&#163; EGP </option>
                        <option value="TRY">&#8378; TRY </option>
                        <option value="SAR">&#65020; SAR </option>
                        <option value="AED">&#65020; AED </option>
                      </select>
                    </div>

                    <div className="text-center converticon mb-3">
                      <i className="bi bi-arrow-down-up fs-8 fw-bold"></i>
                    </div>

                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control input-bg input-text"
                        placeholder="Select Currency"
                        aria-label="Text input with dropdown button"
                      />
                      <select className="form-select ps-2 currn-select">
                        <option value="USD">&#36; USD</option>
                        <option value="EUR">&#8364; EUR</option>
                        <option value="GBP">&#163; GBP</option>
                        <option value="INR">&#8377; INR</option>
                        <option value="JPY">&#165; JPY</option>
                        <option value="CNY">&#165; CNY </option>
                        <option value="CAD">&#36; CAD </option>
                        <option value="AUD">&#36; AUD </option>
                        <option value="CHF">&#8355; CHF </option>
                        <option value="SGD">&#36; SGD </option>
                        <option value="HKD">&#36; HKD </option>
                        <option value="NZD">&#36; NZD </option>
                        <option value="KRW">&#8361; KRW </option>
                        <option value="BRL">&#82;&#36; BRL </option>
                        <option value="MXN">&#36; MXN </option>
                        <option value="RUB">&#8381; RUB </option>
                        <option value="ZAR">&#82; ZAR </option>
                        <option value="THB">&#3647; THB </option>
                        <option value="MYR">&#82; MYR </option>
                        <option value="IDR">&#82; IDR </option>
                        <option value="PHP">&#8369; PHP </option>
                        <option value="VND">&#8363; VND </option>
                        <option value="EGP">&#163; EGP </option>
                        <option value="TRY">&#8378; TRY </option>
                        <option value="SAR">&#65020; SAR </option>
                        <option value="AED">&#65020; AED </option>
                      </select>
                    </div>

                    <div className="p-2 border light-border mb-3">
                      <div className="d-flex align-items-center justify-content-between border-bottom light-border-bottom pb-2 mb-2">
                        <h4 className="fs-7 text-capitalize head-text fw-bold m-0">
                          dollar price :{" "}
                        </h4>
                        <p className="fs-7 para-text m-0">$85</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-bottom light-border-bottom pb-2 mb-2">
                        <h4 className="fs-7 text-capitalize head-text fw-bold m-0">
                          euro price :{" "}
                        </h4>
                        <p className="fs-7 para-text m-0">$97</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between border-bottom light-border-bottom pb-2 mb-2">
                        <h4 className="fs-7 text-capitalize head-text fw-bold m-0">
                          convert rate :{" "}
                        </h4>
                        <p className="fs-7 para-text m-0">12</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h4 className="fs-7 text-capitalize head-text fw-bold m-0">
                          conversion price :{" "}
                        </h4>
                        <p className="fs-7 para-text m-0">$120</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn yellow-btn fw-bold rounded-1 w-100"
                    >
                      convert
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DashBoardPage1;
