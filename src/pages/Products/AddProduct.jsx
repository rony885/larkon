import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { FaHome } from "react-icons/fa";

import Choices from "choices.js";
import "choices.js/public/assets/styles/choices.min.css";

const AddProduct = () => {
  useEffect(() => {
    new Choices("#choices-single-no-search", {
      removeItemButton: true, // shows cross icon
      searchEnabled: false,
    });
  }, []);

  return (
    <Wrapper>
      <div className="page-content">
        <div className="container-xxl">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="card">
                <div className="card-header" style={{ borderBottom: "none" }}>
                  <h4 className="card-title d-flex align-items-center">
                    <FaHome style={{ marginRight: "8px", fontSize: "25px" }} />
                    Add Employee
                  </h4>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4
                    className="card-title text-center fs-3"
                    style={{ color: "#E6612A" }}
                  >
                    <u>Personal Information</u>
                  </h4>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-brand" className="form-label">
                            Employee Id
                          </label>
                          <input
                            type="text"
                            id="product-brand"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="product-weight"
                            className="form-label"
                          >
                            Name (English){" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product-weight"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="product-weight"
                            className="form-label"
                          >
                            Name (Bangla) <span>*</span>
                          </label>
                          <input
                            type="text"
                            id="product-weight"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-brand" className="form-label">
                            Mobile Number <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product-brand"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="product-weight"
                            className="form-label"
                          >
                            Father's Name
                          </label>
                          <input
                            type="text"
                            id="product-weight"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="product-weight"
                            className="form-label"
                          >
                            Mother's Name
                          </label>
                          <input
                            type="text"
                            id="product-weight"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-brand" className="form-label">
                            Date of Birth <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product-brand"
                            className="form-control"
                          />
                          {/* <input
                            type="text"
                            id="basic-datepicker"
                            class="form-control"
                            placeholder="Basic datepicker"
                          /> */}
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <label htmlFor="gender" className="form-label">
                          Gender <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          id="gender"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Gender"
                        >
                          <option value="">Select Gender</option>
                          <option value="Men">Men</option>
                          <option value="Women">Women</option>
                          <option value="Other">Other</option>
                        </select>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <label htmlFor="gender" className="form-label">
                          Nationality <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          id="gender"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Gender"
                        >
                          <option value="">Select Gender</option>
                          <option value="Men">Men</option>
                          <option value="Women">Women</option>
                          <option value="Other">Other</option>
                        </select>
                      </form>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-brand" className="form-label">
                            Religion <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product-brand"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <label htmlFor="gender" className="form-label">
                          Marital Status <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          id="gender"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Gender"
                        >
                          <option value="">Select Gender</option>
                          <option value="Men">Men</option>
                          <option value="Women">Women</option>
                          <option value="Other">Other</option>
                        </select>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <label htmlFor="gender" className="form-label">
                          Blood Group
                        </label>
                        <select
                          className="form-control"
                          id="gender"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Gender"
                        >
                          <option value="">Select Gender</option>
                          <option value="Men">Men</option>
                          <option value="Women">Women</option>
                          <option value="Other">Other</option>
                        </select>
                      </form>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-brand" className="form-label">
                            Employee Image
                          </label>
                          <input
                            type="file"
                            id="product-brand"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-6">
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="product-weight"
                            className="form-label"
                          >
                            Scan Image
                          </label>
                          <input
                            type="file"
                            id="product-weight"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4
                    className="card-title text-center fs-3"
                    style={{ color: "#E6612A" }}
                  >
                    <u>Address</u>
                  </h4>
                </div>

                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-lg-6">
                      <div className="row mb-3">
                        <div className="col-lg-12">
                          {/* <form>
                          <label htmlFor="gender" className="form-label">
                            Division <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-control"
                            id="gender"
                            data-choices
                            data-choices-groups
                            data-placeholder="Select Gender"
                          >
                            <option value="">Select Gender</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Other">Other</option>
                          </select>
                        </form> */}

                          <form>
                            <label
                              htmlFor="choices-single-no-search"
                              className="form-label"
                            >
                              Division <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-control"
                              id="choices-single-no-search"
                              name="choices-single-no-search"
                              data-choices
                              data-choices-search-false
                              data-choices-removeItem
                            >
                              <option value="Zero">Zero</option>
                              <option value="One">One</option>
                              <option value="Two">Two</option>
                              <option value="Three">Three</option>
                              <option value="Four">Four</option>
                              <option value="Five">Five</option>
                              <option value="Six">Six</option>
                            </select>
                          </form>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-lg-12">
                          <form>
                            <label htmlFor="gender" className="form-label">
                              District <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-control"
                              id="gender"
                              data-choices
                              data-choices-groups
                              data-placeholder="Select Gender"
                            >
                              <option value="">Select Gender</option>
                              <option value="Men">Men</option>
                              <option value="Women">Women</option>
                              <option value="Other">Other</option>
                            </select>
                          </form>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-lg-12">
                          <form>
                            <label htmlFor="gender" className="form-label">
                              Upazila <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-control"
                              id="gender"
                              data-choices
                              data-choices-groups
                              data-placeholder="Select Gender"
                            >
                              <option value="">Select Gender</option>
                              <option value="Men">Men</option>
                              <option value="Women">Women</option>
                              <option value="Other">Other</option>
                            </select>
                          </form>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-lg-12">
                          <form>
                            <label
                              htmlFor="gender"
                              className="form-label w-100"
                            >
                              Union <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-control"
                              id="gender"
                              data-choices
                              data-choices-groups
                              data-placeholder="Select Gender"
                            >
                              <option value="">Select Gender</option>
                              <option value="Men">Men</option>
                              <option value="Women">Women</option>
                              <option value="Other">Other</option>
                            </select>
                          </form>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="product-brand"
                                className="form-label"
                              >
                                Village / Road / House / Flat{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="file"
                                id="product-brand"
                                className="form-control"
                              />
                            </div>
                          </form>
                        </div>

                        <div className="col-lg-12">
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="product-weight"
                                className="form-label"
                              >
                                Post Code <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                id="product-weight"
                                className="form-control"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="row mb-3">
                        <div className="col-lg-12">
                          <form>
                            <label htmlFor="gender" className="form-label">
                              Division <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-control"
                              id="gender"
                              data-choices
                              data-choices-groups
                              data-placeholder="Select Gender"
                            >
                              <option value="">Select Gender</option>
                              <option value="Men">Men</option>
                              <option value="Women">Women</option>
                              <option value="Other">Other</option>
                            </select>
                          </form>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-lg-12">
                          <form>
                            <label htmlFor="gender" className="form-label">
                              District <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-control"
                              id="gender"
                              data-choices
                              data-choices-groups
                              data-placeholder="Select Gender"
                            >
                              <option value="">Select Gender</option>
                              <option value="Men">Men</option>
                              <option value="Women">Women</option>
                              <option value="Other">Other</option>
                            </select>
                          </form>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-lg-12">
                          <form>
                            <label htmlFor="gender" className="form-label">
                              Upazila <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-control"
                              id="gender"
                              data-choices
                              data-choices-groups
                              data-placeholder="Select Gender"
                            >
                              <option value="">Select Gender</option>
                              <option value="Men">Men</option>
                              <option value="Women">Women</option>
                              <option value="Other">Other</option>
                            </select>
                          </form>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-lg-12">
                          <form>
                            <label
                              htmlFor="gender"
                              className="form-label w-100"
                            >
                              Union <span className="text-danger">*</span>
                            </label>
                            <select
                              className="form-control"
                              id="gender"
                              data-choices
                              data-choices-groups
                              data-placeholder="Select Gender"
                            >
                              <option value="">Select Gender</option>
                              <option value="Men">Men</option>
                              <option value="Women">Women</option>
                              <option value="Other">Other</option>
                            </select>
                          </form>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="product-brand"
                                className="form-label"
                              >
                                Village / Road / House / Flat{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="file"
                                id="product-brand"
                                className="form-control"
                              />
                            </div>
                          </form>
                        </div>

                        <div className="col-lg-12">
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="product-weight"
                                className="form-label"
                              >
                                Post Code <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                id="product-weight"
                                className="form-control"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4
                    className="card-title text-center fs-3"
                    style={{ color: "#E6612A" }}
                  >
                    <u>Professional Information</u>
                  </h4>
                </div>

                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-lg-4">
                      <form>
                        <label htmlFor="gender" className="form-label">
                          Business <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          id="gender"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Gender"
                        >
                          <option value="">Select Gender</option>
                          <option value="Men">Men</option>
                          <option value="Women">Women</option>
                          <option value="Other">Other</option>
                        </select>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <label htmlFor="gender" className="form-label">
                          Designation <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          id="gender"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Gender"
                        >
                          <option value="">Select Gender</option>
                          <option value="Men">Men</option>
                          <option value="Women">Women</option>
                          <option value="Other">Other</option>
                        </select>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <label htmlFor="gender" className="form-label">
                          Ward No <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          id="gender"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Gender"
                        >
                          <option value="">Select Gender</option>
                          <option value="Men">Men</option>
                          <option value="Women">Women</option>
                          <option value="Other">Other</option>
                        </select>
                      </form>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <form>
                        <label htmlFor="gender" className="form-label">
                          Supervisor Name <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          id="gender"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Gender"
                        >
                          <option value="">Select Gender</option>
                          <option value="Men">Men</option>
                          <option value="Women">Women</option>
                          <option value="Other">Other</option>
                        </select>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <label htmlFor="gender" className="form-label">
                          Identification Type{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          id="gender"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Gender"
                        >
                          <option value="">Select Gender</option>
                          <option value="Men">Men</option>
                          <option value="Women">Women</option>
                          <option value="Other">Other</option>
                        </select>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-brand" className="form-label">
                            ---
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product-brand"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-brand" className="form-label">
                            Joining Date
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product-brand"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <label htmlFor="gender" className="form-label">
                          Salary Type <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          id="gender"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Gender"
                        >
                          <option value="">Select Gender</option>
                          <option value="Men">Men</option>
                          <option value="Women">Women</option>
                          <option value="Other">Other</option>
                        </select>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-brand" className="form-label">
                            ---
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product-brand"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <form>
                        <label htmlFor="gender" className="form-label">
                          Account Type <span className="text-danger">*</span>
                        </label>
                        <select
                          className="form-control"
                          id="gender"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Gender"
                        >
                          <option value="">Select Gender</option>
                          <option value="Men">Men</option>
                          <option value="Women">Women</option>
                          <option value="Other">Other</option>
                        </select>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-brand" className="form-label">
                            ---
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product-brand"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-brand" className="form-label">
                            ---
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product-brand"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-brand" className="form-label">
                            Driving License
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="product-brand"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-light mb-3 rounded">
                <div className="row justify-content-end g-2">
                  <div className="col-lg-2">
                    <button type="reset" className="btn btn-primary w-100">
                      Cancel
                    </button>
                  </div>

                  <div className="col-lg-2">
                    <button
                      type="submit"
                      className="btn btn-outline-secondary w-100"
                    >
                      Submit & Add Another
                    </button>
                  </div>
                  <div className="col-lg-2">
                    <button
                      type="submit"
                      className="btn btn-outline-secondary w-100"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .choices__inner {
    background-color: transparent !important;
  }
  .choices__inner:focus {
    border: transparent !important;
  }
`;

export default AddProduct;
