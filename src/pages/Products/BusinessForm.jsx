import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { FaHome } from "react-icons/fa";

const BusinessForm = () => {
  return (
    <Wrapper>
      <div className="page-content">
        <div className="container-xxl">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
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
                    <u>Business Form</u>
                  </h4>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-brand" className="form-label">
                            Business Name <span className="text-danger">*</span>
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
                            Registration No{" "}
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
                            Phone No <span className="text-danger">*</span>
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
                            Email <span className="text-danger">*</span>
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
                            Address <span className="text-danger">*</span>
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
                            Short Name <span className="text-danger">*</span>
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
                            Logo
                          </label>
                          <input
                            type="file"
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
                            Access <span className="text-danger">*</span>
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
                    <button
                      type="submit"
                      className="btn btn-outline-secondary w-100"
                    >
                      Add
                    </button>
                  </div>

                  <div className="col-lg-2">
                    <button type="reset" className="btn btn-primary w-100">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4"></div>
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

export default BusinessForm;
