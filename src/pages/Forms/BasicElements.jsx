import React from "react";
import Footer from "../../components/Footer";

const BasicElements = () => {
  return (
    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="basic">
                  Basic Example
                  <a className="anchor-link" href="#basic">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Give textual form controls like <code>&lt;input&gt;</code>s
                  and <code>&lt;textarea&gt;</code>s an upgrade with custom
                  styles, sizing, focus states, and more.
                </p>
                <div className="">
                  <div>
                    <div className="mb-3">
                      <label htmlFor="simpleinput" className="form-label">
                        Text
                      </label>
                      <input
                        type="text"
                        id="simpleinput"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="example-email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="example-email"
                        name="example-email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="example-password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        id="example-password"
                        className="form-control"
                        defaultValue="password"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="example-palaceholder" className="form-label">
                        Placeholder
                      </label>
                      <input
                        type="text"
                        id="example-palaceholder"
                        className="form-control"
                        placeholder="placeholder"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="example-textarea" className="form-label">
                        Text area
                      </label>
                      <textarea
                        className="form-control"
                        id="example-textarea"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>

                  <div className="highlight border rounded">
                    <div className="highlight-toolbar border-top-0">
                      <small className="text-uppercase">html</small>
                      <button
                        className="btn btn-sm btn-outline-success btn-copy-clipboard"
                        data-clipboard-action="copy"
                      >
                        Copy
                      </button>
                    </div>
                    <div className="tab-content">
                      <div className="code" data-simplebar>
                        <pre className="language-html">
                          <code>
                            &lt;div className=&quot;mb-3&quot;&gt; &lt;label
                            htmlFor=&quot;simpleinput&quot;
                            className=&quot;form-label&quot;&gt;Text&lt;/label&gt;
                            &lt;input type=&quot;text&quot;
                            id=&quot;simpleinput&quot;
                            className=&quot;form-control&quot;&gt; &lt;/div&gt;
                            &lt;div className=&quot;mb-3&quot;&gt; &lt;label
                            htmlFor=&quot;example-email&quot;
                            className=&quot;form-label&quot;&gt;Email&lt;/label&gt;
                            &lt;input type=&quot;email&quot;
                            id=&quot;example-email&quot;
                            name=&quot;example-email&quot;
                            className=&quot;form-control&quot;
                            placeholder=&quot;Email&quot;&gt; &lt;/div&gt;
                            &lt;div className=&quot;mb-3&quot;&gt; &lt;label
                            htmlFor=&quot;example-password&quot;
                            className=&quot;form-label&quot;&gt;Password&lt;/label&gt;
                            &lt;input type=&quot;password&quot;
                            id=&quot;example-password&quot;
                            className=&quot;form-control&quot;
                            defaultValue=&quot;password&quot;&gt; &lt;/div&gt; &lt;div
                            className=&quot;mb-3&quot;&gt; &lt;label
                            htmlFor=&quot;example-palaceholder&quot;
                            className=&quot;form-label&quot;&gt;Placeholder&lt;/label&gt;
                            &lt;input type=&quot;text&quot;
                            id=&quot;example-palaceholder&quot;
                            className=&quot;form-control&quot;
                            placeholder=&quot;placeholder&quot;&gt; &lt;/div&gt;
                            &lt;div className=&quot;mb-3&quot;&gt; &lt;label
                            htmlFor=&quot;example-textarea&quot;
                            className=&quot;form-label&quot;&gt;Text
                            area&lt;/label&gt; &lt;textarea
                            className=&quot;form-control&quot;
                            id=&quot;example-textarea&quot;
                            rows=&quot;5&quot;&gt;&lt;/textarea&gt; &lt;/div&gt;
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="size">
                  Input Sizing
                  <a className="anchor-link" href="#size">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Set heights using classes like <code>.form-control-lg</code>{" "}
                  and <code>.form-control-sm</code>.
                </p>
                <div>
                  <div className="d-flex flex-column gap-2 mb-3 w-50">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder=".form-control-lg"
                      aria-label=".form-control-lg example"
                    />
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Default input"
                      aria-label="default input example"
                    />
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder=".form-control-sm"
                      aria-label=".form-control-sm example"
                    />
                  </div>

                  <div className="highlight border rounded">
                    <div className="highlight-toolbar border-top-0">
                      <small className="text-uppercase">html</small>
                      <button
                        className="btn btn-sm btn-outline-success btn-copy-clipboard"
                        data-clipboard-action="copy"
                      >
                        Copy
                      </button>
                    </div>
                    <div className="tab-content">
                      <div className="code" data-simplebar>
                        <pre className="language-html">
                          <code>
                            &lt;div className=&quot;d-flex flex-column gap-2
                            mb-3 w-50&quot;&gt; &lt;input
                            className=&quot;form-control form-control-lg&quot;
                            type=&quot;text&quot;
                            placeholder=&quot;.form-control-lg&quot;
                            aria-label=&quot;.form-control-lg example&quot;&gt;
                            &lt;input className=&quot;form-control&quot;
                            type=&quot;text&quot; placeholder=&quot;Default
                            input&quot; aria-label=&quot;default input
                            example&quot;&gt; &lt;input
                            className=&quot;form-control form-control-sm&quot;
                            type=&quot;text&quot;
                            placeholder=&quot;.form-control-sm&quot;
                            aria-label=&quot;.form-control-sm example&quot;&gt;
                            &lt;/div&gt;
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="disabled">
                  Disabled Input
                  <a className="anchor-link" href="#disabled">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Add the <code>disabled</code> boolean attribute on an input to
                  give it a grayed out appearance, remove pointer events, and
                  prevent focusing.
                </p>
                <div>
                  <div className="d-flex flex-column gap-2 mb-3 w-50">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Disabled input"
                      aria-label="Disabled input example"
                      disabled
                    />
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Disabled readOnly input"
                      aria-label="Disabled input example"
                      disabled
                      readOnly
                    />
                  </div>

                  <div className="highlight border rounded">
                    <div className="highlight-toolbar border-top-0">
                      <small className="text-uppercase">html</small>
                      {/* </ul> */}
                      <button
                        className="btn btn-sm btn-outline-success btn-copy-clipboard"
                        data-clipboard-action="copy"
                      >
                        Copy
                      </button>
                    </div>
                    <div className="tab-content">
                      <div className="code" data-simplebar>
                        <pre className="language-html">
                          <code>
                            &lt;input className=&quot;form-control&quot;
                            type=&quot;text&quot; placeholder=&quot;Disabled
                            input&quot; aria-label=&quot;Disabled input
                            example&quot; disabled&gt; &lt;input
                            className=&quot;form-control&quot;
                            type=&quot;text&quot; defaultValue=&quot;Disabled readOnly
                            input&quot; aria-label=&quot;Disabled input
                            example&quot; disabled readOnly&gt;
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="readOnly">
                  readOnly Input
                  <a className="anchor-link" href="#readOnly">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Add the <code>readOnly</code> boolean attribute on an input to
                  prevent modification of the input’s value.{" "}
                  <code>readOnly</code> inputs can still be focused and
                  selected, while <code>disabled</code> inputs cannot.
                </p>
                <p className="text-muted">
                  If you want to have <code>&lt;input readOnly&gt;</code>{" "}
                  elements in your form styled as plain text, replace{" "}
                  <code>.form-control</code> with{" "}
                  <code>.form-control-plaintext</code> to remove the default
                  form field styling and preserve the correct{" "}
                  <code>margin</code> and <code>padding</code>.
                </p>
                <div>
                  <div className="d-flex flex-column gap-2 mb-3 w-50">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="readOnly input here..."
                      aria-label="readOnly input example"
                      readOnly
                    />
                    <input
                      type="text"
                      readOnly
                      className="form-control-plaintext"
                      id="staticEmail"
                      defaultValue="email@example.com"
                    />
                  </div>

                  <div className="highlight border rounded">
                    <div className="highlight-toolbar border-top-0">
                      <small className="text-uppercase">html</small>
                      {/* </ul> */}
                      <button
                        className="btn btn-sm btn-outline-success btn-copy-clipboard"
                        data-clipboard-action="copy"
                      >
                        Copy
                      </button>
                    </div>
                    <div className="tab-content">
                      <div className="code" data-simplebar>
                        <pre className="language-html">
                          <code>
                            &lt;input className=&quot;form-control&quot;
                            type=&quot;text&quot; defaultValue=&quot;readOnly input
                            here...&quot; aria-label=&quot;readOnly input
                            example&quot; readOnly&gt; &lt;input
                            type=&quot;text&quot; readOnly
                            className=&quot;form-control-plaintext&quot;
                            id=&quot;staticEmail&quot;
                            defaultValue=&quot;email@example.com&quot;&gt;
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="datalists">
                  Datalists input
                  <a className="anchor-link" href="#datalists">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  If you want to have <code>&lt;input readOnly&gt;</code>{" "}
                  elements in your form styled as plain text, replace{" "}
                  <code>.form-control</code> with{" "}
                  <code>.form-control-plaintext</code> to remove the default
                  form field styling and preserve the correct{" "}
                  <code>margin</code> and <code>padding</code>.
                </p>
                <div>
                  <div className="mb-3 w-50">
                    <label htmlFor="exampleDataList" className="form-label">
                      Datalist example
                    </label>
                    <input
                      className="form-control"
                      list="datalistOptions"
                      id="exampleDataList"
                      placeholder="Type to search..."
                    />
                    {/* <datalist id="datalistOptions">
                                            <option defaultValue="San Francisco">
                                            <option defaultValue="New York">
                                            <option defaultValue="Seattle">
                                            <option defaultValue="Los Angeles">
                                            <option defaultValue="Chicago">
                                       </datalist> */}
                  </div>

                  <div className="highlight border rounded">
                    <div className="highlight-toolbar border-top-0">
                      <small className="text-uppercase">html</small>
                      {/* </ul> */}
                      <button
                        className="btn btn-sm btn-outline-success btn-copy-clipboard"
                        data-clipboard-action="copy"
                      >
                        Copy
                      </button>
                    </div>
                    <div className="tab-content">
                      <div className="code" data-simplebar>
                        <pre className="language-html">
                          <code>
                            &lt;label htmlFor=&quot;exampleDataList&quot;
                            className=&quot;form-label&quot;&gt;Datalist
                            example&lt;/label&gt; &lt;input
                            className=&quot;form-control&quot;
                            list=&quot;datalistOptions&quot;
                            id=&quot;exampleDataList&quot;
                            placeholder=&quot;Type to search...&quot;&gt;
                            &lt;datalist id=&quot;datalistOptions&quot;&gt;
                            &lt;option defaultValue=&quot;San Francisco&quot;&gt;
                            &lt;option defaultValue=&quot;New York&quot;&gt; &lt;option
                            defaultValue=&quot;Seattle&quot;&gt; &lt;option
                            defaultValue=&quot;Los Angeles&quot;&gt; &lt;option
                            defaultValue=&quot;Chicago&quot;&gt; &lt;/datalist&gt;
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="select">
                  Select
                  <a className="anchor-link" href="#select">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Custom <code>&lt;select&gt;</code> menus need only a custom
                  class, <code>.form-select</code> to trigger the custom styles.
                  Custom styles are limited to the <code>&lt;select&gt;</code>’s
                  initial appearance and cannot modify the{" "}
                  <code>&lt;option&gt;</code>s due to browser limitations.
                </p>
                <div className="mb-3 w-50">
                  <div className="mb-3">
                    <label htmlFor="example-select" className="form-label">
                      Default Input Select
                    </label>
                    <select className="form-select" id="example-select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>

                  <p className="text-muted">
                    The <code>multiple</code> attribute is also supported:
                  </p>

                  <div className="mb-3">
                    <label htmlFor="example-multiselect" className="form-label">
                      Multiple Select
                    </label>
                    <select
                      id="example-multiselect"
                      multiple=""
                      className="form-control"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>

                  <p className="text-muted">
                    As is the <code>size</code> attribute:
                  </p>

                  <label htmlFor="example-multiselectsize" className="form-label">
                    Multiple Select Size
                  </label>
                  <select
                    id="example-multiselectsize"
                    className="form-select"
                    size="3"
                    aria-label="size 3 select example"
                  >
                    <option select="true">Open this select menu</option>
                    <option defaultValue="1">One</option>
                    <option defaultValue="2">Two</option>
                    <option defaultValue="3">Three</option>
                  </select>
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
                  <div className="code" data-simplebar>
                    <pre className="language-html">
                      <code>
                        &lt;label htmlFor=&quot;example-select&quot;
                        className=&quot;form-label&quot;&gt;Default Input
                        Select&lt;/label&gt; &lt;select
                        className=&quot;form-select&quot;
                        id=&quot;example-select&quot;&gt;
                        &lt;option&gt;1&lt;/option&gt;
                        &lt;option&gt;2&lt;/option&gt;
                        &lt;option&gt;3&lt;/option&gt;
                        &lt;option&gt;4&lt;/option&gt;
                        &lt;option&gt;5&lt;/option&gt; &lt;/select&gt; &lt;label
                        htmlFor=&quot;example-multiselect&quot;
                        className=&quot;form-label&quot;&gt;Multiple
                        Select&lt;/label&gt; &lt;select
                        id=&quot;example-multiselect&quot; multiple=&quot;&quot;
                        className=&quot;form-control&quot;&gt;
                        &lt;option&gt;1&lt;/option&gt;
                        &lt;option&gt;2&lt;/option&gt;
                        &lt;option&gt;3&lt;/option&gt;
                        &lt;option&gt;4&lt;/option&gt;
                        &lt;option&gt;5&lt;/option&gt; &lt;/select&gt; &lt;label
                        htmlFor=&quot;example-multiselectsize&quot;
                        className=&quot;form-label&quot;&gt;Multiple Select
                        Size&lt;/label&gt; &lt;select
                        id=&quot;example-multiselectsize&quot;
                        className=&quot;form-select&quot; size=&quot;3&quot;
                        aria-label=&quot;size 3 select example&quot;&gt;
                        &lt;option selected&gt;Open this select
                        menu&lt;/option&gt; &lt;option
                        defaultValue=&quot;1&quot;&gt;One&lt;/option&gt; &lt;option
                        defaultValue=&quot;2&quot;&gt;Two&lt;/option&gt; &lt;option
                        defaultValue=&quot;3&quot;&gt;Three&lt;/option&gt;
                        &lt;/select&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end col --> */}

          <div className="col-xl-3">
            <div className="card docs-nav">
              <ul className="nav bg-transparent flex-column">
                <li className="nav-item">
                  <a href="#basic" className="nav-link">
                    {" "}
                    Basic Example
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#size" className="nav-link">
                    {" "}
                    Input Sizing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#disabled" className="nav-link">
                    {" "}
                    Disabled Input
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#readOnly" className="nav-link">
                    {" "}
                    readOnly Input
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#datalists" className="nav-link">
                    {" "}
                    Datalists input
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#select" className="nav-link">
                    {" "}
                    Select input
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* </div> <!-- end row --> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BasicElements;
