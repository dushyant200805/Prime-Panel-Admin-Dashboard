function Card8() {
  return (
    <>
      <div className="card border-0 rounded-2 mb-2">
        <img
          src="/shoes.jpg"
          height="200"
          className="card-img-top rounded-2 object-fit-cover"
          alt="..."
        />
      </div>
      <div className="card-body card-bg p-2 rounded-2 border-0">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title head-text text-capitalize fs-6 fw-bold m-0">
            product name
          </h5>
          <span className="second-shade border second-border fs-8 second-text fw-bold rounded-pill px-2">
            15s ago
          </span>
        </div>
        <p className="fs-7 m-0 head-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, non.
        </p>
      </div>
    </>
  );
}
export default Card8;
