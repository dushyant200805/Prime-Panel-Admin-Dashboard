// ================= UI Framework =================
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// ================= Project CSS =================
import "../../includes/css/primepanel-main.css"
import "../../includes/css/style.css"
import ChartUI4 from "../../components/Common-Sections/charts/Chart-4";
import PageTitle from "../../components/Common/PageTitle";
import ChartUI3 from "../../components/Common-Sections/charts/Chart-3";
import ChartUI9 from "../../components/Common-Sections/charts/Chart-9";
import ChartUI10 from "../../components/Common-Sections/charts/Chart-10";
import ChartUI11 from "../../components/Common-Sections/charts/Chart-11";
import ChartUI12 from "../../components/Common-Sections/charts/Chart-12";
import ChartUI14 from "../../components/Common-Sections/charts/Chart-14";
import ChartUI15 from "../../components/Common-Sections/charts/Chart-15";
import ChartUI16 from "../../components/Common-Sections/charts/Chart-16";
import ChartUI17 from "../../components/Common-Sections/charts/Chart-17";
import ChartUI18 from "../../components/Common-Sections/charts/Chart-18";
import ChartUI19 from "../../components/Common-Sections/charts/Chart-19";
function ChartPage(ShowTitle=false) {
  return (
    <>
     <PageTitle title="Charts" />
        <div className="row g-3">
                    <div className="col-sm-6 col-md-4 col-xxl-2">
                         <ChartUI9 showTitle={ShowTitle=false} />
                    </div>  
                    <div className="col-sm-6 col-md-4 col-xxl-2">
                        <ChartUI10 showTitle={ShowTitle=false} />
                    </div>  
                    <div className="col-sm-6 col-md-4 col-xxl-2">
                       <ChartUI11 showTitle={ShowTitle=false} />
                    </div>  
                    <div className="col-sm-6 col-md-4 col-xxl-2">
                       <ChartUI3 showTitle={ShowTitle}/>
                    </div>  
                    <div className="col-sm-6 col-md-4 col-xxl-2">
                       <ChartUI4 showTitle={ShowTitle=false}/>
                    </div>  
                    <div className="col-sm-6 col-md-4 col-xxl-2">
                        <ChartUI12 showTitle={ShowTitle=false} />
                    </div>  
                    <div className="col-12">
                       <ChartUI14/>
                    </div>
                    <div className="col-md-6">
                         <ChartUI15 showTitle={ShowTitle=true} />
                    </div>
                    <div className="col-md-6">
                        <ChartUI16 showTitle={ShowTitle=true} />
                    </div>
                    <div className="col-md-4"> 
                        <ChartUI17 showTitle={ShowTitle=true} />
                    </div>
                    <div className="col-md-4">
                        <ChartUI18 showTitle={ShowTitle=true} />
                    </div>
                    <div className="col-md-4">
                       <ChartUI19 showTitle={ShowTitle=true} /> 
                    </div>
                    
                </div>
    </>
  );
}
export default ChartPage;