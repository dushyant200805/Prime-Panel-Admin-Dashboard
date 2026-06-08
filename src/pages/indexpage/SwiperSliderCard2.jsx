import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function SwiperSliderCard2() {
  const progressCircle = useRef(null);
  const progressText = useRef(null);

  const slides = [
    {
      id: 1,
      image: "/shoes.jpg",
      title: "Leather Shoes",
      price: "$16",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, amet!",
    },
    {
      id: 2,
      image: "/watch.jpg",
      title: "Classic Watch",
      price: "$45",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, amet!",
    },
    {
      id: 3,
      image: "/watch2.jpg",
      title: "Smart Watch",
      price: "$89",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, amet!",
    },
    {
      id: 4,
      image: "/tv-product.jpg",
      title: "Smart TV",
      price: "$299",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, amet!",
    },
    {
      id: 5,
      image: "/can.jpg",
      title: "Headphones",
      price: "$35",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, amet!",
    },
  ];

  const onAutoplayTimeLeft = (swiper, timeLeft, percentage) => {
    if (progressCircle.current) {
      progressCircle.current.style.strokeDashoffset = 125.6 * (1 - percentage);
    }
    if (progressText.current) {
      progressText.current.textContent = `${Math.ceil(timeLeft / 1000)}s`;
    }
  };

  return (
    <>
      <div className="col-md-6 col-lg-6 col-xxl-9">
        <div className="card collapse-card h-100 border-0 shadow-sm rounded-3">
          <div className="p-2">
            <Swiper
              className="prodcart2 rounded-3 position-relative"
              modules={[Autoplay, Navigation]}
              slidesPerView={3}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              navigation={false}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} className="position-relative">
                  <img src={slide.image} className="w-100" alt={slide.title} />
                  <div className="position-absolute bottom-0 body-bg p-3 prime-border border-top border-2 start-0 w-100 fw-semibold z-3">
                    <h3 className="m-0 fs-5 head-text fw-medium text-capitalize">
                      {slide.title} {slide.price}
                    </h3>
                    <p className="fs-7 m-0 mb-2 para-text">
                      {slide.description}
                    </p>
                    <div className="d-flex gap-2">
                      <button className="btn second-btn">
                        <i className="bi bi-cart fw-semibold fs-6"></i> buy now
                      </button>
                      <button className="btn tertiary-btn">
                        <i className="bi bi-plus fw-semibold fs-6"></i> add to
                        cart
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20" ref={progressCircle}></circle>
                </svg>
                <span ref={progressText}></span>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default SwiperSliderCard2;
