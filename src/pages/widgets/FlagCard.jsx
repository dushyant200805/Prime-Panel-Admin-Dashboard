function FlagCard() {
  const data = [
    {
      id: 1,
      name: "india",
      progressClass: "second-bg",
      width: "95%",
      image: "/flags/india.gif",
    },
    {
      id: 2,
      name: "usa",
      progressClass: "prime-bg",
      width: "45%",
      image: "/flags/usa.gif",
    },
    {
      id: 3,
      name: "Brazil",
      progressClass: "tertiary-bg",
      width: "30%",
      image: "/flags/brazil.gif",
    },
    {
      id: 4,
      name: "South africa",
      progressClass: "yellow-bg",
      width: "10%",
      image: "/flags/africa.gif",
    },
    {
      id: 5,
      name: "canada",
      progressClass: "red-bg",
      width: "35%",
      image: "/flags/canada.gif",
    },
    {
      id: 6,
      name: "austrailia",
      progressClass: "blue-bg",
      width: "40%",
      image: "/flags/austrailia.gif",
    },
  ];
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            className="d-flex align-items-center gap-3 mb-3 border-bottom pb-2"
            key={index}
          >
            <div className="second-shade p-2 rounded">
              <img
                src={item.image}
                title={item.name}
                width="30"
                height="30"
                className="rounded-circle object-fit-cover"
                alt=""
              />
            </div>
            <div className="flex-grow-1">
              <div className="d-flex align-items-center justify-content-between">
                <p className="m-0 text-capitalize fw-semibold head-text">
                  {item.name}
                </p>
                <p className="m-0 fs-7 fw-semibold para-text">{item.width}</p>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className={`progress-bar ${item.progressClass}`}
                  style={{ width: item.width }}
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default FlagCard;
