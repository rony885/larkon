import React, { useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Footer from "../../components/Footer";

const Flatepicker = () => {
  useEffect(() => {
    flatpickr("#basic-datepicker", {});
    flatpickr("#datetime-datepicker", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    });
    flatpickr("#humanfd-datepicker", {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
    });
    flatpickr("#minmax-datepicker", {
      minDate: "2020-01",
      maxDate: "2020-03",
    });
  }, []);

  return (
    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1">Overview</h5>
                <p className="text-muted mb-3">
                  flatpickr is a lightweight and powerful datetime picker.{" "}
                  <a
                    href="https://flatpickr.js.org/#introduction"
                    className="btn btn-sm btn-outline-success float-end"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Official Website
                  </a>
                </p>

                <h5 className="mt-2">Usage</h5>
                <p className="mb-0">
                  Flatpickr’s CSS and JavaScript files are bundled and globally
                  included in all pages.
                </p>
              </div>
            </div>

            {/* Basic */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3">Basic Datepicker</h5>
                <div className="w-50 mb-3">
                  <input
                    type="text"
                    id="basic-datepicker"
                    className="form-control"
                    placeholder="Basic datepicker"
                  />
                </div>
              </div>
            </div>

            {/* DateTime */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3">Date & Time Picker</h5>
                <div className="w-50 mb-3">
                  <input
                    type="text"
                    id="datetime-datepicker"
                    className="form-control"
                    placeholder="Date and Time"
                  />
                </div>
              </div>
            </div>

            {/* Human Friendly */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3">Human Friendly Format</h5>
                <div className="w-50 mb-3">
                  <input
                    type="text"
                    id="humanfd-datepicker"
                    className="form-control"
                    placeholder="October 9, 2018"
                  />
                </div>
              </div>
            </div>

            {/* Min Max Date */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3">Min and Max Date</h5>
                <div className="w-50 mb-3">
                  <input
                    type="text"
                    id="minmax-datepicker"
                    className="form-control"
                    placeholder="MinDate - MaxDate"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Flatepicker;
