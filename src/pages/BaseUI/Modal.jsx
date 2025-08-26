import React from "react";
import Footer from "../../components/Footer";

const Modal = () => {
  return (
    <div className="page-content">
      {/* <!-- Start Container Fluid --> */}
      <div className="container">
        {/* <!-- start modal --> */}
        <div className="row">
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="default">
                  Default Modals
                  <a className="anchor-link" href="#default">
                    #
                  </a>
                </h5>
                <p className="text-muted font-14">
                  Toggle a working modal demo by clicking the button below. It
                  will slide down and fade in from the top of the page.
                </p>
                <div className="mb-3">
                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Launch demo modal
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    readOnly="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p>Woo-hoo, you're reading this text in a modal!</p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>

                  <div className="code">
                    <pre className="language-html">
                      <code id="defaultModal">
                        &lt;!-- Button trigger modal --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#exampleModal&quot;&gt; Launch demo
                        modal &lt;/button&gt; &lt;!-- Modal --&gt; &lt;div
                        className=&quot;modal fade&quot;
                        id=&quot;exampleModal&quot; readOnly=&quot;-1&quot;
                        aria-labelledby=&quot;exampleModalLabel&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title&quot;
                        id=&quot;exampleModalLabel&quot;&gt;Modal
                        title&lt;/h5&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; &lt;p&gt;Woo-hoo,
                        you're reading this text in a modal!&lt;/p&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-footer&quot;&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot;&gt;Save changes&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="static-backdrop">
                  Static Backdrop
                  <a className="anchor-link" href="#static-backdrop">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  When backdrop is set to static, the modal will not close when
                  clicking outside of it. Click the button below to try it.
                </p>
                <div className="mb-3">
                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Launch static backdrop modal
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    readOnly="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p>
                            I will not close if you click outside of me. Don't
                            even try to press escape key.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Understood
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="code">
                    <pre className="language-html">
                      <code id="static-backdrop">
                        &lt;!-- Button trigger modal --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#staticBackdrop&quot;&gt; Launch
                        static backdrop modal &lt;/button&gt; &lt;!-- Modal
                        --&gt; &lt;div className=&quot;modal fade&quot;
                        id=&quot;staticBackdrop&quot;
                        data-bs-backdrop=&quot;static&quot;
                        data-bs-keyboard=&quot;false&quot;
                        readOnly=&quot;-1&quot;
                        aria-labelledby=&quot;staticBackdropLabel&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title&quot;
                        id=&quot;staticBackdropLabel&quot;&gt;Modal
                        title&lt;/h5&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; &lt;p&gt;I will not
                        close if you click outside of me. Don't even try to
                        press escape key.&lt;/p&gt; &lt;/div&gt; &lt;div
                        className=&quot;modal-footer&quot;&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot;&gt;Understood&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5
                  className="card-title mb-1 anchor"
                  id="scrolling-long-content"
                >
                  Scrolling Long Content
                  <a className="anchor-link" href="#scrolling-long-content">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  When modals become too long for the user&rsquo;s viewport or
                  device, they scroll independent of the page itself. Try the
                  demo below to see what we mean.
                </p>
                <div className="mb-3">
                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalLong"
                  >
                    Launch demo modal
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="exampleModalLong"
                    readOnly="-1"
                    aria-labelledby="exampleModalLongTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalLongTitle"
                          >
                            Modal title
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div
                          className="modal-body"
                          style={{ minHeight: "1500px" }}
                        >
                          <p>
                            This is some placeholder content to show the
                            scrolling behavior for modals. Instead of repeating
                            the text the modal, we use an inline style set a
                            minimum height, thereby extending the length of the
                            overall modal and demonstrating the overflow
                            scrolling. When content becomes longer than the
                            height of the viewport, scrolling will move the
                            modal as needed.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="code">
                    <pre className="language-html">
                      <code id="scrolling-long-content">
                        &lt;!-- Button trigger modal --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#exampleModalLong&quot;&gt; Launch
                        demo modal &lt;/button&gt; &lt;!-- Modal --&gt; &lt;div
                        className=&quot;modal fade&quot;
                        id=&quot;exampleModalLong&quot; readOnly=&quot;-1&quot;
                        aria-labelledby=&quot;exampleModalLongTitle&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title&quot;
                        id=&quot;exampleModalLongTitle&quot;&gt;Modal
                        title&lt;/h5&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div className=&quot;modal-body&quot;
                        style=&quot;min-height: 1500px&quot;&gt; &lt;p&gt;This
                        is some placeholder content to show the scrolling
                        behavior for modals. Instead of repeating the text the
                        modal, we use an inline style set a minimum height,
                        thereby extending the length of the overall modal and
                        demonstrating the overflow scrolling. When content
                        becomes longer than the height of the viewport,
                        scrolling will move the modal as needed.&lt;/p&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-footer&quot;&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot;&gt;Save changes&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>

                <p className="text-muted mt-3">
                  You can also create a scrollable modal that allows scroll the
                  modal body by adding
                  <code>.modal-dialog-scrollable</code> to
                  <code>.modal-dialog</code>.
                </p>

                <div className="mb-3">
                  {/* <!-- Button trigger modal --> */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalScrollable"
                  >
                    Launch demo modal
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="exampleModalScrollable"
                    readOnly="-1"
                    aria-labelledby="exampleModalScrollableTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalScrollableTitle"
                          >
                            Modal title
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p>
                            This is some placeholder content to show the
                            scrolling behavior for modals. We use repeated line
                            breaks to demonstrate how content can exceed minimum
                            inner height, thereby showing inner scrolling. When
                            content becomes longer than the predefined
                            max-height of modal, content will be cropped and
                            scrollable within the modal.
                          </p>
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <p>
                            This content should appear at the bottom after you
                            scroll.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>

                  <div className="code">
                    <pre className="language-html">
                      <code>
                        &lt;!-- Button trigger modal --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#exampleModalScrollable&quot;&gt;
                        Launch demo modal &lt;/button&gt; &lt;!-- Modal --&gt;
                        &lt;div className=&quot;modal fade&quot;
                        id=&quot;exampleModalScrollable&quot;
                        readOnly=&quot;-1&quot;
                        aria-labelledby=&quot;exampleModalScrollableTitle&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog
                        modal-dialog-scrollable&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title&quot;
                        id=&quot;exampleModalScrollableTitle&quot;&gt;Modal
                        title&lt;/h5&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; &lt;p&gt;This is
                        some placeholder content to show the scrolling behavior
                        for modals. We use repeated line breaks to demonstrate
                        how content can exceed minimum inner height, thereby
                        showing inner scrolling. When content becomes longer
                        than the predefined max-height of modal, content will be
                        cropped and scrollable within the modal.&lt;/p&gt;
                        &lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;
                        &lt;p&gt;This content should appear at the bottom after
                        you scroll.&lt;/p&gt; &lt;/div&gt; &lt;div
                        className=&quot;modal-footer&quot;&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot;&gt;Save changes&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="modal-position">
                  Modal Position
                  <a className="anchor-link" href="#modal-position">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Add <code>.modal-dialog-centered</code> to
                  <code>.modal-dialog</code> to vertically center the modal.
                </p>

                <div className="mb-3">
                  <div className="d-flex flex-wrap gap-2">
                    {/* <!-- Button trigger modal --> */}
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalCenter"
                    >
                      Vertically centered modal
                    </button>

                    {/* <!-- Modal --> */}
                    <div
                      className="modal fade"
                      id="exampleModalCenter"
                      readOnly="-1"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalCenterTitle"
                            >
                              Modal title
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p>This is a vertically centered modal.</p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Button trigger modal --> */}
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalCenteredScrollable"
                    >
                      Vertically centered scrollable modal
                    </button>

                    {/* <!-- Modal --> */}
                    <div
                      className="modal fade"
                      id="exampleModalCenteredScrollable"
                      readOnly="-1"
                      aria-labelledby="exampleModalCenteredScrollableTitle"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalCenteredScrollableTitle"
                            >
                              Modal title
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p>
                              This is some placeholder content to show a
                              vertically centered modal. We've added some extra
                              copy here to show how vertically centering the
                              modal works when combined with scrollable modals.
                              We also use some repeated line breaks to quickly
                              extend the height of the content, thereby
                              triggering the scrolling. When content becomes
                              longer than the predefined max-height of modal,
                              content will be cropped and scrollable within the
                              modal.
                            </p>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p>Just like that.</p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>

                  <div className="code">
                    <pre className="language-html">
                      <code>
                        &lt;!-- Button trigger modal --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#exampleModalCenter&quot;&gt;
                        Vertically centered modal &lt;/button&gt; &lt;!-- Modal
                        --&gt; &lt;div className=&quot;modal fade&quot;
                        id=&quot;exampleModalCenter&quot;
                        readOnly=&quot;-1&quot;
                        aria-labelledby=&quot;exampleModalCenterTitle&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog
                        modal-dialog-centered&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title&quot;
                        id=&quot;exampleModalCenterTitle&quot;&gt;Modal
                        title&lt;/h5&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; &lt;p&gt;This is a
                        vertically centered modal.&lt;/p&gt; &lt;/div&gt;
                        &lt;div className=&quot;modal-footer&quot;&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot;&gt;Save changes&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;!-- Button trigger modal --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#exampleModalCenteredScrollable&quot;&gt;
                        Vertically centered scrollable modal &lt;/button&gt;
                        &lt;!-- Modal --&gt; &lt;div className=&quot;modal
                        fade&quot; id=&quot;exampleModalCenteredScrollable&quot;
                        readOnly=&quot;-1&quot;
                        aria-labelledby=&quot;exampleModalCenteredScrollableTitle&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog modal-dialog-centered
                        modal-dialog-scrollable&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title&quot;
                        id=&quot;exampleModalCenteredScrollableTitle&quot;&gt;Modal
                        title&lt;/h5&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; &lt;p&gt;This is
                        some placeholder content to show a vertically centered
                        modal. We've added some extra copy here to show how
                        vertically centering the modal works when combined with
                        scrollable modals. We also use some repeated line breaks
                        to quickly extend the height of the content, thereby
                        triggering the scrolling. When content becomes longer
                        than the predefined max-height of modal, content will be
                        cropped and scrollable within the modal.&lt;/p&gt;
                        &lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;
                        &lt;p&gt;Just like that.&lt;/p&gt; &lt;/div&gt; &lt;div
                        className=&quot;modal-footer&quot;&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot;&gt;Save changes&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>

                <p className="text-muted mt-3">
                  Specify the position for the modal. You can display modal at
                  top, bottom of page by specifying classes
                  <code>modal-top</code> and
                  <code>modal-bottom</code> respectively.
                </p>

                <div className="mb-3">
                  <div className="d-flex flex-wrap gap-2">
                    {/* <!-- Button trigger modal --> */}
                    <div className="hstack gap-2">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#topModal"
                      >
                        Top Modal
                      </button>
                      <button
                        type="button"
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#bottomModal"
                      >
                        Bottom Modal
                      </button>
                    </div>

                    {/* <!-- top modal --> */}
                    <div
                      id="topModal"
                      className="modal fade"
                      readOnly="-1"
                      role="dialog"
                      aria-labelledby="topModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-top">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="topModalLabel">
                              Modal Heading
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <h6>Text in a modal</h6>
                            <p className="mb-0">
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-light"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                        {/* <!-- end modal content --> */}
                      </div>
                      {/* <!-- end modal dialog --> */}
                    </div>
                    {/* <!-- end modal --> */}

                    {/* <!-- bottom modal --> */}
                    <div
                      id="bottomModal"
                      className="modal fade"
                      readOnly="-1"
                      role="dialog"
                      aria-labelledby="bottomModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-bottom">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="bottomModalLabel">
                              Modal Heading
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <h6>Text in a modal</h6>
                            <p className="mb-0">
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-light"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                        {/* <!-- end modal content --> */}
                      </div>
                      {/* <!-- end modal dialog --> */}
                    </div>
                    {/* <!-- end modal --> */}
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>

                  <div className="code">
                    <pre className="language-html">
                      <code id="modal-position">
                        &lt;!-- Button trigger modal --&gt; &lt;div
                        className=&quot;hstack gap-2&quot;&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#topModal&quot;&gt;Top
                        Modal&lt;/button&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn btn-success &quot;
                        data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#bottomModal&quot;&gt;Bottom
                        Modal&lt;/button&gt; &lt;/div&gt; &lt;!-- top modal
                        --&gt; &lt;div id=&quot;topModal&quot;
                        className=&quot;modal fade&quot; readOnly=&quot;-1&quot;
                        role=&quot;dialog&quot;
                        aria-labelledby=&quot;topModalLabel&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog modal-top&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title&quot;
                        id=&quot;topModalLabel&quot;&gt;Modal Heading&lt;/h5&gt;
                        &lt;button type=&quot;button&quot;
                        className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; &lt;h6&gt;Text in a
                        modal&lt;/h6&gt; &lt;p
                        className=&quot;mb-0&quot;&gt;Duis mollis, est non
                        commodo luctus, nisi erat porttitor ligula.&lt;/p&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-footer&quot;&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot;&gt;Save changes&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;!-- end modal content
                        --&gt; &lt;/div&gt; &lt;!-- end modal dialog --&gt;
                        &lt;/div&gt; &lt;!-- end modal --&gt; &lt;!-- bottom
                        modal --&gt; &lt;div id=&quot;bottomModal&quot;
                        className=&quot;modal fade&quot; readOnly=&quot;-1&quot;
                        role=&quot;dialog&quot;
                        aria-labelledby=&quot;bottomModalLabel&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog modal-bottom&quot;&gt;
                        &lt;div className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title&quot;
                        id=&quot;bottomModalLabel&quot;&gt;Modal
                        Heading&lt;/h5&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; &lt;h6&gt;Text in a
                        modal&lt;/h6&gt; &lt;p
                        className=&quot;mb-0&quot;&gt;Duis mollis, est non
                        commodo luctus, nisi erat porttitor ligula.&lt;/p&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-footer&quot;&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-light&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot;&gt;Save changes&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;!-- end modal content
                        --&gt; &lt;/div&gt; &lt;!-- end modal dialog --&gt;
                        &lt;/div&gt; &lt;!-- end modal --&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5
                  className="card-title mb-1 anchor"
                  id="toggle-between-modals"
                >
                  Toggle Between Modals
                  <a className="anchor-link" href="#toggle-between-modals">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Toggle between multiple modals with some clever placement of
                  the <code>data-bs-target</code> and
                  <code>data-bs-toggle</code> attributes. For example, you could
                  toggle a password reset modal from within an already open sign
                  in modal.
                  <strong>
                    Please note multiple modals cannot be open at the same time
                  </strong>
                  —this method simply toggles between two separate modals.
                </p>

                <div className="mb-3">
                  {/* <!-- Button trigger modal --> */}
                  <a
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                    role="button"
                  >
                    Open first modal
                  </a>

                  {/* <!-- First Modal --> */}
                  <div
                    className="modal fade"
                    id="exampleModalToggle"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel"
                    readOnly="-1"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalToggleLabel"
                          >
                            Modal 1
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          Show a second modal and hide this one with the button
                          below.
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-primary"
                            data-bs-target="#exampleModalToggle2"
                            data-bs-toggle="modal"
                          >
                            Open second modal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Second Modal --> */}
                  <div
                    className="modal fade"
                    id="exampleModalToggle2"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel2"
                    readOnly="-1"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalToggleLabel2"
                          >
                            Modal 2
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          Hide this modal and show the first with the button
                          below.
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            className="btn btn-primary"
                            data-bs-target="#exampleModalToggle"
                            data-bs-toggle="modal"
                          >
                            Back to first
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>

                  <div className="code">
                    <pre className="language-html">
                      <code id="toggle-between-modals">
                        &lt;!-- Button trigger modal --&gt; &lt;a
                        className=&quot;btn btn-primary&quot;
                        data-bs-toggle=&quot;modal&quot;
                        href=&quot;#exampleModalToggle&quot;
                        role=&quot;button&quot;&gt;Open first modal&lt;/a&gt;
                        &lt;!-- First Modal --&gt; &lt;div className=&quot;modal
                        fade&quot; id=&quot;exampleModalToggle&quot;
                        aria-hidden=&quot;true&quot;
                        aria-labelledby=&quot;exampleModalToggleLabel&quot;
                        readOnly=&quot;-1&quot;&gt; &lt;div
                        className=&quot;modal-dialog
                        modal-dialog-centered&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title&quot;
                        id=&quot;exampleModalToggleLabel&quot;&gt;Modal
                        1&lt;/h5&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; Show a second modal
                        and hide this one with the button below. &lt;/div&gt;
                        &lt;div className=&quot;modal-footer&quot;&gt;
                        &lt;button className=&quot;btn btn-primary&quot;
                        data-bs-target=&quot;#exampleModalToggle2&quot;
                        data-bs-toggle=&quot;modal&quot;&gt;Open second
                        modal&lt;/button&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;!-- Second Modal --&gt;
                        &lt;div className=&quot;modal fade&quot;
                        id=&quot;exampleModalToggle2&quot;
                        aria-hidden=&quot;true&quot;
                        aria-labelledby=&quot;exampleModalToggleLabel2&quot;
                        readOnly=&quot;-1&quot;&gt; &lt;div
                        className=&quot;modal-dialog
                        modal-dialog-centered&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title&quot;
                        id=&quot;exampleModalToggleLabel2&quot;&gt;Modal
                        2&lt;/h5&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; Hide this modal and
                        show the first with the button below. &lt;/div&gt;
                        &lt;div className=&quot;modal-footer&quot;&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
                        &lt;button className=&quot;btn btn-primary&quot;
                        data-bs-target=&quot;#exampleModalToggle&quot;
                        data-bs-toggle=&quot;modal&quot;&gt;Back to
                        first&lt;/button&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;/div&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title anchor" id="optional-sizes">
                  Optional Sizes
                  <a className="anchor-link" href="#optional-sizes">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Modals have three optional sizes, available via modifier
                  classes to be placed on a <code>.modal-dialog</code>. These
                  sizes kick in at certain breakpoints to avoid horizontal
                  scrollbars on narrower viewports.
                </p>

                <div className="mb-3">
                  <div className="hstack gap-2">
                    {/* <!-- Button trigger modal --> */}
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalXl"
                    >
                      Extra large modal
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalLg"
                    >
                      Large modal
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalSm"
                    >
                      Small modal
                    </button>
                  </div>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="exampleModalXl"
                    readOnly="-1"
                    aria-labelledby="exampleModalXlLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title h4"
                            id="exampleModalXlLabel"
                          >
                            Extra large modal
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">...</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="exampleModalLg"
                    readOnly="-1"
                    aria-labelledby="exampleModalLgLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title h4"
                            id="exampleModalLgLabel"
                          >
                            Large modal
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">...</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="exampleModalSm"
                    readOnly="-1"
                    aria-labelledby="exampleModalSmLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-sm">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title h4"
                            id="exampleModalSmLabel"
                          >
                            Small modal
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">...</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="code">
                    <pre className="language-html">
                      <code id="optional-sizes">
                        &lt;div className=&quot;hstack gap-2&quot;&gt; &lt;!--
                        Button trigger modal --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#exampleModalXl&quot;&gt;Extra
                        large modal&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#exampleModalLg&quot;&gt;Large
                        modal&lt;/button&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn btn-primary&quot;
                        data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#exampleModalSm&quot;&gt;Small
                        modal&lt;/button&gt; &lt;/div&gt; &lt;!-- Modal --&gt;
                        &lt;div className=&quot;modal fade&quot;
                        id=&quot;exampleModalXl&quot; readOnly=&quot;-1&quot;
                        aria-labelledby=&quot;exampleModalXlLabel&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog modal-xl&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title h4&quot;
                        id=&quot;exampleModalXlLabel&quot;&gt;Extra large
                        modal&lt;/h5&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; ... &lt;/div&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div
                        className=&quot;modal fade&quot;
                        id=&quot;exampleModalLg&quot; readOnly=&quot;-1&quot;
                        aria-labelledby=&quot;exampleModalLgLabel&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog modal-lg&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title h4&quot;
                        id=&quot;exampleModalLgLabel&quot;&gt;Large
                        modal&lt;/h5&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; ... &lt;/div&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div
                        className=&quot;modal fade&quot;
                        id=&quot;exampleModalSm&quot; readOnly=&quot;-1&quot;
                        aria-labelledby=&quot;exampleModalSmLabel&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog modal-sm&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title h4&quot;
                        id=&quot;exampleModalSmLabel&quot;&gt;Small
                        modal&lt;/h5&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; ... &lt;/div&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="fullscreen-modal">
                  Fullscreen Modal
                  <a className="anchor-link" href="#fullscreen-modal">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Modals have three optional sizes, available via modifier
                  classes to be placed on a <code>.modal-dialog</code>. These
                  sizes kick in at certain breakpoints to avoid horizontal
                  scrollbars on narrower viewports.
                </p>

                <div className="mb-3">
                  <div className="hstack flex-wrap gap-2">
                    {/* <!-- Button trigger modal --> */}
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalFullscreen"
                    >
                      Full screen
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalFullscreenSm"
                    >
                      Full screen below sm
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalFullscreenMd"
                    >
                      Full screen below md
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalFullscreenLg"
                    >
                      Full screen below lg
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalFullscreenXl"
                    >
                      Full screen below xl
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalFullscreenXxl"
                    >
                      Full screen below xxl
                    </button>
                  </div>

                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="exampleModalFullscreen"
                    readOnly="-1"
                    aria-labelledby="exampleModalFullscreenLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-fullscreen">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title h4"
                            id="exampleModalFullscreenLabel"
                          >
                            Full screen modal
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id="exampleModalFullscreenSm"
                    readOnly="-1"
                    aria-labelledby="exampleModalFullscreenSmLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-fullscreen-sm-down">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title h4"
                            id="exampleModalFullscreenSmLabel"
                          >
                            Full screen below sm
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id="exampleModalFullscreenMd"
                    readOnly="-1"
                    aria-labelledby="exampleModalFullscreenMdLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-fullscreen-md-down">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title h4"
                            id="exampleModalFullscreenMdLabel"
                          >
                            Full screen below md
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id="exampleModalFullscreenLg"
                    readOnly="-1"
                    aria-labelledby="exampleModalFullscreenLgLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-fullscreen-lg-down">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title h4"
                            id="exampleModalFullscreenLgLabel"
                          >
                            Full screen below lg
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id="exampleModalFullscreenXl"
                    readOnly="-1"
                    aria-labelledby="exampleModalFullscreenXlLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-fullscreen-xl-down">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title h4"
                            id="exampleModalFullscreenXlLabel"
                          >
                            Full screen below xl
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id="exampleModalFullscreenXxl"
                    readOnly="-1"
                    aria-labelledby="exampleModalFullscreenXxlLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-fullscreen-xxl-down">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title h4"
                            id="exampleModalFullscreenXxlLabel"
                          >
                            Full screen below xxl
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>

                  <div className="code">
                    <pre className="language-html">
                      <code id="fullscreen-modal">
                        &lt;!-- Button trigger modal --&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#exampleModalFullscreen&quot;&gt;Full
                        screen&lt;/button&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn btn-primary&quot;
                        data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#exampleModalFullscreenSm&quot;&gt;Full
                        screen below sm&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#exampleModalFullscreenMd&quot;&gt;Full
                        screen below md&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#exampleModalFullscreenLg&quot;&gt;Full
                        screen below lg&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#exampleModalFullscreenXl&quot;&gt;Full
                        screen below xl&lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#exampleModalFullscreenXxl&quot;&gt;Full
                        screen below xxl&lt;/button&gt; &lt;!-- Modal --&gt;
                        &lt;div className=&quot;modal fade&quot;
                        id=&quot;exampleModalFullscreen&quot;
                        readOnly=&quot;-1&quot;
                        aria-labelledby=&quot;exampleModalFullscreenLabel&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog modal-fullscreen&quot;&gt;
                        &lt;div className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title h4&quot;
                        id=&quot;exampleModalFullscreenLabel&quot;&gt;Full
                        screen modal&lt;/h5&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; ... &lt;/div&gt;
                        &lt;div className=&quot;modal-footer&quot;&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;div className=&quot;modal fade&quot;
                        id=&quot;exampleModalFullscreenSm&quot;
                        readOnly=&quot;-1&quot;
                        aria-labelledby=&quot;exampleModalFullscreenSmLabel&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog
                        modal-fullscreen-sm-down&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title h4&quot;
                        id=&quot;exampleModalFullscreenSmLabel&quot;&gt;Full
                        screen below sm&lt;/h5&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; ... &lt;/div&gt;
                        &lt;div className=&quot;modal-footer&quot;&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;div className=&quot;modal fade&quot;
                        id=&quot;exampleModalFullscreenMd&quot;
                        readOnly=&quot;-1&quot;
                        aria-labelledby=&quot;exampleModalFullscreenMdLabel&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog
                        modal-fullscreen-md-down&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title h4&quot;
                        id=&quot;exampleModalFullscreenMdLabel&quot;&gt;Full
                        screen below md&lt;/h5&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; ... &lt;/div&gt;
                        &lt;div className=&quot;modal-footer&quot;&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;div className=&quot;modal fade&quot;
                        id=&quot;exampleModalFullscreenLg&quot;
                        readOnly=&quot;-1&quot;
                        aria-labelledby=&quot;exampleModalFullscreenLgLabel&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog
                        modal-fullscreen-lg-down&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title h4&quot;
                        id=&quot;exampleModalFullscreenLgLabel&quot;&gt;Full
                        screen below lg&lt;/h5&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; ... &lt;/div&gt;
                        &lt;div className=&quot;modal-footer&quot;&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;div className=&quot;modal fade&quot;
                        id=&quot;exampleModalFullscreenXl&quot;
                        readOnly=&quot;-1&quot;
                        aria-labelledby=&quot;exampleModalFullscreenXlLabel&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog
                        modal-fullscreen-xl-down&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title h4&quot;
                        id=&quot;exampleModalFullscreenXlLabel&quot;&gt;Full
                        screen below xl&lt;/h5&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; ... &lt;/div&gt;
                        &lt;div className=&quot;modal-footer&quot;&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;div className=&quot;modal fade&quot;
                        id=&quot;exampleModalFullscreenXxl&quot;
                        readOnly=&quot;-1&quot;
                        aria-labelledby=&quot;exampleModalFullscreenXxlLabel&quot;
                        aria-hidden=&quot;true&quot;&gt; &lt;div
                        className=&quot;modal-dialog
                        modal-fullscreen-xxl-down-down&quot;&gt; &lt;div
                        className=&quot;modal-content&quot;&gt; &lt;div
                        className=&quot;modal-header&quot;&gt; &lt;h5
                        className=&quot;modal-title h4&quot;
                        id=&quot;exampleModalFullscreenXxlLabel&quot;&gt;Full
                        screen below xxl&lt;/h5&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn-close&quot;
                        data-bs-dismiss=&quot;modal&quot;
                        aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
                        &lt;/div&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; ... &lt;/div&gt;
                        &lt;div className=&quot;modal-footer&quot;&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-secondary&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Close&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="modal-alerts">
                  Modal Based Alerts
                  <a className="anchor-link" href="#modal-alerts">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Modals have three optional sizes, available via modifier
                  classes to be placed on a <code>.modal-dialog</code>. These
                  sizes kick in at certain breakpoints to avoid horizontal
                  scrollbars on narrower viewports.
                </p>

                <div className="mb-3">
                  <div className="hstack flex-wrap gap-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#primaryAlertModal"
                    >
                      Primary Alert
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#secondaryAlertModal"
                    >
                      Secondary Alert
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#successAlertModal"
                    >
                      Success Alert
                    </button>
                    <button
                      type="button"
                      className="btn btn-info"
                      data-bs-toggle="modal"
                      data-bs-target="#infoALertModal"
                    >
                      Info Alert
                    </button>
                  </div>

                  {/* <!-- Primary Alert Modal --> */}
                  <div
                    id="primaryAlertModal"
                    className="modal fade"
                    readOnly="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-primary">
                        <div className="modal-body">
                          <div className="text-center">
                            <i className="bx bx-check-double display-6 mt-0 text-white"></i>
                            <h4 className="mt-3 text-white">Well Done!</h4>
                            <p className="mt-3">
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam.
                            </p>
                            <button
                              type="button"
                              className="btn btn-light mt-3"
                              data-bs-dismiss="modal"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                        {/* <!-- end modal body --> */}
                      </div>
                      {/* <!-- end modal content --> */}
                    </div>
                    {/* <!-- end modal dialog --> */}
                  </div>
                  {/* <!-- end modal --> */}

                  {/* <!-- Secondary Alert Modal --> */}
                  <div
                    id="secondaryAlertModal"
                    className="modal fade"
                    readOnly="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-secondary">
                        <div className="modal-body">
                          <div className="text-center">
                            <i className="bx bx-check-double display-6 mt-0 text-white"></i>
                            <h4 className="mt-3 text-white">Well Done!</h4>
                            <p className="mt-3">
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam.
                            </p>
                            <button
                              type="button"
                              className="btn btn-light mt-3"
                              data-bs-dismiss="modal"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                        {/* <!-- end modal body --> */}
                      </div>
                      {/* <!-- end modal content --> */}
                    </div>
                    {/* <!-- end modal dialog --> */}
                  </div>
                  {/* <!-- end modal --> */}

                  {/* <!-- Success Alert Modal --> */}
                  <div
                    id="successAlertModal"
                    className="modal fade"
                    readOnly="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-success">
                        <div className="modal-body">
                          <div className="text-center">
                            <i className="bx bx-check-double display-6 mt-0 text-white"></i>
                            <h4 className="mt-3 text-white">Well Done!</h4>
                            <p className="mt-3">
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam.
                            </p>
                            <button
                              type="button"
                              className="btn btn-light mt-3"
                              data-bs-dismiss="modal"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                        {/* <!-- end modal body --> */}
                      </div>
                      {/* <!-- end modal content --> */}
                    </div>
                    {/* <!-- end modal dialog --> */}
                  </div>
                  {/* <!-- end modal --> */}

                  {/* <!-- Info Alert Modal --> */}
                  <div
                    id="infoALertModal"
                    className="modal fade"
                    readOnly="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-sm">
                      <div className="modal-content modal-filled bg-info">
                        <div className="modal-body">
                          <div className="text-center">
                            <i className="bx bx-check-double display-6 mt-0 text-white"></i>
                            <h4 className="mt-3 text-white">Well Done!</h4>
                            <p className="mt-3">
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam.
                            </p>
                            <button
                              type="button"
                              className="btn btn-light mt-3"
                              data-bs-dismiss="modal"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                        {/* <!-- end modal body --> */}
                      </div>
                      {/* <!-- end modal content --> */}
                    </div>
                    {/* <!-- end modal dialog --> */}
                  </div>
                  {/* <!-- end modal --> */}
                </div>

                <div className="highlight">
                  <div className="highlight-toolbar">
                    <small className="text-uppercase">html</small>
                    <button
                      className="btn btn-sm btn-outline-success btn-copy-clipboard"
                      data-clipboard-action="copy"
                    >
                      Copy
                    </button>
                  </div>

                  <div className="code">
                    <pre className="language-html">
                      <code id="modal-alerts">
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#primaryAlertModal&quot;&gt;Primary
                        Alert&lt;/button&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn btn-secondary&quot;
                        data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#secondaryAlertModal&quot;&gt;Secondary
                        Alert&lt;/button&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn btn-success&quot;
                        data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#successAlertModal&quot;&gt;Success
                        Alert&lt;/button&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn btn-info&quot;
                        data-bs-toggle=&quot;modal&quot;
                        data-bs-target=&quot;#infoALertModal&quot;&gt;Info
                        Alert&lt;/button&gt; &lt;!-- Primary Alert Modal --&gt;
                        &lt;div id=&quot;primaryAlertModal&quot;
                        className=&quot;modal fade&quot; readOnly=&quot;-1&quot;
                        role=&quot;dialog&quot; aria-hidden=&quot;true&quot;&gt;
                        &lt;div className=&quot;modal-dialog modal-sm&quot;&gt;
                        &lt;div className=&quot;modal-content modal-filled
                        bg-primary&quot;&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; &lt;div
                        className=&quot;text-center&quot;&gt; &lt;i
                        className=&quot;bx bx-check h1 mt-0
                        text-white&quot;&gt;&lt;/i&gt; &lt;h4
                        className=&quot;mt-3 text-white&quot;&gt;Well
                        Done!&lt;/h4&gt; &lt;p
                        className=&quot;mt-3&quot;&gt;Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac
                        facilisis in, egestas eget quam.&lt;/p&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn btn-light
                        mt-3&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Continue&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;!-- end modal body --&gt;
                        &lt;/div&gt;&lt;!-- end modal content --&gt;
                        &lt;/div&gt;&lt;!-- end modal dialog --&gt; &lt;/div&gt;
                        &lt;!-- end modal --&gt; &lt;!-- Secondary Alert Modal
                        --&gt; &lt;div id=&quot;secondaryAlertModal&quot;
                        className=&quot;modal fade&quot; readOnly=&quot;-1&quot;
                        role=&quot;dialog&quot; aria-hidden=&quot;true&quot;&gt;
                        &lt;div className=&quot;modal-dialog modal-sm&quot;&gt;
                        &lt;div className=&quot;modal-content modal-filled
                        bg-secondary&quot;&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; &lt;div
                        className=&quot;text-center&quot;&gt; &lt;i
                        className=&quot;bx bx-check h1 mt-0
                        text-white&quot;&gt;&lt;/i&gt; &lt;h4
                        className=&quot;mt-3 text-white&quot;&gt;Well
                        Done!&lt;/h4&gt; &lt;p
                        className=&quot;mt-3&quot;&gt;Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac
                        facilisis in, egestas eget quam.&lt;/p&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn btn-light
                        mt-3&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Continue&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;!-- end modal body --&gt;
                        &lt;/div&gt;&lt;!-- end modal content --&gt;
                        &lt;/div&gt;&lt;!-- end modal dialog --&gt; &lt;/div&gt;
                        &lt;!-- end modal --&gt; &lt;!-- Success Alert Modal
                        --&gt; &lt;div id=&quot;successAlertModal&quot;
                        className=&quot;modal fade&quot; readOnly=&quot;-1&quot;
                        role=&quot;dialog&quot; aria-hidden=&quot;true&quot;&gt;
                        &lt;div className=&quot;modal-dialog modal-sm&quot;&gt;
                        &lt;div className=&quot;modal-content modal-filled
                        bg-success&quot;&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; &lt;div
                        className=&quot;text-center&quot;&gt; &lt;i
                        className=&quot;bx bx-check h1 mt-0
                        text-white&quot;&gt;&lt;/i&gt; &lt;h4
                        className=&quot;mt-3 text-white&quot;&gt;Well
                        Done!&lt;/h4&gt; &lt;p
                        className=&quot;mt-3&quot;&gt;Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac
                        facilisis in, egestas eget quam.&lt;/p&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn btn-light
                        mt-3&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Continue&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;!-- end modal body --&gt;
                        &lt;/div&gt;&lt;!-- end modal content --&gt;
                        &lt;/div&gt;&lt;!-- end modal dialog --&gt; &lt;/div&gt;
                        &lt;!-- end modal --&gt; &lt;!-- Info Alert Modal --&gt;
                        &lt;div id=&quot;infoALertModal&quot;
                        className=&quot;modal fade&quot; readOnly=&quot;-1&quot;
                        role=&quot;dialog&quot; aria-hidden=&quot;true&quot;&gt;
                        &lt;div className=&quot;modal-dialog modal-sm&quot;&gt;
                        &lt;div className=&quot;modal-content modal-filled
                        bg-info&quot;&gt; &lt;div
                        className=&quot;modal-body&quot;&gt; &lt;div
                        className=&quot;text-center&quot;&gt; &lt;i
                        className=&quot;bx bx-check h1 mt-0
                        text-white&quot;&gt;&lt;/i&gt; &lt;h4
                        className=&quot;mt-3 text-white&quot;&gt;Well
                        Done!&lt;/h4&gt; &lt;p
                        className=&quot;mt-3&quot;&gt;Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac
                        facilisis in, egestas eget quam.&lt;/p&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn btn-light
                        mt-3&quot;
                        data-bs-dismiss=&quot;modal&quot;&gt;Continue&lt;/button&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;!-- end modal body --&gt;
                        &lt;/div&gt;&lt;!-- end modal content --&gt;
                        &lt;/div&gt;&lt;!-- end modal dialog --&gt; &lt;/div&gt;
                        &lt;!-- end modal --&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end card body --> */}
          </div>
          {/* <!-- end card --> */}

          <div className="col-xl-3">
            <div className="card docs-nav">
              <div className="">
                <div className="">
                  <ul className="nav bg-transparent flex-column">
                    <li className="nav-item">
                      <a href="#default" className="nav-link">
                        Default Example
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#static-backdrop" className="nav-link">
                        Static Backdrop
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#scrolling-long-content" className="nav-link">
                        Scrolling Long Content
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#toggle-between-modals" className="nav-link">
                        Toggle Between Modals
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#optional-sizes" className="nav-link">
                        Optional Sizes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#fullscreen-modal" className="nav-link">
                        Fullscreen Modal
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#custom-modal" className="nav-link">
                        Custom Modal
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#modal-alerts" className="nav-link">
                        Modal Based Alerts
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end row --> */}
      </div>

      <Footer />
    </div>
  );
};

export default Modal;
