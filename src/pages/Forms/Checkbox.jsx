import React from "react";
import Footer from "../../components/Footer";

const Checkbox = () => {
  return (
    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="checkbox-basic">
                  Checkbox
                  <a className="anchor-link" href="#checkbox-basic">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Each checkbox and radio <code>&lt;input&gt;</code> and
                  <code>&lt;label&gt;</code> pairing is wrapped in a
                  <code>&lt;div&gt;</code> to create our custom control.
                  Structurally, this is the same approach as our default
                  <code>.form-check</code>.
                </p>

                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck1"
                    />
                    <label className="form-check-label" htmlFor="customCheck1">
                      Check this custom checkbox
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck2"
                    />
                    <label className="form-check-label" htmlFor="customCheck2">
                      Check this custom checkbox
                    </label>
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
                  <div className="code" data-simplebar>
                    <pre className="language-html">
                      <code>
                        &lt;div className=&quot;form-check&quot;&gt; &lt;input
                        type=&quot;checkbox&quot;
                        className=&quot;form-check-input&quot;
                        id=&quot;customCheck1&quot;&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;customCheck1&quot;&gt;Check this custom
                        checkbox&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check&quot;&gt; &lt;input
                        type=&quot;checkbox&quot;
                        className=&quot;form-check-input&quot;
                        id=&quot;customCheck2&quot;&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;customCheck2&quot;&gt;Check this custom
                        checkbox&lt;/label&gt; &lt;/div&gt;
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
                <h5
                  className="card-title mb-1 anchor mb-3"
                  id="inline-checkbox"
                >
                  Inline Checkbox
                  <a className="anchor-link" href="#inline-checkbox">
                    #
                  </a>
                </h5>

                <div className="mb-3">
                  <div className="mt-2">
                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck3"
                      />
                      <label className="form-check-label" htmlFor="customCheck3">
                        Check this custom checkbox
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck4"
                      />
                      <label className="form-check-label" htmlFor="customCheck4">
                        Check this custom checkbox
                      </label>
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
                  <div className="code" data-simplebar>
                    <pre className="language-html">
                      <code>
                        &lt;div className=&quot;form-check
                        form-check-inline&quot;&gt; &lt;input
                        type=&quot;checkbox&quot;
                        className=&quot;form-check-input&quot;
                        id=&quot;customCheck3&quot;&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;customCheck3&quot;&gt;Check this custom
                        checkbox&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-check-inline&quot;&gt;
                        &lt;input type=&quot;checkbox&quot;
                        className=&quot;form-check-input&quot;
                        id=&quot;customCheck4&quot;&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;customCheck4&quot;&gt;Check this custom
                        checkbox&lt;/label&gt; &lt;/div&gt;
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
                <h5
                  className="card-title mb-1 anchor mb-3"
                  id="disabled-checkbox"
                >
                  Disabled Checkbox
                  <a className="anchor-link" href="#disabled-checkbox">
                    #
                  </a>
                </h5>

                <div className="mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck5"
                      defaultChecked
                      disabled
                    />
                    <label className="form-check-label" htmlFor="customCheck5">
                      Check this custom checkbox
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck6"
                      disabled
                    />
                    <label className="form-check-label" htmlFor="customCheck6">
                      Check this custom checkbox
                    </label>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-toolbar">
                    <h6 className="text-muted text-uppercase">html</h6>
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
                        &lt;div className=&quot;form-check
                        form-check-inline&quot;&gt; &lt;input
                        type=&quot;checkbox&quot;
                        className=&quot;form-check-input&quot;
                        id=&quot;customCheck5&quot; checked disabled&gt;
                        &lt;label className=&quot;form-check-label&quot;
                        htmlFor=&quot;customCheck5&quot;&gt;Check this custom
                        checkbox&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-check-inline&quot;&gt;
                        &lt;input type=&quot;checkbox&quot;
                        className=&quot;form-check-input&quot;
                        id=&quot;customCheck6&quot; disabled&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;customCheck6&quot;&gt;Check this custom
                        checkbox&lt;/label&gt; &lt;/div&gt;
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
                <h5
                  className="card-title mb-1 anchor mb-3"
                  id="colors-checkbox"
                >
                  Colors Checkbox
                  <a className="anchor-link" href="#colors-checkbox">
                    #
                  </a>
                </h5>

                <div className="mb-3">
                  {/* <!-- Colors--> */}
                  <div className="form-check mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckcolor1"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="customCheckcolor1">
                      Default Checkbox
                    </label>
                  </div>
                  <div className="form-check form-checkbox-success mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckcolor2"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="customCheckcolor2">
                      Success Checkbox
                    </label>
                  </div>
                  <div className="form-check form-checkbox-info mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckcolor3"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="customCheckcolor3">
                      Info Checkbox
                    </label>
                  </div>
                  <div className="form-check form-checkbox-secondary mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckcolor6"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="customCheckcolor6">
                      Secondary Checkbox
                    </label>
                  </div>
                  <div className="form-check form-checkbox-warning mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckcolor4"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="customCheckcolor4">
                      Warning Checkbox
                    </label>
                  </div>
                  <div className="form-check form-checkbox-danger mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckcolor5"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="customCheckcolor5">
                      Danger Checkbox
                    </label>
                  </div>
                  <div className="form-check form-checkbox-dark">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckcolor7"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="customCheckcolor7">
                      Dark Checkbox
                    </label>
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
                  <div className="code" data-simplebar>
                    <pre className="language-html">
                      <code>
                        &lt;div className=&quot;form-check mb-2&quot;&gt;
                        &lt;input type=&quot;checkbox&quot;
                        className=&quot;form-check-input&quot;
                        id=&quot;customCheckcolor1&quot; checked&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;customCheckcolor1&quot;&gt;Default
                        Checkbox&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-checkbox-success
                        mb-2&quot;&gt; &lt;input type=&quot;checkbox&quot;
                        className=&quot;form-check-input&quot;
                        id=&quot;customCheckcolor2&quot; checked&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;customCheckcolor2&quot;&gt;Success
                        Checkbox&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-checkbox-info
                        mb-2&quot;&gt; &lt;input type=&quot;checkbox&quot;
                        className=&quot;form-check-input&quot;
                        id=&quot;customCheckcolor3&quot; checked&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;customCheckcolor3&quot;&gt;Info
                        Checkbox&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-checkbox-secondary
                        mb-2&quot;&gt; &lt;input type=&quot;checkbox&quot;
                        className=&quot;form-check-input&quot;
                        id=&quot;customCheckcolor6&quot; checked&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;customCheckcolor6&quot;&gt;Secondary
                        Checkbox&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-checkbox-warning
                        mb-2&quot;&gt; &lt;input type=&quot;checkbox&quot;
                        className=&quot;form-check-input&quot;
                        id=&quot;customCheckcolor4&quot; checked&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;customCheckcolor4&quot;&gt;Warning
                        Checkbox&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-checkbox-danger
                        mb-2&quot;&gt; &lt;input type=&quot;checkbox&quot;
                        className=&quot;form-check-input&quot;
                        id=&quot;customCheckcolor5&quot; checked&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;customCheckcolor5&quot;&gt;Danger
                        Checkbox&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-checkbox-dark&quot;&gt;
                        &lt;input type=&quot;checkbox&quot;
                        className=&quot;form-check-input&quot;
                        id=&quot;customCheckcolor7&quot; checked&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;customCheckcolor7&quot;&gt;Dark
                        Checkbox&lt;/label&gt; &lt;/div&gt;
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
                <h5 className="card-title mb-1 anchor" id="radio-basic">
                  Radio
                  <a className="anchor-link" href="#radio-basic">
                    #
                  </a>
                </h5>
                <p className="text-muted font-14">
                  Each Radio <code>&lt;input&gt;</code> and
                  <code>&lt;label&gt;</code> pairing is wrapped in a
                  <code>&lt;div&gt;</code> to create our custom control.
                  Structurally, this is the same approach as our default
                  <code>.form-check</code>.
                </p>

                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Default radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Default checked radio
                    </label>
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
                  <div className="code" data-simplebar>
                    <pre className="language-html">
                      <code>
                        &lt;div className=&quot;form-check&quot;&gt; &lt;input
                        className=&quot;form-check-input&quot;
                        type=&quot;radio&quot; name=&quot;flexRadioDefault&quot;
                        id=&quot;flexRadioDefault1&quot;&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;flexRadioDefault1&quot;&gt; Default radio
                        &lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check&quot;&gt; &lt;input
                        className=&quot;form-check-input&quot;
                        type=&quot;radio&quot; name=&quot;flexRadioDefault&quot;
                        id=&quot;flexRadioDefault2&quot; checked&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;flexRadioDefault2&quot;&gt; Default checked
                        radio &lt;/label&gt; &lt;/div&gt;
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
                <h5 className="card-title mb-1 anchor mb-3" id="inline-radio">
                  Inline Radio
                  <a className="anchor-link" href="#inline-radio">
                    #
                  </a>
                </h5>

                <div className="mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Check this custom checkbox
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Check this custom checkbox
                    </label>
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
                  <div className="code" data-simplebar>
                    <pre className="language-html">
                      <code>
                        &lt;div className=&quot;form-check
                        form-check-inline&quot;&gt; &lt;input
                        className=&quot;form-check-input&quot;
                        type=&quot;radio&quot;
                        name=&quot;inlineRadioOptions&quot;
                        id=&quot;inlineRadio1&quot;
                        value=&quot;option1&quot;&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;inlineRadio1&quot;&gt;Check this custom
                        checkbox&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-check-inline&quot;&gt;
                        &lt;input className=&quot;form-check-input&quot;
                        type=&quot;radio&quot;
                        name=&quot;inlineRadioOptions&quot;
                        id=&quot;inlineRadio2&quot;
                        value=&quot;option2&quot;&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;inlineRadio2&quot;&gt;Check this custom
                        checkbox&lt;/label&gt; &lt;/div&gt;
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
                <h5 className="card-title mb-1 anchor mb-3" id="disabled-radio">
                  Disabled Radio
                  <a className="anchor-link" href="#disabled-radio">
                    #
                  </a>
                </h5>

                <div className="mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="customCheck5"
                      checked
                      disabled
                    />
                    <label className="form-check-label" htmlFor="customCheck5">
                      Check this custom checkbox
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="customCheck6"
                      disabled
                    />
                    <label className="form-check-label" htmlFor="customCheck6">
                      Check this custom checkbox
                    </label>
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
                  <div className="code" data-simplebar>
                    <pre className="language-html">
                      <code>
                        &lt;div className=&quot;form-check
                        form-check-inline&quot;&gt; &lt;input
                        type=&quot;radio&quot;
                        className=&quot;form-check-input&quot;
                        id=&quot;customCheck5&quot; checked disabled&gt;
                        &lt;label className=&quot;form-check-label&quot;
                        htmlFor=&quot;customCheck5&quot;&gt;Check this custom
                        checkbox&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-check-inline&quot;&gt;
                        &lt;input type=&quot;radio&quot;
                        className=&quot;form-check-input&quot;
                        id=&quot;customCheck6&quot; disabled&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;customCheck6&quot;&gt;Check this custom
                        checkbox&lt;/label&gt; &lt;/div&gt;
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
                <h5 className="card-title mb-1 anchor mb-3" id="colors-radio">
                  Colors Radio
                  <a className="anchor-link" href="#colors-radio">
                    #
                  </a>
                </h5>

                <div className="mb-3">
                  <div className="form-check mb-2">
                    <input
                      type="radio"
                      id="customRadiocolor1"
                      name="customRadiocolor1"
                      className="form-check-input"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="customRadiocolor1">
                      Default Radio
                    </label>
                  </div>
                  <div className="form-check form-radio-success mb-2">
                    <input
                      type="radio"
                      id="customRadiocolor2"
                      name="customRadiocolor2"
                      className="form-check-input"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="customRadiocolor2">
                      Success Radio
                    </label>
                  </div>
                  <div className="form-check form-radio-info mb-2">
                    <input
                      type="radio"
                      id="customRadiocolor3"
                      name="customRadiocolor3"
                      className="form-check-input"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="customRadiocolor3">
                      Info Radio
                    </label>
                  </div>
                  <div className="form-check form-radio-secondary mb-2">
                    <input
                      type="radio"
                      id="customRadiocolor6"
                      name="customRadiocolor6"
                      className="form-check-input"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="customRadiocolor6">
                      Secondary Radio
                    </label>
                  </div>
                  <div className="form-check form-radio-warning mb-2">
                    <input
                      type="radio"
                      id="customRadiocolor4"
                      name="customRadiocolor4"
                      className="form-check-input"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="customRadiocolor4">
                      Warning Radio
                    </label>
                  </div>
                  <div className="form-check form-radio-danger mb-2">
                    <input
                      type="radio"
                      id="customRadiocolor5"
                      name="customRadiocolor5"
                      className="form-check-input"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="customRadiocolor5">
                      Danger Radio
                    </label>
                  </div>
                  <div className="form-check form-radio-dark">
                    <input
                      type="radio"
                      id="customRadiocolor7"
                      name="customRadiocolor7"
                      className="form-check-input"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="customRadiocolor7">
                      Dark Radio
                    </label>
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
                  <div className="code" data-simplebar>
                    <pre className="language-html">
                      <code>
                        &lt;div className=&quot;form-check mb-2&quot;&gt;
                        &lt;input type=&quot;radio&quot;
                        id=&quot;customRadiocolor1&quot;
                        name=&quot;customRadiocolor1&quot;
                        className=&quot;form-check-input&quot; checked&gt;
                        &lt;label className=&quot;form-check-label&quot;
                        htmlFor=&quot;customRadiocolor1&quot;&gt;Default
                        Radio&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-radio-success
                        mb-2&quot;&gt; &lt;input type=&quot;radio&quot;
                        id=&quot;customRadiocolor2&quot;
                        name=&quot;customRadiocolor2&quot;
                        className=&quot;form-check-input&quot; checked&gt;
                        &lt;label className=&quot;form-check-label&quot;
                        htmlFor=&quot;customRadiocolor2&quot;&gt;Success
                        Radio&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-radio-info
                        mb-2&quot;&gt; &lt;input type=&quot;radio&quot;
                        id=&quot;customRadiocolor3&quot;
                        name=&quot;customRadiocolor3&quot;
                        className=&quot;form-check-input&quot; checked&gt;
                        &lt;label className=&quot;form-check-label&quot;
                        htmlFor=&quot;customRadiocolor3&quot;&gt;Info
                        Radio&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-radio-secondary
                        mb-2&quot;&gt; &lt;input type=&quot;radio&quot;
                        id=&quot;customRadiocolor6&quot;
                        name=&quot;customRadiocolor6&quot;
                        className=&quot;form-check-input&quot; checked&gt;
                        &lt;label className=&quot;form-check-label&quot;
                        htmlFor=&quot;customRadiocolor6&quot;&gt;Secondary
                        Radio&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-radio-warning
                        mb-2&quot;&gt; &lt;input type=&quot;radio&quot;
                        id=&quot;customRadiocolor4&quot;
                        name=&quot;customRadiocolor4&quot;
                        className=&quot;form-check-input&quot; checked&gt;
                        &lt;label className=&quot;form-check-label&quot;
                        htmlFor=&quot;customRadiocolor4&quot;&gt;Warning
                        Radio&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-radio-danger
                        mb-2&quot;&gt; &lt;input type=&quot;radio&quot;
                        id=&quot;customRadiocolor5&quot;
                        name=&quot;customRadiocolor5&quot;
                        className=&quot;form-check-input&quot; checked&gt;
                        &lt;label className=&quot;form-check-label&quot;
                        htmlFor=&quot;customRadiocolor5&quot;&gt;Danger
                        Radio&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-radio-dark&quot;&gt;
                        &lt;input type=&quot;radio&quot;
                        id=&quot;customRadiocolor7&quot;
                        name=&quot;customRadiocolor7&quot;
                        className=&quot;form-check-input&quot; checked&gt;
                        &lt;label className=&quot;form-check-label&quot;
                        htmlFor=&quot;customRadiocolor7&quot;&gt;Dark
                        Radio&lt;/label&gt; &lt;/div&gt;
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
                <h5 className="card-title mb-1 anchor" id="switch-basic">
                  Switch
                  <a className="anchor-link" href="#switch-basic">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  A switch has the markup of a custom checkbox but uses the
                  <code>.form-switch</code> class to render a toggle switch.
                  Switches also support the <code>disabled</code> attribute.
                </p>
                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Default switch checkbox input
                    </label>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckChecked"
                    >
                      Checked switch checkbox input
                    </label>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDisabled"
                      disabled
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDisabled"
                    >
                      Disabled switch checkbox input
                    </label>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckCheckedDisabled"
                      checked
                      disabled
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckCheckedDisabled"
                    >
                      Disabled checked switch checkbox input
                    </label>
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
                  <div className="code" data-simplebar>
                    <pre className="language-html">
                      <code>
                        &lt;div className=&quot;form-check form-switch&quot;&gt;
                        &lt;input className=&quot;form-check-input&quot;
                        type=&quot;checkbox&quot; role=&quot;switch&quot;
                        id=&quot;flexSwitchCheckDefault&quot;&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;flexSwitchCheckDefault&quot;&gt;Default switch
                        checkbox input&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-switch&quot;&gt;
                        &lt;input className=&quot;form-check-input&quot;
                        type=&quot;checkbox&quot; role=&quot;switch&quot;
                        id=&quot;flexSwitchCheckChecked&quot; checked&gt;
                        &lt;label className=&quot;form-check-label&quot;
                        htmlFor=&quot;flexSwitchCheckChecked&quot;&gt;Checked switch
                        checkbox input&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-switch&quot;&gt;
                        &lt;input className=&quot;form-check-input&quot;
                        type=&quot;checkbox&quot; role=&quot;switch&quot;
                        id=&quot;flexSwitchCheckDisabled&quot; disabled&gt;
                        &lt;label className=&quot;form-check-label&quot;
                        htmlFor=&quot;flexSwitchCheckDisabled&quot;&gt;Disabled
                        switch checkbox input&lt;/label&gt; &lt;/div&gt; &lt;div
                        className=&quot;form-check form-switch&quot;&gt;
                        &lt;input className=&quot;form-check-input&quot;
                        type=&quot;checkbox&quot; role=&quot;switch&quot;
                        id=&quot;flexSwitchCheckCheckedDisabled&quot; checked
                        disabled&gt; &lt;label
                        className=&quot;form-check-label&quot;
                        htmlFor=&quot;flexSwitchCheckCheckedDisabled&quot;&gt;Disabled
                        checked switch checkbox input&lt;/label&gt; &lt;/div&gt;
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
                  <a href="#checkbox-basic" className="nav-link">
                    Checkbox
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#inline-checkbox" className="nav-link">
                    Inline Checkbox
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#disabled-checkbox" className="nav-link">
                    Disabled Checkbox
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#colors-checkbox" className="nav-link">
                    Colors Checkbox
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#radio-basic" className="nav-link">
                    Radio
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#inline-radio" className="nav-link">
                    Inline Radio
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#disabled-radio" className="nav-link">
                    Disabled Radio
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#colors-radio" className="nav-link">
                    Colors Radio
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#switch-basic" className="nav-link">
                    Switch
                  </a>
                </li>
              </ul>
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

export default Checkbox;
