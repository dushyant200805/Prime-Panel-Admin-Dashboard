import "bootstrap-icons/font/bootstrap-icons.css";
import PageTitle from "../../components/Common/PageTitle";
import ShoppingCard1 from "./ShoppingCard1";
import DetailForm from "./DetailForm";
import PaymentDetail from "./PaymentDetail";
import DataTable10 from "../../components/Common-Sections/datatables/DataTable10";
function CheckOutPage() {
  return (
    <>
      <PageTitle title="Checkout" />
      <div className="row g-3">
        <div className="col-md-6 col-lg-4 col-xxl-2">
          <div
            className="card-bg h-100 p-2 rounded-2 d-flex flex-column justify-content-between"
            id="checkmain"
          >
            <div
              className="nav flex-column nav-pills border rounded-2 p-2 rounded-2 mb-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link text-capitalize active"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                <i className="bi bi-truck"></i> shipping details
              </button>
              <button
                className="nav-link text-capitalize"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                <i className="bi bi-person-circle"></i> personal details
              </button>
              <button
                className="nav-link text-capitalize"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                <i className="bi bi-credit-card"></i> payment details
              </button>
              <button
                className="nav-link text-capitalize m-0"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <i className="bi bi-check-circle"></i> order complete
              </button>
            </div>
            <img src="/delivery2.png" className="w-100" alt="" />
          </div>
        </div>
        <div className="col-md-6 col-lg-8 col-xxl-7">
          <div className="card-bg h-100 p-2 rounded-2" id="checkmainbox">
            <div className="tab-content" id="v-pills-tabContent">
              {/* <!-- shipping details --> */}
              <ShoppingCard1 />
              {/* <!-- personal details --> */}
              <DetailForm />
              {/* <!-- payment details --> */}
              <PaymentDetail />
              {/* <!-- complete order --> */}
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
                tabIndex="0"
              >
                <div className="text-center success-img-box">
                  <img
                    src="/payment/success1.png"
                    className="scss-img"
                    alt=""
                  />
                  <img
                    src="/payment/success2.png"
                    className="scss-img"
                    alt=""
                  />
                  <img
                    src="/payment/success3.png"
                    className="scss-img"
                    alt=""
                  />
                  <img
                    src="/payment/success4.png"
                    className="scss-img"
                    alt=""
                  />
                  <img
                    src="/payment/success5.png"
                    className="scss-img"
                    alt=""
                  />
                </div>
                <div className="mb-3 w-50 mx-auto">
                  <h2 className="second-text prime-font fw-bold text-center text-capitalize">
                    payment recieved{" "}
                    <i className="bi bi-hand-thumbs-up"></i>{" "}
                  </h2>
                  <p className="m-0 para-text text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod quibusdam beatae eos repudiandae! Nisi ab laborum nam
                    sapiente. Atque, aperiam ad maiores placeat nobis earum!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-xxl-3">
          <div className="card-bg h-100 p-2 rounded-2">
            <h2 className="mb-0 fs-5 text-capitalize fw-bold blue-shade blue-text p-2 mb-3 rounded-2">
              shopping details
            </h2>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <DataTable10 />
                  <tr>
                    <td>
                      <p className="fw-bold text-capitalize m-0 mb-1">price</p>
                      <p className="fw-bold text-capitalize m-0 mb-1">
                        discount
                      </p>
                    </td>
                    <td>
                      <p className="para-text fw-semibold fs-7 text-capitalize m-0 mb-1">
                        $478
                      </p>
                      <p className="second-text fw-semibold fs-7 text-capitalize m-0 mb-1">
                        $18
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="fw-bold text-capitalize m-0 mb-1">total</p>
                    </td>
                    <td>
                      <p className="para-text fw-semibold fs-7 text-capitalize m-0 mb-1">
                        $460
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CheckOutPage;
