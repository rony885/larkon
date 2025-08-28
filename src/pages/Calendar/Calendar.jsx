import React from "react";
import Footer from "../../components/Footer";

const Calendar = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-3">
                    <div className="d-grid">
                      <button
                        type="button"
                        className="btn btn-primary"
                        id="btn-new-event"
                      >
                        <i className="bx bx-plus fs-18 me-2"></i> Add New
                        Schedule
                      </button>
                    </div>
                    <div id="external-events">
                      <br />
                      <p className="text-muted">
                        Drag and drop your event or click in the calendar
                      </p>
                      <div
                        className="external-event bg-soft-primary text-primary"
                        data-classname="bg-primary"
                      >
                        <i className="bx bxs-circle me-2 vertical-middle"></i>
                        Team Building Retreat Meeting
                      </div>
                      <div
                        className="external-event bg-soft-info text-info"
                        data-classname="bg-info"
                      >
                        <i className="bx bxs-circle me-2 vertical-middle"></i>
                        Product Launch Strategy Meeting
                      </div>
                      <div
                        className="external-event bg-soft-success text-success"
                        data-classname="bg-success"
                      >
                        <i className="bx bxs-circle me-2 vertical-middle"></i>
                        Monthly Sales Review
                      </div>
                      <div
                        className="external-event bg-soft-danger text-danger"
                        data-classname="bg-danger"
                      >
                        <i className="bx bxs-circle me-2 vertical-middle"></i>
                        Team Lunch Celebration
                      </div>
                      <div
                        className="external-event bg-soft-warning text-warning"
                        data-classname="bg-warning"
                      >
                        <i className="bx bxs-circle me-2 vertical-middle"></i>
                        Marketing Campaign Kickoff
                      </div>
                    </div>
                  </div>
                  {/* <!-- end col--> */}

                  <div className="col-xl-9">
                    <div className="mt-4 mt-lg-0">
                      <div id="calendar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Add New Event MODAL --> */}
            <div className="modal fade" id="event-modal" readOnly="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <form
                    className="needs-validation"
                    name="event-form"
                    id="forms-event"
                    noValidate
                  >
                    <div className="modal-header p-3 border-bottom-0">
                      <h5 className="modal-title" id="modal-title">
                        Event
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body px-3 pb-3 pt-0">
                      <div className="row">
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="control-label form-label">
                              Event Name
                            </label>
                            <input
                              className="form-control"
                              placeholder="Insert Event Name"
                              type="text"
                              name="title"
                              id="event-title"
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a valid event name
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="control-label form-label">
                              Category
                            </label>
                            <select
                              className="form-select"
                              name="category"
                              id="event-category"
                              required
                            >
                              <option value="bg-primary">Blue</option>
                              <option value="bg-secondary">Gray Dark</option>
                              <option value="bg-success">Green</option>
                              <option value="bg-info">Cyan</option>
                              <option value="bg-warning">Yellow</option>
                              <option value="bg-danger">Red</option>
                              <option value="bg-dark">Dark</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a valid event category
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <button
                            type="button"
                            className="btn btn-danger"
                            id="btn-delete-event"
                          >
                            Delete
                          </button>
                        </div>
                        <div className="col-6 text-end">
                          <button
                            type="button"
                            className="btn btn-light me-1"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            id="btn-save-event"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <!-- end modal-content--> */}
              </div>
              {/* <!-- end modal dialog--> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Calendar;

