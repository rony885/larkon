import React from "react";
import Footer from "../../components/Footer";

const Tabs = () => {
  return (
    <div className="page-content">
      <div className="container">
        {/* <!-- start tabs --> */}
        <div className="row">
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="default">
                  Nav Tabs
                  <a className="anchor-link" href="#default">
                    #
                  </a>
                </h5>
                <p className="text-muted mb-3">
                  Use the <code>.nav-tabs</code> class to generate a tabbed
                  interface.
                </p>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      href="#home"
                      data-bs-toggle="tab"
                      aria-expanded="false"
                      className="nav-link"
                    >
                      <span className="d-block d-sm-none">
                        <i className="bx bx-home"></i>
                      </span>
                      <span className="d-none d-sm-block">Home</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#profile"
                      data-bs-toggle="tab"
                      aria-expanded="true"
                      className="nav-link active"
                    >
                      <span className="d-block d-sm-none">
                        <i className="bx bx-user"></i>
                      </span>
                      <span className="d-none d-sm-block">Profile</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#messages"
                      data-bs-toggle="tab"
                      aria-expanded="false"
                      className="nav-link"
                    >
                      <span className="d-block d-sm-none">
                        <i className="bx bx-envelope"></i>
                      </span>
                      <span className="d-none d-sm-block">Messages</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content text-muted">
                  <div className="tab-pane" id="home">
                    <p className="mb-0">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem?
                    </p>
                  </div>
                  <div className="tab-pane show active" id="profile">
                    <p className="mb-0">
                      Li Europan lingues es membres del sam familie. Lor separat
                      existentie es un myth. Por scientie, musica, sport etc,
                      litot Europa usa li sam vocabular. Li lingues differe
                      solmen in li grammatica, li pronunciation e li plu commun
                      vocabules. Omnicos directe al desirabilite de un nov
                      lingua franca: On refusa continuar payar custosi
                      traductores. At solmen va esser necessi far uniform
                      grammatica, pronunciation e plu sommun paroles. Ma quande
                      lingues coalesce, li grammatica del resultant lingue es
                      plu simplic e regulari quam ti del coalescent lingues. Li
                      nov lingua franca va esser plu simplic e regulari quam li
                      existent Europan lingues.
                    </p>
                  </div>
                  <div className="tab-pane" id="messages">
                    <p className="mb-0">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem?
                    </p>
                  </div>
                </div>

                <div className="highlight mt-3">
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
                        &lt;ul className=&quot;nav nav-tabs&quot;&gt; &lt;li
                        className=&quot;nav-item&quot;&gt; &lt;a
                        href=&quot;#home&quot; data-bs-toggle=&quot;tab&quot;
                        aria-expanded=&quot;false&quot;
                        className=&quot;nav-link&quot;&gt; &lt;span
                        className=&quot;d-block d-sm-none&quot;&gt;&lt;i
                        className=&quot;bx
                        bx-home&quot;&gt;&lt;/i&gt;&lt;/span&gt; &lt;span
                        className=&quot;d-none
                        d-sm-block&quot;&gt;Home&lt;/span&gt; &lt;/a&gt;
                        &lt;/li&gt; &lt;li className=&quot;nav-item&quot;&gt;
                        &lt;a href=&quot;#profile&quot;
                        data-bs-toggle=&quot;tab&quot;
                        aria-expanded=&quot;true&quot; className=&quot;nav-link
                        active&quot;&gt; &lt;span className=&quot;d-block
                        d-sm-none&quot;&gt;&lt;i className=&quot;bx
                        bx-user&quot;&gt;&lt;/i&gt;&lt;/span&gt; &lt;span
                        className=&quot;d-none
                        d-sm-block&quot;&gt;Profile&lt;/span&gt; &lt;/a&gt;
                        &lt;/li&gt; &lt;li className=&quot;nav-item&quot;&gt;
                        &lt;a href=&quot;#messages&quot;
                        data-bs-toggle=&quot;tab&quot;
                        aria-expanded=&quot;false&quot;
                        className=&quot;nav-link&quot;&gt; &lt;span
                        className=&quot;d-block d-sm-none&quot;&gt;&lt;i
                        className=&quot;bx
                        bx-envelope&quot;&gt;&lt;/i&gt;&lt;/span&gt; &lt;span
                        className=&quot;d-none
                        d-sm-block&quot;&gt;Messages&lt;/span&gt; &lt;/a&gt;
                        &lt;/li&gt; &lt;/ul&gt; &lt;div
                        className=&quot;tab-content text-muted&quot;&gt; &lt;div
                        className=&quot;tab-pane&quot; id=&quot;home&quot;&gt;
                        &lt;p className=&quot;mb-0&quot;&gt;Sed ut perspiciatis
                        unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem? &lt;/p&gt; &lt;/div&gt; &lt;div
                        className=&quot;tab-pane show active&quot;
                        id=&quot;profile&quot;&gt; &lt;p
                        className=&quot;mb-0&quot;&gt;Li Europan lingues es
                        membres del sam familie. Lor separat existentie es un
                        myth. Por scientie, musica, sport etc, litot Europa usa
                        li sam vocabular. Li lingues differe solmen in li
                        grammatica, li pronunciation e li plu commun vocabules.
                        Omnicos directe al desirabilite de un nov lingua franca:
                        On refusa continuar payar custosi traductores. At solmen
                        va esser necessi far uniform grammatica, pronunciation e
                        plu sommun paroles. Ma quande lingues coalesce, li
                        grammatica del resultant lingue es plu simplic e
                        regulari quam ti del coalescent lingues. Li nov lingua
                        franca va esser plu simplic e regulari quam li existent
                        Europan lingues. &lt;/p&gt; &lt;/div&gt; &lt;div
                        className=&quot;tab-pane&quot;
                        id=&quot;messages&quot;&gt; &lt;p
                        className=&quot;mb-0&quot;&gt;Sed ut perspiciatis unde
                        omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem? &lt;/p&gt; &lt;/div&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="static-backdrop">
                  Tabs Justified
                  <a className="anchor-link" href="#static-backdrop">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Using class <code>.nav-justified</code>, you can force your
                  tabs menu items to use the full available width.
                </p>

                <div className="mb-3">
                  <ul className="nav nav-tabs nav-justified">
                    <li className="nav-item">
                      <a
                        href="#homeTabsJustified"
                        data-bs-toggle="tab"
                        aria-expanded="false"
                        className="nav-link"
                      >
                        <span className="d-block d-sm-none">
                          <i className="bx bx-home"></i>
                        </span>
                        <span className="d-none d-sm-block">Home</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#profileTabsJustified"
                        data-bs-toggle="tab"
                        aria-expanded="true"
                        className="nav-link active"
                      >
                        <span className="d-block d-sm-none">
                          <i className="bx bx-user"></i>
                        </span>
                        <span className="d-none d-sm-block">Profile</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#messagesTabsJustified"
                        data-bs-toggle="tab"
                        aria-expanded="false"
                        className="nav-link"
                      >
                        <span className="d-block d-sm-none">
                          <i className="bx bx-envelope"></i>
                        </span>
                        <span className="d-none d-sm-block">Messages</span>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content pt-2 text-muted">
                    <div className="tab-pane" id="homeTabsJustified">
                      <p className="mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem?
                      </p>
                    </div>
                    <div
                      className="tab-pane show active"
                      id="profileTabsJustified"
                    >
                      <p className="mb-0">
                        Li Europan lingues es membres del sam familie. Lor
                        separat existentie es un myth. Por scientie, musica,
                        sport etc, litot Europa usa li sam vocabular. Li lingues
                        differe solmen in li grammatica, li pronunciation e li
                        plu commun vocabules. Omnicos directe al desirabilite de
                        un nov lingua franca: On refusa continuar payar custosi
                        traductores. At solmen va esser necessi far uniform
                        grammatica, pronunciation e plu sommun paroles. Ma
                        quande lingues coalesce, li grammatica del resultant
                        lingue es plu simplic e regulari quam ti del coalescent
                        lingues. Li nov lingua franca va esser plu simplic e
                        regulari quam li existent Europan lingues.
                      </p>
                    </div>
                    <div className="tab-pane" id="messagesTabsJustified">
                      <p className="mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem?
                      </p>
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
                        &lt;ul className=&quot;nav nav-tabs
                        nav-justified&quot;&gt; &lt;li
                        className=&quot;nav-item&quot;&gt; &lt;a
                        href=&quot;#homeTabsJustified&quot;
                        data-bs-toggle=&quot;tab&quot;
                        aria-expanded=&quot;false&quot;
                        className=&quot;nav-link&quot;&gt; &lt;span
                        className=&quot;d-block d-sm-none&quot;&gt;&lt;i
                        className=&quot;bx
                        bx-home&quot;&gt;&lt;/i&gt;&lt;/span&gt; &lt;span
                        className=&quot;d-none
                        d-sm-block&quot;&gt;Home&lt;/span&gt; &lt;/a&gt;
                        &lt;/li&gt; &lt;li className=&quot;nav-item&quot;&gt;
                        &lt;a href=&quot;#profileTabsJustified&quot;
                        data-bs-toggle=&quot;tab&quot;
                        aria-expanded=&quot;true&quot; className=&quot;nav-link
                        active&quot;&gt; &lt;span className=&quot;d-block
                        d-sm-none&quot;&gt;&lt;i className=&quot;bx
                        bx-user&quot;&gt;&lt;/i&gt;&lt;/span&gt; &lt;span
                        className=&quot;d-none
                        d-sm-block&quot;&gt;Profile&lt;/span&gt; &lt;/a&gt;
                        &lt;/li&gt; &lt;li className=&quot;nav-item&quot;&gt;
                        &lt;a href=&quot;#messagesTabsJustified&quot;
                        data-bs-toggle=&quot;tab&quot;
                        aria-expanded=&quot;false&quot;
                        className=&quot;nav-link&quot;&gt; &lt;span
                        className=&quot;d-block d-sm-none&quot;&gt;&lt;i
                        className=&quot;bx
                        bx-envelope&quot;&gt;&lt;/i&gt;&lt;/span&gt; &lt;span
                        className=&quot;d-none
                        d-sm-block&quot;&gt;Messages&lt;/span&gt; &lt;/a&gt;
                        &lt;/li&gt; &lt;/ul&gt; &lt;div
                        className=&quot;tab-content pt-2 text-muted&quot;&gt;
                        &lt;div className=&quot;tab-pane&quot;
                        id=&quot;homeTabsJustified&quot;&gt; &lt;p
                        className=&quot;mb-0&quot;&gt;Sed ut perspiciatis unde
                        omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem? &lt;/p&gt; &lt;/div&gt; &lt;div
                        className=&quot;tab-pane show active&quot;
                        id=&quot;profileTabsJustified&quot;&gt; &lt;p
                        className=&quot;mb-0&quot;&gt;Li Europan lingues es
                        membres del sam familie. Lor separat existentie es un
                        myth. Por scientie, musica, sport etc, litot Europa usa
                        li sam vocabular. Li lingues differe solmen in li
                        grammatica, li pronunciation e li plu commun vocabules.
                        Omnicos directe al desirabilite de un nov lingua franca:
                        On refusa continuar payar custosi traductores. At solmen
                        va esser necessi far uniform grammatica, pronunciation e
                        plu sommun paroles. Ma quande lingues coalesce, li
                        grammatica del resultant lingue es plu simplic e
                        regulari quam ti del coalescent lingues. Li nov lingua
                        franca va esser plu simplic e regulari quam li existent
                        Europan lingues. &lt;/p&gt; &lt;/div&gt; &lt;div
                        className=&quot;tab-pane&quot;
                        id=&quot;messagesTabsJustified&quot;&gt; &lt;p
                        className=&quot;mb-0&quot;&gt;Sed ut perspiciatis unde
                        omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem? &lt;/p&gt; &lt;/div&gt; &lt;/div&gt;
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
                  Nav Pills
                  <a className="anchor-link" href="#scrolling-long-content">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Use the <code>.nav-pills</code> class to generate a pilled
                  interface.
                </p>

                <div className="mb-3">
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a
                        href="#homePill"
                        data-bs-toggle="tab"
                        aria-expanded="false"
                        className="nav-link"
                      >
                        <span className="d-block d-sm-none">
                          <i className="bx bx-home"></i>
                        </span>
                        <span className="d-none d-sm-block">Home</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#profilePill"
                        data-bs-toggle="tab"
                        aria-expanded="true"
                        className="nav-link active"
                      >
                        <span className="d-block d-sm-none">
                          <i className="bx bx-user"></i>
                        </span>
                        <span className="d-none d-sm-block">Profile</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#messagesPill"
                        data-bs-toggle="tab"
                        aria-expanded="false"
                        className="nav-link"
                      >
                        <span className="d-block d-sm-none">
                          <i className="bx bx-envelope"></i>
                        </span>
                        <span className="d-none d-sm-block">Messages</span>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content pt-2 text-muted">
                    <div className="tab-pane" id="homePill">
                      <p className="mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem?
                      </p>
                    </div>
                    <div className="tab-pane show active" id="profilePill">
                      <p className="mb-0">
                        Li Europan lingues es membres del sam familie. Lor
                        separat existentie es un myth. Por scientie, musica,
                        sport etc, litot Europa usa li sam vocabular. Li lingues
                        differe solmen in li grammatica, li pronunciation e li
                        plu commun vocabules. Omnicos directe al desirabilite de
                        un nov lingua franca: On refusa continuar payar custosi
                        traductores. At solmen va esser necessi far uniform
                        grammatica, pronunciation e plu sommun paroles. Ma
                        quande lingues coalesce, li grammatica del resultant
                        lingue es plu simplic e regulari quam ti del coalescent
                        lingues. Li nov lingua franca va esser plu simplic e
                        regulari quam li existent Europan lingues.
                      </p>
                    </div>
                    <div className="tab-pane" id="messagesPill">
                      <p className="mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem?
                      </p>
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
                        &lt;ul className=&quot;nav nav-pills&quot;&gt; &lt;li
                        className=&quot;nav-item&quot;&gt; &lt;a
                        href=&quot;#homePill&quot;
                        data-bs-toggle=&quot;tab&quot;
                        aria-expanded=&quot;false&quot;
                        className=&quot;nav-link&quot;&gt; &lt;span
                        className=&quot;d-block d-sm-none&quot;&gt;&lt;i
                        className=&quot;bx
                        bx-home&quot;&gt;&lt;/i&gt;&lt;/span&gt; &lt;span
                        className=&quot;d-none
                        d-sm-block&quot;&gt;Home&lt;/span&gt; &lt;/a&gt;
                        &lt;/li&gt; &lt;li className=&quot;nav-item&quot;&gt;
                        &lt;a href=&quot;#profilePill&quot;
                        data-bs-toggle=&quot;tab&quot;
                        aria-expanded=&quot;true&quot; className=&quot;nav-link
                        active&quot;&gt; &lt;span className=&quot;d-block
                        d-sm-none&quot;&gt;&lt;i className=&quot;bx
                        bx-user&quot;&gt;&lt;/i&gt;&lt;/span&gt; &lt;span
                        className=&quot;d-none
                        d-sm-block&quot;&gt;Profile&lt;/span&gt; &lt;/a&gt;
                        &lt;/li&gt; &lt;li className=&quot;nav-item&quot;&gt;
                        &lt;a href=&quot;#messagesPill&quot;
                        data-bs-toggle=&quot;tab&quot;
                        aria-expanded=&quot;false&quot;
                        className=&quot;nav-link&quot;&gt; &lt;span
                        className=&quot;d-block d-sm-none&quot;&gt;&lt;i
                        className=&quot;bx
                        bx-envelope&quot;&gt;&lt;/i&gt;&lt;/span&gt; &lt;span
                        className=&quot;d-none
                        d-sm-block&quot;&gt;Messages&lt;/span&gt; &lt;/a&gt;
                        &lt;/li&gt; &lt;/ul&gt; &lt;div
                        className=&quot;tab-content pt-2 text-muted&quot;&gt;
                        &lt;div className=&quot;tab-pane&quot;
                        id=&quot;homePill&quot;&gt; &lt;p
                        className=&quot;mb-0&quot;&gt;Sed ut perspiciatis unde
                        omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem? &lt;/p&gt; &lt;/div&gt; &lt;div
                        className=&quot;tab-pane show active&quot;
                        id=&quot;profilePill&quot;&gt; &lt;p
                        className=&quot;mb-0&quot;&gt;Li Europan lingues es
                        membres del sam familie. Lor separat existentie es un
                        myth. Por scientie, musica, sport etc, litot Europa usa
                        li sam vocabular. Li lingues differe solmen in li
                        grammatica, li pronunciation e li plu commun vocabules.
                        Omnicos directe al desirabilite de un nov lingua franca:
                        On refusa continuar payar custosi traductores. At solmen
                        va esser necessi far uniform grammatica, pronunciation e
                        plu sommun paroles. Ma quande lingues coalesce, li
                        grammatica del resultant lingue es plu simplic e
                        regulari quam ti del coalescent lingues. Li nov lingua
                        franca va esser plu simplic e regulari quam li existent
                        Europan lingues. &lt;/p&gt; &lt;/div&gt; &lt;div
                        className=&quot;tab-pane&quot;
                        id=&quot;messagesPill&quot;&gt; &lt;p
                        className=&quot;mb-0&quot;&gt;Sed ut perspiciatis unde
                        omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem? &lt;/p&gt; &lt;/div&gt; &lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="modal-position">
                  Pills Justified
                  <a className="anchor-link" href="#modal-position">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Using class <code>.nav-justified</code>, you can force your
                  pills menu items to use the full available width.
                </p>

                <div className="mb-3">
                  <div className="d-flex flex-wrap gap-2">
                    <ul className="nav nav-pills nav-justified p-1">
                      <li className="nav-item">
                        <a
                          href="#homePillJustified"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          <span className="d-block d-sm-none">
                            <i className="bx bx-home"></i>
                          </span>
                          <span className="d-none d-sm-block">Home</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#profilePillJustified"
                          data-bs-toggle="tab"
                          aria-expanded="true"
                          className="nav-link active"
                        >
                          <span className="d-block d-sm-none">
                            <i className="bx bx-user"></i>
                          </span>
                          <span className="d-none d-sm-block">Profile</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#messagesPillJustified"
                          data-bs-toggle="tab"
                          aria-expanded="false"
                          className="nav-link"
                        >
                          <span className="d-block d-sm-none">
                            <i className="bx bx-envelope"></i>
                          </span>
                          <span className="d-none d-sm-block">Messages</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content pt-2 text-muted">
                      <div className="tab-pane" id="homePillJustified">
                        <p className="mb-0">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem?
                        </p>
                      </div>
                      <div
                        className="tab-pane show active"
                        id="profilePillJustified"
                      >
                        <p className="mb-0">
                          Li Europan lingues es membres del sam familie. Lor
                          separat existentie es un myth. Por scientie, musica,
                          sport etc, litot Europa usa li sam vocabular. Li
                          lingues differe solmen in li grammatica, li
                          pronunciation e li plu commun vocabules. Omnicos
                          directe al desirabilite de un nov lingua franca: On
                          refusa continuar payar custosi traductores. At solmen
                          va esser necessi far uniform grammatica, pronunciation
                          e plu sommun paroles. Ma quande lingues coalesce, li
                          grammatica del resultant lingue es plu simplic e
                          regulari quam ti del coalescent lingues. Li nov lingua
                          franca va esser plu simplic e regulari quam li
                          existent Europan lingues.
                        </p>
                      </div>
                      <div className="tab-pane" id="messagesPillJustified">
                        <p className="mb-0">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem?
                        </p>
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
                      <code id="modal-position-centered">
                        &lt;ul className=&quot;nav nav-pills nav-justified
                        p-1&quot;&gt; &lt;li className=&quot;nav-item&quot;&gt;
                        &lt;a href=&quot;#homePillJustified&quot;
                        data-bs-toggle=&quot;tab&quot;
                        aria-expanded=&quot;false&quot;
                        className=&quot;nav-link&quot;&gt; &lt;span
                        className=&quot;d-block d-sm-none&quot;&gt;&lt;i
                        className=&quot;bx
                        bx-home&quot;&gt;&lt;/i&gt;&lt;/span&gt; &lt;span
                        className=&quot;d-none
                        d-sm-block&quot;&gt;Home&lt;/span&gt; &lt;/a&gt;
                        &lt;/li&gt; &lt;li className=&quot;nav-item&quot;&gt;
                        &lt;a href=&quot;#profilePillJustified&quot;
                        data-bs-toggle=&quot;tab&quot;
                        aria-expanded=&quot;true&quot; className=&quot;nav-link
                        active&quot;&gt; &lt;span className=&quot;d-block
                        d-sm-none&quot;&gt;&lt;i className=&quot;bx
                        bx-user&quot;&gt;&lt;/i&gt;&lt;/span&gt; &lt;span
                        className=&quot;d-none
                        d-sm-block&quot;&gt;Profile&lt;/span&gt; &lt;/a&gt;
                        &lt;/li&gt; &lt;li className=&quot;nav-item&quot;&gt;
                        &lt;a href=&quot;#messagesPillJustified&quot;
                        data-bs-toggle=&quot;tab&quot;
                        aria-expanded=&quot;false&quot;
                        className=&quot;nav-link&quot;&gt; &lt;span
                        className=&quot;d-block d-sm-none&quot;&gt;&lt;i
                        className=&quot;bx
                        bx-envelope&quot;&gt;&lt;/i&gt;&lt;/span&gt; &lt;span
                        className=&quot;d-none
                        d-sm-block&quot;&gt;Messages&lt;/span&gt; &lt;/a&gt;
                        &lt;/li&gt; &lt;/ul&gt; &lt;div
                        className=&quot;tab-content pt-2 text-muted&quot;&gt;
                        &lt;div className=&quot;tab-pane&quot;
                        id=&quot;homePillJustified&quot;&gt; &lt;p
                        className=&quot;mb-0&quot;&gt;Sed ut perspiciatis unde
                        omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem? &lt;/p&gt; &lt;/div&gt; &lt;div
                        className=&quot;tab-pane show active&quot;
                        id=&quot;profilePillJustified&quot;&gt; &lt;p
                        className=&quot;mb-0&quot;&gt;Li Europan lingues es
                        membres del sam familie. Lor separat existentie es un
                        myth. Por scientie, musica, sport etc, litot Europa usa
                        li sam vocabular. Li lingues differe solmen in li
                        grammatica, li pronunciation e li plu commun vocabules.
                        Omnicos directe al desirabilite de un nov lingua franca:
                        On refusa continuar payar custosi traductores. At solmen
                        va esser necessi far uniform grammatica, pronunciation e
                        plu sommun paroles. Ma quande lingues coalesce, li
                        grammatica del resultant lingue es plu simplic e
                        regulari quam ti del coalescent lingues. Li nov lingua
                        franca va esser plu simplic e regulari quam li existent
                        Europan lingues. &lt;/p&gt; &lt;/div&gt; &lt;div
                        className=&quot;tab-pane&quot;
                        id=&quot;messagesPillJustified&quot;&gt; &lt;p
                        className=&quot;mb-0&quot;&gt;Sed ut perspiciatis unde
                        omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem? &lt;/p&gt; &lt;/div&gt; &lt;/div&gt;
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
                  Tabs Vertical Left
                  <a className="anchor-link" href="#toggle-between-modals">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  You can stack your navigation by changing the flex item
                  direction with the <code>.flex-column</code> utility.
                </p>

                <div className="mb-3">
                  <div className="row">
                    <div className="col-sm-3 mb-2 mb-sm-0">
                      <div
                        className="nav flex-column nav-pills"
                        id="vl-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <a
                          className="nav-link active show"
                          id="vl-pills-home-tab"
                          data-bs-toggle="pill"
                          href="#vl-pills-home"
                          role="tab"
                          aria-controls="vl-pills-home"
                          aria-selected="true"
                        >
                          <span>Home</span>
                        </a>
                        <a
                          className="nav-link"
                          id="vl-pills-profile-tab"
                          data-bs-toggle="pill"
                          href="#vl-pills-profile"
                          role="tab"
                          aria-controls="vl-pills-profile"
                          aria-selected="false"
                        >
                          <span>Profile</span>
                        </a>
                        <a
                          className="nav-link"
                          id="vl-pills-settings-tab"
                          data-bs-toggle="pill"
                          href="#vl-pills-settings"
                          role="tab"
                          aria-controls="vl-pills-settings"
                          aria-selected="false"
                        >
                          <span>Settings</span>
                        </a>
                      </div>
                    </div>

                    <div className="col-sm-9">
                      <div
                        className="tab-content pt-0"
                        id="vl-pills-tabContent"
                      >
                        <div
                          className="tab-pane fade active show"
                          id="vl-pills-home"
                          role="tabpanel"
                          aria-labelledby="vl-pills-home-tab"
                        >
                          <p className="mb-0">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="vl-pills-profile"
                          role="tabpanel"
                          aria-labelledby="vl-pills-profile-tab"
                        >
                          <p className="mb-0">
                            Li Europan lingues es membres del sam familie. Lor
                            separat existentie es un myth. Por scientie, musica,
                            sport etc, litot Europa usa li sam vocabular. Li
                            lingues differe solmen in li grammatica, li
                            pronunciation e li plu commun vocabules. Omnicos
                            directe al desirabilite de un nov lingua franca: On
                            refusa continuar payar custosi traductores. At
                            solmen va esser necessi far uniform.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="vl-pills-settings"
                          role="tabpanel"
                          aria-labelledby="vl-pills-settings-tab"
                        >
                          <p className="mb-0">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.
                          </p>
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
                        &lt;div className=&quot;row&quot;&gt; &lt;div
                        className=&quot;col-sm-3 mb-2 mb-sm-0&quot;&gt; &lt;div
                        className=&quot;nav flex-column nav-pills&quot;
                        id=&quot;vl-pills-tab&quot; role=&quot;tablist&quot;
                        aria-orientation=&quot;vertical&quot;&gt; &lt;a
                        className=&quot;nav-link active show&quot;
                        id=&quot;vl-pills-home-tab&quot;
                        data-bs-toggle=&quot;pill&quot;
                        href=&quot;#vl-pills-home&quot; role=&quot;tab&quot;
                        aria-controls=&quot;vl-pills-home&quot;
                        aria-selected=&quot;true&quot;&gt;
                        &lt;span&gt;Home&lt;/span&gt; &lt;/a&gt; &lt;a
                        className=&quot;nav-link&quot;
                        id=&quot;vl-pills-profile-tab&quot;
                        data-bs-toggle=&quot;pill&quot;
                        href=&quot;#vl-pills-profile&quot; role=&quot;tab&quot;
                        aria-controls=&quot;vl-pills-profile&quot;
                        aria-selected=&quot;false&quot;&gt;
                        &lt;span&gt;Profile&lt;/span&gt; &lt;/a&gt; &lt;a
                        className=&quot;nav-link&quot;
                        id=&quot;vl-pills-settings-tab&quot;
                        data-bs-toggle=&quot;pill&quot;
                        href=&quot;#vl-pills-settings&quot; role=&quot;tab&quot;
                        aria-controls=&quot;vl-pills-settings&quot;
                        aria-selected=&quot;false&quot;&gt;
                        &lt;span&gt;Settings&lt;/span&gt; &lt;/a&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;div
                        className=&quot;col-sm-9&quot;&gt; &lt;div
                        className=&quot;tab-content pt-0&quot;
                        id=&quot;vl-pills-tabContent&quot;&gt; &lt;div
                        className=&quot;tab-pane fade active show&quot;
                        id=&quot;vl-pills-home&quot; role=&quot;tabpanel&quot;
                        aria-labelledby=&quot;vl-pills-home-tab&quot;&gt; &lt;p
                        className=&quot;mb-0&quot;&gt; Sed ut perspiciatis unde
                        omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. &lt;/p&gt;
                        &lt;/div&gt; &lt;div className=&quot;tab-pane fade&quot;
                        id=&quot;vl-pills-profile&quot;
                        role=&quot;tabpanel&quot;
                        aria-labelledby=&quot;vl-pills-profile-tab&quot;&gt;
                        &lt;p className=&quot;mb-0&quot;&gt; Li Europan lingues
                        es membres del sam familie. Lor separat existentie es un
                        myth. Por scientie, musica, sport etc, litot Europa usa
                        li sam vocabular. Li lingues differe solmen in li
                        grammatica, li pronunciation e li plu commun vocabules.
                        Omnicos directe al desirabilite de un nov lingua franca:
                        On refusa continuar payar custosi traductores. At solmen
                        va esser necessi far uniform. &lt;/p&gt; &lt;/div&gt;
                        &lt;div className=&quot;tab-pane fade&quot;
                        id=&quot;vl-pills-settings&quot;
                        role=&quot;tabpanel&quot;
                        aria-labelledby=&quot;vl-pills-settings-tab&quot;&gt;
                        &lt;p className=&quot;mb-0&quot;&gt; Sed ut perspiciatis
                        unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. &lt;/p&gt;
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
                  id="varying-modal-content"
                >
                  Tabs Vertical Right
                  <a className="anchor-link" href="#varying-modal-content">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  You can stack your navigation by changing the flex item
                  direction with the <code>.flex-column</code> utility.
                </p>

                <div className="mb-3">
                  <div className="row">
                    <div className="col-sm-9 mb-2 mb-sm-0">
                      <div
                        className="tab-content pt-0"
                        id="vr-pills-tabContent"
                      >
                        <div
                          className="tab-pane fade active show"
                          id="vr-pills-home"
                          role="tabpanel"
                          aria-labelledby="vr-pills-home-tab"
                        >
                          <p className="mb-0">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="vr-pills-profile"
                          role="tabpanel"
                          aria-labelledby="vr-pills-profile-tab"
                        >
                          <p className="mb-0">
                            Li Europan lingues es membres del sam familie. Lor
                            separat existentie es un myth. Por scientie, musica,
                            sport etc, litot Europa usa li sam vocabular. Li
                            lingues differe solmen in li grammatica, li
                            pronunciation e li plu commun vocabules. Omnicos
                            directe al desirabilite de un nov lingua franca: On
                            refusa continuar payar custosi traductores. At
                            solmen va esser necessi far uniform.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="vr-pills-settings"
                          role="tabpanel"
                          aria-labelledby="vr-pills-settings-tab"
                        >
                          <p className="mb-0">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div
                        className="nav flex-column nav-pills"
                        id="vr-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <a
                          className="nav-link active show"
                          id="vr-pills-home-tab"
                          data-bs-toggle="pill"
                          href="#vr-pills-home"
                          role="tab"
                          aria-controls="vr-pills-home"
                          aria-selected="true"
                        >
                          <span>Home</span>
                        </a>
                        <a
                          className="nav-link"
                          id="vr-pills-profile-tab"
                          data-bs-toggle="pill"
                          href="#vr-pills-profile"
                          role="tab"
                          aria-controls="vr-pills-profile"
                          aria-selected="false"
                        >
                          <span>Profile</span>
                        </a>
                        <a
                          className="nav-link"
                          id="vr-pills-settings-tab"
                          data-bs-toggle="pill"
                          href="#vr-pills-settings"
                          role="tab"
                          aria-controls="vr-pills-settings"
                          aria-selected="false"
                        >
                          <span>Settings</span>
                        </a>
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
                      <code id="varying-modal-content">
                        &lt;div className=&quot;row&quot;&gt; &lt;div
                        className=&quot;col-sm-9 mb-2 mb-sm-0&quot;&gt; &lt;div
                        className=&quot;tab-content pt-0&quot;
                        id=&quot;vr-pills-tabContent&quot;&gt; &lt;div
                        className=&quot;tab-pane fade active show&quot;
                        id=&quot;vr-pills-home&quot; role=&quot;tabpanel&quot;
                        aria-labelledby=&quot;vr-pills-home-tab&quot;&gt; &lt;p
                        className=&quot;mb-0&quot;&gt; Sed ut perspiciatis unde
                        omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. &lt;/p&gt;
                        &lt;/div&gt; &lt;div className=&quot;tab-pane fade&quot;
                        id=&quot;vr-pills-profile&quot;
                        role=&quot;tabpanel&quot;
                        aria-labelledby=&quot;vr-pills-profile-tab&quot;&gt;
                        &lt;p className=&quot;mb-0&quot;&gt; Li Europan lingues
                        es membres del sam familie. Lor separat existentie es un
                        myth. Por scientie, musica, sport etc, litot Europa usa
                        li sam vocabular. Li lingues differe solmen in li
                        grammatica, li pronunciation e li plu commun vocabules.
                        Omnicos directe al desirabilite de un nov lingua franca:
                        On refusa continuar payar custosi traductores. At solmen
                        va esser necessi far uniform. &lt;/p&gt; &lt;/div&gt;
                        &lt;div className=&quot;tab-pane fade&quot;
                        id=&quot;vr-pills-settings&quot;
                        role=&quot;tabpanel&quot;
                        aria-labelledby=&quot;vr-pills-settings-tab&quot;&gt;
                        &lt;p className=&quot;mb-0&quot;&gt; Sed ut perspiciatis
                        unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. &lt;/p&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;div
                        className=&quot;col-sm-3&quot;&gt; &lt;div
                        className=&quot;nav flex-column nav-pills&quot;
                        id=&quot;vr-pills-tab&quot; role=&quot;tablist&quot;
                        aria-orientation=&quot;vertical&quot;&gt; &lt;a
                        className=&quot;nav-link active show&quot;
                        id=&quot;vr-pills-home-tab&quot;
                        data-bs-toggle=&quot;pill&quot;
                        href=&quot;#vr-pills-home&quot; role=&quot;tab&quot;
                        aria-controls=&quot;vr-pills-home&quot;
                        aria-selected=&quot;true&quot;&gt;
                        &lt;span&gt;Home&lt;/span&gt; &lt;/a&gt; &lt;a
                        className=&quot;nav-link&quot;
                        id=&quot;vr-pills-profile-tab&quot;
                        data-bs-toggle=&quot;pill&quot;
                        href=&quot;#vr-pills-profile&quot; role=&quot;tab&quot;
                        aria-controls=&quot;vr-pills-profile&quot;
                        aria-selected=&quot;false&quot;&gt;
                        &lt;span&gt;Profile&lt;/span&gt; &lt;/a&gt; &lt;a
                        className=&quot;nav-link&quot;
                        id=&quot;vr-pills-settings-tab&quot;
                        data-bs-toggle=&quot;pill&quot;
                        href=&quot;#vr-pills-settings&quot; role=&quot;tab&quot;
                        aria-controls=&quot;vr-pills-settings&quot;
                        aria-selected=&quot;false&quot;&gt;
                        &lt;span&gt;Settings&lt;/span&gt; &lt;/a&gt;
                        &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
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
                  <a href="#default" className="nav-link">
                    Nav Tabs
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
                  <a href="#varying-modal-content" className="nav-link">
                    Varying Modal Content
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- end row --> */}
        {/* <!-- end tabs --> */}
      </div>
      <Footer />
    </div>
  );
};

export default Tabs;
