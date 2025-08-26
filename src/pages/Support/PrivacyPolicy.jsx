import React from "react";
import Footer from "../../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="card overflow-hidden"
              style={{
                backgroundImage: "url('/assets/images/small/img-2.jpg')",
              }}
            >
              <div className="position-absolute top-0 end-0 bottom-0 start-0 bg-dark opacity-75"></div>
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-lg-7 text-center">
                    <h3 className="text-white">Privacy Policy</h3>
                    <p className="text-white-50">
                      Our code of conduct and your pledge to be an upstanding
                      member of the product
                    </p>

                    <div className="search-bar">
                      <span>
                        <i className="bx bx-search-alt"></i>
                      </span>
                      <input
                        type="search"
                        className="form-control rounded-pill bg-white border-0"
                        id="search"
                        placeholder="Search ..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <iconify-icon
                    icon="solar:black-hole-bold-duotone"
                    className="fs-28 text-primary"
                  ></iconify-icon>

                  <h3 className="mb-0 ms-2">Introduction</h3>
                </div>

                <p className="mb-0">
                  TechFusion Solutions Inc. ("we", "our", "us") respects your
                  privacy and is committed to protecting it through our
                  compliance with this policy. This Privacy Policy explains how
                  we collect, use, disclose, and safeguard your information when
                  you use our SaaS product, TechFusion Suite, available at
                  www.techfusion.com (the "Site") or through our applications
                  and services (collectively, "Services"). Please read this
                  privacy policy carefully to understand our policies and
                  practices regarding your information and how we will treat it.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <iconify-icon
                    icon="solar:black-hole-bold-duotone"
                    className="fs-28 text-primary"
                  ></iconify-icon>

                  <h3 className="mb-0 ms-2">Information We Collect</h3>
                </div>

                <p className="mb-0">
                  TechFusion Solutions Inc. ("we", "our", "us") respects your
                  privacy and is committed to protecting it through our
                  compliance with this policy. This Privacy Policy explains how
                  we collect, use, disclose, and safeguard your information when
                  you use our SaaS product, TechFusion Suite, available at
                  www.techfusion.com (the "Site") or through our applications
                  and services (collectively, "Services"). Please read this
                  privacy policy carefully to understand our policies and
                  practices regarding your information and how we will treat it.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <iconify-icon
                    icon="solar:black-hole-bold-duotone"
                    className="fs-28 text-primary"
                  ></iconify-icon>

                  <h3 className="mb-0 ms-2">Our role in your privacy</h3>
                </div>

                <p className="mb-0">
                  TechFusion Solutions Inc. ("we", "our", "us") respects your
                  privacy and is committed to protecting it through our
                  compliance with this policy. This Privacy Policy explains how
                  we collect, use, disclose, and safeguard your information when
                  you use our SaaS product, TechFusion Suite, available at
                  www.techfusion.com (the "Site") or through our applications
                  and services (collectively, "Services"). Please read this
                  privacy policy carefully to understand our policies and
                  practices regarding your information and how we will treat it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
