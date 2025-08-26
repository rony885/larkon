import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const CustomersList = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:users-group-two-rounded-bold-duotone"
                      className="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                  <div>
                    <h4 className="mb-0">All Customers</h4>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="text-muted fw-medium fs-22 mb-0">+22.63k</p>
                  <div>
                    <span className="badge text-success bg-success-subtle fs-12">
                      <i className="bx bx-up-arrow-alt"></i>34.4%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:box-bold-duotone"
                      className="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                  <div>
                    <h4 className="mb-0">Orders</h4>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="text-muted fw-medium fs-22 mb-0">+4.5k</p>
                  <div>
                    <span className="badge text-danger bg-danger-subtle fs-12">
                      <i className="bx bx-down-arrow-alt"></i>8.1%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:headphones-round-sound-bold-duotone"
                      className="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                  <div>
                    <h4 className="mb-0">Services Request</h4>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="text-muted fw-medium fs-22 mb-0">+1.03k</p>
                  <div>
                    <span className="badge text-success bg-success-subtle fs-12">
                      <i className="bx bx-up-arrow-alt"></i>12.6%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="avatar-md bg-primary bg-opacity-10 rounded">
                    <iconify-icon
                      icon="solar:bill-list-bold-duotone"
                      className="fs-32 text-primary avatar-title"
                    ></iconify-icon>
                  </div>
                  <div>
                    <h4 className="mb-0">Invoice & Payment</h4>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="text-muted fw-medium fs-22 mb-0">$38,908.00</p>
                  <div>
                    <span className="badge text-success bg-success-subtle fs-12">
                      <i className="bx bx-up-arrow-alt"></i>45.9%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="d-flex card-header justify-content-between align-items-center">
                <div>
                  <h4 className="card-title">All Customers List</h4>
                </div>
                <div className="dropdown">
                  <Link
                    t0="#"
                    className="dropdown-toggle btn btn-sm btn-outline-light rounded"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    This Month
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link t0="#!" className="dropdown-item">
                      Download
                    </Link>

                    <Link t0="#!" className="dropdown-item">
                      Export
                    </Link>

                    <Link t0="#!" className="dropdown-item">
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
                        <th>Customer Name</th>
                        <th>Invoice ID</th>
                        <th>Status</th>
                        <th>Total Amount</th>
                        <th>Amount Due</th>
                        <th>Due Date</th>
                        <th>Payment Method</th>
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
                          <img
                            src="assets/images/users/avatar-2.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Michael A. Miner
                        </td>
                        <td>
                          <Link t0="#" className="text-body">
                            #INV2540
                          </Link>
                        </td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>$4,521</td>
                        <td>$8,901</td>
                        <td>07 Jan, 2023</td>
                        <td>Mastercard</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link t0="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
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
                              id="customCheck3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck3"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-3.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Theresa T. Brose
                        </td>
                        <td>
                          <Link t0="#" className="text-body">
                            #INV3924
                          </Link>
                        </td>
                        <td>
                          <span className="badge bg-danger-subtle text-danger px-2 py-1">
                            Cancel
                          </span>
                        </td>
                        <td>$7,836</td>
                        <td>$9,902</td>
                        <td>03 Dec, 2023</td>
                        <td>Visa</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link t0="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
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
                              id="customCheck4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck4"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-4.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          James L. Erickson
                        </td>
                        <td>
                          <Link t0="#" className="text-body">
                            #INV5032
                          </Link>
                        </td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>$1,347</td>
                        <td>$6,718</td>
                        <td>28 Sep, 2023</td>
                        <td>Paypal</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link t0="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
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
                              id="customCheck5"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck5"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-5.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Lily W. Wilson
                        </td>
                        <td>
                          <Link t0="#" className="text-body">
                            #INV1695
                          </Link>
                        </td>
                        <td>
                          <span className="badge bg-primary-subtle text-primary py-1 px-2">
                            Pending
                          </span>
                        </td>
                        <td>$9,457</td>
                        <td>$3,928</td>
                        <td>10 Aug, 2023</td>
                        <td>Mastercard</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link t0="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
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
                              id="customCheck6"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck6"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-6.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Sarah M. Brooks
                        </td>
                        <td>
                          <Link t0="#" className="text-body">
                            #INV8473
                          </Link>
                        </td>
                        <td>
                          <span className="badge bg-danger-subtle text-danger px-2 py-1">
                            Cancel
                          </span>
                        </td>
                        <td>$4,214</td>
                        <td>$9,814</td>
                        <td>22 May, 2023</td>
                        <td>Visa</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link t0="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
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
                              id="customCheck7"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck7"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-7.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Joe K. Hall
                        </td>
                        <td>
                          <Link t0="#" className="text-body">
                            #INV2150
                          </Link>
                        </td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>$2,513</td>
                        <td>$5,891</td>
                        <td>15 Mar, 2023</td>
                        <td>Paypal</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link t0="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
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
                              id="customCheck7"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck7"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-8.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Ralph Hueber
                        </td>
                        <td>
                          <Link t0="#" className="text-body">
                            #INV5636
                          </Link>
                        </td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>$3,103</td>
                        <td>$8,415</td>
                        <td>15 Mar, 2023</td>
                        <td>Visa</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link t0="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
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
                              id="customCheck7"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck7"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-9.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Sarah Drescher
                        </td>
                        <td>
                          <Link t0="#" className="text-body">
                            #INV2940
                          </Link>
                        </td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>$2,416</td>
                        <td>$7,715</td>
                        <td>15 Mar, 2023</td>
                        <td>Mastercard</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link t0="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
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
                              id="customCheck7"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="customCheck7"
                            >
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td>
                          <img
                            src="assets/images/users/avatar-10.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          Leonie Meister
                        </td>
                        <td>
                          <Link t0="#" className="text-body">
                            #INV9027
                          </Link>
                        </td>
                        <td>
                          <span className="badge bg-primary-subtle text-primary py-1 px-2">
                            Pending
                          </span>
                        </td>
                        <td>$1,367</td>
                        <td>$3,651</td>
                        <td>15 Mar, 2023</td>
                        <td>Paypal</td>
                        <td>
                          <div className="d-flex gap-2">
                            <Link t0="#!" className="btn btn-light btn-sm">
                              <iconify-icon
                                icon="solar:eye-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
                              className="btn btn-soft-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>
                            <Link
                              t0="#!"
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
                      <Link className="page-link" t0="#">
                        Previous
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" t0="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" t0="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" t0="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" t0="#">
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

export default CustomersList;
