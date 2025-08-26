import React from "react";
import Footer from "../../components/Footer";

const AttributesEdit = () => {
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
                          defaultValue="Brand"
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
                          defaultValue="Dyson , H&M, Nike , GoPro , Huawei , Rolex , Zara , Thenorthface"
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
                          type="text"
                          id="attribute-id"
                          className="form-control"
                          placeholder="Enter ID"
                          defaultValue="BR-3922"
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
                          <option defaultValue="Dropdown" select="true">
                            Dropdown
                          </option>
                          <option defaultValue="Radio">Radio</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card-footer border-top">
                <a href="#!" className="btn btn-primary">
                  Edit Change
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

export default AttributesEdit;
