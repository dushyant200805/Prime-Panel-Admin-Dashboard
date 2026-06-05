import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

function SwiperSliderCard1() {
    const slides = [
        {
            id: 1,
            image: "public/shoes.jpg",
            title: "Leather Shoes",
            price: "$16",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, amet!",
        },
        {
            id: 2,
            image: "public/watch.jpg",
            title: "Classic Watch",
            price: "$45",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, amet!",
        },
        {
            id: 3,
            image: "public/watch2.jpg",
            title: "Smart Watch",
            price: "$89",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, amet!",
        },
        {
            id: 4,
            image: "public/tv-product.jpg",
            title: "Smart TV",
            price: "$299",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, amet!",
        },
        {
            id: 5,
            image: "public/can.jpg",
            title: "Headphones",
            price: "$35",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, amet!",
        },
    ];

    return (
        <>
            <div className="col-md-6 col-lg-6 col-xxl-3">
                <div className="card collapse-card h-100 border-0 shadow-sm rounded-3">
                    <div className="p-2">
                        <Swiper className="prodcart1 rounded-3"
                            modules={[Autoplay, Scrollbar]}
                            direction="horizontal"
                            loop={true}
                            spaceBetween={25}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            scrollbar={{
                                hide: true,
                            }}
                        >
                            {slides.map((slide) => (
                                <SwiperSlide key={slide.id} className="position-relative">
                                    <img src={slide.image} className="w-100" alt={slide.title} />
                                    <div className="position-absolute bottom-0 body-bg p-3 prime-border border-top border-2 start-0 w-100 fw-semibold z-3">
                                        <h3 className="m-0 fs-5 head-text fw-medium text-capitalize">
                                            {slide.title} {slide.price}
                                        </h3>
                                        <p className="fs-7 m-0 mb-2 para-text">{slide.description}</p>
                                        <div className="d-flex gap-2">
                                            <button className="btn second-btn">
                                                <i className="bi bi-cart fw-semibold fs-6"></i> buy now
                                            </button>
                                            <button className="btn tertiary-btn">
                                                <i className="bi bi-plus fw-semibold fs-6"></i> add to cart
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SwiperSliderCard1;
