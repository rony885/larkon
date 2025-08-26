import React from "react";

const ErrorWithBody = () => {
  return (
    <div className="d-flex flex-column h-100 p-3">
      <div className="d-flex flex-column flex-grow-1">
        <div className="row h-100">
          <div className="col-xxl-7">
            <div className="row align-items-center justify-content-center h-100">
              <div className="col-lg-10">
                <div className="auth-logo mb-3 text-center">
                  <a href="index.html" className="logo-dark">
                    <img
                      src="assets/images/logo-dark.png"
                      height="24"
                      alt="logo dark"
                    />
                  </a>

                  <a href="index.html" className="logo-light">
                    <img
                      src="assets/images/logo-light.png"
                      height="24"
                      alt="logo light"
                    />
                  </a>
                </div>
                <div className="mx-auto text-center">
                  <img
                    src="assets/images/404-error.png"
                    alt=""
                    className="img-fluid my-3"
                  />
                </div>
                <h2 className="fw-bold text-center lh-base">
                  Ooops! The Page You're Looking For Was Not Found
                </h2>
                <p className="text-muted text-center mt-1 mb-4">
                  Sorry, we couldn't find the page you were looking for. We
                  suggest that you return to main sections
                </p>
                <div className="text-center">
                  <a href="index.html" className="btn btn-primary">
                    Back To Home
                  </a>
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

export default ErrorWithBody;
