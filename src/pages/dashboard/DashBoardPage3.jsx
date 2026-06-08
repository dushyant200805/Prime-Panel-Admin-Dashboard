import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PageTitle from "../../components/Common/PageTitle";
import ChartUI20 from "../../components/Common-Sections/charts/Chart-20";
import ChartUI4 from "../../components/Common-Sections/charts/Chart-4";
import ChartUI7 from "../../components/Common-Sections/charts/Chart-7";
import ChartUI8 from "../../components/Common-Sections/charts/Chart-8";
import ChartUI9 from "../../components/Common-Sections/charts/Chart-9";
import ChartUI10 from "../../components/Common-Sections/charts/Chart-10";
import ChartUI11 from "../../components/Common-Sections/charts/Chart-11";
import ChartUI13 from "../../components/Common-Sections/charts/Chart-13";
import TaskList from "../../components/Common-Sections/TaskList";
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
  faStar,
} from "@fortawesome/free-solid-svg-icons";
function DashBoardPage3(ShowTitle = true) {
  const Chartdetails = {
    name: "Weekly Work Report",
    height: "415",
  };
  return (
    <>
      <PageTitle title="Dashboard 3" />
      <div className="row g-3">
        <div className="col-md-8 col-xxl-4">
          <div className="card h-100 border-0 d-flex flex-column justify-content-center shadow-sm rounded-3">
            <div className="p-3">
              <div className="d-flex align-items-center gap-4">
                <img
                  src="/profile.jpg"
                  width="100"
                  height="100"
                  className="rounded-pill object-fit-cover"
                  alt=""
                />
                <div>
                  <p className="prime-text fw-bold m-0 text-uppercase fs-7">
                    welcome
                  </p>
                  <h2 className="prime-font fs-2 fw-medium text-capitalize head-text m-0 mb-2">
                    Daniel Phillips
                  </h2>
                  <div className="d-flex align-items-center flex-wrap gap-2">
                    <a
                      href="#"
                      className="rounded-pill second-bg text-white py-1 px-2"
                    >
                      <FontAwesomeIcon icon={faCode} /> Developer
                    </a>
                    <a href="#" className="rounded-pill blue-bg py-1 px-2">
                      <FontAwesomeIcon icon={faStar} className="text-white" />{" "}
                      <span className="text-white">3 Yrs</span>
                    </a>
                    <a
                      href="#"
                      title="connect on instagram"
                      className="rounded-pill icon-main red-bg"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-white"
                      />
                    </a>
                    <a
                      href="#"
                      title="connect on whatsapp"
                      className="rounded-pill icon-main second-bg"
                    >
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="text-white"
                      />
                    </a>
                    <a
                      href="#"
                      title="connect on twitter"
                      className="rounded-pill icon-main blue-bg"
                    >
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        className="text-white"
                      />
                    </a>
                    <a
                      href="tel:#"
                      title="+1-0123456789"
                      className="rounded-pill icon-main second-bg"
                    >
                      <FontAwesomeIcon
                        icon={faMobileScreen}
                        className="text-white"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xxl-2">
          <ChartUI9 showTitle={(ShowTitle = false)} />
        </div>
        <div className="col-sm-6 col-md-4 col-xxl-2">
          <ChartUI10 showTitle={(ShowTitle = false)} />
        </div>
        <div className="col-sm-6 col-md-4 col-xxl-2">
          <ChartUI11 showTitle={(ShowTitle = false)} />
        </div>
        <div className="col-sm-6 col-md-4 col-xxl-2">
          <ChartUI4 showTitle={(ShowTitle = false)} />
        </div>
        <div className="col-md-6">
          <ChartUI8 />
        </div>
        <div className="col-md-6">
          <ChartUI20 name={Chartdetails.name} height={Chartdetails.height} />
        </div>
        <div className="col-md-6 col-lg-12 col-xxl-5">
          <ChartUI13 showTitle={(ShowTitle = true)} />
        </div>
        <div className="col-md-6 col-lg-8 col-xxl-3">
          <ChartUI7 showTitle={(ShowTitle = true)} />
        </div>
        <div className="col-md-6 col-lg-4 col-xxl-4">
          <TaskList />
        </div>
      </div>
    </>
  );
}
export default DashBoardPage3;
