import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const CustomersDetails = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-4">
            <div className="card overflow-hidden">
              <div className="card-body">
                <div className="bg-primary profile-bg rounded-top p-5 position-relative mx-n3 mt-n3">
                  <img
                    src="assets/images/users/avatar-2.jpg"
                    alt=""
                    className="avatar-lg border border-light border-3 rounded-circle position-absolute top-100 start-0 translate-middle ms-5"
                  />
                </div>
                <div className="mt-4 pt-3">
                  <h4 className="mb-1">
                    Michael A. Miner
                    <i className="bx bxs-badge-check text-success align-middle"></i>
                  </h4>
                  <div className="mt-2">
                    <Link to="#!" className="link-primary fs-15">
                      @michael_cus_2024
                    </Link>
                    <p className="fs-15 mb-1 mt-1">
                      <span className="text-dark fw-semibold">Email : </span>
                      michaelaminer@dayrep.com
                    </p>
                    <p className="fs-15 mb-0 mt-1">
                      <span className="text-dark fw-semibold">Phone : </span>
                      +28 (57) 760-010-27
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top gap-1 hstack">
                <Link to="#!" className="btn btn-primary w-100">
                  Send Message
                </Link>
                <Link to="#!" className="btn btn-light w-100">
                  Analytics
                </Link>
                <Link
                  to="#!"
                  className="btn btn-soft-dark d-inline-flex align-items-center justify-content-center rounded avatar-sm"
                >
                  <i className="bx bx-edit-alt fs-18"></i>
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between">
                <div>
                  <h4 className="card-title">Customer Details</h4>
                </div>
                <div>
                  <span className="badge bg-success-subtle text-success px-2 py-1">
                    Active User
                  </span>
                </div>
              </div>
              <div className="card-body py-2">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <tbody>
                      <tr>
                        <td className="px-0">
                          <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                            Account ID :
                          </p>
                        </td>
                        <td className="text-dark fw-medium px-0">#AC-278699</td>
                      </tr>
                      <tr>
                        <td className="px-0">
                          <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                            Invoice Email :
                          </p>
                        </td>
                        <td className="text-dark fw-medium px-0">
                          michaelaminer@dayrep.com
                        </td>
                      </tr>
                      <tr>
                        <td className="px-0">
                          <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                            Delivery Address :
                          </p>
                        </td>
                        <td className="text-dark fw-medium px-0">
                          62, rue des Nations Unies 22000 SAINT-BRIEUC
                        </td>
                      </tr>
                      <tr>
                        <td className="px-0">
                          <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                            Language :
                          </p>
                        </td>
                        <td className="text-dark fw-medium px-0">English</td>
                      </tr>
                      <tr>
                        <td className="px-0">
                          <p className="d-flex mb-0 align-items-center gap-1 fw-semibold text-dark">
                            Latest Invoice Id :
                          </p>
                        </td>
                        <td className="text-dark fw-medium px-0">#INV2540</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header border-bottom border-dashed">
                <div className="d-flex align-items-center gap-2">
                  <div className="d-block">
                    <h4 className="card-title mb-1">Latest Invoice</h4>
                    <p className="mb-0 text-muted">
                      Total 234 file, 2.5GB space used
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Link to="#!" className="btn btn-primary btn-sm">
                      View All
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex p-2 rounded align-items-center gap-2 bg-light-subtle">
                  <div className="avatar bg-primary-subtle d-flex align-items-center justify-content-center rounded-circle">
                    <iconify-icon
                      icon="solar:file-download-bold"
                      className="text-primary fs-3"
                    ></iconify-icon>
                  </div>
                  <div className="d-block">
                    <Link to="#!" className="text-dark fw-medium">
                      Invoice Id #INV2540
                    </Link>
                    <p className="text-muted mb-0 fs-13">16 May 2024</p>
                  </div>
                  <div className="ms-auto text-end">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none card-drop p-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>
                        <Link to="#" className="dropdown-item">
                          Share
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex p-2 rounded align-items-center gap-2 bg-light-subtle mt-2">
                  <div className="avatar bg-primary-subtle d-flex align-items-center justify-content-center rounded-circle">
                    <iconify-icon
                      icon="solar:file-download-bold"
                      className="text-primary fs-3"
                    ></iconify-icon>
                  </div>
                  <div className="d-block">
                    <Link to="#!" className="text-dark fw-medium">
                      Invoice Id #INV0914
                    </Link>
                    <p className="text-muted mb-0 fs-13">17 Jan 2024</p>
                  </div>
                  <div className="ms-auto text-end">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none card-drop p-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>
                        <Link to="#" className="dropdown-item">
                          Share
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex p-2 rounded align-items-center gap-2 bg-light-subtle mt-2">
                  <div className="avatar bg-primary-subtle d-flex align-items-center justify-content-center rounded-circle">
                    <iconify-icon
                      icon="solar:file-download-bold"
                      className="text-primary fs-3"
                    ></iconify-icon>
                  </div>
                  <div className="d-block">
                    <Link to="#!" className="text-dark fw-medium">
                      Invoice Id #INV3801
                    </Link>
                    <p className="text-muted mb-0 fs-13">09 Nov 2023</p>
                  </div>
                  <div className="ms-auto text-end">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none card-drop p-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>
                        <Link to="#" className="dropdown-item">
                          Share
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex p-2 rounded align-items-center gap-2 bg-light-subtle mt-2 mb-1">
                  <div className="avatar bg-primary-subtle d-flex align-items-center justify-content-center rounded-circle">
                    <iconify-icon
                      icon="solar:file-download-bold"
                      className="text-primary fs-3"
                    ></iconify-icon>
                  </div>
                  <div className="d-block">
                    <Link to="#!" className="text-dark fw-medium">
                      Invoice Id #INV4782
                    </Link>
                    <p className="text-muted mb-0 fs-13">21 Aug 2023</p>
                  </div>
                  <div className="ms-auto text-end">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none card-drop p-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item">
                          Download
                        </Link>
                        <Link to="#" className="dropdown-item">
                          Share
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h4 className="card-title mb-2 d-flex align-items-center gap-2">
                          Total Invoice
                        </h4>
                        <p className="text-muted fw-medium fs-22 mb-0">234</p>
                      </div>
                      <div>
                        <div className="avatar-md bg-primary bg-opacity-10 rounded">
                          <iconify-icon
                            icon="solar:bill-list-bold-duotone"
                            className="fs-32 text-primary avatar-title"
                          ></iconify-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h4 className="card-title mb-2 d-flex align-items-center gap-2">
                          Total Order
                        </h4>
                        <p className="text-muted fw-medium fs-22 mb-0">219</p>
                      </div>
                      <div>
                        <div className="avatar-md bg-primary bg-opacity-10 rounded">
                          <iconify-icon
                            icon="solar:box-bold-duotone"
                            className="fs-32 text-primary avatar-title"
                          ></iconify-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h4 className="card-title mb-2 d-flex align-items-center gap-2">
                          Total Expense
                        </h4>
                        <p className="text-muted fw-medium fs-22 mb-0">
                          $2,189
                        </p>
                      </div>
                      <div>
                        <div className="avatar-md bg-primary bg-opacity-10 rounded">
                          <iconify-icon
                            icon="solar:chat-round-money-bold-duotone"
                            className="fs-32 text-primary avatar-title"
                          ></iconify-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Transaction History</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table align-middle mb-0 table-hover table-centered">
                    <thead className="bg-light-subtle">
                      <tr>
                        <th>Invoice ID</th>
                        <th>Status</th>
                        <th>Total Amount</th>
                        <th>Due Date</th>
                        <th>Payment Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Link to="#" className="text-body">
                            #INV2540
                          </Link>
                        </td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>$421.00</td>
                        <td>07 Jan, 2023</td>
                        <td>Mastercard</td>
                      </tr>

                      <tr>
                        <td>
                          <Link to="#" className="text-body">
                            #INV3924
                          </Link>
                        </td>
                        <td>
                          <span className="badge bg-danger-subtle text-danger px-2 py-1">
                            Cancel
                          </span>
                        </td>
                        <td>$736.00</td>
                        <td>03 Dec, 2023</td>
                        <td>Visa</td>
                      </tr>

                      <tr>
                        <td>
                          <Link to="#" className="text-body">
                            #INV5032
                          </Link>
                        </td>
                        <td>
                          <span className="badge bg-success-subtle text-success py-1 px-2">
                            Completed
                          </span>
                        </td>
                        <td>$347.00</td>
                        <td>28 Sep, 2023</td>
                        <td>Paypal</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="#" className="text-body">
                            #INV1695
                          </Link>
                        </td>
                        <td>
                          <span className="badge bg-primary-subtle text-primary py-1 px-2">
                            Pending
                          </span>
                        </td>
                        <td>$457.00</td>
                        <td>10 Aug, 2023</td>
                        <td>Mastercard</td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="#" className="text-body">
                            #INV8473
                          </Link>
                        </td>
                        <td>
                          <span className="badge bg-success-subtle text-success px-2 py-1">
                            Completed
                          </span>
                        </td>
                        <td>$414.00</td>
                        <td>22 May, 2023</td>
                        <td>Visa</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer border-top">
                <ul className="pagination pagination-rounded m-0 justify-content-end">
                  <li className="page-item">
                    <Link to="#" className="page-link">
                      <i className="bx bx-left-arrow-alt"></i>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link to="#" className="page-link">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="#" className="page-link">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="#" className="page-link">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="#" className="page-link">
                      <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body text-center">
                    <img
                      src="assets/images/user-profile.png"
                      alt=""
                      className="img-fluid"
                    />
                    <h4>
                      <i className="bx bxs-coin-stack text-primary"></i> 3,764
                      <span className="text-muted fw-medium">
                        Points Earned
                      </span>
                    </h4>
                    <p className="mb-0">
                      Collect reward points with each purchase.
                    </p>
                  </div>
                  <div className="card-footer border-top gap-1 hstack">
                    <Link to="#!" className="btn btn-primary w-100">
                      Earn Point
                    </Link>
                    <Link to="#!" className="btn btn-light w-100">
                      View Items
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex gap-3">
                      <div className="avatar bg-light d-flex align-items-center justify-content-center rounded-circle">
                        <i className="bx bx-down-arrow-alt fs-30"></i>
                      </div>
                      <div className="d-block">
                        <h4 className="text-dark fw-medium mb-1">
                          Payment Arrived
                        </h4>
                        <p className="mb-0 text-muted">23 min ago</p>
                      </div>
                      <div className="ms-auto">
                        <h4 className="text-dark fw-medium mb-1">$ 1,340</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src="assets/images/users/avatar-2.jpg"
                        alt="avatar-3"
                        className="avatar rounded-circle"
                      />

                      <div className="d-block">
                        <h4 className="text-dark fw-medium mb-1">
                          Michael A. Miner
                        </h4>
                        <p className="mb-0 text-muted">Welcome Back</p>
                      </div>
                      <div className="ms-auto">
                        <span className="text-muted">
                          <Link to="#!" className="link-reset fs-3">
                            <iconify-icon icon="solar:settings-bold"></iconify-icon>
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="d-flex align-items-center">
                        <h5 className="text-dark mb-0">
                          All Account
                          <span className="text-muted fw-normal ms-1">
                            <i className="bx bxs-circle fs-10"></i>
                          </span>
                          <span className="text-muted fw-normal ms-1">
                            Total Balance
                          </span>
                        </h5>
                        <div className="ms-auto">
                          <Link to="#!" className="link-reset fw-medium">
                            UTS
                            <i className="bx bx-down-arrow-alt text-danger"></i>
                          </Link>
                        </div>
                      </div>
                      <h3 className="fw-semibold mt-2 mb-0">
                        $4,700
                        <span className="fs-5 text-muted ms-1">+$232</span>
                      </h3>
                      <div id="chart2" className="apex-charts mt-3"></div>
                    </div>
                  </div>
                  <div className="card-footer border-top gap-1 hstack">
                    <Link to="#!" className="btn btn-primary w-100">
                      Send
                    </Link>
                    <Link to="#!" className="btn btn-light w-100">
                      Receive
                    </Link>
                    <Link
                      to="#!"
                      className="btn btn-soft-dark d-inline-flex align-items-center justify-content-center rounded avatar-sm"
                    >
                      <i className="bx bx-plus fs-18"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomersDetails;
