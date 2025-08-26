import React from "react";
import Footer from "../../components/Footer";

const AttributesAdd = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add Attribute</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="variant-name"
                          className="form-label text-dark"
                        >
                          Attribute Variant
                        </label>
                        <input
                          type="text"
                          id="variant-name"
                          className="form-control"
                          placeholder="Enter Name"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="value-name"
                          className="form-label text-dark"
                        >
                          Attribute Value
                        </label>
                        <input
                          type="text"
                          id="value-name"
                          className="form-control"
                          placeholder="Enter Value"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="">
                        <label
                          htmlFor="attribute-id"
                          className="form-label text-dark"
                        >
                          Attribute ID
                        </label>
                        <input
                          type="number"
                          id="attribute-id"
                          className="form-control"
                          placeholder="Enter ID"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="">
                        <label htmlFor="option" className="form-label">
                          Option
                        </label>
                        <select
                          className="form-control"
                          id="option"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Option"
                        >
                          <option value="Dropdown">Dropdown</option>
                          <option value="Radio">Radio</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top">
                <a href="#!" className="btn btn-primary">
                  Save Change
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

export default AttributesAdd;
