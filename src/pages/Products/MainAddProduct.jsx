
import React from "react";
import Footer from "../../components/Footer";

const AddProduct = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="card">
              <div className="card-body">
                <img
                  src="/assets/images/product/p-1.png"
                  alt=""
                  className="img-fluid rounded bg-light"
                />
                <div className="mt-3">
                  <h4>
                    Men Black Slim Fit T-shirt
                    <span className="fs-14 text-muted ms-1">(Fashion)</span>
                  </h4>
                  <h5 className="text-dark fw-medium mt-3">Price :</h5>
                  <h4 className="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                    <span className="text-muted text-decoration-line-through">
                      $100
                    </span>
                    $80 <small className="text-muted"> (30% Off)</small>
                  </h4>
                  <div className="mt-3">
                    <h5 className="text-dark fw-medium">Size :</h5>
                    <div
                      className="d-flex flex-wrap gap-2"
                      role="group"
                      aria-label="Basic checkbox toggle button group"
                    >
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="size-s"
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="size-s"
                      >
                        S
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="size-m"
                        defaultChecked
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="size-m"
                      >
                        M
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="size-xl"
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="size-xl"
                      >
                        Xl
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="size-xxl"
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="size-xxl"
                      >
                        XXL
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h5 className="text-dark fw-medium">Colors :</h5>
                    <div
                      className="d-flex flex-wrap gap-2"
                      role="group"
                      aria-label="Basic checkbox toggle button group"
                    >
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="color-dark"
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="color-dark"
                      >
                        <i className="bx bxs-circle fs-18 text-dark"></i>
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="color-yellow"
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="color-yellow"
                      >
                        <i className="bx bxs-circle fs-18 text-warning"></i>
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="color-white"
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="color-white"
                      >
                        <i className="bx bxs-circle fs-18 text-white"></i>
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="color-red"
                      />
                      <label
                        className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                        htmlFor="color-red"
                      >
                        <i className="bx bxs-circle fs-18 text-danger"></i>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-light-subtle">
                <div className="row g-2">
                  <div className="col-lg-6">
                    <a href="#!" className="btn btn-outline-secondary w-100">
                      Create Product
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a href="#!" className="btn btn-primary w-100">
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-9 col-lg-8">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add Product Photo</h4>
              </div>

              <div className="card-body">
                {/* <!-- File Upload --> */}
                <form
                  action="https://techzaa.in/"
                  method="post"
                  className="dropzone"
                  id="myAwesomeDropzone"
                  data-plugin="dropzone"
                  data-previews-container="#file-previews"
                  data-upload-preview-template="#uploadPreviewTemplate"
                >
                  <div className="fallback">
                    <input name="file" type="file" multiple />
                  </div>
                  <div className="dz-message needsclick">
                    <i className="bx bx-cloud-upload fs-48 text-primary"></i>
                    <h3 className="mt-4">
                      Drop your images here, or
                      <span className="text-primary">click to browse</span>
                    </h3>
                    <span className="text-muted fs-13">
                      1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are
                      allowed
                    </span>
                  </div>
                </form>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Product Information</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-name" className="form-label">
                          Product Name
                        </label>
                        <input
                          type="text"
                          id="product-name"
                          className="form-control"
                          placeholder="Items Name"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <label htmlFor="product-categories" className="form-label">
                        Product Categories
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
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-brand" className="form-label">
                          Brand
                        </label>
                        <input
                          type="text"
                          id="product-brand"
                          className="form-control"
                          placeholder="Brand Name"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-weight" className="form-label">
                          Weight
                        </label>
                        <input
                          type="text"
                          id="product-weight"
                          className="form-control"
                          placeholder="In gm & kg"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <form>
                      <label htmlFor="gender" className="form-label">
                        Gender
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
                <div className="row mb-4">
                  <div className="col-lg-4">
                    <div className="mt-3">
                      <h5 className="text-dark fw-medium">Size :</h5>
                      <div
                        className="d-flex flex-wrap gap-2"
                        role="group"
                        aria-label="Basic checkbox toggle button group"
                      >
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="size-xs1"
                        />
                        <label
                          className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                          htmlFor="size-xs1"
                        >
                          XS
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="size-s1"
                        />
                        <label
                          className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                          htmlFor="size-s1"
                        >
                          S
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="size-m1"
                        />
                        <label
                          className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                          htmlFor="size-m1"
                        >
                          M
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="size-xl1"
                        />
                        <label
                          className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                          htmlFor="size-xl1"
                        >
                          Xl
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="size-xxl1"
                        />
                        <label
                          className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                          htmlFor="size-xxl1"
                        >
                          XXL
                        </label>
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="size-3xl1"
                        />
                        <label
                          className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                          htmlFor="size-3xl1"
                        >
                          3XL
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="mt-3">
                      <h5 className="text-dark fw-medium">Colors :</h5>
                      <div
                        className="d-flex flex-wrap gap-2"
                        role="group"
                        aria-label="Basic checkbox toggle button group"
                      >
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="color-dark1"
                        />
                        <label
                          className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                          htmlFor="color-dark1"
                        >
                          <i className="bx bxs-circle fs-18 text-dark"></i>
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="color-yellow1"
                        />
                        <label
                          className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                          htmlFor="color-yellow1"
                        >
                          <i className="bx bxs-circle fs-18 text-warning"></i>
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="color-white1"
                        />
                        <label
                          className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                          htmlFor="color-white1"
                        >
                          <i className="bx bxs-circle fs-18 text-white"></i>
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="color-red1"
                        />
                        <label
                          className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                          htmlFor="color-red1"
                        >
                          <i className="bx bxs-circle fs-18 text-primary"></i>
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="color-green1"
                        />
                        <label
                          className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                          htmlFor="color-green1"
                        >
                          <i className="bx bxs-circle fs-18 text-success"></i>
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="color-blue1"
                        />
                        <label
                          className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                          htmlFor="color-blue1"
                        >
                          <i className="bx bxs-circle fs-18 text-danger"></i>
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="color-sky1"
                        />
                        <label
                          className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                          htmlFor="color-sky1"
                        >
                          <i className="bx bxs-circle fs-18 text-info"></i>
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="color-gray1"
                        />
                        <label
                          className="btn btn-light avatar-sm rounded d-flex justify-content-center align-items-center"
                          htmlFor="color-gray1"
                        >
                          <i className="bx bxs-circle fs-18 text-secondary"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control bg-light-subtle"
                        id="description"
                        rows="7"
                        placeholder="Short description about the product"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-id" className="form-label">
                          Tag Number
                        </label>
                        <input
                          type="number"
                          id="product-id"
                          className="form-control"
                          placeholder="#******"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="product-stock" className="form-label">
                          Stock
                        </label>
                        <input
                          type="number"
                          id="product-stock"
                          className="form-control"
                          placeholder="Quantity"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <label htmlFor="product-stock" className="form-label">
                      Tag
                    </label>
                    <select
                      className="form-control"
                      id="choices-multiple-remove-button"
                      data-choices
                      // data-choices-removeItem
                      name="choices-multiple-remove-button"
                      multiple
                    >
                      <option value="Fashion" select="true">
                        Fashion
                      </option>
                      <option value="Electronics">Electronics</option>
                      <option value="Watches">Watches</option>
                      <option value="Headphones">Headphones</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Pricing Details</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4">
                    <form>
                      <label htmlFor="product-price" className="form-label">
                        Price
                      </label>
                      <div className="input-group mb-3">
                        <span className="input-group-text fs-20">
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
                  </div>
                  <div className="col-lg-4">
                    <form>
                      <label htmlFor="product-discount" className="form-label">
                        Discount
                      </label>
                      <div className="input-group mb-3">
                        <span className="input-group-text fs-20">
                          <i className="bx bxs-discount"></i>
                        </span>
                        <input
                          type="number"
                          id="product-discount"
                          className="form-control"
                          placeholder="000"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <form>
                      <label htmlFor="product-tex" className="form-label">
                        Tex
                      </label>
                      <div className="input-group mb-3">
                        <span className="input-group-text fs-20">
                          <i className="bx bxs-file-txt"></i>
                        </span>
                        <input
                          type="number"
                          id="product-tex"
                          className="form-control"
                          placeholder="000"
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
                  <a href="#!" className="btn btn-outline-secondary w-100">
                    Create Product
                  </a>
                </div>
                <div className="col-lg-2">
                  <a href="#!" className="btn btn-primary w-100">
                    Cancel
                  </a>
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

export default AddProduct;
