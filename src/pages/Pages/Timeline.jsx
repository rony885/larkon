import React from "react";
import Footer from "../../components/Footer";

const Timeline = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12">
            <div className="timeline">
              <article className="timeline-time">
                <div className="time-show d-flex align-items-center justify-content-center mt-0">
                  <h5 className="mb-0 text-uppercase fs-14 fw-semibold">
                    Today
                  </h5>
                </div>
              </article>

              <article className="timeline-item timeline-item-left">
                <div className="timeline-desk">
                  <div className="timeline-box clearfix">
                    <span className="timeline-icon"></span>
                    <div className="overflow-hidden">
                      <div className="card d-inline-block">
                        <div className="card-body">
                          <h5 className="mt-0 fs-16">
                            Completed UX design project for our client
                            <span className="badge bg-secondary ms-1 align-items-center">
                              important
                            </span>
                          </h5>
                          <p className="text-muted mb-0">
                            Dolorum provident rerum aut hic quasi placeat iure
                            tempora laudantium ipsa ad debitis unde?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-desk">
                  <div className="timeline-box clearfix">
                    <span className="timeline-icon"></span>
                    <div className="overflow-hidden">
                      <div className="card d-inline-block">
                        <div className="card-body">
                          <h5 className="mt-0 fs-16">
                            Yes! We are celebrating our first admin release.
                          </h5>
                          <p className="text-muted mb-0">
                            Consectetur adipisicing elit. Iusto, optio, dolorum{" "}
                            <b>John deon</b> provident.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="timeline-item timeline-item-left">
                <div className="timeline-desk">
                  <div className="timeline-box clearfix">
                    <span className="timeline-icon"></span>
                    <div className="overflow-hidden">
                      <div className="card d-inline-block">
                        <div className="card-body">
                          <h5 className="mt-0 fs-16">
                            We released new version of our theme Larkon.
                          </h5>
                          <p className="text-muted mb-0">
                            3 new photo Uploaded on facebook fan page
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="timeline-time">
                <div className="time-show d-flex align-items-center mt-0">
                  <h5 className="mb-0 text-uppercase fs-14 fw-semibold">
                    Yesterday
                  </h5>
                </div>
              </article>

              <article className="timeline-item">
                <div className="timeline-desk">
                  <div className="timeline-box clearfix">
                    <span className="timeline-icon"></span>
                    <div className="overflow-hidden">
                      <div className="card d-inline-block">
                        <div className="card-body">
                          <h5 className="mt-0 fs-16">
                            We have archieved 25k sales in our themes
                          </h5>
                          <p className="text-muted mb-0">
                            Dolorum provident rerum aut hic quasi placeat iure
                            tempora laudantium ipsa ad debitis unde?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="timeline-item timeline-item-left">
                <div className="timeline-desk">
                  <div className="timeline-box clearfix">
                    <span className="timeline-icon"></span>
                    <div className="overflow-hidden">
                      <div className="card d-inline-block">
                        <div className="card-body">
                          <h5 className="mt-0 fs-16">
                            Yes! We are celebrating our first admin release.
                          </h5>
                          <p className="text-muted mb-0">
                            Outdoor visit at California State Route 85 with John
                            Boltana & Harry Piterson.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}

        <div className="row">
          <div className="col-12">
            <h5 className="card-title mb-3">Left Timeline</h5>
            <div className="d-flex flex-row fs-18 align-items-center mb-3">
              <h5 className="mb-0">Today</h5>
            </div>
            <ul className="list-unstyled left-timeline">
              <li className="left-timeline-list">
                <div className="card d-inline-block">
                  <div className="card-body">
                    <h5 className="mt-0 fs-16">
                      Completed UX design project for our client
                      <span className="badge bg-secondary ms-1 align-items-center">
                        important
                      </span>
                    </h5>
                    <p className="text-muted mb-0">
                      Dolorum provident rerum aut hic quasi placeat iure tempora
                      laudantium ipsa ad debitis unde?
                    </p>
                  </div>
                </div>
              </li>
              <li className="left-timeline-list">
                <div className="card d-inline-block">
                  <div className="card-body">
                    <h5 className="mt-0 fs-16">
                      Yes! We are celebrating our first admin release.
                    </h5>
                    <p className="text-muted mb-0">
                      Consectetur adipisicing elit. Iusto, optio, dolorum
                      <b>John deon</b> provident rerum aut hic quasi placeat
                      iure tempora laudantium
                    </p>
                  </div>
                </div>
              </li>
              <li className="left-timeline-list">
                <div className="card d-inline-block">
                  <div className="card-body">
                    <h5 className="mt-0 fs-16">
                      We released new version of our theme Larkon.
                    </h5>
                    <p className="text-muted mb-0">
                      3 new photo Uploaded on facebook fan page
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="d-flex flex-row fs-18 align-items-center mb-3">
              <h5 className="mb-0">Yesterday</h5>
            </div>
            <ul className="list-unstyled left-timeline">
              <li className="left-timeline-list">
                <div className="card d-inline-block">
                  <div className="card-body">
                    <h5 className="mt-0 fs-16">
                      We have archieved 25k sales in our themes
                    </h5>
                    <p className="text-muted mb-0">
                      Dolorum provident rerum aut hic quasi placeat iure tempora
                      laudantium ipsa ad debitis unde?
                    </p>
                  </div>
                </div>
              </li>
              <li className="left-timeline-list">
                <div className="card d-inline-block">
                  <div className="card-body">
                    <h5 className="mt-0 fs-16">
                      Yes! We are celebrating our first admin release.
                    </h5>
                    <p className="text-muted mb-0">
                      Outdoor visit at California State Route 85 with John
                      Boltana & Harry Piterson regarding to setup a new show
                      room.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="d-flex flex-row fs-18 align-items-center mb-3">
              <h5 className="mb-0">5 days ago</h5>
            </div>
            <ul className="list-unstyled left-timeline">
              <li className="left-timeline-list">
                <div className="card d-inline-block">
                  <div className="card-body">
                    <h5 className="mt-0 fs-16">
                      Join new team member Alex Smith
                    </h5>
                    <p className="text-muted mb-0">
                      Alex Smith is a Senior Software (Full Stack) engineer with
                      a deep passion for building usable, functional & pretty
                      web applications.
                    </p>
                  </div>
                </div>
              </li>
              <li className="left-timeline-list">
                <div className="card d-inline-block">
                  <div className="card-body">
                    <h5 className="mt-0 fs-16">
                      First release of Larkon admin dashboard template
                    </h5>
                    <p className="text-muted mb-0">
                      Outdoor visit at California State Route 85 with John
                      Boltana & Harry Piterson regarding to setup a new show
                      room.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- End Container Fluid --> */}

      <Footer />
    </div>
  );
};

export default Timeline;
