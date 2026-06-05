function TimeLineCard3(){
    const data = [
        {  
            id:1,
            title: "First Year",
            span: "Some work experience",
            p: "Lorem ipsum dolor sit amet.",
            class: "timeline3-item-right"
        },
        {
            id:2,
            title: "Seconed Year",
            span: "Some work experience",
            p: "Lorem ipsum dolor sit amet, consectetur.",
            class: "timeline3-item-left"
        },
        {
            id:3,
            title: "Third Year",
            span: "Some work experience",
            p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            class: "timeline3-item-right"
        }
    ]
    return (
        <>
          {data.map((item,index)=>{
            return (
              
                            <div className="timeline3"key={index}>
                                <div className={`timeline3-item ${item.class}`} >
                                    <div className="timeline3-content">
                                    <h3 className="head-text m-0">{item.title}</h3>
                                    <span className="para-text">{item.span}</span>
                                    <p className="para-text">{item.p}</p>
                                    </div>
                                </div>
                            </div>
                     
            );
          })}
        </>
    );
}   
export default TimeLineCard3;