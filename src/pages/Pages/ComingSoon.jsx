import React from "react";

const ComingSoon = () => {
  return (
    <div className="vh-100">
      <div className="d-flex flex-column h-100 p-3">
        <div className="d-flex flex-column flex-grow-1">
          <div className="row h-100">
            <div className="col-xxl-7">
              <div className="row align-items-center justify-content-center h-100">
                <div className="col-lg-8">
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
                      src="assets/images/coming-soon.png"
                      alt=""
                      className="h-auto my-3"
                      style={{ maxWidth: "80%" }}
                    />
                  </div>
                  <div className="row text-center my-4">
                    <div className="col border-end">
                      <h3 id="days" className="fw-bold fs-35">
                        00
                      </h3>
                      <p className="text-uppercase fw-semibold mb-0">Days</p>
                    </div>
                    <div className="col border-end">
                      <h3 id="hours" className="fw-bold fs-35">
                        00
                      </h3>
                      <p className="text-uppercase fw-semibold mb-0">Hours</p>
                    </div>
                    <div className="col border-end">
                      <h3 id="minutes" className="fw-bold fs-35">
                        00
                      </h3>
                      <p className="text-uppercase fw-semibold mb-0">Minutes</p>
                    </div>
                    <div className="col">
                      <h3 id="seconds" className="fw-bold fs-35">
                        00
                      </h3>
                      <p className="text-uppercase fw-semibold mb-0">Seconds</p>
                    </div>
                  </div>
                  <p className="text-muted text-center mt-1 mb-4">
                    Exciting news is on the horizon! We're thrilled to announce
                    that something incredible is coming your way very soon. Our
                    team has been hard at work behind the scenes, crafting
                    something special just for you.
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
