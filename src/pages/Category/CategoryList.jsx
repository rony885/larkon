import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="rounded bg-secondary-subtle d-flex align-items-center justify-content-center mx-auto">
                  <img
                    src="/assets/images/product/p-1.png"
                    alt=""
                    className="avatar-xl"
                  />
                </div>
                <h4 className="mt-3 mb-0">Fashion Categories</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="rounded bg-primary-subtle d-flex align-items-center justify-content-center mx-auto">
                  <img
                    src="assets/images/product/p-6.png"
                    alt=""
                    className="avatar-xl"
                  />
                </div>
                <h4 className="mt-3 mb-0">Electronics Headphone</h4>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="rounded bg-warning-subtle d-flex align-items-center justify-content-center mx-auto">
                  <img
                    src="assets/images/product/p-7.png"
                    alt=""
                    className="avatar-xl"
                  />
                </div>
                <h4 className="mt-3 mb-0">Foot Wares</h4>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body text-center">
                <div className="rounded bg-info-subtle d-flex align-items-center justify-content-center mx-auto">
                  <img
                    src="assets/images/product/p-9.png"
                    alt=""
                    className="avatar-xl"
                  />
                </div>
                <h4 className="mt-3 mb-0">Eye Ware & Sunglass</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center gap-1">
                <h4 className="card-title flex-grow-1">All Categories List</h4>

                <Link to="/product-add" className="btn btn-sm btn-primary">
                  Add Product
                </Link>

                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-sm btn-outline-light"
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
                        <th>Categories</th>
                        <th>Starting Price</th>
                        <th>Create by</th>
                        <th>ID</th>
                        <th>Product Stock</th>
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
                            ></label>
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
                            <p className="text-dark fw-medium fs-15 mb-0">
                              Fashion Men , Women & Kid's
                            </p>
                          </div>
                        </td>
                        <td>$80 to $400</td>
                        <td>Seller</td>
                        <td>FS16276</td>
                        <td>46233</td>
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
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModalScrollable"
                            >
                              <iconify-icon
                                icon="solar:pen-2-broken"
                                className="align-middle fs-18"
                              ></iconify-icon>
                            </Link>

                            <Link
                              to="#!"
                              className="btn btn-soft-danger btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
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
                              <p className="text-dark fw-medium fs-15 mb-0">
                                Women Hand Bag
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>$120 to $500</td>
                        <td>Admin</td>
                        <td>HB73029</td>
                        <td>2739</td>
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
            {/* ========== Edit Modal ========= */}
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <div
                    className="modal fade"
                    id="exampleModalScrollable"
                    readOnly="-1"
                    aria-labelledby="exampleModalScrollableTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalScrollableTitle"
                          >
                            Edit Modal
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p>
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                          </p>
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <p>
                            This content should appear at the bottom after you
                            scroll.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== Delete Modal ========= */}
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <div
                    className="modal fade"
                    id="exampleModal"
                    readOnly="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Delete Modal
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p>Woo-hoo, you're reading this text in a modal!</p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
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

export default CategoryList;
