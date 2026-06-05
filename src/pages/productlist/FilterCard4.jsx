import { Link } from "react-router";

function FilterCard4 () {
    return(
        <>
         <tr> 
            <td>
                <h4 className="m-0 mb-2 fs-5 text-capitalize fw-bold blue-shade blue-text p-2 rounded-2">colors</h4> 
                <div className="color-box d-flex align-items-center gap-3 px-2">
                        <Link to="#" className="color-pick red">
                        <input type="text" defaultValue="red" hidden/>
                        </Link>
                        <Link to="#" className="color-pick yellow">
                        <input type="text" defaultValue="orange" hidden/> 
                        </Link>
                        <Link to="#" className="color-pick green">
                        <input type="text" defaultValue="yellow" hidden/> 
                        </Link>
                        <Link to="#" className="color-pick blue">
                        <input type="text" defaultValue="blue" hidden/> 
                        </Link>
                        <Link to="#" className="color-pick purple">
                        <input type="text" defaultValue="pink" hidden/>
                        </Link>
                </div>
            </td>
        </tr>
        </>
    );
}
export default FilterCard4