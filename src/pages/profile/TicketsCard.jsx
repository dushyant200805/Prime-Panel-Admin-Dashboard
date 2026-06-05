function TicketCard() {
    const data =[
        {
          id : 1,
          date:"28.12.24",
          status:"under review",
          title:"UI / UX of democon",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid debitis culpa reprehenderit provident dolores ullam...",
          tagshade:"tertiary-shade",
          tagtext:"tertiary-text",
        },
        {
          id : 2,
          date:"28.12.24",
          status:"under review",
          title:"UI / UX of democon",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid debitis culpa reprehenderit provident dolores ullam...",
          tagshade:"second-shade",
          tagtext:"second-text",
        },
        {
          id : 3,
          date:"28.12.24",
          status:"under review",
          title:"UI / UX of democon",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid debitis culpa reprehenderit provident dolores ullam...",
          tagshade:"prime-shade",
          tagtext:"prime-text",
        },
    ]
    return (
        <>
        {data.map((item,index)=>{
           return(
             <div className="ps-2 pe-3 mb-2" key={index}>
            <div className="card-bg border light-border p-2 rounded"> 
                <div className="d-flex align-items-center justify-content-between mb-3 border-bottom light-border-bottom pb-2">
                    <p className="para-text fs-8 text-uppercase m-0"><span className="fw-bold">Date :</span> {item.date}</p> 
                    <p className={`${item.tagshade} rounded-pill ${item.tagtext} py-1 lh-1 fs-9 px-2 fw-semibold text-uppercase m-0`}>{item.status}</p>
                </div> 
                <h2 className="prime-font fw-bold text-capitalize fs-5 head-text m-0 mb-2">{item.title}</h2>
                <p className="text-capitalize para-text fw-medium m-0 fs-8">{item.description}</p> 
            </div>
        </div>
           )
        })}
        </>
    );
}

export default TicketCard;