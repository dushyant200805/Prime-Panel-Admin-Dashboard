import { icon } from "@fortawesome/fontawesome-svg-core";
import { faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ShoppingMethod () {
    const data =[
        {
           id:1,
           Ttile:"standard delivery",  
           Para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum perferendis minus eos facere? Facere, aliquid?",  
           Cardicon :faTruckMoving,
           iconcolor:"blue-text",
           iconshade:"blue-shade",
        },
        {
           id:2,
           Ttile:"fast delivery",  
           Para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum perferendis minus eos facere? Facere, aliquid?",  
           Cardicon :faTruckMoving,
           iconcolor:"tertiary-text",
           iconshade:"tertiary-shade",
        },
        {
           id:3,
           Ttile:"express delivery",  
           Para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum perferendis minus eos facere? Facere, aliquid?",  
           Cardicon :faTruckMoving,
           iconcolor:"red-text",
           iconshade:"red-shade",
        },
    ];
    return (
        <>
          {data.map((item,index)=>{
              return (
                        <div className="col-lg-4" key={index}>
                            <div className="d-flex align-items-center border-dashed border gap-2 p-2 rounded-2">
                                <span className={`check-icon ${item.iconshade} p-2 m-0`}>
                                        <FontAwesomeIcon icon={item.Cardicon} className={`${item.iconcolor} fs-4`} />
                                </span>
                                <div>
                                    <p className="m-0 fw-bold d-flex align-items-center gap-2 text-capitalize m-0 head-text">
                                    <input type="radio" name="delivery"/>
                                    <span>${item.Ttile}</span>
                                    </p>
                                    <p className="para-text fs-7 m-0">${item.Para}</p>
                                </div>
                            </div>
                        </div>
                );
            })}
        </>
    );
}
export default ShoppingMethod