import React from "react";
import Footer from "../../components/Footer";

const Collapse = () => {
  return (
    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="default">
                  Default Example
                  <a className="anchor-link" href="#default">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Click the buttons below to show and hide another element via
                  class changes:
                </p>
                <ul>
                  <li>
                    <code>.collapse</code> hides content
                  </li>
                  <li>
                    <code>.collapsing</code> is applied during transitions
                  </li>
                  <li>
                    <code>.collapse.show</code> shows content
                  </li>
                </ul>
                <p className="text-muted">
                  Generally, we recommend using a button with the
                  <code>data-bs-target</code> attribute. While not recommended
                  from a semantic point of view, you can also use a link with
                  the <code>href</code> attribute (and a
                  <code>role="button"</code>). In both cases, the
                  <code>data-bs-toggle="collapse"</code> is required.
                </p>

                <div className="mb-3">
                  <div className="hstack gap-2">
                    <a
                      className="btn btn-primary mb-2"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Link with href
                    </a>
                    <button
                      className="btn btn-primary mb-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Button with data-bs-target
                    </button>
                  </div>
                  <div className="collapse" id="collapseExample">
                    <div className="card mb-0">
                      <div className="card-body">
                        Some placeholder content for the collapse component.
                        This panel is hidden by default but revealed when the
                        user activates the relevant trigger.
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
                      <code id="slidesOnly">
                        &lt;div className=&quot;hstack gap-2&quot;&gt; &lt;a
                        className=&quot;btn btn-primary mb-2&quot;
                        data-bs-toggle=&quot;collapse&quot;
                        href=&quot;#collapseExample&quot;
                        role=&quot;button&quot; aria-expanded=&quot;false&quot;
                        aria-controls=&quot;collapseExample&quot;&gt; Link with
                        href &lt;/a&gt; &lt;button className=&quot;btn
                        btn-primary mb-2&quot; type=&quot;button&quot;
                        data-bs-toggle=&quot;collapse&quot;
                        data-bs-target=&quot;#collapseExample&quot;
                        aria-expanded=&quot;false&quot;
                        aria-controls=&quot;collapseExample&quot;&gt; Button
                        with data-bs-target &lt;/button&gt; &lt;/div&gt; &lt;div
                        className=&quot;collapse&quot;
                        id=&quot;collapseExample&quot;&gt; &lt;div
                        className=&quot;card mb-0&quot;&gt; &lt;div
                        className=&quot;card-body&quot;&gt; Some placeholder
                        content for the collapse component. This panel is hidden
                        by default but revealed when the user activates the
                        relevant trigger. &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="horizontal">
                  Horizontal{" "}
                  <a className="anchor-link" href="#horizontal">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  The collapse plugin also supports horizontal collapsing. Add
                  the <code>.collapse-horizontal</code> modifier class to
                  transition the <code>width</code> instead of
                  <code>height</code> and set a <code>width</code> on the
                  immediate child element. Feel free to write your own custom
                  Sass, use inline styles, or use our width utilities.
                </p>
                <div className="mb-3">
                  <button
                    className="btn btn-primary mb-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseWidthExample"
                    aria-expanded="false"
                    aria-controls="collapseWidthExample"
                  >
                    Toggle width collapse
                  </button>
                  <div style={{ minHeight: "135px" }}>
                    <div
                      className="collapse collapse-horizontal"
                      id="collapseWidthExample"
                    >
                      <div
                        className="card card-body mb-0"
                        style={{ width: "300px" }}
                      >
                        This is some placeholder content for a horizontal
                        collapse. It's hidden by default and shown when
                        triggered.
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
                      <code id="withControls">
                        &lt;button className=&quot;btn btn-primary&quot;
                        type=&quot;button&quot;
                        data-bs-toggle=&quot;collapse&quot;
                        data-bs-target=&quot;#collapseWidthExample&quot;
                        aria-expanded=&quot;false&quot;
                        aria-controls=&quot;collapseWidthExample&quot;&gt;
                        Toggle width collapse &lt;/button&gt; &lt;div
                        style=&quot;min-height: 135px;&quot;&gt; &lt;div
                        className=&quot;collapse collapse-horizontal&quot;
                        id=&quot;collapseWidthExample&quot;&gt; &lt;div
                        className=&quot;card card-body mb-0&quot;
                        style=&quot;width: 300px;&quot;&gt; This is some
                        placeholder content for a horizontal collapse. It's
                        hidden by default and shown when triggered. &lt;/div&gt;
                        &lt;/div&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="multiple-targets">
                  Multiple Targets
                  <a className="anchor-link" href="#multiple-targets">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  A <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can
                  show and hide multiple elements by referencing them with a
                  selector in its <code>href</code> or
                  <code>data-bs-target</code> attribute. Multiple
                  <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show
                  and hide an element if they each reference it with their{" "}
                  <code>href</code> or
                  <code>data-bs-target</code> attribute
                </p>
                <div className="mb-3">
                  <div className="hstack gap-2 mb-3">
                    <a
                      className="btn btn-primary"
                      data-bs-toggle="collapse"
                      href="#multiCollapseExample1"
                      role="button"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample1"
                    >
                      Toggle first element
                    </a>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#multiCollapseExample2"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample2"
                    >
                      Toggle second element
                    </button>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target=".multi-collapse"
                      aria-expanded="false"
                      aria-controls="multiCollapseExample1 multiCollapseExample2"
                    >
                      Toggle both elements
                    </button>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div
                        className="collapse multi-collapse"
                        id="multiCollapseExample1"
                      >
                        <div className="card card-body">
                          Some placeholder content for the first collapse
                          component of this multi-collapse example. This panel
                          is hidden by default but revealed when the user
                          activates the relevant trigger.
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="collapse multi-collapse"
                        id="multiCollapseExample2"
                      >
                        <div className="card card-body">
                          Some placeholder content for the second collapse
                          component of this multi-collapse example. This panel
                          is hidden by default but revealed when the user
                          activates the relevant trigger.
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
                      <code id="backgroundsProgress">
                        &lt;div className=&quot;hstack gap-2 mb-3&quot;&gt;
                        &lt;a className=&quot;btn btn-primary&quot;
                        data-bs-toggle=&quot;collapse&quot;
                        href=&quot;#multiCollapseExample1&quot;
                        role=&quot;button&quot; aria-expanded=&quot;false&quot;
                        aria-controls=&quot;multiCollapseExample1&quot;&gt;Toggle
                        first element&lt;/a&gt; &lt;button className=&quot;btn
                        btn-primary&quot; type=&quot;button&quot;
                        data-bs-toggle=&quot;collapse&quot;
                        data-bs-target=&quot;#multiCollapseExample2&quot;
                        aria-expanded=&quot;false&quot;
                        aria-controls=&quot;multiCollapseExample2&quot;&gt;Toggle
                        second element&lt;/button&gt; &lt;button
                        className=&quot;btn btn-primary&quot;
                        type=&quot;button&quot;
                        data-bs-toggle=&quot;collapse&quot;
                        data-bs-target=&quot;.multi-collapse&quot;
                        aria-expanded=&quot;false&quot;
                        aria-controls=&quot;multiCollapseExample1
                        multiCollapseExample2&quot;&gt;Toggle both
                        elements&lt;/button&gt; &lt;/div&gt; &lt;div
                        className=&quot;row&quot;&gt; &lt;div
                        className=&quot;col&quot;&gt; &lt;div
                        className=&quot;collapse multi-collapse&quot;
                        id=&quot;multiCollapseExample1&quot;&gt; &lt;div
                        className=&quot;card card-body&quot;&gt; Some
                        placeholder content for the first collapse component of
                        this multi-collapse example. This panel is hidden by
                        default but revealed when the user activates the
                        relevant trigger. &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;div className=&quot;col&quot;&gt; &lt;div
                        className=&quot;collapse multi-collapse&quot;
                        id=&quot;multiCollapseExample2&quot;&gt; &lt;div
                        className=&quot;card card-body&quot;&gt; Some
                        placeholder content for the second collapse component of
                        this multi-collapse example. This panel is hidden by
                        default but revealed when the user activates the
                        relevant trigger. &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                        &lt;/div&gt;
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
              <div className="">
                <div className="">
                  <ul className="nav bg-transparent flex-column">
                    <li className="nav-item">
                      <a href="#default" className="nav-link">
                        Default Example
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#horizontal" className="nav-link">
                        Horizontal Collapse
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#multiple-targets" className="nav-link">
                        Multiple Targets
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

export default Collapse;
