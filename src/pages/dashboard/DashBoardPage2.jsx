import ChartUI20 from "../../components/Common-Sections/charts/Chart-20";
import PageTitle from "../../components/Common/PageTitle";
import ChartUI3 from "../../components/Common-Sections/charts/Chart-3";
import ChartUI4 from "../../components/Common-Sections/charts/Chart-4";
import ChartUI5 from "../../components/Common-Sections/charts/Chart-5";
import ChartUI7 from "../../components/Common-Sections/charts/Chart-7";
import ChartUI8 from "../../components/Common-Sections/charts/Chart-8";
import ChartUI9 from "../../components/Common-Sections/charts/Chart-9";
import ChartUI10 from "../../components/Common-Sections/charts/Chart-10";
import ChartUI11 from "../../components/Common-Sections/charts/Chart-11";
import ChartUI12 from "../../components/Common-Sections/charts/Chart-12";
import TaskList from "../../components/Common-Sections/TaskList";
// ================= UI Framework =================
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// ================= Project CSS =================
import "../../includes/css/primepanel-main.css"
import "../../includes/css/style.css"
function DashBoardPage2(ShowTitle=true) {
  const Chartdetails = {
    "name1":"timeline",
  };
  return (
    <>
    <PageTitle title="Dashboard 2" />
        <div className="row g-3">  
            <div className="col-sm-6 col-md-4 col-xxl-2">
              <ChartUI9 showTitle={ShowTitle} />
            </div>  
            <div className="col-sm-6 col-md-4 col-xxl-2">
              <ChartUI10 showTitle={ShowTitle} />
            </div> 
            <div className="col-sm-6 col-md-4 col-xxl-2">
               <ChartUI11 showTitle={ShowTitle} />
            </div> 
            <div className="col-sm-6 col-md-4 col-xxl-2">
              <ChartUI3 showTitle={ShowTitle}/>
            </div> 
            <div className="col-sm-6 col-md-4 col-xxl-2">
                <ChartUI4 showTitle={ShowTitle} />
            </div>
            <div className="col-sm-6 col-md-4 col-xxl-2">
                <ChartUI12 showTitle={ShowTitle}/>
            </div>   
            <div className="col-md-6 col-xxl-6">
                <ChartUI8 showTitle={ShowTitle}/>
            </div> 
            <div className="col-md-6 col-xxl-6">
              <ChartUI20 showTitle={ShowTitle} />
            </div>  
            <div className="col-md-6 col-lg-12 col-xxl-5">
               <ChartUI5 showTitle={ShowTitle} name={Chartdetails.name1}/>
            </div>
            <div className="col-md-6 col-lg-6 col-xxl-3"> 
               <ChartUI7 showTitle={ShowTitle} />
            </div>
            <div className="col-md-6 col-lg-6 col-xxl-4">
              <TaskList />
             </div>  
        </div>
                        
    </>
  );
}
export default DashBoardPage2;