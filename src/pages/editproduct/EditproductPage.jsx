import { useState, useEffect, useRef } from "react";
import PageTitle from "../../components/Common/PageTitle";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextEditor from "../../components/Common-Sections/TextEditore";
// Import FilePond CSS
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import "select2/dist/css/select2.min.css";
import select2 from "select2";

// Polyfills for $.methods - required for select2 compatibility with newer jQuery versions
if (!$.isArray) {
    $.isArray = Array.isArray;
}

if (!$.trim) {
    $.trim = function (str) {
        return str == null ? "" : String(str).trim();
    };
}

if (!$.nodeName) {
    $.nodeName = function (elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    };
}

// Initialize select2 with jQuery
select2($);

// Register the plugin
registerPlugin(FilePondPluginImagePreview);

function EditproductPage() {
    const [featuredFiles, setFeaturedFiles] = useState([]);
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [colorFields, setColorFields] = useState(["#e3e3e3", "#e3e3e3", "#e3e3e3"]);
    const sizeSelectRef = useRef(null);


    useEffect(() => {
        // Add a small delay to ensure DOM is ready and select2 is fully loaded
        const timer = setTimeout(() => {
            if (sizeSelectRef.current && $.fn.select2) {
                try {
                    $(sizeSelectRef.current).select2({
                        placeholder: "Select sizes",
                        allowClear: true,
                        width: "100%",
                    });
                } catch (error) {
                    console.error("Select2 initialization error:", error);
                }
            }
        }, 100);

        return () => {
            clearTimeout(timer);
            try {
                if (
                    sizeSelectRef.current &&
                    $(sizeSelectRef.current).data("select2")
                ) {
                    $(sizeSelectRef.current).select2("destroy");
                }
            } catch (error) {
                console.error("Select2 destroy error:", error);
            }
        };
    }, []);

    const addColorField = () => {
        setColorFields([...colorFields, "#e3e3e3"]);
    };

    const updateColor = (index, value) => {
        const updated = [...colorFields];
        updated[index] = value;
        setColorFields(updated);
    };




    return (
        <>
            <PageTitle title="Edit Product" />
            <div className="row g-3 mb-3">
                <div className="col-12">
                    <div className="card p-3 collapse-card h-100 border-0 shadow-sm rounded-3">
                        <form id="addprod" noValidate>
                            <div className="row">
                                <div className="col-12 mb-2">
                                    <div className="blue-shade rounded-2 p-2">
                                        <p className="m-0 blue-text text-capitalize fw-semibold">about product</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <label htmlFor="product" className="form-label head-text text-capitalize m-1 fs-7">product name</label>
                                    <input type="text" className="form-control input-text input-bg fs-7" defaultValue="dazzle watch one" name="product" id="product" required />
                                </div>
                                <div className="col-md-4 mb-2">
                                    <label htmlFor="sku" className="form-label head-text text-capitalize m-1 fs-7">sku number</label>
                                    <input type="text" className="form-control input-text input-bg fs-7" name="sku" defaultValue="0248s" id="sku" required />
                                </div>
                                <div className="col-md-4 mb-2">
                                    <label htmlFor="category" className="form-label head-text text-capitalize m-1 fs-7">category</label>
                                    <select name="category" id="category" className="form-control input-text input-bg fs-7">
                                        <option defaultValue="">select</option>
                                        <option defaultValue="1">category1</option>
                                        <option defaultValue="2" >category2</option>
                                        <option defaultValue="3">category3</option>
                                        <option defaultValue="4">category4</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <label htmlFor="mysku" className="form-label head-text text-capitalize m-1 fs-7">size</label>
                                    <select id="mysku" ref={sizeSelectRef} className="form-control input-text input-bg fs-7" multiple>
                                        <option>42</option>
                                        <option defaultValue>68</option>
                                        <option defaultValue>78</option>
                                        <option>47</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <label htmlFor="brand" className="form-label head-text text-capitalize m-1 fs-7">brand name</label>
                                    <select name="brand" id="brand" className="form-control input-text input-bg fs-7">
                                        <option defaultValue="">select</option>
                                        <option defaultValue="1">brand 1</option>
                                        <option defaultValue="2">brand 2</option>
                                        <option defaultValue="3" >brand 3</option>
                                        <option defaultValue="4">brand 4</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <label className="form-label head-text text-capitalize m-1 fs-7">gender</label>
                                    <div className="d-flex align-items-center">
                                        <div className="me-2">
                                            <input type="radio" name="gender" id="male" defaultChecked />
                                            <span className="text-capitalize ps-1 head-text">male</span>
                                        </div>
                                        <div className="me-2">
                                            <input type="radio" name="gender" id="female" />
                                            <span className="text-capitalize ps-1 head-text">female</span>
                                        </div>
                                        <div className="me-2">
                                            <input type="radio" name="gender" id="unisex" />
                                            <span className="text-capitalize ps-1 head-text">unisex</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <label htmlFor="price" className="form-label head-text text-capitalize m-1 fs-7">Price</label>
                                    <input type="text" className="form-control input-text input-bg fs-7" name="price" id="price" defaultValue="14" required />
                                </div>
                                <div className="col-md-4 mb-2">
                                    <label htmlFor="discountedPrice" className="form-label head-text text-capitalize m-1 fs-7">discounted price</label>
                                    <input type="text" className="form-control input-text input-bg fs-7" name="discountedPrice" defaultValue="98" id="discountedPrice" required />
                                </div>
                                <div className="col-md-4 mb-2">
                                    <label htmlFor="totalDiscount" className="form-label head-text text-capitalize m-1 fs-7">total discount</label>
                                    <input type="text" className="form-control input-text input-bg fs-7" name="totalDiscount" defaultValue="78" id="totalDiscount" required />
                                </div>
                                <div className="col-12 mb-2 position-relative">
                                    <TextEditor />
                                </div>
                                <div className="col-12 mb-2">
                                    <div className="blue-shade rounded-2 p-2">
                                        <p className="m-0 blue-text text-capitalize fw-semibold">product images</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label className="form-label head-text text-capitalize m-1 fs-7">featured images</label>
                                    <FilePond
                                        files={featuredFiles}
                                        onupdatefiles={setFeaturedFiles}
                                        allowMultiple={true}
                                        maxFiles={5}
                                        name="featuredImages"
                                        labelIdle='Drag & Drop your featured images or <span className="filepond--label-action">Browse</span>'
                                        acceptedFileTypes={["image/png", "image/jpeg", "image/gif"]}
                                    />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label className="form-label head-text text-capitalize m-1 fs-7">thumbnail images</label>
                                    <FilePond
                                        files={thumbnailFiles}
                                        onupdatefiles={setThumbnailFiles}
                                        allowMultiple={true}
                                        maxFiles={5}
                                        name="thumbnailImages"
                                        labelIdle='Drag & Drop your thumbnail images or <span className="filepond--label-action">Browse</span>'
                                        acceptedFileTypes={["image/png", "image/jpeg", "image/gif"]}
                                    />
                                </div>
                                <div className="col-12 mb-2">
                                    <div className="blue-shade rounded-2 p-2">
                                        <p className="m-0 blue-text text-capitalize fw-semibold">Additional Details</p>
                                    </div>
                                </div>
                                <div className="col-12 mb-2">
                                    <label className="form-label head-text text-capitalize m-1 fs-7">available colors</label>
                                    <div className="d-flex flex-wrap gap-2 align-items-center" id="colorFields">
                                        <button type="button" className="btn prime-btn rounded-1" id="addColorField" onClick={addColorField}>
                                            <FontAwesomeIcon icon={faPlus} className="fs-6" />
                                        </button>
                                        {colorFields.map((color, index) => (
                                            <input
                                                key={index}
                                                type="color"
                                                className="colorPicker"
                                                value={color}
                                                onChange={(e) => updateColor(index, e.target.value)}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="col-md-12 mb-2">
                                    <label htmlFor="terms" className="form-label head-text text-capitalize m-1 fs-7">terms and conditions</label>
                                   <textarea
                                     name="terms"
                                     id="terms"
                                     rows="7"
                                     className="form-control input-text input-bg fs-7"
                                     defaultValue={`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Possimus aliquid laborum esse saepe quibusdam molestias, nihil adipisci quasi. Quod odit tempora, error
                                            dicta provident iure id molestias nihil nobis commodi mollitia facilis quae quo reprehenderit nemo deserunt
                                        suscipit ratione repellat?`}
                                    />
                                </div>
                                <div className="col-12 d-flex gap-2">
                                    <button className="btn second-btn ripple" type="submit">Submit form
                                        <span className="reffect"></span>
                                    </button>
                                    <button className="btn red-btn ripple" type="reset">
                                        clear form
                                        <span className="reffect"></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditproductPage;