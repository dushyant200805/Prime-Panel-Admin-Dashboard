

function CartDetails () {
    const data=[
        {
          id:1,
          Title:"cart total:",
          amount:"$500",
        },
        {
          id:2,
          Title:"delivery charges:",
          amount:"+ $19",
        },
         {
          id:3,
          Title:"tax:",
          amount:"+ $5",
        },
        {
          id:4,
          Title:"discount:",
          amount:"- $40",
        },
    ];
    return (
        <>
            {data.map((item,index)=>{
                return (
                    
                    <div className="card-bg d-flex p-2 mb-1 justify-content-between" key={index}>
                        <p className="m-0 fs-7 head-text fw-bold text-capitalize">{item.Title}</p>
                        <p className="m-0 fs-7 para-text">{item.amount}</p>
                    </div>
                    
                );
            })}
               
        </>
    );
}
export default CartDetails