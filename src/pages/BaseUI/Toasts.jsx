import React from "react";
import Footer from "../../components/Footer";

const Toasts = () => {
  return (
    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="basic_examples">
                  Basic Examples
                  <a className="anchor-link" href="#basic_examples">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Toasts are as flexible as you need and have very little
                  required markup. At a minimum, we require a single element to
                  contain your “toasted” content and strongly encourage a
                  dismiss button.
                </p>

                <div className="mb-3">
                  <div
                    className="toast fade d-block opacity-100"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                    data-bs-toggle="toast"
                  >
                    <div className="toast-header d-block">
                      <div className="float-end">
                        <small>11 mins ago</small>
                        <button
                          type="button"
                          className="ms-2 btn-close"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="auth-logo">
                        <img
                          className="logo-dark"
                          src="assets/images/logo-dark.png"
                          alt="logo-dark"
                          height="18"
                        />
                        <img
                          className="logo-light"
                          src="assets/images/logo-light.png"
                          alt="logo-light"
                          height="18"
                        />
                      </div>
                    </div>
                    <div className="toast-body">
                      Hello, world! This is a toast message.
                    </div>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="live_example">
                  Live example
                  <a className="anchor-link" href="#live_example">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Click the button below to show a toast (positioned with our
                  utilities in the lower right corner) that has been hidden by
                  default.
                </p>

                <div className="mb-3">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="liveToastDefaultBtn"
                  >
                    Show live toast
                  </button>

                  <div className="toast-container position-fixed bottom-0 end-0 p-3">
                    <div
                      id="liveToastDefault"
                      className="toast"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div className="toast-header">
                        <div className="auth-logo me-auto">
                          <img
                            className="logo-dark"
                            src="assets/images/logo-dark.png"
                            alt="logo-dark"
                            height="18"
                          />
                          <img
                            className="logo-light"
                            src="assets/images/logo-light.png"
                            alt="logo-light"
                            height="18"
                          />
                        </div>
                        <small>11 mins ago</small>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="toast-body">
                        Hello, world! This is a toast message.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="default_buttons">
                  Default Buttons
                  <a className="anchor-link" href="#default_buttons">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Toasts are as flexible as you need and have very little
                  required markup. At a minimum, we require a single element to
                  contain your “toasted” content and strongly encourage a
                  dismiss button.
                </p>

                <div className="mb-3">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="liveToastBtn"
                  >
                    Show live toast
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="liveToastBtn2"
                  >
                    Show live toast
                  </button>

                  <div className="toast-container position-fixed end-0 top-0 p-3">
                    <div
                      id="liveToast"
                      className="toast"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div className="toast-header">
                        <div className="auth-logo me-auto">
                          <img
                            className="logo-dark"
                            src="assets/images/logo-dark.png"
                            alt="logo-dark"
                            height="18"
                          />
                          <img
                            className="logo-light"
                            src="assets/images/logo-light.png"
                            alt="logo-light"
                            height="18"
                          />
                        </div>
                        <small className="text-muted">just now</small>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="toast-body">See? Just like this.</div>
                    </div>

                    <div
                      id="liveToast2"
                      className="toast"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div className="toast-header">
                        <div className="auth-logo me-auto">
                          <img
                            className="logo-dark"
                            src="assets/images/logo-dark.png"
                            alt="logo-dark"
                            height="18"
                          />
                          <img
                            className="logo-light"
                            src="assets/images/logo-light.png"
                            alt="logo-light"
                            height="18"
                          />
                        </div>
                        <small className="text-muted">2 seconds ago</small>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="toast-body">
                        Heads up, toasts will stack automatically
                      </div>
                    </div>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="custom_content">
                  Custom Content
                  <a className="anchor-link" href="#custom_content">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Alternatively, you can also add additional controls and
                  components to toasts.
                </p>

                <div className="mb-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="toast fade show align-items-center mb-3"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="d-flex">
                          <div className="toast-body">
                            Hello, world! This is a toast message.
                          </div>
                          <button
                            type="button"
                            className="btn-close me-2 m-auto"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                          ></button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="toast fade show align-items-center text-bg-primary mb-3"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="d-flex">
                          <div className="toast-body">
                            Hello, world! This is a toast message.
                          </div>
                          <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="toast fade show mb-3 mb-md-0"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-body">
                          Hello, world! This is a toast message.
                          <div className="mt-2 pt-2 border-top">
                            <button
                              type="button"
                              className="btn btn-primary btn-sm me-1"
                            >
                              Take action
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="toast"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="toast fade show text-bg-primary"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-body">
                          Hello, world! This is a toast message.
                          <div className="mt-2 pt-2 border-top">
                            <button
                              type="button"
                              className="btn btn-light btn-sm me-1"
                            >
                              Take action
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="toast"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>

                  <div className="toast-container position-static">
                    {/* Simple Toast */}
                    <div
                      className="toast fade align-items-center show"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div className="d-flex">
                        <div className="toast-body">
                          Hello, world! This is a toast message.
                        </div>
                        <button
                          type="button"
                          className="btn-close me-2 m-auto"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        ></button>
                      </div>
                    </div>

                    {/* Toast with primary background */}
                    <div
                      className="toast fade align-items-center text-bg-primary show mt-3"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div className="d-flex">
                        <div className="toast-body">
                          Hello, world! This is a toast message.
                        </div>
                        <button
                          type="button"
                          className="btn-close btn-close-white me-2 m-auto"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        ></button>
                      </div>
                    </div>

                    {/* Toast with action buttons */}
                    <div
                      className="toast fade show mt-3"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div className="toast-body">
                        Hello, world! This is a toast message.
                        <div className="mt-2 pt-2 border-top">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-1"
                          >
                            Take action
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            data-bs-dismiss="toast"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Toast with primary background and action buttons */}
                    <div
                      className="toast fade text-bg-primary show mt-3"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div className="toast-body">
                        Hello, world! This is a toast message.
                        <div className="mt-2 pt-2 border-top">
                          <button
                            type="button"
                            className="btn btn-light btn-sm me-1"
                          >
                            Take action
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            data-bs-dismiss="toast"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5
                  className="card-title mb-1 anchor"
                  id="pranscluentPlacement"
                >
                  Transcluent
                  <a className="anchor-link" href="#pranscluentPlacement">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Toasts are slightly translucent, too, so they blend over
                  whatever they might appear over. For browsers that support the
                  backdrop-filter CSS property, we’ll also attempt to blur the
                  elements under a toast.
                </p>

                <div className="mb-3">
                  <div className="p-3 bg-light">
                    <div
                      className="toast fade show"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                      data-bs-toggle="toast"
                    >
                      <div className="toast-header d-block">
                        <div className="float-end">
                          <small>11 mins ago</small>
                          <button
                            type="button"
                            className="ms-2 btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="auth-logo">
                          <img
                            className="logo-dark me-1"
                            src="assets/images/logo-dark.png"
                            alt="logo-dark"
                            height="18"
                          />
                          <img
                            className="logo-light"
                            src="assets/images/logo-light.png"
                            alt="logo-light"
                            height="18"
                          />
                        </div>
                      </div>
                      <div className="toast-body">
                        Hello, world! This is a toast message.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>

                 
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="placement">
                  Placement
                  <a className="anchor-link" href="#placement">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Place toasts with custom CSS as you need them. The top right
                  is often used for notifications, as is the top middle. If
                  you’re only ever going to show one toast at a time, put the
                  positioning styles right on the <code>.toast.</code>
                </p>

                <div className="mb-3">
                  <div
                    aria-live="polite"
                    aria-atomic="true"
                    className="bg-light position-relative"
                    style={{ minHeight: "350px" }}
                  >
                    <div
                      className="toast-container position-absolute p-3"
                      id="toastPlacement"
                    >
                      <div className="toast show mb-2">
                        <div className="toast-header d-block">
                          <div className="float-end">
                            <small>11 mins ago</small>
                            <button
                              type="button"
                              className="ms-2 btn-close"
                              data-bs-dismiss="toast"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="auth-logo">
                            <img
                              className="logo-dark me-1"
                              src="assets/images/logo-dark.png"
                              alt="logo-dark"
                              height="18"
                            />
                            <img
                              className="logo-light"
                              src="assets/images/logo-light.png"
                              alt="logo-light"
                              height="18"
                            />
                          </div>
                        </div>
                        <div className="toast-body">
                          Hello, world! This is a toast message.
                        </div>
                      </div>
                    </div>
                  </div>

                  <form>
                    <div className="my-3">
                      <label
                        htmlFor="selectToastPlacement"
                        className="form-label"
                      >
                        Toast placement
                      </label>
                      <select
                        className="form-select mt-2"
                        data-choices
                        id="selectToastPlacement"
                        defaultValue=""
                      >
                        <option value="">Select a position...</option>
                        <option value="top-0 start-0">
                          Top left (
                          <code className="text-danger">.top-0 .start-0</code>)
                        </option>
                        <option value="top-0 start-50 translate-middle-x">
                          Top center
                        </option>
                        <option value="top-0 end-0">Top right</option>
                        <option value="top-50 start-0 translate-middle-y">
                          Middle left
                        </option>
                        <option value="top-50 start-50 translate-middle">
                          Middle center
                        </option>
                        <option value="top-50 end-0 translate-middle-y">
                          Middle right
                        </option>
                        <option value="bottom-0 start-0">Bottom left</option>
                        <option value="bottom-0 start-50 translate-middle-x">
                          Bottom center
                        </option>
                        <option value="bottom-0 end-0">Bottom right</option>
                      </select>
                    </div>
                  </form>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>
               
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}

          <div className="col-xl-3">
            <div className="card docs-nav">
              <div className="">
                <div className="">
                  <ul className="nav bg-transparent flex-column">
                    <li className="nav-item">
                      <a href="#basic_examples" className="nav-link">
                        Basic Examples
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#live_example" className="nav-link">
                        Live example
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#default_buttons" className="nav-link">
                        Default Buttons
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#custom_content" className="nav-link">
                        Custom Content
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#transcluent" className="nav-link">
                        Transcluent
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#placement" className="nav-link">
                        Placement
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end row --> */}
      </div>
      <Footer />
    </div>
  );
};

export default Toasts;
