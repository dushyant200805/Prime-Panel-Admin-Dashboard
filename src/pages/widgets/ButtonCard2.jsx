function ButtonCard1({roundedClass}) { 
    const data =[
        {
            id: 1,
            className:"prime-btn"
        },
         {
            id: 2,
            className:"second-btn"
        },
         {
            id: 3,
            className:"tertiary-btn"
        },
         {
            id: 4,
            className:"red-btn"
        },
         {
            id: 5,
            className:"yellow-btn"
        },
         {
            id: 6,
            className:"blue-btn"
        },

    ];
    return (
        <>
        {data.map((item,index)=>{
            return (
               
                    <button key={index} className={`btn ripple ${item.className} ${roundedClass}`}>
                     click here    <span className="reffect"></span>
                    </button>
                   
                                       
                
            );
        })}
        </>
    );
}
export default ButtonCard1;