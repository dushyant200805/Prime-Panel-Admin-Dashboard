import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import "bootstrap-icons/font/bootstrap-icons.css";

function ProductSliderCard() {
    const mainSliderRef = useRef(null);
    const thumbnailSliderRef = useRef(null);
    const reviewSliderRef = useRef(null);

    useEffect(() => {
        // 1. MAIN SLIDER - Changed to 'fade' to completely eliminate edge-bleeding
        const main = new Splide(mainSliderRef.current, {
            type: "loop", 
            rewind: true,
            pagination: false,
            arrows: true,
            height: "450px",
            autoplay: true,
            interval: 3000,
            speed: 800,
        });

        // 2. THUMBNAIL SLIDER - Changed to standard slide for perfect syncing with fade
        const thumbnails = new Splide(thumbnailSliderRef.current, {
            type: "slide",
            rewind: true,
            fixedWidth: 104, 
            fixedHeight: 65,
            gap: 10,
             arrows: false,
            pagination: false,
            isNavigation: true,
            focus: "center",
            breakpoints: {
                640: {
                    fixedWidth: 66,
                    fixedHeight: 38,
                },
            },
        });

        // Sync and Mount
        main.sync(thumbnails);
        main.mount();
        thumbnails.mount();
// 3. REVIEW SLIDER - FIXED CONFIGURATION
        const reviewSlider = new Splide(reviewSliderRef.current, {
            type: "loop",      // CRITICAL FIX: Stacks slides to eliminate side-by-side text bleeding
            rewind: true,     // Works perfectly with fade type
            perPage: 1,
            autoplay: true,
            interval: 3000,   // Slightly more time to read the text
            speed: 800,
            arrows: false,
            pagination: false,
            pauseOnHover: true,
        });

        reviewSlider.mount();

        return () => {
            main.destroy();
            thumbnails.destroy();
            reviewSlider.destroy();
        };
    }, []);

    return (
        <>
            <div className="col-lg-6 col-xxl-3">
                <div className="p-3 card-bg rounded-2">
                    
                    {/* Main Slider */}
                    <div ref={mainSliderRef} className="splide mb-2" aria-label="Main Slider">
                        <div className="splide__track">
                            {/* p-0 m-0 strips Bootstrap defaults that mess with Splide math */}
                            <ul className="splide__list p-0 m-0">
                                <li className="splide__slide">
                                    <img src="/watch.jpg" alt="Watch" className="w-100 h-100 object-fit-cover" />
                                </li>
                                <li className="splide__slide">
                                    <img src="/shoes.jpg" alt="Shoes" className="w-100 h-100 object-fit-cover" />
                                </li>
                                <li className="splide__slide">
                                    <img src="/earrings.jpg" alt="Earrings" className="w-100 h-100 object-fit-cover" />
                                </li>
                                <li className="splide__slide">
                                    <img src="/tv-product.jpg" alt="TV" className="w-100 h-100 object-fit-cover" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Thumbnail Slider */}
                    <div ref={thumbnailSliderRef} className="splide mb-2" aria-label="Thumbnail Slider">
                        <div className="splide__track">
                            <ul className="splide__list p-0 m-0">
                                <li className="splide__slide">
                                    <img src="/watch.jpg" alt="Watch thumbnail" className="w-100 h-100 object-fit-cover " />
                                </li>
                                <li className="splide__slide">
                                    <img src="/shoes.jpg" alt="Shoes thumbnail" className="w-100 h-100 object-fit-cover " />
                                </li>
                                <li className="splide__slide">
                                    <img src="/earrings.jpg" alt="Earrings thumbnail" className="w-100 h-100 object-fit-cover " />
                                </li>
                                <li className="splide__slide">
                                    <img src="/tv-product.jpg" alt="TV thumbnail" className="w-100 h-100 object-fit-cover " />
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Reviews */}
                    <div className="reviews p-2">
                        <h3 className="m-0 fs-6 fw-bold text-capitalize prime-text text-center rounded-2">
                            product reviews
                            <i className="bi bi-stars ms-2"></i>
                        </h3>
                        <div ref={reviewSliderRef} className="splide mb-2">
                            <div className="splide__track">
                                <ul className="splide__list p-0 m-0">
                                    <li className="splide__slide">
                                        <div className="review-box w-100 text-center py-5 px-3">
                                            <img 
                                                src="/message1.jpg" 
                                                width="50" 
                                                height="50"
                                                className="rounded-circle mb-2 object-fit-cover" 
                                                alt="James Stand" 
                                            />
                                            <h2 className="fs-7 fw-bold m-0 mb-1 head-text">
                                                james stand
                                            </h2>
                                            <p className="m-0 fs-7 para-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto asperiores officia,
                                                reprehenderit quos explicabo.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="splide__slide">
                                        <div className="review-box w-100 text-center py-5 px-3">
                                            <img 
                                                src="/ms2.jpg" 
                                                width="50" 
                                                height="50"
                                                className="rounded-circle mb-2 object-fit-cover" 
                                                alt="James Stand" 
                                            />
                                            <h2 className="fs-7 fw-bold text-capitalize m-0 mb-1 head-text">
                                                james stand
                                            </h2>
                                            <p className="m-0 fs-7 para-text text-center">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto asperiores officia,
                                                reprehenderit quos explicabo.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="splide__slide">
                                        <div className="review-box w-100 text-center py-5 px-3">
                                            <img 
                                                src="/ms3.jpg" 
                                                width="50" 
                                                height="50"
                                                className="rounded-circle mb-2 object-fit-cover" 
                                                alt="James Stand" 
                                            />
                                            <h2 className="fs-7 fw-bold text-capitalize m-0 mb-1 head-text">
                                                james stand
                                            </h2>
                                            <p className="m-0 fs-7 para-text text-center">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Sunt iusto asperiores officia, reprehenderit quos explica
                                            </p>
                                        </div>
                                    </li>
                                    <li className="splide__slide">
                                        <div className="review-box w-100 text-center py-5 px-3">
                                            <img 
                                                src="/ms4.jpg" 
                                                width="50" 
                                                height="50"
                                                className="rounded-circle mb-2 object-fit-cover" 
                                                alt="James Stand" 
                                            />
                                            <h2 className="fs-7 fw-bold text-capitalize m-0 mb-1 head-text">
                                                james stand
                                            </h2>
                                            <p className="m-0 fs-7 para-text text-center">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Sunt iusto asperiores officia, reprehenderit quos explicabo
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default ProductSliderCard;