import React, { useRef, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "@iconify-icon/react";

const ProductsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const inputRef = useRef(null);
  console.log(inputRef);
  const handleClick = () => {
    inputRef.current.focus(); // focus the input field
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center gap-1">
                <h4 className="card-title flex-grow-1">All Product List</h4>

                <Link to="/product-add" className="btn btn-sm btn-primary">
                  Add Product
                </Link>

                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-sm btn-outline-light"
                    onClick={toggleDropdown}
                    aria-expanded={isOpen}
                  >
                    This Month
                  </Link>
                  <div
                    className={`dropdown-menu dropdown-menu-end ${
                      isOpen ? "show" : ""
                    }`}
                  >
                    <Link to="#!" className="dropdown-item">
                      Download
                    </Link>
                    <Link to="#!" className="dropdown-item">
                      Export
                    </Link>
                    <Link to="#!" className="dropdown-item">
                      Import
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <div className="table-responsive">
                  <table className="table align-middle mb-0 table-hover table-centered">
                    <thead className="bg-light-subtle">
                      <tr>
                        <th style={{ width: "20px" }}>
                          <div className="form-check ms-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck1"
                            ></label>
                          </div>
                        </th>
                        <th>Product Name & Size</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check ms-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-1.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Black T-shirt
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Size : </span>S , M , L , Xl
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$80.00</td>
                        <td>
                          <p className="mb-1 text-muted">
                            <span className="text-dark fw-medium">
                              486 Item
                            </span>
                            Left
                          </p>
                          <p className="mb-0 text-muted">155 Sold</p>
                        </td>
                        <td>Fashion</td>
                        <td>
                          <span className="badge p-1 bg-light text-dark fs-12 me-1">
                            <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                            4.5
                          </span>
                          55 Review
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check ms-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-2.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Olive Green Leather Bag
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Size : </span>S , M
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$136.00</td>
                        <td>
                          <p className="mb-1 text-muted">
                            <span className="text-dark fw-medium">
                              784 Item
                            </span>
                            Left
                          </p>
                          <p className="mb-0 text-muted">674 Sold</p>
                        </td>
                        <td>Hand Bag</td>
                        <td>
                          <span className="badge p-1 bg-light text-dark fs-12 me-1">
                            <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                            4.1
                          </span>
                          143 Review
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check ms-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-3.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Women Golden Dress
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Size : </span>S , M
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$219.00</td>
                        <td>
                          <p className="mb-1 text-muted">
                            <span className="text-dark fw-medium">
                              769 Item
                            </span>
                            Left
                          </p>
                          <p className="mb-0 text-muted">180 Sold</p>
                        </td>
                        <td>Fashion</td>
                        <td>
                          <span className="badge p-1 bg-light text-dark fs-12 me-1">
                            <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                            4.4
                          </span>
                          174 Review
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check ms-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-4.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Gray Cap For Men
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Size : </span>S , M , L
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$76.00</td>
                        <td>
                          <p className="mb-1 text-muted">
                            <span className="text-dark fw-medium">
                              571 Item
                            </span>
                            Left
                          </p>
                          <p className="mb-0 text-muted">87 Sold</p>
                        </td>
                        <td>Cap</td>
                        <td>
                          <span className="badge p-1 bg-light text-dark fs-12 me-1">
                            <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                            4.2
                          </span>
                          23 Review
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check ms-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-5.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Dark Green Cargo Pent
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Size : </span>S , M , L , Xl
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$110.00</td>
                        <td>
                          <p className="mb-1 text-muted">
                            <span className="text-dark fw-medium">
                              241 Item
                            </span>
                            Left
                          </p>
                          <p className="mb-0 text-muted">342 Sold</p>
                        </td>
                        <td>Fashion</td>
                        <td>
                          <span className="badge p-1 bg-light text-dark fs-12 me-1">
                            <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                            4.4
                          </span>
                          109 Review
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check ms-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-6.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Orange Multi Color Headphone
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Size : </span>S , M
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$231.00</td>
                        <td>
                          <p className="mb-1 text-muted">
                            <span className="text-dark fw-medium">
                              821 Item
                            </span>
                            Left
                          </p>
                          <p className="mb-0 text-muted">231 Sold</p>
                        </td>
                        <td>Electronics</td>
                        <td>
                          <span className="badge p-1 bg-light text-dark fs-12 me-1">
                            <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                            4.2
                          </span>
                          200 Review
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check ms-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-7.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Kid's Yellow Shoes
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Size : </span>18 , 19 , 20 , 21
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$89.00</td>
                        <td>
                          <p className="mb-1 text-muted">
                            <span className="text-dark fw-medium">
                              321 Item
                            </span>
                            Left
                          </p>
                          <p className="mb-0 text-muted">681 Sold</p>
                        </td>
                        <td>Shoes</td>
                        <td>
                          <span className="badge p-1 bg-light text-dark fs-12 me-1">
                            <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                            4.5
                          </span>
                          321 Review
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check ms-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-8.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Men Dark Brown Wallet
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Size : </span>S , M
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$132.00</td>
                        <td>
                          <p className="mb-1 text-muted">
                            <span className="text-dark fw-medium">
                              190 Item
                            </span>
                            Left
                          </p>
                          <p className="mb-0 text-muted">212 Sold</p>
                        </td>
                        <td>Wallet</td>
                        <td>
                          <span className="badge p-1 bg-light text-dark fs-12 me-1">
                            <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                            4.1
                          </span>
                          190 Review
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check ms-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-9.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Sky Blue Sunglass
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Size : </span>S , M
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$77.00</td>
                        <td>
                          <p className="mb-1 text-muted">
                            <span className="text-dark fw-medium">
                              784 Item
                            </span>
                            Left
                          </p>
                          <p className="mb-0 text-muted">443 Sold</p>
                        </td>
                        <td>Sunglass</td>
                        <td>
                          <span className="badge p-1 bg-light text-dark fs-12 me-1">
                            <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                            3.5
                          </span>
                          298 Review
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check ms-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-10.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Kid's Yellow T-shirt
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Size : </span>S
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$110.00</td>
                        <td>
                          <p className="mb-1 text-muted">
                            <span className="text-dark fw-medium">
                              650 Item
                            </span>
                            Left
                          </p>
                          <p className="mb-0 text-muted">365 Sold</p>
                        </td>
                        <td>Fashion</td>
                        <td>
                          <span className="badge p-1 bg-light text-dark fs-12 me-1">
                            <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                            4.1
                          </span>
                          156 Review
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check ms-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-11.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                White Rubber Band Smart Watch
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Size : </span>S , M
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$77.00</td>
                        <td>
                          <p className="mb-1 text-muted">
                            <span className="text-dark fw-medium">98 Item</span>
                            Left
                          </p>
                          <p className="mb-0 text-muted">241 Sold</p>
                        </td>
                        <td>Electronics</td>
                        <td>
                          <span className="badge p-1 bg-light text-dark fs-12 me-1">
                            <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                            3.4
                          </span>
                          201 Review
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check ms-1">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck2"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                              <img
                                src="assets/images/product/p-12.png"
                                alt=""
                                className="avatar-md"
                              />
                            </div>
                            <div>
                              <Link
                                to="#!"
                                className="text-dark fw-medium fs-15"
                              >
                                Men Brown Leather Shoes
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Size : </span>40 , 41 , 42 , 43
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$222.00</td>
                        <td>
                          <p className="mb-1 text-muted">
                            <span className="text-dark fw-medium">
                              176 Item
                            </span>
                            Left
                          </p>
                          <p className="mb-0 text-muted">658 Sold</p>
                        </td>
                        <td>Shoes</td>
                        <td>
                          <span className="badge p-1 bg-light text-dark fs-12 me-1">
                            <i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i>
                            4.1
                          </span>
                          370 Review
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link to="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-primary btn-sm"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                            >
                              <iconify-icon
                                icon="solar:trash-bin-minimalistic-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <!-- end table-responsive --> */}
              </div>

              <div className="card-footer border-top">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end mb-0">
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        Previous
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div>
                <button onClick={handleScroll}>Go to Section</button>
                <div style={{ height: "800px" }}></div>{" "}
                {/* Just to create scroll space */}
                <div
                  ref={sectionRef}
                  style={{
                    height: "200px",
                    background: "lightblue",
                    padding: "20px",
                  }}
                >
                  🎯 You have reached the section!
                </div>
              </div>

              <div>
                <video
                  ref={videoRef}
                  width="100%"
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  controls={false}
                ></video>
                <br />
                <button onClick={handlePlay}>▶️ Play</button>
                <button onClick={handlePause}>⏸️ Pause</button>
              </div>

              <div>
                <input type="text" ref={inputRef} />
                <button onClick={handleClick}>Focus the input</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsList;
