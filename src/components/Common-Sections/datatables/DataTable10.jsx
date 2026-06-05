function DataTable10 () {
       const taskList = [
       {
            id: 1,
            image: "public/shoes.jpg",
            ProductName:" leather dummy shoes",
            color:"gray",
            size:"compact",
            Discount:"75% off",
            price:"25.99",
        },
        {
            id: 2,
            image: "public/watch.jpg",
            ProductName:"gold platted watch ",
            color:"gray",
            size:"compact",
            Discount:"75% off",
            price: "75.99",
        },
        {
            id: 3,
            image: "public/watch2.jpg",
            ProductName:"silver gold platted watch ",
            color:"gray",
            size:"compact",
            Discount:"75% off",
            price: "299.99",
        },
        {
            id: 4,
            image: "public/tv-product.jpg",
            ProductName:"samsung led tv",
            color:"gray",
            size:"compact",
            Discount:"75% off",
            price: "19.99",
        },
        {
            id: 5,
            image: "public/tv-product.jpg",
            ProductName:" LG TV ",
            color:"gray",
            size:"compact",
            Discount:"75% off",
            price: "389.85",
        }
    ];
    return (
        <>
           {taskList.map((item, index) => {
                    return (
                        
                        <tr key={index}>
                            <td className="fs-7">
                                <div className="d-flex gap-2">
                                    <img src={`${item.image}`} width="50" height="50" className="rounded-2 object-fit-cover" alt=""/>
                                    <div>
                                        <h2 className="fs-7 prime-text fw-bold m-0 text-capitalize fs-7">
                                                {item.ProductName}
                                        </h2>
                                        
                                        <p className="m-0 text-capitalize para-text fs-7">
                                            <span className="fw-semibold head-text">color:</span>{item.color}
                                        </p>
                                        <p className="m-0 text-capitalize para-text fs-7">
                                            <span className="fw-semibold head-text">size:</span> {item.size}
                                        </p> 
                                        <p className="m-0 text-capitalize para-text fs-7">
                                            <span className="fw-semibold head-text">discount:</span>
                                            <span className="second-text fw-semibold fs-8"> {item.Discount}</span>
                                        </p> 
                                    </div>
                                </div>
                            </td>
                            <td className="fs-7">${item.price}</td>  
                        </tr>
                    )
                })}
        </>
    );
}
export default DataTable10