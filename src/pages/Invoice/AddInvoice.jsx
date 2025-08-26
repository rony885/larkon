import React from "react";
import Footer from "../../components/Footer";

const AddInvoice = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card">
              <div className="card-body">
                {/* <!-- Logo & title --> */}

                <div className="pb-3 mb-4 position-relative border-bottom">
                  <div className="row justify-content-between">
                    <div className="col-lg-5">
                      <div className="">
                        <div
                          className="w-50 auth-logo border border-primary bg-light-subtle p-2 rounded"
                          style={{ borderStyle: "dashed" }}
                        >
                          <div className="profile-photo-edit">
                            <input
                              id="profile-img-file-input"
                              type="file"
                              className="profile-img-file-input"
                            />
                            <label
                              htmlFor="profile-img-file-input"
                              className="profile-photo-edit avatar-xs"
                            >
                              <img
                                src="/assets/images/logo-dark.png"
                                className="logo-dark me-1 user-profile-image"
                                alt="user-profile-image"
                                height="24"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="mt-5 pt-2">
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="sender-name"
                                className="form-label text-dark"
                              >
                                Sender Name
                              </label>
                              <input
                                type="text"
                                id="sender-name"
                                className="form-control"
                                placeholder="First name"
                              />
                            </div>
                          </form>
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="sender-address"
                                className="form-label text-dark"
                              >
                                Sender Full Address
                              </label>
                              <textarea
                                className="form-control"
                                id="sender-address"
                                rows="3"
                                placeholder="Enter address"
                              ></textarea>
                            </div>
                          </form>
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="sender-number"
                                className="form-label text-dark"
                              >
                                Phone number
                              </label>
                              <input
                                type="number"
                                id="sender-number"
                                className="form-control"
                                placeholder="Number"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="invoice-no"
                            className="form-label text-dark"
                          >
                            Invoice Number :
                          </label>
                          <input
                            type="text"
                            id="invoice-no"
                            className="form-control"
                            placeholder="#INV-****"
                            defaultValue="#INV-0758267/90"
                          />
                        </div>
                      </form>
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="schedule-date"
                            className="form-label text-dark"
                          >
                            Issue Date :
                          </label>
                          <input
                            type="text"
                            id="schedule-date"
                            className="form-control flatpickr-input active"
                            placeholder="dd-mm-yyyy"
                            readOnly="readOnly"
                          />
                        </div>
                      </form>
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="due-date"
                            className="form-label text-dark"
                          >
                            Due Date :
                          </label>
                          <input
                            type="text"
                            id="due-date"
                            className="form-control flatpickr-input active"
                            placeholder="dd-mm-yyyy"
                            readOnly="readOnly"
                          />
                        </div>
                      </form>
                      <form>
                        <label
                          htmlFor="product-price"
                          className="form-label text-dark"
                        >
                          Amount :
                        </label>
                        <div className="input-group mb-3">
                          <span className="input-group-text fs-20 bg-light text-dark">
                            <i className="bx bx-dollar"></i>
                          </span>
                          <input
                            type="number"
                            id="product-price"
                            className="form-control"
                            placeholder="000"
                          />
                        </div>
                      </form>
                      <form>
                        <label htmlFor="status" className="form-label text-dark">
                          Status :
                        </label>
                        <select
                          className="form-select"
                          id="status"
                          aria-label="Default select example"
                        >
                          <option select="true">Paid</option>
                          <option defaultValue="Cancel">Cancel</option>
                          <option defaultValue="Pending">Pending</option>
                        </select>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-between">
                  <div className="col-lg-5">
                    <h4 className="mb-3">Issue From :</h4>
                    <form>
                      <div className="mb-2">
                        <input
                          type="text"
                          id="buyer-from"
                          className="form-control"
                          placeholder="First name"
                        />
                      </div>
                    </form>
                    <form>
                      <div className="mb-2">
                        <textarea
                          className="form-control"
                          id="buyer-address"
                          rows="3"
                          placeholder="Enter address"
                        ></textarea>
                      </div>
                    </form>
                    <form>
                      <div className="mb-2">
                        <input
                          type="number"
                          id="buyer-number"
                          className="form-control"
                          placeholder="Number"
                        />
                      </div>
                    </form>
                    <form>
                      <div className="mb-2">
                        <input
                          type="email"
                          id="buyer-email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-5">
                    <h4 className="mb-3">Issue For :</h4>
                    <form>
                      <div className="mb-2">
                        <input
                          type="text"
                          id="issuer-from"
                          className="form-control"
                          placeholder="First name"
                        />
                      </div>
                    </form>
                    <form>
                      <div className="mb-2">
                        <textarea
                          className="form-control"
                          id="issuer-address"
                          rows="3"
                          placeholder="Enter address"
                        ></textarea>
                      </div>
                    </form>
                    <form>
                      <div className="mb-2">
                        <input
                          type="number"
                          id="issuer-number"
                          className="form-control"
                          placeholder="Number"
                        />
                      </div>
                    </form>
                    <form>
                      <div className="mb-2">
                        <input
                          type="email"
                          id="issuer-email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-12">
                    <div className="table-responsive table-borderless text-nowrap table-centered">
                      <table className="table mb-0">
                        <thead className="bg-light bg-opacity-50">
                          <tr>
                            <th className="border-0 py-2">Product Name</th>
                            <th className="border-0 py-2">Quantity</th>
                            <th className="border-0 py-2">Price</th>
                            <th className="border-0 py-2">Tax</th>
                            <th className="border-0 py-2">Total</th>
                          </tr>
                        </thead>
                        {/* <!-- end thead --> */}
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex gap-3">
                                <div
                                  className="auth-logo border-0 rounded"
                                  style={{ borderStyle: "dashed" }}
                                >
                                  <div className="profile-photo-edit">
                                    <input
                                      id="profile-img-file-input1"
                                      type="file"
                                      className="profile-img-file-input1"
                                    />
                                    <label
                                      htmlFor="profile-img-file-input1"
                                      className="profile-photo-edit avatar bg-light rounded"
                                    >
                                      <img
                                        src="#"
                                        alt="user-profile-image1"
                                        className="me-1 user-profile-image1 img-fluid"
                                      />
                                    </label>
                                  </div>
                                </div>
                                <div className="w-75">
                                  <form>
                                    <div className="mb-3">
                                      <input
                                        type="text"
                                        id="product-name"
                                        className="form-control"
                                        placeholder="Product Name"
                                      />
                                    </div>
                                  </form>
                                  <form>
                                    <div className="mb-3">
                                      <input
                                        type="text"
                                        id="product-name"
                                        className="form-control"
                                        placeholder="Product Size"
                                      />
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="quantity">
                                <div className="input-step border bg-body-secondary p-1 rounded d-inline-flex overflow-visible">
                                  <button
                                    type="button"
                                    className="minus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                                  >
                                    -
                                  </button>
                                  <input
                                    type="number"
                                    className="text-dark text-center border-0 bg-body-secondary rounded h-100"
                                    defaultValue="1"
                                    min="0"
                                    max="100"
                                    readOnly=""
                                  />
                                  <button
                                    type="button"
                                    className="plus bg-light text-dark border-0 rounded-1 fs-20 lh-1 h-100"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td>
                              <form>
                                <div className="input-group">
                                  <span className="input-group-text fs-20 bg-light text-dark">
                                    <i className="bx bx-dollar"></i>
                                  </span>
                                  <input
                                    type="number"
                                    id="product-price-table"
                                    className="form-control"
                                    placeholder="000"
                                  />
                                </div>
                              </form>
                            </td>
                            <td>
                              <form>
                                <div className="input-group">
                                  <span className="input-group-text fs-20 bg-light text-dark">
                                    <i className="bx bx-dollar"></i>
                                  </span>
                                  <input
                                    type="number"
                                    id="product-tax"
                                    className="form-control"
                                    placeholder="000"
                                  />
                                </div>
                              </form>
                            </td>
                            <td className="">
                              <form>
                                <div className="input-group">
                                  <span className="input-group-text fs-20 bg-light text-dark">
                                    <i className="bx bx-dollar"></i>
                                  </span>
                                  <input
                                    type="number"
                                    id="total"
                                    className="form-control"
                                    placeholder="000"
                                  />
                                </div>
                              </form>
                            </td>
                          </tr>
                        </tbody>
                        {/* <!-- end tbody --> */}
                      </table>
                      {/* <!-- end table --> */}
                    </div>
                    {/* <!-- end table responsive --> */}
                    <div className="text-end border-top">
                      <div className="pt-3">
                        <a href="#!" className="btn btn-primary">
                          Clear Product
                        </a>
                        <a href="#!" className="btn btn-outline-primary">
                          Add More
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                </div>

                <div className="row justify-content-end">
                  <div className="col-lg-4">
                    <label htmlFor="sub-total" className="form-label text-dark">
                      Sub Total :
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text fs-20 bg-light text-dark">
                        <i className="bx bx-dollar"></i>
                      </span>
                      <input
                        type="number"
                        id="sub-total"
                        className="form-control"
                        placeholder="000"
                      />
                    </div>
                    <label
                      htmlFor="discount-price"
                      className="form-label text-dark"
                    >
                      Discount :
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text fs-20 bg-light text-dark">
                        <i className="bx bx-dollar"></i>
                      </span>
                      <input
                        type="number"
                        id="discount-price"
                        className="form-control"
                        placeholder="000"
                      />
                    </div>
                    <label
                      htmlFor="discount-price"
                      className="form-label text-dark"
                    >
                      Estimated Tax (15.5%) :
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text fs-20 bg-light text-dark">
                        <i className="bx bx-dollar"></i>
                      </span>
                      <input
                        type="number"
                        id="discount-price"
                        className="form-control"
                        placeholder="000"
                      />
                    </div>
                    <div className="border-top">
                      <label
                        htmlFor="grand-total"
                        className="form-label text-dark pt-3"
                      >
                        Grand Amount :
                      </label>
                      <div className="input-group mb-3">
                        <span className="input-group-text fs-20 bg-light text-dark">
                          <i className="bx bx-dollar"></i>
                        </span>
                        <input
                          type="number"
                          id="grand-total"
                          className="form-control"
                          placeholder="000"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <div
                      className="alert alert-danger alert-icon p-2"
                      role="alert"
                    >
                      <div className="d-flex align-items-center">
                        <div className="avatar-sm rounded bg-danger d-flex justify-content-center align-items-center fs-18 me-2 flex-shrink-0">
                          <i className="bx bx-info-circle text-white"></i>
                        </div>
                        <div className="flex-grow-1">
                          All accounts are to be paid within 7 days from receipt
                          of invoice. To be paid by cheque or credit card or
                          direct payment online. If account is not paid within 7
                          days the credits details supplied as confirmation of
                          work undertaken will be charged the agreed quoted fee
                          noted above.
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

export default AddInvoice;
