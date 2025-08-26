import React from "react";
import Footer from "../../components/Footer";

const CouponsAdd = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-5">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Coupon Status</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault5"
                          id="flexRadioDefault9"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault9"
                        >
                          Active
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault5"
                        id="flexRadioDefault10"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault10"
                      >
                        In Active
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault5"
                        id="flexRadioDefault11"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault11"
                      >
                        Future Plan
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Date Schedule</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="start-date" className="form-label text-dark">
                      Start Date
                    </label>
                    <input
                      type="text"
                      id="start-date"
                      className="form-control flatpickr-input active"
                      placeholder="dd-mm-yyyy"
                      readOnly="readOnly"
                    />
                  </div>
                </form>
                <form>
                  <div className="mb-3">
                    <label htmlFor="end-date" className="form-label text-dark">
                      End Date
                    </label>
                    <input
                      type="text"
                      id="end-date"
                      className="form-control flatpickr-input active"
                      placeholder="dd-mm-yyyy"
                      readOnly="readOnly"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Coupon Information</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="coupons-code" className="form-label">
                        Coupons Code
                      </label>
                      <input
                        type="text"
                        id="coupons-code"
                        name="coupons-code"
                        className="form-control"
                        placeholder="Code enter"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <label htmlFor="product-categories" className="form-label">
                        Discount Products
                      </label>
                      <select
                        className="form-control"
                        id="product-categories"
                        data-choices
                        data-choices-groups
                        data-placeholder="Select Categories"
                        name="choices-single-groups"
                      >
                        <option value="">Choose a categories</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Footwear">Footwear</option>
                        <option value="Sportswear">Sportswear</option>
                        <option value="Watches">Watches</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Appliances">Appliances</option>
                        <option value="Headphones">Headphones</option>
                        <option value="Other Accessories">
                          Other Accessories
                        </option>
                      </select>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <label htmlFor="choices-country" className="form-label">
                        Discount Country
                      </label>
                      <select
                        className="form-control"
                        id="choices-country"
                        data-choices
                        data-choices-groups
                        data-placeholder="Select Country"
                        name="choices-country"
                      >
                        <option value="">Choose a country</option>
                        <optgroup label="">
                          <option value="">United Kingdom</option>
                          <option value="Fran">France</option>
                          <option value="Netherlands">Netherlands</option>
                          <option value="U.S.A">U.S.A</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="India">India</option>
                          <option value="Germany">Germany</option>
                          <option value="Spain">Spain</option>
                          <option value="United Arab Emirates">
                            United Arab Emirates
                          </option>
                        </optgroup>
                      </select>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="coupons-limits" className="form-label">
                        Coupons Limits
                      </label>
                      <input
                        type="number"
                        id="coupons-limits"
                        name="coupons-limits"
                        className="form-control"
                        placeholder="limits nu"
                      />
                    </div>
                  </div>
                </div>
                <h4 className="card-title mb-3 mt-2">Coupons Types</h4>
                <div className="row mb-3">
                  <div className="col-lg-4">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault6"
                          id="flexRadioDefault12"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault12"
                        >
                          Free Shipping
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault6"
                        id="flexRadioDefault13"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault13"
                      >
                        Percentage
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault6"
                        id="flexRadioDefault14"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault14"
                      >
                        Fixed Amount
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="">
                      <label htmlFor="discount-value" className="form-label">
                        Discount Value
                      </label>
                      <input
                        type="text"
                        id="discount-value"
                        name="discount-value"
                        className="form-control"
                        placeholder="value enter"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top">
                <a href="#!" className="btn btn-primary">
                  Create Coupon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CouponsAdd;
