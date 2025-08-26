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

// import React, { useRef, useState, useEffect } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// const Calendar = () => {
//   const calendarRef = useRef(null);
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     let draggableEl = document.getElementById("external-events");
//     new Draggable(draggableEl, {
//       itemSelector: ".external-event",
//       eventData: function (eventEl) {
//         return {
//           title: eventEl.innerText.trim(),
//           className: eventEl.getAttribute("data-classname"),
//         };
//       },
//     });
//   }, []);

//   const handleEventReceive = (info) => {
//     const newEvent = {
//       title: info.event.title,
//       start: info.event.start,
//       className: info.event.classNames[0],
//     };
//     setEvents((prev) => [...prev, newEvent]);
//   };

//   return (
//     <div className="page-content">
//       <div className="container-xxl">
//         <div className="row">
//           <div className="col-12">
//             <div className="card">
//               <div className="card-body">
//                 <div className="row">
//                   {/* Left Sidebar */}
//                   <div className="col-xl-3">
//                     <div className="d-grid mb-3">
//                       <button type="button" className="btn btn-primary">
//                         <i className="bx bx-plus fs-18 me-2"></i> Add New
//                         Schedule
//                       </button>
//                     </div>
//                     <p className="text-muted">
//                       Drag and drop your event or click in the calendar
//                     </p>
//                     <div id="external-events">
//                       <div
//                         className="external-event bg-soft-primary text-primary p-2 mb-2 rounded"
//                         data-classname="bg-primary"
//                       >
//                         Team Building Retreat Meeting
//                       </div>
//                       <div
//                         className="external-event bg-soft-info text-info p-2 mb-2 rounded"
//                         data-classname="bg-info"
//                       >
//                         Product Launch Strategy Meeting
//                       </div>
//                       <div
//                         className="external-event bg-soft-success text-success p-2 mb-2 rounded"
//                         data-classname="bg-success"
//                       >
//                         Monthly Sales Review
//                       </div>
//                       <div
//                         className="external-event bg-soft-danger text-danger p-2 mb-2 rounded"
//                         data-classname="bg-danger"
//                       >
//                         Team Lunch Celebration
//                       </div>
//                       <div
//                         className="external-event bg-soft-warning text-warning p-2 mb-2 rounded"
//                         data-classname="bg-warning"
//                       >
//                         Marketing Campaign Kickoff
//                       </div>
//                     </div>
//                   </div>

//                   {/* Calendar */}
//                   <div className="col-xl-9">
//                     <div className="mt-4 mt-lg-0">
//                       <FullCalendar
//                         ref={calendarRef}
//                         plugins={[dayGridPlugin, interactionPlugin]}
//                         initialView="dayGridMonth"
//                         editable={true}
//                         droppable={true}
//                         events={events}
//                         eventReceive={handleEventReceive}
//                         height="auto"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Modal code can be implemented here if needed */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Calendar;
