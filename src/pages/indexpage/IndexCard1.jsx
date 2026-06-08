import { faEnvelope, faEye, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function IndexCard1({ bgclass }) {
  const data = [
    {
      id: 1,
      title: "how are you today!",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, optio aliquid nobis quaerat placeat provident id dolore pariatur minus, vel reiciendis iure consectetur commodi corrupti!",
      buttonText: "invite now !",
      buttonIcon: faEnvelope,
      image: "/announce.png",
    },
    {
      id: 2,
      title: "how are you today!",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, optio aliquid nobis quaerat placeat provident id dolore pariatur minus, vel reiciendis iure consectetur commodi corrupti!",
      buttonText: "read now !",
      buttonIcon: faFile,
      image: "/meet1.png",
    },
    {
      id: 3,
      title: "good morning!",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, optio aliquid nobis quaerat placeat provident id dolore pariatur minus, vel reiciendis iure consectetur commodi corrupti!",
      buttonText: "view now !",
      buttonIcon: faEye,
      image: "/meet2.png",
    },
  ];
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="col-md-6 col-lg-6 col-xxl-4" key={index}>
            <div
              className={`card ${bgclass ? "announce-bg" : "card-bg announce-bg announce-bg2"} collapse-card h-100 border-0 shadow-sm rounded-3`}
            >
              <div className="p-3">
                <div className="row align-items-center">
                  <div className="col-7">
                    <h3 className="m-0 mb-3 head-text fs-4 fw-semibold prime-font text-capitalize">
                      {item.title}
                    </h3>
                    <p className="head-text fw-semibold text-capitalize">
                      {item.para}
                    </p>
                    <button className="btn prime-btn fs-6  rounded-1">
                      {" "}
                      <FontAwesomeIcon
                        icon={item.buttonIcon}
                        className="align-middle me-2"
                      />{" "}
                      {item.buttonText}
                    </button>
                  </div>
                  <div className="col-5">
                    <img src={item.image} alt="announce-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default IndexCard1;
