import { Link } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

function ProductCard() {
  const [liked, setLiked] = useState({});

  const toggleHeart = (e, id) => {
    e.preventDefault();
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const data = [
    {
      id: 1,
      Title: "product name",
      image: "/shoes.jpg",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, non.",
    },
    {
      id: 2,
      Title: "product name",
      image: "/watch.jpg",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, non.",
    },
    {
      id: 3,
      Title: "product name",
      image: "/watch2.jpg",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, non.",
    },
    {
      id: 4,
      Title: "product name",
      image: "/tv-product.jpg",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, non.",
    },
    {
      id: 5,
      Title: "product name",
      image: "/shoes.jpg",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, non.",
    },
    {
      id: 6,
      Title: "product name",
      image: "/watch.jpg",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, non.",
    },
    {
      id: 7,
      Title: "product name",
      image: "/watch2.jpg",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, non.",
    },
    {
      id: 8,
      Title: "product name",
      image: "/tv-product.jpg",
      Para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, non.",
    },
  ];
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="col-md-6 col-lg-4 col-xxl-3" key={index}>
            <div className="card rounded-2 p-2 product-card-main">
              <div className="product-card-img">
                <img
                  src={item.image}
                  height="250"
                  className="card-img-top rounded-2 object-fit-cover mb-2"
                  alt="..."
                />
              </div>
              <Link
                to="#"
                className="position-absolute top-0 end-0 m-3 product-heart"
                onClick={(e) => toggleHeart(e, item.id)}
              >
                <i
                  className={`bi ${liked[item.id] ? "bi-heart-fill" : "bi-heart"} red-text`}
                ></i>
              </Link>
              <div className="card-body p-0 border-0">
                <h5 className="card-title head-text text-capitalize fs-6 fw-bold m-0">
                  {item.Title}
                </h5>
                <p className="fs-7 m-0 mb-2 head-text">{item.Para}</p>
                <Link to="#" className="btn second-btn rounded-0 btn-sm ms-2">
                  <i className="bi bi-cart"></i> add to cart{" "}
                </Link>
                <Link to="#" className="btn prime-btn rounded-0 btn-sm ms-2">
                  {" "}
                  buy now <i className="bi bi-arrow-right-circle ms-1"></i>{" "}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default ProductCard;
