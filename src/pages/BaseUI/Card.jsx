/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../../components/Footer";

const Card = () => {
  return (
    <div className="page-content">
      <div className="container">
        {/* <!-- start cards --> */}
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="card mb-3 mb-xl-0">
              <img
                className="card-img-top img-fluid"
                src="assets/images/small/img-1.jpg"
                alt="img-1"
              />
              <div className="card-body">
                <h5 className="card-title mb-2">Card title</h5>
                <p className="card-text text-muted">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. With supporting text below as
                  a natural lead-in to additional content.
                </p>
                <a href="javascript:void(0);" className="btn btn-primary">
                  Button
                </a>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
          <div className="col-xl-3 col-md-6">
            <div className="card mb-3">
              <img
                className="card-img-top img-fluid"
                src="assets/images/small/img-2.jpg"
                alt="img-2"
              />
              <div className="card-body">
                <h5 className="card-title mb-2">Card title</h5>
                <p className="card-text text-muted">
                  Some quick example text to build on the card title.
                </p>
              </div>
              {/* <!-- end card body --> */}
              <ul className="list-group list-group-flush text-muted">
                <li className="list-group-item text-muted">
                  Dapibus ac facilisis in
                </li>
              </ul>
              <div className="card-body">
                <a
                  href="javascript:void(0);"
                  className="card-link text-primary"
                >
                  Card link
                </a>
                <a
                  href="javascript:void(0);"
                  className="card-link text-primary"
                >
                  Another link
                </a>
              </div>
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
          <div className="col-xl-3 col-md-6">
            <div className="card mb-3 mb-xl-0">
              <img
                className="card-img-top img-fluid"
                src="assets/images/small/img-4.jpg"
                alt="img-4"
              />
              <div className="card-body">
                <p className="card-text text-muted">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. With supporting text below as
                  a natural lead-in to additional content.
                </p>
                <a href="javascript:void(0);" className="btn btn-primary">
                  Button
                </a>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
          <div className="col-xl-3 col-md-6">
            <div className="card mb-3 mb-xl-0">
              <div className="card-body">
                <h5 className="card-title mb-0">Card title</h5>
              </div>
              <img
                className="img-fluid"
                src="assets/images/small/img-5.jpg"
                alt="img-5"
              />
              <div className="card-body">
                <p className="card-text text-muted">
                  Some quick example text to build on the card title.
                </p>
                <a
                  href="javascript:void(0);"
                  className="card-link text-primary"
                >
                  Card link
                </a>
                <a
                  href="javascript:void(0);"
                  className="card-link text-primary"
                >
                  Another link
                </a>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}

        <div className="card highlight">
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
              <code id="defaultButtons">
                &lt;div className=&quot;card mb-3 mb-xl-0&quot;&gt; &lt;img
                className=&quot;card-img-top img-fluid&quot;
                src=&quot;assets/images/small/img-1.jpg&quot;
                alt=&quot;img-1&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2&quot;&gt;Card title&lt;/h5&gt;
                &lt;p className=&quot;card-text text-muted&quot;&gt; Some quick
                example text to build on the card title and make up the bulk of
                the card's content. With supporting text below as a natural
                lead-in to additional content. &lt;/p&gt; &lt;a
                href=&quot;javascript:void(0);&quot; className=&quot;btn
                btn-primary&quot;&gt;Button&lt;/a&gt; &lt;/div&gt; &lt;!-- end
                card body --&gt; &lt;/div&gt; &lt;!-- end card --&gt; &lt;div
                className=&quot;card mb-3&quot;&gt; &lt;img
                className=&quot;card-img-top img-fluid&quot;
                src=&quot;assets/images/small/img-2.jpg&quot;
                alt=&quot;img-2&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2&quot;&gt;Card title&lt;/h5&gt;
                &lt;p className=&quot;card-text text-muted&quot;&gt;Some quick
                example text to build on the card title.&lt;/p&gt; &lt;/div&gt;
                &lt;!-- end card body --&gt; &lt;ul className=&quot;list-group
                list-group-flush text-muted&quot;&gt; &lt;li
                className=&quot;list-group-item text-muted&quot;&gt;Dapibus ac
                facilisis in&lt;/li&gt; &lt;/ul&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;a
                href=&quot;javascript:void(0);&quot; className=&quot;card-link
                text-primary&quot;&gt;Card link&lt;/a&gt; &lt;a
                href=&quot;javascript:void(0);&quot; className=&quot;card-link
                text-primary&quot;&gt;Another link&lt;/a&gt; &lt;/div&gt;
                &lt;/div&gt; &lt;!-- end card --&gt; &lt;div
                className=&quot;card mb-3 mb-xl-0&quot;&gt; &lt;img
                className=&quot;card-img-top img-fluid&quot;
                src=&quot;assets/images/small/img-4.jpg&quot;
                alt=&quot;img-4&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;p
                className=&quot;card-text text-muted&quot;&gt; Some quick
                example text to build on the card title and make up the bulk of
                the card's content. With supporting text below as a natural
                lead-in to additional content. &lt;/p&gt; &lt;a
                href=&quot;javascript:void(0);&quot; className=&quot;btn
                btn-primary&quot;&gt;Button&lt;/a&gt; &lt;/div&gt; &lt;!-- end
                card body --&gt; &lt;/div&gt; &lt;!-- end card --&gt; &lt;div
                className=&quot;card mb-3 mb-xl-0&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-0&quot;&gt;Card title&lt;/h5&gt;
                &lt;/div&gt; &lt;img className=&quot;img-fluid&quot;
                src=&quot;assets/images/small/img-5.jpg&quot;
                alt=&quot;img-5&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;p
                className=&quot;card-text text-muted&quot;&gt;Some quick example
                text to build on the card title.&lt;/p&gt; &lt;a
                href=&quot;javascript:void(0);&quot; className=&quot;card-link
                text-primary&quot;&gt;Card link&lt;/a&gt; &lt;a
                href=&quot;javascript:void(0);&quot; className=&quot;card-link
                text-primary&quot;&gt;Another link&lt;/a&gt; &lt;/div&gt;
                &lt;!-- end card body --&gt; &lt;/div&gt; &lt;!-- end card
                --&gt;
              </code>
            </pre>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="card card-body">
              <h5 className="card-title mb-1">Special title treatment</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="javascript: void(0);" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}
          <div className="col-sm-6">
            <div className="card card-body">
              <h5 className="card-title mb-1">Special title treatment</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="javascript: void(0);" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}
        </div>
        {/* <!-- end row --> */}

        <div className="card highlight">
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
              <code id="defaultButtons">
                &lt;div className=&quot;card card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-1&quot;&gt;Special title
                treatment&lt;/h5&gt; &lt;p
                className=&quot;card-text&quot;&gt;Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.&lt;/p&gt; &lt;a
                href=&quot;javascript: void(0);&quot; className=&quot;btn
                btn-primary&quot;&gt;Go somewhere&lt;/a&gt; &lt;/div&gt; &lt;!--
                end card--&gt; &lt;div className=&quot;card card-body&quot;&gt;
                &lt;h5 className=&quot;card-title mb-1&quot;&gt;Special title
                treatment&lt;/h5&gt; &lt;p
                className=&quot;card-text&quot;&gt;Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.&lt;/p&gt; &lt;a
                href=&quot;javascript: void(0);&quot; className=&quot;btn
                btn-primary&quot;&gt;Go somewhere&lt;/a&gt; &lt;/div&gt; &lt;!--
                end card--&gt;
              </code>
            </pre>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h5 className="card-title mb-1">Special title treatment</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="javascript: void(0);" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              {/* <!-- end card-body--> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Quote</div>
              <div className="card-body">
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in <cite>Source Title</cite>
                  </footer>
                </blockquote>
              </div>
              {/* <!-- end card-body--> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <a href="javascript: void(0);" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}
        </div>
        {/* <!-- end row --> */}

        <div className="card highlight">
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
              <code id="defaultButtons">
                &lt;div className=&quot;card&quot;&gt; &lt;div
                className=&quot;card-header&quot;&gt;Featured&lt;/div&gt;
                &lt;div className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-1&quot;&gt;Special title
                treatment&lt;/h5&gt; &lt;p
                className=&quot;card-text&quot;&gt;Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.&lt;/p&gt; &lt;a
                href=&quot;javascript: void(0);&quot; className=&quot;btn
                btn-primary&quot;&gt;Go somewhere&lt;/a&gt; &lt;/div&gt; &lt;!--
                end card-body--&gt; &lt;/div&gt; &lt;!-- end card--&gt; &lt;div
                className=&quot;card&quot;&gt; &lt;div
                className=&quot;card-header&quot;&gt;Quote&lt;/div&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;blockquote&gt;
                &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer posuere erat a ante.&lt;/p&gt;
                &lt;footer&gt;Someone famous in &lt;cite&gt;Source
                Title&lt;/cite&gt;&lt;/footer&gt; &lt;/blockquote&gt;
                &lt;/div&gt; &lt;!-- end card-body--&gt; &lt;/div&gt; &lt;!--
                end card--&gt; &lt;div className=&quot;card&quot;&gt; &lt;div
                className=&quot;card-header&quot;&gt;Featured&lt;/div&gt;
                &lt;div className=&quot;card-body&quot;&gt; &lt;a
                href=&quot;javascript: void(0);&quot; className=&quot;btn
                btn-primary&quot;&gt;Go somewhere&lt;/a&gt; &lt;/div&gt; &lt;div
                className=&quot;card-footer text-muted&quot;&gt;2 days
                ago&lt;/div&gt; &lt;/div&gt; &lt;!-- end card--&gt;
              </code>
            </pre>
          </div>
        </div>

        {/* <!-- Color Card Start --> */}
        <div className="row">
          <div className="col-12">
            <h5 className="card-title mb-3">Card Colored</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card text-bg-primary">
              <div className="card-body">
                <h5 className="card-title text-white mb-2">
                  Special title treatment
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a href="javascript: void(0);" className="btn btn-light btn-sm">
                  Button
                </a>
              </div>
              {/* <!-- end card-body--> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}

          <div className="col-md-4">
            <div className="card bg-secondary text-white">
              <div className="card-body">
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
              {/* <!-- end card-body--> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}

          <div className="col-md-4">
            <div className="card text-bg-success">
              <div className="card-body">
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
              {/* <!-- end card-body--> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}

          <div className="col-md-4">
            <div className="card text-bg-info">
              <div className="card-body">
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
              {/* <!-- end card-body--> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}

          <div className="col-md-4">
            <div className="card text-bg-warning">
              <div className="card-body">
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
              {/* <!-- end card-body--> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}

          <div className="col-md-4">
            <div className="card text-bg-danger">
              <div className="card-body">
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer>
                    Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
              {/* <!-- end card-body--> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}
        </div>
        {/* <!-- end row --> */}

        <div className="card highlight">
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
              <code id="defaultButtons">
                &lt;div className=&quot;card text-bg-primary&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title text-white mb-2&quot;&gt;Special
                title treatment&lt;/h5&gt; &lt;p
                className=&quot;card-text&quot;&gt;Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.&lt;/p&gt; &lt;a
                href=&quot;javascript: void(0);&quot; className=&quot;btn
                btn-light btn-sm&quot;&gt;Button&lt;/a&gt; &lt;/div&gt; &lt;!--
                end card-body--&gt; &lt;/div&gt; &lt;!-- end card--&gt; &lt;div
                className=&quot;card bg-secondary text-white&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;blockquote&gt;
                &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer posuere erat a ante.&lt;/p&gt;
                &lt;footer&gt;Someone famous in &lt;cite title=&quot;Source
                Title&quot;&gt;Source Title&lt;/cite&gt;&lt;/footer&gt;
                &lt;/blockquote&gt; &lt;/div&gt; &lt;!-- end card-body--&gt;
                &lt;/div&gt; &lt;!-- end card--&gt; &lt;div className=&quot;card
                text-bg-success&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;blockquote&gt;
                &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer posuere erat a ante.&lt;/p&gt;
                &lt;footer&gt;Someone famous in &lt;cite title=&quot;Source
                Title&quot;&gt;Source Title&lt;/cite&gt;&lt;/footer&gt;
                &lt;/blockquote&gt; &lt;/div&gt; &lt;!-- end card-body--&gt;
                &lt;/div&gt; &lt;!-- end card--&gt; &lt;div className=&quot;card
                text-bg-info&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;blockquote&gt;
                &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer posuere erat a ante.&lt;/p&gt;
                &lt;footer&gt;Someone famous in &lt;cite title=&quot;Source
                Title&quot;&gt;Source Title&lt;/cite&gt;&lt;/footer&gt;
                &lt;/blockquote&gt; &lt;/div&gt; &lt;!-- end card-body--&gt;
                &lt;/div&gt; &lt;!-- end card--&gt; &lt;div className=&quot;card
                text-bg-warning&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;blockquote&gt;
                &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer posuere erat a ante.&lt;/p&gt;
                &lt;footer&gt;Someone famous in &lt;cite title=&quot;Source
                Title&quot;&gt;Source Title&lt;/cite&gt;&lt;/footer&gt;
                &lt;/blockquote&gt; &lt;/div&gt; &lt;!-- end card-body--&gt;
                &lt;/div&gt; &lt;!-- end card--&gt; &lt;div className=&quot;card
                text-bg-danger&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;blockquote&gt;
                &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer posuere erat a ante.&lt;/p&gt;
                &lt;footer&gt;Someone famous in &lt;cite title=&quot;Source
                Title&quot;&gt;Source Title&lt;/cite&gt;&lt;/footer&gt;
                &lt;/blockquote&gt; &lt;/div&gt; &lt;!-- end card-body--&gt;
                &lt;/div&gt; &lt;!-- end card--&gt;
              </code>
            </pre>
          </div>
        </div>
        {/* <!-- Color Card End --> */}

        {/* <!-- Card Border Start --> */}
        <div className="row">
          <div className="col-12">
            <h5 className="card-title mb-3">Card Bordered</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card border-primary border">
              <div className="card-body">
                <h5 className="card-title text-primary mb-2">
                  Special title treatment
                </h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="javascript: void(0);"
                  className="btn btn-primary btn-sm"
                >
                  Button
                </a>
              </div>
              {/* <!-- end card-body--> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}

          <div className="col-md-4">
            <div className="card border-secondary border">
              <div className="card-body">
                <h5 className="card-title mb-2">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="javascript: void(0);"
                  className="btn btn-secondary btn-sm"
                >
                  Button
                </a>
              </div>
              {/* <!-- end card-body--> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}

          <div className="col-md-4">
            <div className="card border-success border">
              <div className="card-body">
                <h5 className="card-title mb-2 text-success">
                  Special title treatment
                </h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="javascript: void(0);"
                  className="btn btn-success btn-sm"
                >
                  Button
                </a>
              </div>
              {/* <!-- end card-body--> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}
        </div>
        {/* <!-- end row --> */}

        <div className="card highlight">
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
              <code id="defaultButtons">
                &lt;div className=&quot;card border-primary border&quot;&gt;
                &lt;div className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title text-primary mb-2&quot;&gt;Special
                title treatment&lt;/h5&gt; &lt;p
                className=&quot;card-text&quot;&gt;With supporting text below as
                a natural lead-in to additional content.&lt;/p&gt; &lt;a
                href=&quot;javascript: void(0);&quot; className=&quot;btn
                btn-primary btn-sm&quot;&gt;Button&lt;/a&gt; &lt;/div&gt;
                &lt;!-- end card-body--&gt; &lt;/div&gt; &lt;!-- end card--&gt;
                &lt;div className=&quot;card border-secondary border&quot;&gt;
                &lt;div className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2&quot;&gt;Special title
                treatment&lt;/h5&gt; &lt;p
                className=&quot;card-text&quot;&gt;With supporting text below as
                a natural lead-in to additional content.&lt;/p&gt; &lt;a
                href=&quot;javascript: void(0);&quot; className=&quot;btn
                btn-secondary btn-sm&quot;&gt;Button&lt;/a&gt; &lt;/div&gt;
                &lt;!-- end card-body--&gt; &lt;/div&gt; &lt;!-- end card--&gt;
                &lt;div className=&quot;card border-success border&quot;&gt;
                &lt;div className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2 text-success&quot;&gt;Special
                title treatment&lt;/h5&gt; &lt;p
                className=&quot;card-text&quot;&gt;With supporting text below as
                a natural lead-in to additional content.&lt;/p&gt; &lt;a
                href=&quot;javascript: void(0);&quot; className=&quot;btn
                btn-success btn-sm&quot;&gt;Button&lt;/a&gt; &lt;/div&gt;
                &lt;!-- end card-body--&gt; &lt;/div&gt; &lt;!-- end card--&gt;
              </code>
            </pre>
          </div>
        </div>
        {/* <!-- Card Border End --> */}
        {/* 
          <!-- Horizontal Card Start --> */}
        <div className="row">
          <div className="col-12">
            <h5 className="card-title mb-3">Horizontal Card</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="assets/images/small/img-1.jpg"
                    className="img-fluid rounded-start h-100"
                    alt="img-1"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title mb-2">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                  {/* <!-- end card-body--> */}
                </div>
                {/* <!-- end col --> */}
              </div>
              {/* <!-- end row--> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}
          <div className="col-lg-6">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title mb-2">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                  {/* <!-- end card-body --> */}
                </div>
                {/* <!-- end col --> */}
                <div className="col-md-4">
                  <img
                    src="assets/images/small/img-2.jpg"
                    className="img-fluid rounded-end h-100"
                    alt="img-2"
                  />
                </div>
                {/* <!-- end col --> */}
              </div>
              {/* <!-- end row--> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col--> */}
        </div>
        {/* <!-- end row --> */}

        <div className="card highlight">
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
              <code id="defaultButtons">
                &lt;div className=&quot;card&quot;&gt; &lt;div
                className=&quot;row g-0&quot;&gt; &lt;div
                className=&quot;col-md-4&quot;&gt; &lt;img
                src=&quot;assets/images/small/img-1.jpg&quot;
                className=&quot;img-fluid rounded-start h-100&quot;
                alt=&quot;img-1&quot;&gt; &lt;/div&gt; &lt;div
                className=&quot;col-md-8&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2&quot;&gt;Card title&lt;/h5&gt;
                &lt;p className=&quot;card-text&quot;&gt;This is a wider card
                with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.&lt;/p&gt; &lt;p
                className=&quot;card-text&quot;&gt;&lt;small
                className=&quot;text-muted&quot;&gt;Last updated 3 mins
                ago&lt;/small&gt;&lt;/p&gt; &lt;/div&gt; &lt;!-- end
                card-body--&gt; &lt;/div&gt; &lt;!-- end col --&gt; &lt;/div&gt;
                &lt;!-- end row--&gt; &lt;/div&gt; &lt;!-- end card--&gt;
                &lt;div className=&quot;card&quot;&gt; &lt;div
                className=&quot;row g-0&quot;&gt; &lt;div
                className=&quot;col-md-8&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2&quot;&gt;Card title&lt;/h5&gt;
                &lt;p className=&quot;card-text&quot;&gt;This is a wider card
                with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.&lt;/p&gt; &lt;p
                className=&quot;card-text&quot;&gt;&lt;small
                className=&quot;text-muted&quot;&gt;Last updated 3 mins
                ago&lt;/small&gt;&lt;/p&gt; &lt;/div&gt; &lt;!-- end card-body
                --&gt; &lt;/div&gt; &lt;!-- end col --&gt; &lt;div
                className=&quot;col-md-4&quot;&gt; &lt;img
                src=&quot;assets/images/small/img-2.jpg&quot;
                className=&quot;img-fluid rounded-end h-100&quot;
                alt=&quot;img-2&quot;&gt; &lt;/div&gt; &lt;!-- end col --&gt;
                &lt;/div&gt; &lt;!-- end row--&gt; &lt;/div&gt; &lt;!-- end card
                --&gt;
              </code>
            </pre>
          </div>
        </div>
        {/* <!-- Horizontal Card End  --> */}

        {/* <!-- Stretched Link Start --> */}

        <div className="row">
          <div className="col-12">
            <h5 className="card-title mb-3">Stretched link</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src="assets/images/small/img-1.jpg"
                className="card-img-top"
                alt="img-1"
              />
              <div className="card-body">
                <h5 className="card-title mb-2">Card with stretched link</h5>
                <a
                  href="javascript:void(0);"
                  className="btn btn-primary mt-2 stretched-link"
                >
                  Go somewhere
                </a>
              </div>
              {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col--> */}
          <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src="assets/images/small/img-2.jpg"
                className="card-img-top"
                alt="img-2"
              />
              <div className="card-body">
                <h5 className="card-title mb-2">
                  <a
                    href="javascript:void(0);"
                    className="text-primary stretched-link"
                  >
                    Card with stretched link
                  </a>
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card up the bulk of
                  the card's content.
                </p>
              </div>
              {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col--> */}
          <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src="assets/images/small/img-3.jpg"
                className="card-img-top"
                alt="img-3"
              />
              <div className="card-body">
                <h5 className="card-title mb-2">Card with stretched link</h5>
                <a
                  href="javascript:void(0);"
                  className="btn btn-primary mt-2 stretched-link"
                >
                  Go somewhere
                </a>
              </div>
              {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col--> */}
          <div className="col-md-6 col-lg-3">
            <div className="card">
              <img
                src="assets/images/small/img-4.jpg"
                className="card-img-top"
                alt="img-4"
              />
              <div className="card-body">
                <h5 className="card-title mb-2">
                  <a href="javascript:void(0);" className="stretched-link">
                    Card with stretched link
                  </a>
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card up the bulk of
                  the card's content.
                </p>
              </div>
              {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col--> */}
        </div>
        {/* <!-- end row --> */}

        <div className="card highlight">
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
              <code id="defaultButtons">
                &lt;div className=&quot;card&quot;&gt; &lt;img
                src=&quot;assets/images/small/img-1.jpg&quot;
                className=&quot;card-img-top&quot; alt=&quot;img-1&quot;&gt;
                &lt;div className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2&quot;&gt;Card with stretched
                link&lt;/h5&gt; &lt;a href=&quot;javascript:void(0);&quot;
                className=&quot;btn btn-primary mt-2 stretched-link&quot;&gt;Go
                somewhere&lt;/a&gt; &lt;/div&gt; &lt;!-- end card-body --&gt;
                &lt;/div&gt; &lt;!-- end card --&gt; &lt;div
                className=&quot;card&quot;&gt; &lt;img
                src=&quot;assets/images/small/img-2.jpg&quot;
                className=&quot;card-img-top&quot; alt=&quot;img-2&quot;&gt;
                &lt;div className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2&quot;&gt;&lt;a
                href=&quot;javascript:void(0);&quot;
                className=&quot;text-primary stretched-link&quot;&gt;Card with
                stretched link&lt;/a&gt;&lt;/h5&gt; &lt;p
                className=&quot;card-text&quot;&gt; Some quick example text to
                build on the card up the bulk of the card's content. &lt;/p&gt;
                &lt;/div&gt; &lt;!-- end card-body --&gt; &lt;/div&gt; &lt;!--
                end card --&gt; &lt;div className=&quot;card&quot;&gt; &lt;img
                src=&quot;assets/images/small/img-3.jpg&quot;
                className=&quot;card-img-top&quot; alt=&quot;img-3&quot;&gt;
                &lt;div className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2&quot;&gt;Card with stretched
                link&lt;/h5&gt; &lt;a href=&quot;javascript:void(0);&quot;
                className=&quot;btn btn-primary mt-2 stretched-link&quot;&gt;Go
                somewhere&lt;/a&gt; &lt;/div&gt; &lt;!-- end card-body --&gt;
                &lt;/div&gt; &lt;!-- end card --&gt; &lt;div
                className=&quot;card&quot;&gt; &lt;img
                src=&quot;assets/images/small/img-4.jpg&quot;
                className=&quot;card-img-top&quot; alt=&quot;img-4&quot;&gt;
                &lt;div className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2&quot;&gt;&lt;a
                href=&quot;javascript:void(0);&quot;
                className=&quot;stretched-link&quot;&gt;Card with stretched
                link&lt;/a&gt;&lt;/h5&gt; &lt;p
                className=&quot;card-text&quot;&gt; Some quick example text to
                build on the card up the bulk of the card's content. &lt;/p&gt;
                &lt;/div&gt; &lt;!-- end card-body --&gt; &lt;/div&gt; &lt;!--
                end card --&gt;
              </code>
            </pre>
          </div>
        </div>
        {/* <!-- Stretched Link End --> */}

        {/* <!-- Card Group Start --> */}
        <div className="row">
          <div className="col-12">
            <h5 className="card-title mb-3">Card Group</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card-group mb-3">
              <div className="card d-block">
                <img
                  className="card-img-top"
                  src="assets/images/small/img-1.jpg"
                  alt="img-1"
                />
                <div className="card-body">
                  <h5 className="card-title mb-2">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className="card d-block">
                <img
                  className="card-img-top"
                  src="assets/images/small/img-2.jpg"
                  alt="img-2"
                />
                <div className="card-body">
                  <h5 className="card-title mb-2">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className="card d-block">
                <img
                  className="card-img-top"
                  src="assets/images/small/img-3.jpg"
                  alt="img-3"
                />
                <div className="card-body">
                  <h5 className="card-title mb-2">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end card-group--> */}
          </div>
          {/* <!-- end col--> */}
        </div>
        {/* <!-- end row --> */}

        <div className="card highlight">
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
              <code id="defaultButtons">
                &lt;div className=&quot;card-group&quot;&gt; &lt;div
                className=&quot;card d-block&quot;&gt; &lt;img
                className=&quot;card-img-top&quot;
                src=&quot;assets/images/small/img-1.jpg&quot;
                alt=&quot;img-1&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2&quot;&gt;Card title&lt;/h5&gt;
                &lt;p className=&quot;card-text&quot;&gt;This is a wider card
                with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.&lt;/p&gt; &lt;p
                className=&quot;card-text&quot;&gt; &lt;small
                className=&quot;text-muted&quot;&gt;Last updated 3 mins
                ago&lt;/small&gt; &lt;/p&gt; &lt;/div&gt; &lt;/div&gt; &lt;div
                className=&quot;card d-block&quot;&gt; &lt;img
                className=&quot;card-img-top&quot;
                src=&quot;assets/images/small/img-2.jpg&quot;
                alt=&quot;img-2&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2&quot;&gt;Card title&lt;/h5&gt;
                &lt;p className=&quot;card-text&quot;&gt;This card has
                supporting text below as a natural lead-in to additional
                content.&lt;/p&gt; &lt;p className=&quot;card-text&quot;&gt;
                &lt;small className=&quot;text-muted&quot;&gt;Last updated 3
                mins ago&lt;/small&gt; &lt;/p&gt; &lt;/div&gt; &lt;/div&gt;
                &lt;div className=&quot;card d-block&quot;&gt; &lt;img
                className=&quot;card-img-top&quot;
                src=&quot;assets/images/small/img-3.jpg&quot;
                alt=&quot;img-3&quot;&gt; &lt;div
                className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2&quot;&gt;Card title&lt;/h5&gt;
                &lt;p className=&quot;card-text&quot;&gt;This is a wider card
                with supporting text below as a natural lead-in to additional
                content. This card has even longer content than the first to
                show that equal height action.&lt;/p&gt; &lt;p
                className=&quot;card-text&quot;&gt; &lt;small
                className=&quot;text-muted&quot;&gt;Last updated 3 mins
                ago&lt;/small&gt; &lt;/p&gt; &lt;/div&gt; &lt;/div&gt;
                &lt;/div&gt; &lt;!-- end card-group--&gt;
              </code>
            </pre>
          </div>
        </div>
        {/* <!-- Card Group End --> */}

        {/* <!-- Card Decks Start --> */}
        <div className="row">
          <div className="col-12">
            <h5 className="card-title mb-3">Card Decks</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="row row-cols-1 row-cols-md-3 g-3">
              <div className="col">
                <div className="card">
                  <img
                    src="assets/images/small/img-4.jpg"
                    className="card-img-top"
                    alt="img-4"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-2">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                  {/* <!-- end card-body --> */}
                </div>
                {/* <!-- end card --> */}
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="assets/images/small/img-3.jpg"
                    className="card-img-top"
                    alt="img-3"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-2">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                  {/* <!-- end card-body --> */}
                </div>
                {/* <!-- end card --> */}
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="assets/images/small/img-2.jpg"
                    className="card-img-top"
                    alt="img-2"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-2">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                  {/* <!-- end card-body --> */}
                </div>
                {/* <!-- end card --> */}
              </div>
            </div>
          </div>
          {/* <!-- end col--> */}
        </div>
        {/* <!-- end row --> */}

        <div className="card highlight">
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
              <code id="defaultButtons">
                &lt;div className=&quot;card&quot;&gt; &lt;img
                src=&quot;assets/images/small/img-4.jpg&quot;
                className=&quot;card-img-top&quot; alt=&quot;img-4&quot;&gt;
                &lt;div className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2&quot;&gt;Card title&lt;/h5&gt;
                &lt;p className=&quot;card-text&quot;&gt;This is a longer card
                with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.&lt;/p&gt; &lt;p
                className=&quot;card-text&quot;&gt; &lt;small
                className=&quot;text-muted&quot;&gt;Last updated 3 mins
                ago&lt;/small&gt; &lt;/p&gt; &lt;/div&gt;&lt;!-- end card-body
                --&gt; &lt;/div&gt;&lt;!-- end card --&gt; &lt;div
                className=&quot;card&quot;&gt; &lt;img
                src=&quot;assets/images/small/img-3.jpg&quot;
                className=&quot;card-img-top&quot; alt=&quot;img-3&quot;&gt;
                &lt;div className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2&quot;&gt;Card title&lt;/h5&gt;
                &lt;p className=&quot;card-text&quot;&gt;This is a longer card
                with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.&lt;/p&gt; &lt;p
                className=&quot;card-text&quot;&gt; &lt;small
                className=&quot;text-muted&quot;&gt;Last updated 3 mins
                ago&lt;/small&gt; &lt;/p&gt; &lt;/div&gt;&lt;!-- end card-body
                --&gt; &lt;/div&gt;&lt;!-- end card --&gt; &lt;div
                className=&quot;card&quot;&gt; &lt;img
                src=&quot;assets/images/small/img-2.jpg&quot;
                className=&quot;card-img-top&quot; alt=&quot;img-2&quot;&gt;
                &lt;div className=&quot;card-body&quot;&gt; &lt;h5
                className=&quot;card-title mb-2&quot;&gt;Card title&lt;/h5&gt;
                &lt;p className=&quot;card-text&quot;&gt;This is a longer card
                with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.&lt;/p&gt; &lt;p
                className=&quot;card-text&quot;&gt; &lt;small
                className=&quot;text-muted&quot;&gt;Last updated 3 mins
                ago&lt;/small&gt; &lt;/p&gt; &lt;/div&gt;&lt;!-- end card-body
                --&gt; &lt;/div&gt;&lt;!-- end card --&gt;
              </code>
            </pre>
          </div>
        </div>
        {/* <!-- Card Decks End --> */}
      </div>
      <Footer />
    </div>
  );
};

export default Card;
