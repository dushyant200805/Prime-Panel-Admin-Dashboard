import "bootstrap-icons/font/bootstrap-icons.css";
function AddressCard1 () {
    const data =[
        {
            id:1,
            Name:" andrew smith",
            Email:"info@example.com",
            ConatctDetail:"+1-123456789",
            Address:"134 street demo, demo state downhills, block 24 new hall town",
        },
        {
            id:2,
            Name:" denial caster",
            Email:"info@example.com",
            ConatctDetail:"+1-123456789",
            Address:"134 street demo, demo state downhills, block 24 new hall town",
        },
    ];
    return (
        <>
         {data.map((item,index)=>{
            return (
             <div className="col-lg-6"key={index}> 
                <div className="address-card d-flex gap-2 align-items-start border border-dashed rounded-2 p-2 mb-2 position-relative" >
                    <button className="btn tertiary-btn btn-sm position-absolute top-0 end-0 m-2"><i className="bi bi-pencil"></i></button>
                    <input type="radio" name="address" className="mt-1"/>
                    <div className="flex-grow-1">
                        <h2 className="text-capitalize fs-6 fw-semibold prime-font prime-text m-0 mb-2">address  {item.id}:</h2>  
                        <p className="m-0 fs-7 text-capitalize mb-2 border-0">
                            <span className="fw-bold head-text">
                            Name of Reciever :
                            </span>
                            <span className="para-text">
                                {item.Name}
                            </span>
                        </p>
                        <p className="m-0 fs-7 text-capitalize mb-2 border-0">
                            <span className="fw-bold head-text">
                                email address :
                            </span>
                            <span className="para-text">
                                {item.Email}
                            </span>
                        </p> 
                        <p className="m-0 fs-7 text-capitalize mb-2 border-0">
                        <span className="fw-bold head-text">
                            contact details :
                        </span>
                        <span className="para-text">
                              {item.ConatctDetail}
                        </span>
                        </p>
                        <div className="d-flex gap-2">
                            <p className="m-0 fs-7 fw-bold text-capitalize border-0 head-text">
                                address :
                            </p>
                            <div>
                                <p className="m-0 para-text fs-7">{item.Address}</p>     
                            </div>
                        </div> 
                    </div>
                </div>
            </div>       
            );
         })}
        </>
    );
}
export default AddressCard1