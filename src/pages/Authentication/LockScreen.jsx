import React from "react";
import { Link } from "react-router-dom";

const LockScreen = () => {
  return (
    <div className="d-flex flex-column h-100 p-3">
      <div className="d-flex flex-column flex-grow-1">
        <div className="row h-100">
          <div className="col-xxl-7">
            <div className="row justify-content-center h-100">
              <div className="col-lg-6 py-lg-5">
                <div className="d-flex flex-column h-100 justify-content-center">
                  <div className="auth-logo mb-4">
                    <Link to="/" className="logo-dark">
                      <img
                        src="assets/images/logo-dark.png"
                        height="24"
                        alt="logo dark"
                      />
                    </Link>

                    <Link to="/" className="logo-light">
                      <img
                        src="assets/images/logo-light.png"
                        height="24"
                        alt="logo light"
                      />
                    </Link>
                  </div>

                  <h2 className="fw-bold fs-24">Hi ! Gaston</h2>

                  <p className="text-muted mt-1 mb-4">
                    Enter your password to access the admin.
                  </p>

                  <div className="mb-5">
                    <form className="authentication-form">
                      <div className="mb-3">
                        <label
                          className="form-label visually-hidden"
                          for="example-password"
                        >
                          Password
                        </label>
                        <input
                          type="text"
                          id="example-password"
                          className="form-control"
                          placeholder="Enter your password"
                        />
                      </div>
                      <div className="mb-1 text-center d-grid">
                        <button className="btn btn-primary" type="submit">
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>

                  <p className="text-danger text-center">
                    Not you? return
                    <a
                      href="auth-signup.html"
                      className="text-dark fw-bold ms-1"
                    >
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-5 d-none d-xxl-flex">
            <div className="card h-100 mb-0 overflow-hidden">
              <div className="d-flex flex-column h-100">
                <img
                  src="assets/images/small/img-10.jpg"
                  alt=""
                  className="w-100 h-100"
                />
              </div>
            </div>
            {/* <!-- end card --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockScreen;
