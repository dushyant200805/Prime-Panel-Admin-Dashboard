function SimilerProduct () {
    const data=[
        {
            id:1,
            image:"public/shoes.jpg",
            Title:"leather dummy shoes",
            Price:"$19.99",
        },
         {
            id:1,
            image:"public/watch.jpg",
            Title:"leather dummy shoes",
            Price:"$19.99",
        },
         {
            id:1,
            image:"public/watch2.jpg",
            Title:"leather dummy shoes",
            Price:"$19.99",
        },
         {
            id:1,
            image:"public/tv-product.jpg",
            Title:"leather dummy shoes",
            Price:"$19.99",
        },
         {
            id:1,
            image:"public/watch2.jpg",
            Title:"leather dummy shoes",
            Price:"$19.99",
        },
         {
            id:1,
            image:"public/tv-product.jpg",
            Title:"leather dummy shoes",
            Price:"$19.99",
        },
    ];
   return (
    <>
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th>Similar Product</th>
                    <th>Action</th>  
                </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>{
                    return (
                    <tr key={index}>
                        <td className="fs-7">
                            <div className="d-flex gap-2">
                                <img src={item.image} width="50" height="50" className="rounded-2 object-fit-cover" alt=""/>
                                <div>
                                    <h2 className="fs-7 prime-text fw-bold m-0 text-capitalize fs-7">
                                        {item.Title}
                                    </h2> 
                                    <p className="m-0 text-capitalize para-text fs-7">
                                        <span className="fw-semibold head-text">price:</span> {item.Price}
                                    </p>  
                                </div>
                            </div></td>
                            <td className="fs-7 d-flex gap-3">
                                <button className="btn btn-sm prime-btn"><i className="bi bi-eye"></i></button>
                                <button className="btn btn-sm yellow-btn"><i className="bi bi-heart"></i></button>
                                <button className="btn btn-sm second-btn"><i className="bi bi-cart"></i></button>
                            </td>   
                    </tr>
                    );
                })}
            </tbody>
        </table> 
    </>
   );
}
export default SimilerProduct