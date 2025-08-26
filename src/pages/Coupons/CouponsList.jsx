import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const CouponsList = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row d-none">
          <div className="col-lg-12">
            <div className="card bg-light-subtle">
              <div className="card-header border-0">
                <div className="row justify-content-between">
                  <div className="col-lg-6">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <form className="app-search d-none d-md-block me-auto">
                          <div className="position-relative">
                            <input
                              type="search"
                              className="form-control"
                              placeholder="Search Coupons and Code"
                              autoComplete="off"
                              defaultValue=""
                            />
                            <iconify-icon
                              icon="solar:magnifer-broken"
                              className="search-widget-icon"
                            ></iconify-icon>
                          </div>
                        </form>
                      </div>
                      <div className="col-lg-4">
                        <h5 className="text-dark fw-medium mb-0">
                          5,786 <span className="text-muted">Items</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="text-md-end mt-3 mt-md-0">
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-1"
                      >
                        <i className="bx bx-cog me-1"></i>More Setting
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-1"
                      >
                        <i className="bx bx-filter-alt me-1"></i> Filters
                      </button>
                      <button type="button" className="btn btn-success me-1">
                        <i className="bx bx-plus"></i> New Coupons
                      </button>
                    </div>
                  </div>
                  {/* <!-- end col--> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="card bg-primary-subtle">
              <div className="card-body">
                <h4 className="mb-1">4 Coupons</h4>
                <p>Small nice summer coupons pack</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="text-primary fw-semibold">$140.00</h3>
                    <p className="mb-0">Duration : 1 Year</p>
                  </div>
                  <div>
                    <Link to="#!" className="btn btn-primary">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card bg-info-subtle">
              <div className="card-body">
                <h4 className=" mb-1">8 Coupons</h4>
                <p className="">Medium nice summer coupons pack</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="text-info fw-semibold">$235.00</h3>
                    <p className="mb-0">Duration : 1 Year</p>
                  </div>
                  <div>
                    <Link to="#!" className="btn btn-info">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-xl-6">
            <div className="card bg-primary-subtle overflow-hidden z-1">
              <div className="card-body">
                <div className="d-flex flex-wrap rounded-3 gap-2 align-items-center">
                  <iconify-icon
                    icon="solar:bag-smile-bold-duotone"
                    className="fs-48 text-primary"
                  ></iconify-icon>
                  <div className="d-block">
                    <h3 className=" fw-semibold">
                      30% Special discounts for customers
                    </h3>
                    <h5 className=" mb-0">25 November - 2 December</h5>
                  </div>
                  <div className="ms-auto"></div>
                </div>
              </div>
              <div className="card-footer pt-2">
                <Link to="#!" className="btn btn-primary fw-semibold">
                  View Plan
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="d-flex card-header justify-content-between align-items-center">
                <div>
                  <h4 className="card-title">All Product List</h4>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-sm btn-outline-light rounded"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    This Month
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
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
                          <div className="form-check">
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
                        <th>Product Name & Type</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Code</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
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
                                <span>Fashion</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$80.00</td>
                        <td>$20.00</td>
                        <td>FASHION123</td>
                        <td>12 May 2023</td>
                        <td>12 Jun 2023</td>
                        <td>
                          <span className="badge text-success bg-success-subtle fs-12">
                            <i className="bx bx-check-double"></i>Active
                          </span>
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
                          <div className="form-check">
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
                                <span>Hand Bag</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$136.00</td>
                        <td>$37.00</td>
                        <td>SUMMER24</td>
                        <td>19 July 2023</td>
                        <td>23 Aug 2023</td>
                        <td>
                          <span className="badge text-danger bg-danger-subtle fs-12">
                            <i className="bx bx-x"></i>Expired
                          </span>
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
                          <div className="form-check">
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
                                <span>Fashion</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$219.00</td>
                        <td>$20.00</td>
                        <td>FASHION123</td>
                        <td>24 Aug 2023</td>
                        <td>20 Sep 2023</td>
                        <td>
                          <span className="badge text-success bg-success-subtle fs-12">
                            <i className="bx bx-check-double"></i>Active
                          </span>
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
                          <div className="form-check">
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
                                <span>Cap</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$76.00</td>
                        <td>$12.00</td>
                        <td>CODE000</td>
                        <td>30 Dec 2023</td>
                        <td>17 Jan 2024</td>
                        <td>
                          <span className="badge text-success bg-success-subtle fs-12">
                            <i className="bx bx-check-double"></i>Active
                          </span>
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
                          <div className="form-check">
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
                                <span>Fashion</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$110.00</td>
                        <td>$20.00</td>
                        <td>FASHION123</td>
                        <td>11 Jan 2024</td>
                        <td>15 Feb 2024</td>
                        <td>
                          <span className="badge text-danger bg-danger-subtle fs-12">
                            <i className="bx bx-x"></i>Expired
                          </span>
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
                          <div className="form-check">
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
                                <span>Electronics</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$231.00</td>
                        <td>35%</td>
                        <td>HEADPHONE24</td>
                        <td>31 May 2023</td>
                        <td>23 Jun 2023</td>
                        <td>
                          <span className="badge text-danger bg-danger-subtle fs-12">
                            <i className="bx bx-x"></i>Expired
                          </span>
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
                          <div className="form-check">
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
                                <span>Foot Wares</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$89.00</td>
                        <td>$19.00</td>
                        <td>KID'S24</td>
                        <td>16 May 2024</td>
                        <td>12 Jun 2024</td>
                        <td>
                          <span className="badge text-success bg-success-subtle fs-12">
                            <i className="bx bx-check-double"></i>Active
                          </span>
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
                          <div className="form-check">
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
                                <span>Wallet</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$132.00</td>
                        <td>50%</td>
                        <td>BRAND24</td>
                        <td>25 Jan 2024</td>
                        <td>16 Feb 2024</td>
                        <td>
                          <span className="badge text-danger bg-danger-subtle fs-12">
                            <i className="bx bx-x"></i>Expired
                          </span>
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
                          <div className="form-check">
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
                                <span>Sunglass</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$77.00</td>
                        <td>$23.00</td>
                        <td>EYEWARE24</td>
                        <td>23 Feb 2024</td>
                        <td>24 March 2024</td>
                        <td>
                          <span className="badge text-success bg-success-subtle fs-12">
                            <i className="bx bx-check-double"></i>Active
                          </span>
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
                          <div className="form-check">
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
                                <span>Fashion</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$110.00</td>
                        <td>$35.00</td>
                        <td> KID'S24</td>
                        <td>14 Aug 2023</td>
                        <td>15 Sep 2023</td>
                        <td>
                          <span className="badge text-success bg-success-subtle fs-12">
                            <i className="bx bx-check-double"></i>Active
                          </span>
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
                          <div className="form-check">
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
                                White Rubber Band Smart Watch{" "}
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Electronics</span>
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$77.00</td>
                        <td>$14.00</td>
                        <td>WATCH2W1</td>
                        <td>27 March 2024</td>
                        <td>12 Apr 2024</td>
                        <td>
                          <span className="badge text-danger bg-danger-subtle fs-12">
                            <i className="bx bx-x"></i>Expired
                          </span>
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
                          <div className="form-check">
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
                                Men Brown Leather Shoes{" "}
                              </Link>
                              <p className="text-muted mb-0 mt-1 fs-13">
                                <span>Size : </span>40 , 41 , 42 , 43{" "}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$222.00</td>
                        <td>40%</td>
                        <td>FOOTWARE23</td>
                        <td>23 Dec 2023</td>
                        <td>22 Jan 2024</td>
                        <td>
                          <span className="badge text-success bg-success-subtle fs-12">
                            <i className="bx bx-check-double"></i>Active
                          </span>
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CouponsList;
