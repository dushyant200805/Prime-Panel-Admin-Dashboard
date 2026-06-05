import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import $ from "jquery";

import "jquery-ui-dist/jquery-ui";
import "jquery-ui-dist/jquery-ui.css";
function FilterCard3 () {
    const sliderRef = useRef(null);

    const [range, setRange] = useState({
        min: 300,
        max: 4000,
    });

    useEffect(() => {

        $(sliderRef.current).slider({
            range: true,
            min: 5,
            max: 5000,
            values: [300, 4000],

            slide: function (event, ui) {

                setRange({
                    min: ui.values[0],
                    max: ui.values[1],
                });

            },
        });

        return () => {

            if ($(sliderRef.current).hasClass("ui-slider")) {
                $(sliderRef.current).slider("destroy");
            }

        };

    }, []);
    return (
        <>
          <tr>
            <td colSpan="2">
                 
                <div className="price-range-slider"> 
                    <p className="range-value mb-3 ps-2">
                        <input type="text" id="amount" defaultValue={`$${range.min} - $${range.max}`} readOnly/>
                    </p>  
                    <div id="slider-range"   ref={sliderRef} className="range-bar mb-3">
                    </div> 
                </div>
            </td> 
        </tr>
        
        </>
    );
}
export default FilterCard3 