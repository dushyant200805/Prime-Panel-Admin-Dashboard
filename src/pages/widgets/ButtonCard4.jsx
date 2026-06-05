function ButtonCard4() { 
    const data =[
        {
            id: 1,
            side:"top", 
            buttonNmae:" Popover on top",
            className:"prime-btn"
        },
         {
            id: 2,
            side:"right", 
            buttonNmae:"Popover on right",
            className:"second-btn"
        },
         {
            id: 3,
            side:"bottom", 
            buttonNmae:"Popover on bottom",
            className:"tertiary-btn"
        },
         {
            id: 4,
            side:"left", 
            buttonNmae:"Popover on left",
            className:"btn-primary"
        }
    ];
    return (
        <>
        {data.map((item,index)=>{
            return (
              
                  <button type="button" key={index} className={`btn ripple ${item.className}`} data-bs-container="body" data-bs-toggle="popover" data-bs-placement={item.side} data-bs-content="Top popover">
                    {item.buttonNmae}
                    <span className="reffect"></span>
                  </button>
            );  
        })}
        </>
    );
}
export default ButtonCard4;