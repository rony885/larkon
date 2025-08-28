import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Todo = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        {/* <!-- Start here.... --> */}
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap justify-content-between gap-3">
                  <div className="search-bar">
                    <span>
                      <i className="bx bx-search-alt"></i>
                    </span>
                    <input
                      type="search"
                      className="form-control"
                      id="search"
                      placeholder="Search task..."
                    />
                  </div>
                  <div>
                    <Link to="#!" className="btn btn-primary">
                      <i className="bx bx-plus me-1"></i>Create Task
                    </Link>
                  </div>
                </div>
                {/* <!-- end row --> */}
              </div>
              <div>
                <div className="table-responsive table-centered">
                  <table className="table text-nowrap mb-0">
                    <thead className="bg-light bg-opacity-50">
                      <tr>
                        <th className="border-0 py-2">Task Name</th>
                        <th className="border-0 py-2">Created Date</th>
                        <th className="border-0 py-2">Due Date</th>
                        <th className="border-0 py-2">Assigned</th>
                        <th className="border-0 py-2">Status</th>
                        <th className="border-0 py-2">Priority</th>
                        <th className="border-0 py-2">Action</th>
                      </tr>
                    </thead>
                    {/* <!-- end thead--> */}
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="form-check form-todo ps-4">
                              <input
                                type="checkbox"
                                className="form-check-input rounded-circle mt-0 fs-18"
                                id="customCheck1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck1"
                              >
                                Review system logs for any reported errors
                              </label>
                            </div>
                          </div>
                        </td>
                        <td>
                          23 April, 2024 <small>05:09 PM</small>
                        </td>
                        <td>30 April, 2024</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/users/avatar-2.jpg"
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />
                            <div>
                              <h5 className="fs-14 m-0 fw-normal">
                                Sean Kemper
                              </h5>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-soft-warning">
                            In-progress
                          </span>
                        </td>
                        <td className="text-danger">
                          <i className="bx bxs-circle me-1"></i>High
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-secondary me-1"
                          >
                            <i className="bx bx-edit fs-16"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-danger"
                          >
                            <i className="bx bx-trash fs-16"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="form-check form-todo ps-4">
                              <input
                                type="checkbox"
                                className="form-check-input rounded-circle mt-0 fs-18"
                                defaultChecked
                                id="customCheck2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck2"
                              >
                                Conduct user testing to identify potential bugs
                              </label>
                            </div>
                          </div>
                        </td>
                        <td>
                          14 May, 2024 <small>10:51 AM</small>
                        </td>
                        <td>25 Aug, 2024</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/users/avatar-3.jpg"
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />
                            <div>
                              <h5 className="fs-14 m-0 fw-normal">
                                Victoria Sullivan
                              </h5>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-soft-primary">
                            Pending
                          </span>
                        </td>
                        <td className="text-success">
                          <i className="bx bxs-circle me-1"></i>Low
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-secondary me-1"
                          >
                            <i className="bx bx-edit fs-16"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-danger"
                          >
                            <i className="bx bx-trash fs-16"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="form-check form-todo ps-4">
                              <input
                                type="checkbox"
                                className="form-check-input rounded-circle mt-0 fs-18"
                                id="customCheck3"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck3"
                              >
                                Gather feedback from stakeholders regarding any
                                issues
                              </label>
                            </div>
                          </div>
                        </td>
                        <td>
                          12 April, 2024 <small>12:09 PM</small>
                        </td>
                        <td>28 April, 2024</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/users/avatar-4.jpg"
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />
                            <div>
                              <h5 className="fs-14 m-0 fw-normal">
                                Liam Martinez
                              </h5>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-soft-warning">
                            In-progress
                          </span>
                        </td>
                        <td className="text-danger">
                          <i className="bx bxs-circle me-1"></i>High
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-secondary me-1"
                          >
                            <i className="bx bx-edit fs-16"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-danger"
                          >
                            <i className="bx bx-trash fs-16"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="form-check form-todo ps-4">
                              <input
                                type="checkbox"
                                className="form-check-input rounded-circle mt-0 fs-18"
                                id="customCheck4"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck4"
                              >
                                Prioritize bugs based on severity and impact
                              </label>
                            </div>
                          </div>
                        </td>
                        <td>
                          10 April, 2024 <small>10:09 PM</small>
                        </td>
                        <td>15 April, 2024</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/users/avatar-5.jpg"
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />
                            <div>
                              <h5 className="fs-14 m-0 fw-normal">
                                Emma Johnson
                              </h5>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-soft-success">
                            Completed
                          </span>
                        </td>
                        <td className="text-warning">
                          <i className="bx bxs-circle me-1"></i>Medium
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-secondary me-1"
                          >
                            <i className="bx bx-edit fs-16"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-danger"
                          >
                            <i className="bx bx-trash fs-16"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="form-check form-todo ps-4">
                              <input
                                type="checkbox"
                                className="form-check-input rounded-circle mt-0 fs-18"
                                id="customCheck5"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck5"
                              >
                                Investigate and analyze the root cause of each
                                bug
                              </label>
                            </div>
                          </div>
                        </td>
                        <td>
                          22 May, 2024 <small>03:41 PM</small>
                        </td>
                        <td>05 July, 2024</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/users/avatar-1.jpg"
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />
                            <div>
                              <h5 className="fs-14 m-0 fw-normal">
                                Olivia Thompson
                              </h5>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-soft-primary">
                            Pending
                          </span>
                        </td>
                        <td className="text-success">
                          <i className="bx bxs-circle me-1"></i>Low
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-secondary me-1"
                          >
                            <i className="bx bx-edit fs-16"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-danger"
                          >
                            <i className="bx bx-trash fs-16"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="form-check form-todo ps-4">
                              <input
                                type="checkbox"
                                className="form-check-input rounded-circle mt-0 fs-18"
                                id="customCheck6"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck6"
                              >
                                Develop and implement fixes for the identified
                                bugs
                              </label>
                            </div>
                          </div>
                        </td>
                        <td>
                          18 May, 2024 <small>09:09 AM</small>
                        </td>
                        <td>30 April, 2024</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/users/avatar-6.jpg"
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />
                            <div>
                              <h5 className="fs-14 m-0 fw-normal">
                                Noah Garcia
                              </h5>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-soft-success">
                            Completed
                          </span>
                        </td>
                        <td className="text-success">
                          <i className="bx bxs-circle me-1"></i>Low
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-secondary me-1"
                          >
                            <i className="bx bx-edit fs-16"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-danger"
                          >
                            <i className="bx bx-trash fs-16"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="form-check form-todo ps-4">
                              <input
                                type="checkbox"
                                className="form-check-input rounded-circle mt-0 fs-18"
                                id="customCheck7"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck7"
                              >
                                Complete any recurring tasks
                              </label>
                            </div>
                          </div>
                        </td>
                        <td>
                          05 April, 2024 <small>08:50 AM</small>
                        </td>
                        <td>22 April, 2024</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/users/avatar-7.jpg"
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />
                            <div>
                              <h5 className="fs-14 m-0 fw-normal">
                                Sophia Davis
                              </h5>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-soft-info">New</span>
                        </td>
                        <td className="text-danger">
                          <i className="bx bxs-circle me-1"></i>High
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-secondary me-1"
                          >
                            <i className="bx bx-edit fs-16"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-danger"
                          >
                            <i className="bx bx-trash fs-16"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="form-check form-todo ps-4">
                              <input
                                type="checkbox"
                                className="form-check-input rounded-circle mt-0 fs-18"
                                id="customCheck8"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck8"
                              >
                                Check emails and respond
                              </label>
                            </div>
                          </div>
                        </td>
                        <td>
                          15 Jun, 2024 <small>11:09 PM</small>
                        </td>
                        <td>01 Aug, 2024</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/users/avatar-8.jpg"
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />
                            <div>
                              <h5 className="fs-14 m-0 fw-normal">
                                Isabella Lopez
                              </h5>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-soft-primary">
                            Pending
                          </span>
                        </td>
                        <td className="text-success">
                          <i className="bx bxs-circle me-1"></i>Low
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-secondary me-1"
                          >
                            <i className="bx bx-edit fs-16"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-danger"
                          >
                            <i className="bx bx-trash fs-16"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="form-check form-todo ps-4">
                              <input
                                type="checkbox"
                                className="form-check-input rounded-circle mt-0 fs-18"
                                defaultChecked
                                id="customCheck9"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck9"
                              >
                                Review schedule for the day
                              </label>
                            </div>
                          </div>
                        </td>
                        <td>
                          22 April, 2024 <small>05:09 PM</small>
                        </td>
                        <td>30 April, 2024</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/users/avatar-9.jpg"
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />
                            <div>
                              <h5 className="fs-14 m-0 fw-normal">
                                Ava Wilson
                              </h5>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-soft-warning">
                            In-progress
                          </span>
                        </td>
                        <td className="text-warning">
                          <i className="bx bxs-circle me-1"></i>Medium
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-secondary me-1"
                          >
                            <i className="bx bx-edit fs-16"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-danger"
                          >
                            <i className="bx bx-trash fs-16"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="form-check form-todo ps-4">
                              <input
                                type="checkbox"
                                className="form-check-input rounded-circle mt-0 fs-18"
                                id="customCheck10"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck10"
                              >
                                Daily stand-up meeting
                              </label>
                            </div>
                          </div>
                        </td>
                        <td>
                          23 April, 2024 <small>12:09 PM</small>
                        </td>
                        <td>30 April, 2024</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="assets/images/users/avatar-10.jpg"
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />
                            <div>
                              <h5 className="fs-14 m-0 fw-normal">
                                Oliver Lee
                              </h5>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-soft-warning">
                            In-progress
                          </span>
                        </td>
                        <td className="text-danger">
                          <i className="bx bxs-circle me-1"></i>High
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-secondary me-1"
                          >
                            <i className="bx bx-edit fs-16"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-soft-danger"
                          >
                            <i className="bx bx-trash fs-16"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    {/* <!-- end tbody --> */}
                  </table>
                  {/* <!-- end table --> */}
                </div>
                {/* <!-- table responsive --> */}
                <div className="align-items-center justify-content-between row g-0 text-center text-sm-start p-3 border-top">
                  <div className="col-sm">
                    <div className="text-muted">
                      Showing <span className="fw-semibold">10</span> of
                      <span className="fw-semibold">52</span> tasks
                    </div>
                  </div>
                  <div className="col-sm-auto mt-3 mt-sm-0">
                    <ul className="pagination pagination-rounded m-0">
                      <li className="page-item">
                        <Link to="#" className="page-link">
                          <i className="bx bx-left-arrow-alt"></i>
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link to="#" className="page-link">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="#" className="page-link">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="#" className="page-link">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link to="#" className="page-link">
                          <i className="bx bx-right-arrow-alt"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      <Footer />
    </div>
  );
};

export default Todo;
