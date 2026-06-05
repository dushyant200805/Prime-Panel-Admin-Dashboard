function TimeLineCard1() {
    const data = [
        {   
            id:"1",
            title: "Invoice has been issued",
            shadeclass:"second-shade second-text second-border",
            description: "Lorem ipsum dolor sit amet adipiscing elit",
            time: "10 min ago"
        },
        {
            id:"2",
            title: "Bill paid",
            shadeclass:"tertiary-shade tertiary-text tertiary-border",
            description: "Lorem ipsum dolor sit amet adipiscing elit",
            time: "30 min ago"
        },
        {
            id:"3",
            title: "Bill paid",
            shadeclass:"second-shade second-text  second-border",
            description: "Lorem ipsum dolor sit amet adipiscing elit",
            time: "45 mins ago"
        },
        {
            id:"4",
            title: "Bill paid",
            shadeclass:"tertiary-shade tertiary-text  tertiary-border",
            description: "Lorem ipsum dolor sit amet adipiscing elit",
            time: "1hr ago"
        },
        {
            id:"5",
            title: "Bill paid",
            shadeclass:"second-shade second-text  second-border",
            description: "Lorem ipsum dolor sit amet adipiscing elit",
            time: "45 mins ago"
        },
        {
            id:"6",
            title: "Bill paid",
            shadeclass:"tertiary-shade tertiary-text tertiary-border",
            description: "Lorem ipsum dolor sit amet adipiscing elit",
            time: "45 mins ago"
        },
        {
            id:"7",
            title: "Bill paid",
            shadeclass:"second-shade second-text  second-border",
            description: "Lorem ipsum dolor sit amet adipiscing elit",
            time: "1hr ago"
        },

    ]
    return (
        <>
        {data.map((item,index)=>{
            return (
               
                <li className="event mb-3" key={index}>
                    <div className="d-flex align-items-end flex-wrap justify-content-between">
                    <div>
                        <h6 className="head-text fw-bold mb-0">{item.title}</h6>
                        <span className="para-text fs-7">{item.description}</span>
                    </div>
                    <div className={`  fw-semibold fs-8 px-2  border  rounded-2 ${item.shadeclass}`}>{item.time}</div>
                    </div>
                </li>
             
            );
        })}
        </>
    );
}
export default TimeLineCard1;