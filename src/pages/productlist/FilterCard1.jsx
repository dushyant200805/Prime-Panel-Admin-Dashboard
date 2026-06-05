function FilterCard1 () {
    const data = [
        {   
            id:1,
            Title:"dummy brand one",
            Amount:"(5,884)",
        },
        {   
            id:2,
            Title:"dummy brand Two",
            Amount:"(5,884)",
        },
        {   
            id:3,
            Title:"dummy brand three",
            Amount:"(5,884)",
        },
        {   
            id:4,
            Title:"dummy brand four",
            Amount:"(5,884)",
        },
        {   
            id:5,
            Title:"dummy brand five",
            Amount:"(5,884)",
        },
    ];  
    return (
        <>
            {data.map((item,index)=>{
                return (
              
                    <tr key={index}>
                        <td>
                            <div className="d-flex align-items-center gap-1">
                                <p className="text-capitalize fs-7 fw-semibold m-0">{item.Title}</p>
                                <span className="fs-8 para-text">{item.Amount}</span>
                            </div>
                        </td>
                        <td className="text-end">
                            <input type="checkbox" />
                        </td>
                    </tr>
               
                );
            })}
        </>
    );
}
export default FilterCard1