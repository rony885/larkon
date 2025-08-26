import React, { useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";

const AddCategory = () => {
  // const [previews, setPreviews] = useState([]);

  // const handleFileChange = (e) => {
  //   const newFiles = Array.from(e.target.files);
  //   const newPreviews = newFiles.map((file) => ({
  //     id: Date.now() + Math.random(), // Unique ID for deletion
  //     name: file.name,
  //     url: URL.createObjectURL(file),
  //   }));

  //   setPreviews((prev) => [...prev, ...newPreviews]);
  // };

  // const handleDelete = (id) => {
  //   setPreviews((prev) => prev.filter((img) => img.id !== id));
  // };

  // const [previews, setPreviews] = useState([]);
  // const MAX_IMAGES = 5;

  // const handleFileChange = (e) => {
  //   const selectedFiles = Array.from(e.target.files);

  //   const remainingSlots = MAX_IMAGES - previews.length;
  //   if (remainingSlots <= 0) return;

  //   // ✅ Only take the first N files up to the limit
  //   const limitedFiles = selectedFiles.slice(0, remainingSlots);
  //   //  const limitedFiles = selectedFiles.reverse().slice(0, remainingSlots);

  //   const newPreviews = limitedFiles.map((file, index) => ({
  //     id: `${file.name}-${Date.now()}-${index}`,
  //     name: file.name,
  //     url: URL.createObjectURL(file),
  //   }));

  //   setPreviews((prev) => [...prev, ...newPreviews]);

  //   // Clear input so user can select the same file again if needed
  //   e.target.value = null;
  // };

  // const handleDelete = (id) => {
  //   setPreviews((prev) => prev.filter((img) => img.id !== id));
  // };

  const [previews, setPreviews] = useState([]);
  const MAX_IMAGES = 5;
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const remainingSlots = MAX_IMAGES - previews.length;
    if (remainingSlots <= 0) return;

    const limitedFiles = selectedFiles.slice(0, remainingSlots);

    const newPreviews = limitedFiles.map((file, index) => ({
      id: `${file.name}-${Date.now()}-${index}`,
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setPreviews((prev) => [...prev, ...newPreviews]);

    // 🛠️ Always reset file input to allow same file re-selection
    e.target.value = "";
  };

  const handleDelete = (id) => {
    setPreviews((prev) => prev.filter((img) => img.id !== id));
  };

  const triggerFileSelect = () => {
    if (previews.length < MAX_IMAGES && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Wrapper>
      <div className="page-content">
        <div className="container-xxl">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="bg-light text-center rounded bg-light">
                    <img
                      src="assets/images/product/p-1.png"
                      alt=""
                      className="avatar-xxl"
                    />
                  </div>
                  <div className="mt-3">
                    <h4>Fashion Men , Women & Kid's</h4>
                    <div className="row">
                      <div className="col-lg-4 col-4">
                        <p className="mb-1 mt-2">Created By :</p>
                        <h5 className="mb-0">Seller</h5>
                      </div>
                      <div className="col-lg-4 col-4">
                        <p className="mb-1 mt-2">Stock :</p>
                        <h5 className="mb-0">46233</h5>
                      </div>
                      <div className="col-lg-4 col-4">
                        <p className="mb-1 mt-2">ID :</p>
                        <h5 className="mb-0">FS16276</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-top">
                  <div className="row g-2">
                    <div className="col-lg-6">
                      <a href="#!" className="btn btn-outline-secondary w-100">
                        Create Category
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
                  <h4 className="card-title">Add Thumbnail Photo</h4>
                </div>

                {/* <div className="card-body">
                <form
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
              </div> */}

                {/* <div className="card-body">
                  <form
                    className="dropzone"
                    id="myAwesomeDropzone"
                    encType="multipart/form-data"
                  >
                    <div className="fallback">
                      <input
                        name="file"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        accept="image/png, image/jpeg, image/gif"
                      />
                    </div>

                    <div className="dz-message needsclick text-center">
                      <i className="bx bx-cloud-upload fs-48 text-primary"></i>
                      <h3 className="mt-4">
                        Drop your images here, or{" "}
                        <span className="text-primary">click to browse</span>
                      </h3>
                      <span className="text-muted fs-13">
                        1600 x 1200 (4:3) recommended. PNG, JPG and GIF files
                        are allowed
                      </span>
                    </div>

                    {previews.length > 0 && (
                      <div className="row mt-4" id="file-previews">
                        {previews.map((img) => (
                          <div className="col-md-3 mb-3" key={img.id}>
                            <div className="border rounded p-2 position-relative">
                              <img
                                src={img.url}
                                alt={img.name}
                                className="img-fluid"
                                style={{
                                  height: "120px",
                                  objectFit: "cover",
                                  width: "100%",
                                  borderRadius: "5px",
                                }}
                              />

                              <button
                                type="button"
                                onClick={() => handleDelete(img.id)}
                                className="position-absolute"
                                style={{
                                  top: "45%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  fontSize: "30px",
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "50%",
                                  backgroundColor: "#5d71869b",
                                  color: "#fff",
                                  border: "none",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  padding: 0,
                                  cursor: "pointer",
                                }}
                                title="Remove image"
                              >
                                &times;
                              </button>

                              <p className="mt-2 mb-0 text-center small">
                                {img.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </form>
                </div> */}
                {/* 
                <div className="card-body">
                  <form className="dropzone" encType="multipart/form-data">
                    <div className="fallback">
                      <input
                        name="file"
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        accept="image/png, image/jpeg, image/gif"
                        disabled={previews.length >= MAX_IMAGES}
                      />
                    </div>

                    <div className="dz-message needsclick text-center">
                      <i className="bx bx-cloud-upload fs-48 text-primary"></i>
                      <h3 className="mt-4">
                        Drop your images here, or{" "}
                        <span className="text-primary">click to browse</span>
                      </h3>
                      <span className="text-muted fs-13">
                        1600 x 1200 (4:3) recommended. PNG, JPG and GIF files
                        are allowed.
                        <br />
                        You can upload up to 5 images.
                      </span>
                    </div>

                    {previews.length > 0 && (
                      <div className="row mt-4" id="file-previews">
                        {previews.map((img) => (
                          <div className="col-md-3 mb-3" key={img.id}>
                            <div className="border rounded p-2 position-relative">
                              <img
                                src={img.url}
                                alt={img.name}
                                className="img-fluid"
                                style={{
                                  height: "120px",
                                  objectFit: "cover",
                                  width: "100%",
                                  borderRadius: "5px",
                                }}
                              />
                              <button
                                type="button"
                                onClick={() => handleDelete(img.id)}
                                className="position-absolute"
                                style={{
                                  top: "45%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  fontSize: "30px",
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "50%",
                                  backgroundColor: "#5d71869b",
                                  color: "#fff",
                                  border: "none",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  padding: 0,
                                  cursor: "pointer",
                                }}
                                title="Remove image"
                              >
                                &times;
                              </button>
                              <p className="mt-2 mb-0 text-center small">
                                {img.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </form>
                </div> */}

                <div className="card-body">
                  <form className="dropzone" encType="multipart/form-data">
                    {/* Hidden file input */}
                    <input
                      type="file"
                      multiple
                      accept="image/png, image/jpeg, image/gif"
                      style={{ display: "none" }}
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />

                    {/* Upload Area - always clickable */}
                    <div
                      className="dz-message needsclick text-center"
                      onClick={triggerFileSelect}
                    >
                      {previews.length === 0 && (
                        <>
                          <i className="bx bx-cloud-upload fs-48 text-primary"></i>
                          <h3 className="mt-4">
                            Drop your images here, or{" "}
                            <span className="text-primary">
                              click to browse
                            </span>
                          </h3>
                          <span className="text-muted fs-13">
                            1600 x 1200 (4:3) recommended. PNG, JPG and GIF
                            files are allowed.
                            <br />
                            You can upload up to 5 images.
                          </span>
                        </>
                      )}
                    </div>

                    {/* Image previews */}
                    {previews.length > 0 && (
                      <div
                        className="row mt-4 p-5"
                        id="file-previews"
                        onClick={triggerFileSelect}
                      >
                        {previews.map((img) => (
                          <div className="col-md-3 mb-3" key={img.id}>
                            <div className="border rounded p-2 position-relative">
                              <img
                                src={img.url}
                                alt={img.name}
                                className="img-fluid"
                                style={{
                                  height: "120px",
                                  objectFit: "cover",
                                  width: "100%",
                                  borderRadius: "5px",
                                }}
                              />
                              <button
                                type="button"
                                onClick={() => handleDelete(img.id)}
                                className="position-absolute"
                                style={{
                                  top: "45%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                  fontSize: "30px",
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "50%",
                                  backgroundColor: "#5d71869b",
                                  color: "#fff",
                                  border: "none",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  padding: 0,
                                  cursor: "pointer",
                                }}
                                title="Remove image"
                              >
                                &times;
                              </button>
                              <p className="mt-2 mb-0 text-center small">
                                {img.name}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">General Information</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="category-title"
                            className="form-label"
                          >
                            Category Title
                          </label>
                          <input
                            type="text"
                            id="category-title"
                            className="form-control"
                            placeholder="Enter Title"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-6">
                      <form>
                        <label htmlFor="crater" className="form-label">
                          Created By
                        </label>
                        <select
                          className="form-control"
                          id="crater"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Crater"
                        >
                          <option value="">Select Crater</option>
                          <option value="Seller">Seller</option>
                          <option value="Admin">Admin</option>
                          <option value="Other">Other</option>
                        </select>
                      </form>
                    </div>
                    <div className="col-lg-6">
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
                    <div className="col-lg-6">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="product-id" className="form-label">
                            Tag ID
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
                    <div className="col-lg-12">
                      <div className="mb-0">
                        <label htmlFor="description" className="form-label">
                          Description
                        </label>
                        <textarea
                          className="form-control bg-light-subtle"
                          id="description"
                          rows="7"
                          placeholder="Type description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Meta Options</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-title" className="form-label">
                            Meta Title
                          </label>
                          <input
                            type="text"
                            id="meta-title"
                            className="form-control"
                            placeholder="Enter Title"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-6">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Meta Tag Keyword
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                            placeholder="Enter word"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-0">
                        <label htmlFor="description" className="form-label">
                          Description
                        </label>
                        <textarea
                          className="form-control bg-light-subtle"
                          id="description"
                          rows="4"
                          placeholder="Type description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-light mb-3 rounded">
                <div className="row justify-content-end g-2">
                  <div className="col-lg-2">
                    <a href="#!" className="btn btn-outline-secondary w-100">
                      Save Change
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
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default AddCategory;
