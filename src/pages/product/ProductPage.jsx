import Card1 from "./Card1";
import PageTitle from "../../components/Common/PageTitle";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import Card7 from "./Card7";
import Card8 from "./Card8";
import Card9 from "./Card9";
import Card10 from "./Card10";
import Card11 from "./Card11";
import Card12 from "./Card12";
import Card13 from "./Card13";
import Card14 from "./Card14";
import Card15 from "./Card15";
import Card16 from "./Card16";
import Card17 from "./Card17";
function ProductPage() {
    return (
        <>
        <PageTitle title="Cards" />
        <div className="row">
            <div className="col-8">
                <div className="row g-3">
                    <div className="col-3">
                       <Card1/>
                    </div>
                    <div className="col-3">
                        <Card2/>
                    </div>
                    <div className="col-3">
                       <Card3/>
                    </div> 
                    <div className="col-3">
                       <Card4/>  
                    </div>
                    <div className="col-3">
                       <Card5/>
                    </div>
                    <div className="col-3">
                       <Card6/>
                    </div>
                    <div className="col-3">
                        <Card7/>
                    </div>
                    <div className="col-3">
                       <Card8/>
                    </div>
                    <div className="col-4">
                       <Card9/>
                    </div>
                    <div className="col-4">
                        <Card10/>
                    </div>
                    <div className="col-4">
                        <Card11/>
                    </div>
                    <div className="col-4">
                       <Card12/>
                    </div>
                    <div className="col-4">
                        <Card13/>
                    </div>
                    <div className="col-4">
                            <Card14/>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <Card15/>
                <Card16/>
               <Card17/>
            </div>
        </div>
        </>
    );
}

export default ProductPage;