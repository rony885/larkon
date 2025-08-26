import React from "react";
import Footer from "../../components/Footer";

const Tooltips = () => {
  return (
    <div className="page-content">
      <div className="container">
        {/* <!-- start tooltips--> */}
        <div className="row">
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="direction">
                  Tooltip Direction
                  <a className="anchor-link" href="#direction">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Four options are available: top, right, bottom, and left
                  aligned.
                </p>
                <div className="mb-3">
                  <div className="d-flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Tooltip on top"
                    >
                      Tooltip on top
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-title="Tooltip on right"
                    >
                      Tooltip on right
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-title="Tooltip on bottom"
                    >
                      Tooltip on bottom
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="tooltip"
                      data-bs-placement="left"
                      data-bs-title="Tooltip on left"
                    >
                      Tooltip on left
                    </button>
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
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;tooltip&quot;
                        data-bs-placement=&quot;top&quot;
                        data-bs-title=&quot;Tooltip on top&quot;&gt; Tooltip on
                        top &lt;/button&gt; &lt;button type=&quot;button&quot;
                        className=&quot;btn btn-primary&quot;
                        data-bs-toggle=&quot;tooltip&quot;
                        data-bs-placement=&quot;right&quot;
                        data-bs-title=&quot;Tooltip on right&quot;&gt; Tooltip
                        on right &lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;tooltip&quot;
                        data-bs-placement=&quot;bottom&quot;
                        data-bs-title=&quot;Tooltip on bottom&quot;&gt; Tooltip
                        on bottom &lt;/button&gt; &lt;button
                        type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;tooltip&quot;
                        data-bs-placement=&quot;left&quot;
                        data-bs-title=&quot;Tooltip on left&quot;&gt; Tooltip on
                        left &lt;/button&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="color_tooltip">
                  Color Tooltip
                  <a className="anchor-link" href="#color_tooltip">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  We set a custom class with ex.
                  <code>data-bs-custom-classname="primary-tooltip"</code> to
                  scope our background-color primary appearance and use it to
                  override a local CSS variable.
                </p>
                <div className="mb-3">
                  <div className="d-flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-classname="primary-tooltip"
                      data-bs-title="This top tooltip is themed via CSS variables."
                    >
                      Primary tooltip
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-classname="danger-tooltip"
                      data-bs-title="This top tooltip is themed via CSS variables."
                    >
                      Danger tooltip
                    </button>
                    <button
                      type="button"
                      className="btn btn-info"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-classname="info-tooltip"
                      data-bs-title="This top tooltip is themed via CSS variables."
                    >
                      Info tooltip
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-custom-classname="success-tooltip"
                      data-bs-title="This top tooltip is themed via CSS variables."
                    >
                      Success tooltip
                    </button>
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
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-primary&quot; data-bs-toggle=&quot;tooltip&quot;
                        data-bs-placement=&quot;top&quot;
                        data-bs-custom-classname=&quot;primary-tooltip&quot;
                        data-bs-title=&quot;This top tooltip is themed via CSS
                        variables.&quot;&gt; Primary tooltip &lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-danger&quot; data-bs-toggle=&quot;tooltip&quot;
                        data-bs-placement=&quot;top&quot;
                        data-bs-custom-classname=&quot;danger-tooltip&quot;
                        data-bs-title=&quot;This top tooltip is themed via CSS
                        variables.&quot;&gt; Danger tooltip &lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-info&quot; data-bs-toggle=&quot;tooltip&quot;
                        data-bs-placement=&quot;top&quot;
                        data-bs-custom-classname=&quot;info-tooltip&quot;
                        data-bs-title=&quot;This top tooltip is themed via CSS
                        variables.&quot;&gt; Info tooltip &lt;/button&gt;
                        &lt;button type=&quot;button&quot; className=&quot;btn
                        btn-success&quot; data-bs-toggle=&quot;tooltip&quot;
                        data-bs-placement=&quot;top&quot;
                        data-bs-custom-classname=&quot;success-tooltip&quot;
                        data-bs-title=&quot;This top tooltip is themed via CSS
                        variables.&quot;&gt; Success tooltip &lt;/button&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}

          <div className="col-xl-3">
            <div className="card docs-nav">
              <ul className="nav bg-transparent flex-column">
                <li className="nav-item">
                  <a href="#direction" className="nav-link">
                    Direction
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#color_tooltip" className="nav-link">
                    Color Tooltip
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- end row --> */}
        {/* <!-- start tooltips--> */}
      </div>
      <Footer />
    </div>
  );
};

export default Tooltips;
