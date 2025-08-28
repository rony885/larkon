import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Widgets = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        {/* <!-- Start here.... --> */}
        <div className="row">
          <div className="col-md-3">
            <div className="card overflow-hidden">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-md bg-soft-primary rounded">
                      <iconify-icon
                        icon="solar:cart-5-bold-duotone"
                        className="avatar-title fs-32 text-primary"
                      ></iconify-icon>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                  <div className="col-6 text-end">
                    <p className="text-muted mb-0 text-truncate">
                      Total Orders
                    </p>
                    <h3 className="text-dark mt-1 mb-0">13, 647</h3>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row--> */}
              </div>
              {/* <!-- end card body --> */}
              <div className="card-footer py-2 bg-light bg-opacity-50">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="text-success">
                      <i className="bx bxs-up-arrow fs-12"></i> 2.3%
                    </span>
                    <span className="text-muted ms-1 fs-12">Last Week</span>
                  </div>
                  <Link to="#!" className="text-reset fw-semibold fs-12">
                    View More
                  </Link>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}

          <div className="col-md-3">
            <div className="card overflow-hidden">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-md bg-soft-primary rounded">
                      <i className="bx bx-award avatar-title fs-24 text-primary"></i>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                  <div className="col-6 text-end">
                    <p className="text-muted mb-0 text-truncate">New Leads</p>
                    <h3 className="text-dark mt-1 mb-0">9, 526</h3>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row--> */}
              </div>
              {/* <!-- end card body --> */}
              <div className="card-footer py-2 bg-light bg-opacity-50">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="text-success">
                      <i className="bx bxs-up-arrow fs-12"></i> 8.1%
                    </span>
                    <span className="text-muted ms-1 fs-12">Last Month</span>
                  </div>
                  <Link to="#!" className="text-reset fw-semibold fs-12">
                    View More
                  </Link>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}

          <div className="col-md-3">
            <div className="card overflow-hidden">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-md bg-soft-primary rounded">
                      <i className="bx bxs-backpack avatar-title fs-24 text-primary"></i>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                  <div className="col-6 text-end">
                    <p className="text-muted mb-0 text-truncate">Deals</p>
                    <h3 className="text-dark mt-1 mb-0">976</h3>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row--> */}
              </div>
              {/* <!-- end card body --> */}
              <div className="card-footer py-2 bg-light bg-opacity-50">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="text-danger">
                      <i className="bx bxs-down-arrow fs-12"></i> 0.3%
                    </span>
                    <span className="text-muted ms-1 fs-12">Last Month</span>
                  </div>
                  <Link to="#!" className="text-reset fw-semibold fs-12">
                    View More
                  </Link>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}

          <div className="col-md-3">
            <div className="card overflow-hidden">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-md bg-soft-primary rounded">
                      <i className="bx bx-dollar-circle avatar-title text-primary fs-24"></i>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                  <div className="col-6 text-end">
                    <p className="text-muted mb-0 text-truncate">
                      Booked Revenue
                    </p>
                    <h3 className="text-dark mt-1 mb-0">$123.6k</h3>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row--> */}
              </div>
              {/* <!-- end card body --> */}
              <div className="card-footer py-2 bg-light bg-opacity-50">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="text-danger">
                      <i className="bx bxs-down-arrow fs-12"></i> 10.6%
                    </span>
                    <span className="text-muted ms-1 fs-12">Last Month</span>
                  </div>
                  <Link to="#!" className="text-reset fw-semibold fs-12">
                    View More
                  </Link>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body overflow-hidden position-relative">
                <iconify-icon
                  icon="iconamoon:3d-duotone"
                  className="fs-36 text-info"
                ></iconify-icon>
                <h3 className="mb-0 fw-bold mt-3 mb-1">$59.6k</h3>
                <p className="text-muted">Total Income</p>
                <span className="badge fs-12 badge-soft-success">
                  <i className="ti ti-arrow-badge-up"></i> 8.72%
                </span>
                <i className="bx bx-doughnut-chart widget-icon"></i>
              </div>
              {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}

          <div className="col">
            <div className="card">
              <div className="card-body overflow-hidden position-relative">
                <iconify-icon
                  icon="iconamoon:category-duotone"
                  className="fs-36 text-success"
                ></iconify-icon>
                <h3 className="mb-0 fw-bold mt-3 mb-1">$24.03k</h3>
                <p className="text-muted">Total Expenses</p>
                <span className="badge fs-12 badge-soft-danger">
                  <i className="ti ti-arrow-badge-down"></i> 3.28%
                </span>
                <i className="bx bx-bar-chart-alt-2 widget-icon"></i>
              </div>
              {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}

          <div className="col">
            <div className="card">
              <div className="card-body overflow-hidden position-relative">
                <iconify-icon
                  icon="iconamoon:store-duotone"
                  className="fs-36 text-purple"
                ></iconify-icon>
                <h3 className="mb-0 fw-bold mt-3 mb-1">$48.7k</h3>
                <p className="text-muted">Investments</p>
                <span className="badge fs-12 badge-soft-danger">
                  <i className="ti ti-arrow-badge-down"></i> 5.69%
                </span>
                <i className="bx bx-building-house widget-icon"></i>
              </div>
              {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}

          <div className="col">
            <div className="card">
              <div className="card-body overflow-hidden position-relative">
                <iconify-icon
                  icon="iconamoon:gift-duotone"
                  className="fs-36 text-orange"
                ></iconify-icon>
                <h3 className="mb-0 fw-bold mt-3 mb-1">$11.3k</h3>
                <p className="text-muted">Savings</p>
                <span className="badge fs-12 badge-soft-success">
                  <i className="ti ti-arrow-badge-up"></i> 10.58%
                </span>
                <i className="bx bx-bowl-hot widget-icon"></i>
              </div>
              {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}

          <div className="col">
            <div className="card">
              <div className="card-body overflow-hidden position-relative">
                <iconify-icon
                  icon="iconamoon:certificate-badge-duotone"
                  className="fs-36 text-warning"
                ></iconify-icon>
                <h3 className="mb-0 fw-bold mt-3 mb-1">$5.5k</h3>
                <p className="text-muted">Profits</p>
                <span className="badge fs-12 badge-soft-success">
                  <i className="ti ti-arrow-badge-up"></i> 2.25%
                </span>
                <i className="bx bx-cricket-ball widget-icon"></i>
              </div>
              {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row--> */}

        <div className="row">
          <div className="col-xl-6">
            <div className="card">
              <div className="card-body p-0">
                <div className="pt-3 px-3">
                  <div className="float-end">
                    <Link to="#" className="text-primary">
                      Export
                      <i className="bx bx-export ms-1"></i>
                    </Link>
                  </div>
                  <h5 className="card-title mb-3">Recent Project Summary</h5>
                </div>
                <div
                  className="mb-3"
                  data-simplebar
                  style={{ maxHeight: "324px" }}
                >
                  <div className="table-responsive table-centered table-nowrap px-3">
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Project</th>
                          <th>Client</th>
                          <th>Team</th>
                          <th>Deadline</th>
                          <th>Work Progress</th>
                        </tr>
                      </thead>
                      {/* <!-- end thead --> */}
                      <tbody>
                        <tr>
                          <td>Zelogy</td>
                          <td>Daniel Olsen</td>
                          <td className="avatar-group">
                            <Link to="#" className="avatar-group-item">
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                alt="avatar-2"
                                className="img-fluid avatar-xs rounded-circle avatar-border"
                              />
                            </Link>
                            <Link to="#" className="avatar-group-item">
                              <img
                                src="assets/images/users/avatar-3.jpg"
                                alt="avatar-3"
                                className="img-fluid avatar-xs rounded-circle avatar-border"
                              />
                            </Link>
                            <Link to="#" className="avatar-group-item">
                              <img
                                src="assets/images/users/avatar-4.jpg"
                                alt="avatar-4"
                                className="img-fluid avatar-xs rounded-circle avatar-border"
                              />
                            </Link>
                          </td>
                          <td>12 April 2024</td>
                          <td>
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "33%" }}
                                aria-valuenow="33"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>Shiaz</td>
                          <td>Jack Roldan</td>
                          <td className="avatar-group">
                            <Link to="#" className="avatar-group-item">
                              <img
                                src="assets/images/users/avatar-1.jpg"
                                alt="avatar-1"
                                className="img-fluid avatar-xs rounded-circle avatar-border"
                              />
                            </Link>
                            <Link to="#" className="avatar-group-item">
                              <img
                                src="assets/images/users/avatar-5.jpg"
                                alt="avatar-5"
                                className="img-fluid avatar-xs rounded-circle avatar-border"
                              />
                            </Link>
                          </td>
                          <td>10 April 2024</td>
                          <td>
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "74%" }}
                                aria-valuenow="74"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Holderick</td>
                          <td>Betty Cox</td>
                          <td className="avatar-group">
                            <Link to="#" className="avatar-group-item">
                              <img
                                src="assets/images/users/avatar-5.jpg"
                                alt="avatar-5"
                                className="img-fluid avatar-xs rounded-circle avatar-border"
                              />
                            </Link>
                            <Link to="#" className="avatar-group-item">
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                alt="avatar-2"
                                className="img-fluid avatar-xs rounded-circle avatar-border"
                              />
                            </Link>
                            <Link to="#" className="avatar-group-item">
                              <img
                                src="assets/images/users/avatar-3.jpg"
                                alt="avatar-3"
                                className="img-fluid avatar-xs rounded-circle avatar-border"
                              />
                            </Link>
                          </td>
                          <td>31 March 2024</td>
                          <td>
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Feyvux</td>
                          <td>Carlos Johnson</td>
                          <td className="avatar-group">
                            <Link to="#" className="avatar-group-item">
                              <img
                                src="assets/images/users/avatar-3.jpg"
                                alt="avatar-3"
                                className="img-fluid avatar-xs rounded-circle avatar-border"
                              />
                            </Link>
                            <Link to="#" className="avatar-group-item">
                              <img
                                src="assets/images/users/avatar-7.jpg"
                                alt="avatar-7"
                                className="img-fluid avatar-xs rounded-circle avatar-border"
                              />
                            </Link>
                            <Link to="#" className="avatar-group-item">
                              <img
                                src="assets/images/users/avatar-6.jpg"
                                alt="avatar-6"
                                className="img-fluid avatar-xs rounded-circle avatar-border"
                              />
                            </Link>
                          </td>
                          <td>25 March 2024</td>
                          <td>
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "92%" }}
                                aria-valuenow="92"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Xavlox</td>
                          <td>Lorraine Cox</td>
                          <td className="avatar-group">
                            <Link to="#" className="avatar-group-item">
                              <img
                                src="assets/images/users/avatar-7.jpg"
                                alt="avatar-7"
                                className="img-fluid avatar-xs rounded-circle avatar-border"
                              />
                            </Link>
                          </td>
                          <td>22 March 2024</td>
                          <td>
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "48%" }}
                                aria-valuenow="48"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Mozacav</td>
                          <td>Delores Young</td>
                          <td className="avatar-group">
                            <Link to="#" className="avatar-group-item">
                              <img
                                src="assets/images/users/avatar-3.jpg"
                                alt="avatar-3"
                                className="img-fluid avatar-xs rounded-circle avatar-border"
                              />
                            </Link>
                            <Link to="#" className="avatar-group-item">
                              <img
                                src="assets/images/users/avatar-4.jpg"
                                alt="avatar-4"
                                className="img-fluid avatar-xs rounded-circle avatar-border"
                              />
                            </Link>
                            <Link to="#" className="avatar-group-item">
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                alt="avatar-2"
                                className="img-fluid avatar-xs rounded-circle avatar-border"
                              />
                            </Link>
                          </td>
                          <td>15 March 2024</td>
                          <td>
                            <div className="progress progress-sm">
                              <div
                                className="progress-bar bg-blue"
                                role="progressbar"
                                style={{ width: "21%" }}
                                aria-valuenow="21"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      {/* <!-- end tbody --> */}
                    </table>
                    {/* <!-- end table --> */}
                  </div>
                  {/* <!-- end table responsive --> */}
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-body">
                <div className="dropdown float-end">
                  <Link
                    to="#"
                    className="dropdown-toggle arrow-none"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bx bx-dots-vertical-rounded fs-18 text-dark"></i>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link to="#" className="dropdown-item">
                      <i className="bx bx-list-ul me-2"></i>To Do
                    </Link>
                    <Link to="#" className="dropdown-item">
                      <i className="bx bx-line-chart me-2"></i>In Progress
                    </Link>
                    <Link to="#" className="dropdown-item">
                      <i className="bx bx-check-square me-2"></i>Completed
                    </Link>
                  </div>
                </div>
                <h5 className="card-title mb-3">Today's Schedules</h5>
                <div className="row align-items-center">
                  <div className="col-3 col-sm-2">
                    <p>09:00</p>
                  </div>
                  <div className="col-9 col-sm-10">
                    <div className="alert alert-primary px-2" role="alert">
                      <p className="mb-0">Setup Github Repository</p>
                      <p className="mb-0">09:00 - 10:00</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-3 col-sm-2">
                    <p>10:00</p>
                  </div>
                  <div className="col-9 col-sm-10">
                    <div className="alert alert-success px-2" role="alert">
                      <p className="mb-0">Design Review - Larkon Admin</p>
                      <p className="mb-0">10:00 - 10:30</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-3 col-sm-2">
                    <p>11:00</p>
                  </div>
                  <div className="col-9 col-sm-10">
                    <div className="alert alert-info px-2" role="alert">
                      <p className="mb-0">Meeting with BD Team</p>
                      <p className="mb-0">11:00 - 12:30</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-3 col-sm-2">
                    <p className="mb-0">01:00</p>
                  </div>
                  <div className="col-9 col-sm-10">
                    <div className="alert alert-warning px-2 mb-0" role="alert">
                      <p className="mb-0">Meeting with Design Studio</p>
                      <p className="mb-0">01:00 - 02:00</p>
                    </div>
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

        <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-md bg-primary rounded">
                      <i className="bx bx-layer avatar-title fs-24 text-white"></i>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                  <div className="col-6 text-end">
                    <p className="text-muted mb-0 text-truncate">
                      Campaign Sent
                    </p>
                    <h3 className="text-dark mt-1 mb-0">13, 647</h3>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row--> */}
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-md bg-success rounded">
                      <i className="bx bx-award avatar-title fs-24 text-white"></i>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                  <div className="col-6 text-end">
                    <p className="text-muted mb-0 text-truncate">New Leads</p>
                    <h3 className="text-dark mt-1 mb-0">9, 526</h3>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row--> */}
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-md bg-danger rounded">
                      <i className="bx bxs-backpack avatar-title fs-24 text-white"></i>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                  <div className="col-6 text-end">
                    <p className="text-muted mb-0 text-truncate">Deals</p>
                    <h3 className="text-dark mt-1 mb-0">976</h3>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row--> */}
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-md text-bg-warning rounded">
                      <i className="bx bx-dollar-circle avatar-title fs-24"></i>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                  <div className="col-6 text-end">
                    <p className="text-muted mb-0 text-truncate">
                      Booked Revenue
                    </p>
                    <h3 className="text-dark mt-1 mb-0">$123</h3>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row--> */}
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-4">
                    <div className="p-3">
                      <h5 className="card-title">Conversions</h5>
                      <div
                        id="conversions"
                        className="apex-charts mb-2 mt-n2"
                      ></div>
                      <div className="row text-center">
                        <div className="col-6">
                          <p className="text-muted mb-2">This Week</p>
                          <h3 className="text-dark mb-3">23.5k</h3>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="col-6">
                          <p className="text-muted mb-2">Last Week</p>
                          <h3 className="text-dark mb-3">41.05k</h3>
                        </div>
                        {/* <!-- end col --> */}
                      </div>
                      {/* <!-- end row --> */}
                      <div className="text-center">
                        <button
                          type="button"
                          className="btn btn-light shadow-none w-100"
                        >
                          View Details
                        </button>
                      </div>
                      {/* <!-- end row --> */}
                    </div>
                  </div>
                  {/* <!-- end left chart card --> */}
                  <div className="col-lg-8 border-start border-5">
                    <div className="p-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <h4 className="card-title">Performance</h4>
                        <div>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-light"
                          >
                            ALL
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-light"
                          >
                            1M
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-light"
                          >
                            6M
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-light active"
                          >
                            1Y
                          </button>
                        </div>
                      </div>
                      {/* <!-- end card-title--> */}

                      <div
                        className="alert alert-info mt-3 text text-truncate mb-0"
                        role="alert"
                      >
                        We regret to inform you that our server is currently
                        experiencing technical difficulties.
                      </div>

                      <div dir="ltr">
                        <div
                          id="dash-performance-chart"
                          className="apex-charts"
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end right chart card --> */}
                </div>
                {/* <!-- end chart card --> */}
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col--> */}
        </div>
        {/* <!-- end row--> */}

        <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-md bg-soft-primary rounded">
                      <i className="bx bx-layer avatar-title fs-24 text-primary"></i>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                  <div className="col-6 text-end">
                    <p className="text-muted mb-0 text-truncate">
                      Campaign Sent
                    </p>
                    <h3 className="text-dark mt-1 mb-0">13, 647</h3>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row--> */}
              </div>
              {/* <!-- end card body --> */}
              <div className="card-footer py-2 bg-light bg-opacity-50">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="text-success">
                      <i className="bx bxs-up-arrow fs-12"></i> 2.3%
                    </span>
                    <span className="text-muted ms-1 fs-12">Last Month</span>
                  </div>
                  <Link to="#!" className="text-reset fw-semibold fs-12">
                    View More
                  </Link>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-md bg-soft-success rounded">
                      <i className="bx bx-award avatar-title fs-24 text-success"></i>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                  <div className="col-6 text-end">
                    <p className="text-muted mb-0 text-truncate">New Leads</p>
                    <h3 className="text-dark mt-1 mb-0">9, 526</h3>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row--> */}
              </div>
              {/* <!-- end card body --> */}
              <div className="card-footer py-2 bg-light bg-opacity-50">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="text-success">
                      <i className="bx bxs-up-arrow fs-12"></i> 8.1%
                    </span>
                    <span className="text-muted ms-1 fs-12">Last Month</span>
                  </div>
                  <Link to="#!" className="text-reset fw-semibold fs-12">
                    View More
                  </Link>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-md bg-soft-danger rounded">
                      <i className="bx bxs-backpack avatar-title fs-24 text-danger"></i>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                  <div className="col-6 text-end">
                    <p className="text-muted mb-0 text-truncate">Deals</p>
                    <h3 className="text-dark mt-1 mb-0">976</h3>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row--> */}
              </div>
              {/* <!-- end card body --> */}
              <div className="card-footer py-2 bg-light bg-opacity-50">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="text-danger">
                      <i className="bx bxs-down-arrow fs-12"></i> 0.3%
                    </span>
                    <span className="text-muted ms-1 fs-12">Last Month</span>
                  </div>
                  <Link to="#!" className="text-reset fw-semibold fs-12">
                    View More
                  </Link>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
          <div className="col-md-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <div className="avatar-md bg-soft-warning rounded">
                      <i className="bx bx-dollar-circle avatar-title text-warning fs-24"></i>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                  <div className="col-6 text-end">
                    <p className="text-muted mb-0 text-truncate">
                      Booked Revenue
                    </p>
                    <h3 className="text-dark mt-1 mb-0">$123.6k</h3>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row--> */}
              </div>
              {/* <!-- end card body --> */}
              <div className="card-footer py-2 bg-light bg-opacity-50">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <span className="text-danger">
                      <i className="bx bxs-down-arrow fs-12"></i> 10.6%
                    </span>
                    <span className="text-muted ms-1 fs-12">Last Month</span>
                  </div>
                  <Link to="#!" className="text-reset fw-semibold fs-12">
                    View More
                  </Link>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}

        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title">My Tasks</h4>
                <div>
                  <Link to="#!" className="btn btn-sm btn-primary">
                    <i className="bx bx-plus me-1"></i>Create Task
                  </Link>
                </div>
              </div>
              {/* <!-- end card-header--> */}
              <div className="card-body p-0 pb-3">
                <div
                  className="p-3"
                  data-simplebar
                  style={{ maxHeight: "386px" }}
                >
                  <div className="form-check form-todo ps-4">
                    <input
                      type="checkbox"
                      className="form-check-input rounded-circle mt-0 fs-18"
                      id="customCheck1"
                    />
                    <label className="form-check-label" htmlFor="customCheck1">
                      Review system logs for any reported errors
                    </label>
                  </div>
                  <div className="form-check form-todo py-1 my-2 ps-4">
                    <input
                      type="checkbox"
                      className="form-check-input rounded-circle mt-0 fs-18"
                      defaultChecked
                      id="customCheck2"
                    />
                    <label className="form-check-label" htmlFor="customCheck2">
                      Conduct user testing to identify potential bugs
                    </label>
                  </div>
                  <div className="form-check form-todo py-1 my-2 ps-4">
                    <input
                      type="checkbox"
                      className="form-check-input rounded-circle mt-0 fs-18"
                      id="customCheck3"
                    />
                    <label className="form-check-label" htmlFor="customCheck3">
                      Gather feedback from stakeholders
                    </label>
                  </div>
                  <div className="form-check form-todo py-1 my-2 ps-4">
                    <input
                      type="checkbox"
                      className="form-check-input rounded-circle mt-0 fs-18"
                      id="customCheck4"
                    />
                    <label className="form-check-label" htmlFor="customCheck4">
                      Prioritize bugs based on severity and impact
                    </label>
                  </div>
                  <div className="form-check form-todo py-1 my-2 ps-4">
                    <input
                      type="checkbox"
                      className="form-check-input rounded-circle mt-0 fs-18"
                      id="customCheck5"
                    />
                    <label className="form-check-label" htmlFor="customCheck5">
                      Investigate and analyze the root cause of each bug
                    </label>
                  </div>
                  <div className="form-check form-todo py-1 my-2 ps-4">
                    <input
                      type="checkbox"
                      className="form-check-input rounded-circle mt-0 fs-18"
                      id="customCheck6"
                    />
                    <label className="form-check-label" htmlFor="customCheck6">
                      Develop and implement fixes for the identified bugs
                    </label>
                  </div>
                  <div className="form-check form-todo py-1 my-2 ps-4">
                    <input
                      type="checkbox"
                      className="form-check-input rounded-circle mt-0 fs-18"
                      id="customCheck7"
                    />
                    <label className="form-check-label" htmlFor="customCheck7">
                      Complete any recurring tasks
                    </label>
                  </div>
                  <div className="form-check form-todo py-1 my-2 ps-4">
                    <input
                      type="checkbox"
                      className="form-check-input rounded-circle mt-0 fs-18"
                      id="customCheck8"
                    />
                    <label className="form-check-label" htmlFor="customCheck8">
                      Check emails and respond
                    </label>
                  </div>
                  <div className="form-check form-todo py-1 my-2 ps-4">
                    <input
                      type="checkbox"
                      className="form-check-input rounded-circle mt-0 fs-18"
                      defaultChecked
                      id="customCheck9"
                    />
                    <label className="form-check-label" htmlFor="customCheck9">
                      Review schedule for the day
                    </label>
                  </div>
                  <div className="form-check form-todo pt-1 mt-2 ps-4">
                    <input
                      type="checkbox"
                      className="form-check-input rounded-circle mt-0 fs-18"
                      id="customCheck10"
                    />
                    <label className="form-check-label" htmlFor="customCheck10">
                      Daily stand-up meeting
                    </label>
                  </div>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}

          <div className="col-xl-4">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title">Friends Request (10)</h4>
              </div>
              {/* <!-- end card-header--> */}
              <div className="card-body p-0 pb-3">
                <div
                  className="p-3"
                  data-simplebar
                  style={{ maxHeight: "400px" }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src="assets/images/users/avatar-10.jpg"
                        className="img-fluid avatar-sm rounded me-2"
                        alt="avatar-5"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fs-14">
                        <Link to="#!">Victoria P. Miller</Link>
                      </h5>
                      <p className="mb-0">no mutual friends</p>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none text-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded fs-18"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#!" className="dropdown-item">
                          <i className="bx bxs-user-detail me-1"></i>See Profile
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bxl-telegram me-1"></i>Message to
                          Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-user-x me-1"></i>Unfriend Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-block me-1"></i>Block Victoria
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src="assets/images/users/avatar-9.jpg"
                        className="img-fluid avatar-sm rounded me-2"
                        alt="avatar-6"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fs-14">
                        <Link to="#!">Dallas C. Payne</Link>
                      </h5>
                      <p className="mb-0">856 mutual friends</p>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none text-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded fs-18"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#!" className="dropdown-item">
                          <i className="bx bxs-user-detail me-1"></i>See Profile
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bxl-telegram me-1"></i>Message to
                          Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-user-x me-1"></i>Unfriend Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-block me-1"></i>Block Victoria
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src="assets/images/users/avatar-8.jpg"
                        className="img-fluid avatar-sm rounded me-2"
                        alt="avatar-7"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fs-14">
                        <Link to="#!">Florence A. Lopez</Link>
                      </h5>
                      <p className="mb-0">52 mutual friends</p>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none text-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded fs-18"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#!" className="dropdown-item">
                          <i className="bx bxs-user-detail me-1"></i>See Profile
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bxl-telegram me-1"></i>Message to
                          Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-user-x me-1"></i>Unfriend Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-block me-1"></i>Block Victoria
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src="assets/images/users/avatar-7.jpg"
                        className="img-fluid avatar-sm rounded me-2"
                        alt="avatar-8"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fs-14">
                        <Link to="#!">Gail A. Nix</Link>
                      </h5>
                      <p className="mb-0">12 mutual friends</p>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none text-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded fs-18"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#!" className="dropdown-item">
                          <i className="bx bxs-user-detail me-1"></i>See Profile
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bxl-telegram me-1"></i>Message to
                          Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-user-x me-1"></i>Unfriend Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-block me-1"></i>Block Victoria
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src="assets/images/users/avatar-6.jpg"
                        className="img-fluid avatar-sm rounded me-2"
                        alt="avatar-9"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fs-14">
                        <Link to="#!">Lynne J. Petty</Link>
                      </h5>
                      <p className="mb-0">no mutual friends</p>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none text-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded fs-18"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#!" className="dropdown-item">
                          <i className="bx bxs-user-detail me-1"></i>See Profile
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bxl-telegram me-1"></i>Message to
                          Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-user-x me-1"></i>Unfriend Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-block me-1"></i>Block Victoria
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src="assets/images/users/avatar-5.jpg"
                        className="img-fluid avatar-sm rounded me-2"
                        alt="avatar-5"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fs-14">
                        <Link to="#!">Victoria P. Miller</Link>
                      </h5>
                      <p className="mb-0">no mutual friends</p>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none text-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded fs-18"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#!" className="dropdown-item">
                          <i className="bx bxs-user-detail me-1"></i>See Profile
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bxl-telegram me-1"></i>Message to
                          Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-user-x me-1"></i>Unfriend Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-block me-1"></i>Block Victoria
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src="assets/images/users/avatar-4.jpg"
                        className="img-fluid avatar-sm rounded me-2"
                        alt="avatar-6"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fs-14">
                        <Link to="#!">Dallas C. Payne</Link>
                      </h5>
                      <p className="mb-0">856 mutual friends</p>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none text-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded fs-18"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#!" className="dropdown-item">
                          <i className="bx bxs-user-detail me-1"></i>See Profile
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bxl-telegram me-1"></i>Message to
                          Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-user-x me-1"></i>Unfriend Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-block me-1"></i>Block Victoria
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src="assets/images/users/avatar-3.jpg"
                        className="img-fluid avatar-sm rounded me-2"
                        alt="avatar-7"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fs-14">
                        <Link to="#!">Florence A. Lopez</Link>
                      </h5>
                      <p className="mb-0">52 mutual friends</p>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none text-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded fs-18"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#!" className="dropdown-item">
                          <i className="bx bxs-user-detail me-1"></i>See Profile
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bxl-telegram me-1"></i>Message to
                          Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-user-x me-1"></i>Unfriend Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-block me-1"></i>Block Victoria
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <img
                        src="assets/images/users/avatar-2.jpg"
                        className="img-fluid avatar-sm rounded me-2"
                        alt="avatar-8"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fs-14">
                        <Link to="#!">Gail A. Nix</Link>
                      </h5>
                      <p className="mb-0">12 mutual friends</p>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none text-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded fs-18"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#!" className="dropdown-item">
                          <i className="bx bxs-user-detail me-1"></i>See Profile
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bxl-telegram me-1"></i>Message to
                          Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-user-x me-1"></i>Unfriend Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-block me-1"></i>Block Victoria
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img
                        src="assets/images/users/avatar-1.jpg"
                        className="img-fluid avatar-sm rounded me-2"
                        alt="avatar-9"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fs-14">
                        <Link to="#!">Lynne J. Petty</Link>
                      </h5>
                      <p className="mb-0">no mutual friends</p>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle arrow-none text-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded fs-18"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#!" className="dropdown-item">
                          <i className="bx bxs-user-detail me-1"></i>See Profile
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bxl-telegram me-1"></i>Message to
                          Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-user-x me-1"></i>Unfriend Victoria
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="bx bx-block me-1"></i>Block Victoria
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}

          <div className="col-xl-4">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title">Recent Transactions</h4>
                <div>
                  <Link to="#!" className="btn btn-sm btn-primary">
                    <i className="bx bx-plus me-1"></i>Add
                  </Link>
                </div>
              </div>
              {/* <!-- end card-header--> */}
              <div className="card-body p-0">
                <div
                  className="px-3"
                  data-simplebar
                  style={{ maxHeight: "406px" }}
                >
                  <table className="table table-hover mb-0 table-centered">
                    <tbody>
                      <tr>
                        <td>24 April, 2024</td>
                        <td>$120.55</td>
                        <td>
                          <span className="badge bg-success">Cr</span>
                        </td>
                        <td>Commisions</td>
                      </tr>
                      <tr>
                        <td>24 April, 2024</td>
                        <td>$9.68</td>
                        <td>
                          <span className="badge bg-success">Cr</span>
                        </td>
                        <td>Affiliates</td>
                      </tr>
                      <tr>
                        <td>20 April, 2024</td>
                        <td>$105.22</td>
                        <td>
                          <span className="badge bg-danger">Dr</span>
                        </td>
                        <td>Grocery</td>
                      </tr>
                      <tr>
                        <td>18 April, 2024</td>
                        <td>$80.59</td>
                        <td>
                          <span className="badge bg-success">Cr</span>
                        </td>
                        <td>Refunds</td>
                      </tr>
                      <tr>
                        <td>18 April, 2024</td>
                        <td>$750.95</td>
                        <td>
                          <span className="badge bg-danger">Dr</span>
                        </td>
                        <td>Bill Payments</td>
                      </tr>
                      <tr>
                        <td>17 April, 2024</td>
                        <td>$455.62</td>
                        <td>
                          <span className="badge bg-danger">Dr</span>
                        </td>
                        <td>Electricity</td>
                      </tr>
                      <tr>
                        <td>17 April, 2024</td>
                        <td>$102.77</td>
                        <td>
                          <span className="badge bg-success">Cr</span>
                        </td>
                        <td>Interest</td>
                      </tr>
                      <tr>
                        <td>16 April, 2024</td>
                        <td>$79.49</td>
                        <td>
                          <span className="badge bg-success">Cr</span>
                        </td>
                        <td>Refunds</td>
                      </tr>
                      <tr>
                        <td>05 April, 2024</td>
                        <td>$980.00</td>
                        <td>
                          <span className="badge bg-danger">Dr</span>
                        </td>
                        <td>Shopping</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}
        </div>
        {/* <!-- end row--> */}
      </div>
      <Footer />
    </div>
  );
};

export default Widgets;
