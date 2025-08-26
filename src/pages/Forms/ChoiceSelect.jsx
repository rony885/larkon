
import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const ChoiceSelect = () => {
  return (
    <div className="page-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="overview">
                  Overview
                  <Link
                    className="btn btn-sm btn-outline-success rounded-2 float-end"
                    to="https://github.com/Choices-js/Choices"
                    target="_blank"
                  >
                    Official Website
                  </Link>
                </h5>
                <p className="text-muted mb-3">
                  Choices.js is a A vanilla, lightweight, configurable select
                  box/text input plugin. Similar to Select2 and Selectize but
                  without the jQuery dependency.
                </p>

                <h5 className="mt-2">Usage</h5>
                <p className="mb-0">
                  Choices.js's CSS and Javascript files are bundled in the
                  <code>vender.min.css</code> and <code>vendor.js</code> and
                  globally included in all pages.
                </p>
              </div>
              {/* <!-- end card-body --> */}
            </div>
            {/* <!-- end card --> */}

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="basic">
                  Basic Example{" "}
                  <a className="anchor-link" href="#basic">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Set <code>data-choices</code> attribute to set a default
                  single select.
                </p>
                <div className="w-50 mb-3">
                  <select
                    className="form-control"
                    data-choices
                    name="choices-single-default"
                    id="choices-single-default"
                  >
                    <option defaultValue="">This is a placeholder</option>
                    <option defaultValue="Choice 1">Choice 1</option>
                    <option defaultValue="Choice 2">Choice 2</option>
                    <option defaultValue="Choice 3">Choice 3</option>
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
                        &lt;select className=&quot;form-control&quot;
                        data-choices name=&quot;choices-single-default&quot;
                        id=&quot;choices-single-default&quot;&gt; &lt;option
                        defaultValue=&quot;&quot;&gt;This is a
                        placeholder&lt;/option&gt; &lt;option defaultValue=&quot;Choice
                        1&quot;&gt;Choice 1&lt;/option&gt; &lt;option
                        defaultValue=&quot;Choice 2&quot;&gt;Choice 2&lt;/option&gt;
                        &lt;option defaultValue=&quot;Choice 3&quot;&gt;Choice
                        3&lt;/option&gt; &lt;/select&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="options-group">
                  Option Groups Example
                  <a className="anchor-link" href="#options-group">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Set <code>data-choices data-choices-groups</code> attribute to
                  set option group
                </p>

                <div className="w-50 mb-3">
                  <label
                    htmlFor="choices-single-groups"
                    className="form-label text-muted"
                  >
                    Option Groups
                  </label>
                  <select
                    className="form-control"
                    id="choices-single-groups"
                    data-choices
                    data-choices-groups
                    data-placeholder="Select City"
                    name="choices-single-groups"
                  >
                    <option defaultValue="">Choose a city</option>
                    <optgroup label="UK">
                      <option defaultValue="London">London</option>
                      <option defaultValue="Manchester">Manchester</option>
                      <option defaultValue="Liverpool">Liverpool</option>
                    </optgroup>
                    <optgroup label="FR">
                      <option defaultValue="Paris">Paris</option>
                      <option defaultValue="Lyon">Lyon</option>
                      <option defaultValue="Marseille">Marseille</option>
                    </optgroup>
                    <optgroup label="DE" disabled>
                      <option defaultValue="Hamburg">Hamburg</option>
                      <option defaultValue="Munich">Munich</option>
                      <option defaultValue="Berlin">Berlin</option>
                    </optgroup>
                    <optgroup label="US">
                      <option defaultValue="New York">New York</option>
                      <option defaultValue="Washington" disabled>
                        Washington
                      </option>
                      <option defaultValue="Michigan">Michigan</option>
                    </optgroup>
                    <optgroup label="SP">
                      <option defaultValue="Madrid">Madrid</option>
                      <option defaultValue="Barcelona">Barcelona</option>
                      <option defaultValue="Malaga">Malaga</option>
                    </optgroup>
                    <optgroup label="CA">
                      <option defaultValue="Montreal">Montreal</option>
                      <option defaultValue="Toronto">Toronto</option>
                      <option defaultValue="Vancouver">Vancouver</option>
                    </optgroup>
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
                        &lt;label htmlFor=&quot;choices-single-groups&quot;
                        className=&quot;form-label text-muted&quot;&gt;Option
                        Groups&lt;/label&gt; &lt;select
                        className=&quot;form-control&quot;
                        id=&quot;choices-single-groups&quot; data-choices
                        data-choices-groups data-placeholder=&quot;Select
                        City&quot; name=&quot;choices-single-groups&quot;&gt;
                        &lt;option defaultValue=&quot;&quot;&gt;Choose a
                        city&lt;/option&gt; &lt;optgroup
                        label=&quot;UK&quot;&gt; &lt;option
                        defaultValue=&quot;London&quot;&gt;London&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Manchester&quot;&gt;Manchester&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Liverpool&quot;&gt;Liverpool&lt;/option&gt;
                        &lt;/optgroup&gt; &lt;optgroup label=&quot;FR&quot;&gt;
                        &lt;option
                        defaultValue=&quot;Paris&quot;&gt;Paris&lt;/option&gt;
                        &lt;option defaultValue=&quot;Lyon&quot;&gt;Lyon&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Marseille&quot;&gt;Marseille&lt;/option&gt;
                        &lt;/optgroup&gt; &lt;optgroup label=&quot;DE&quot;
                        disabled&gt; &lt;option
                        defaultValue=&quot;Hamburg&quot;&gt;Hamburg&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Munich&quot;&gt;Munich&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Berlin&quot;&gt;Berlin&lt;/option&gt;
                        &lt;/optgroup&gt; &lt;optgroup label=&quot;US&quot;&gt;
                        &lt;option defaultValue=&quot;New York&quot;&gt;New
                        York&lt;/option&gt; &lt;option
                        defaultValue=&quot;Washington&quot;
                        disabled&gt;Washington&lt;/option&gt; &lt;option
                        defaultValue=&quot;Michigan&quot;&gt;Michigan&lt;/option&gt;
                        &lt;/optgroup&gt; &lt;optgroup label=&quot;SP&quot;&gt;
                        &lt;option
                        defaultValue=&quot;Madrid&quot;&gt;Madrid&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Barcelona&quot;&gt;Barcelona&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Malaga&quot;&gt;Malaga&lt;/option&gt;
                        &lt;/optgroup&gt; &lt;optgroup label=&quot;CA&quot;&gt;
                        &lt;option
                        defaultValue=&quot;Montreal&quot;&gt;Montreal&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Toronto&quot;&gt;Toronto&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Vancouver&quot;&gt;Vancouver&lt;/option&gt;
                        &lt;/optgroup&gt; &lt;/select&gt;
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
                  id="options-add-no-search"
                >
                  Options added via config with no search
                  <a className="anchor-link" href="#options-add-no-search">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Set
                  <code>
                    data-choices data-choices-search-false
                    data-choices-removeItem
                  </code>
                </p>

                <div className="w-50 mb-3">
                  <select
                    className="form-control"
                    id="choices-single-no-search"
                    name="choices-single-no-search"
                    data-choices
                    data-choices-search-false
                    // data-choices-removeItem
                  >
                    <option defaultValue="Zero">Zero</option>
                    <option defaultValue="One">One</option>
                    <option defaultValue="Two">Two</option>
                    <option defaultValue="Three">Three</option>
                    <option defaultValue="Four">Four</option>
                    <option defaultValue="Five">Five</option>
                    <option defaultValue="Six">Six</option>
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
                        &lt;select className=&quot;form-control&quot;
                        id=&quot;choices-single-no-search&quot;
                        name=&quot;choices-single-no-search&quot; data-choices
                        data-choices-search-false data-choices-removeItem&gt;
                        &lt;option defaultValue=&quot;Zero&quot;&gt;Zero&lt;/option&gt;
                        &lt;option defaultValue=&quot;One&quot;&gt;One&lt;/option&gt;
                        &lt;option defaultValue=&quot;Two&quot;&gt;Two&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Three&quot;&gt;Three&lt;/option&gt;
                        &lt;option defaultValue=&quot;Four&quot;&gt;Four&lt;/option&gt;
                        &lt;option defaultValue=&quot;Five&quot;&gt;Five&lt;/option&gt;
                        &lt;option defaultValue=&quot;Six&quot;&gt;Six&lt;/option&gt;
                        &lt;/select&gt;
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
                  id="options-add-no-sorting"
                >
                  Options added via config with no sorting
                  <a className="anchor-link" href="#options-add-no-sorting">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Set
                  <code>data-choices data-choices-sorting-false</code>
                  attribute.
                </p>
                <div className="w-50 mb-3">
                  <select
                    className="form-control"
                    id="choices-single-no-sorting"
                    name="choices-single-no-sorting"
                    data-choices
                    data-choices-sorting-false
                  >
                    <option defaultValue="Madrid">Madrid</option>
                    <option defaultValue="Toronto">Toronto</option>
                    <option defaultValue="Vancouver">Vancouver</option>
                    <option defaultValue="London">London</option>
                    <option defaultValue="Manchester">Manchester</option>
                    <option defaultValue="Liverpool">Liverpool</option>
                    <option defaultValue="Paris">Paris</option>
                    <option defaultValue="Malaga">Malaga</option>
                    <option defaultValue="Washington" disabled>
                      Washington
                    </option>
                    <option defaultValue="Lyon">Lyon</option>
                    <option defaultValue="Marseille">Marseille</option>
                    <option defaultValue="Hamburg">Hamburg</option>
                    <option defaultValue="Munich">Munich</option>
                    <option defaultValue="Barcelona">Barcelona</option>
                    <option defaultValue="Berlin">Berlin</option>
                    <option defaultValue="Montreal">Montreal</option>
                    <option defaultValue="New York">New York</option>
                    <option defaultValue="Michigan">Michigan</option>
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
                        &lt;select className=&quot;form-control&quot;
                        id=&quot;choices-single-no-sorting&quot;
                        name=&quot;choices-single-no-sorting&quot; data-choices
                        data-choices-sorting-false&gt; &lt;option
                        defaultValue=&quot;Madrid&quot;&gt;Madrid&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Toronto&quot;&gt;Toronto&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Vancouver&quot;&gt;Vancouver&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;London&quot;&gt;London&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Manchester&quot;&gt;Manchester&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Liverpool&quot;&gt;Liverpool&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Paris&quot;&gt;Paris&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Malaga&quot;&gt;Malaga&lt;/option&gt;
                        &lt;option defaultValue=&quot;Washington&quot;
                        disabled&gt;Washington&lt;/option&gt; &lt;option
                        defaultValue=&quot;Lyon&quot;&gt;Lyon&lt;/option&gt; &lt;option
                        defaultValue=&quot;Marseille&quot;&gt;Marseille&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Hamburg&quot;&gt;Hamburg&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Munich&quot;&gt;Munich&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Barcelona&quot;&gt;Barcelona&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Berlin&quot;&gt;Berlin&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Montreal&quot;&gt;Montreal&lt;/option&gt;
                        &lt;option defaultValue=&quot;New York&quot;&gt;New
                        York&lt;/option&gt; &lt;option
                        defaultValue=&quot;Michigan&quot;&gt;Michigan&lt;/option&gt;
                        &lt;/select&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="multiple-select">
                  Multiple select input
                  <a className="anchor-link" href="#multiple-select">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Set <code>data-choices multiple</code> attribute.
                </p>
                <div className="w-50 mb-3">
                  <select
                    className="form-control"
                    id="choices-multiple-default"
                    data-choices
                    name="choices-multiple-default"
                    multiple
                  >
                    <option defaultValue="Choice 1" select="true">
                      Choice 1
                    </option>
                    <option defaultValue="Choice 2">Choice 2</option>
                    <option defaultValue="Choice 3">Choice 3</option>
                    <option defaultValue="Choice 4" disabled>
                      Choice 4
                    </option>
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
                        &lt;select className=&quot;form-control&quot;
                        id=&quot;choices-multiple-default&quot; data-choices
                        name=&quot;choices-multiple-default&quot; multiple&gt;
                        &lt;option defaultValue=&quot;Choice 1&quot; selected&gt;Choice
                        1&lt;/option&gt; &lt;option defaultValue=&quot;Choice
                        2&quot;&gt;Choice 2&lt;/option&gt; &lt;option
                        defaultValue=&quot;Choice 3&quot;&gt;Choice 3&lt;/option&gt;
                        &lt;option defaultValue=&quot;Choice 4&quot; disabled&gt;Choice
                        4&lt;/option&gt; &lt;/select&gt;
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
                  id="multiple-select-remove"
                >
                  Multiple select With remove button input
                  <a className="anchor-link" href="#multiple-select-remove">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Set
                  <code>data-choices data-choices-removeItem multiple</code>
                  attribute.
                </p>
                <div className="w-50 mb-3">
                  <select
                    className="form-control"
                    id="choices-multiple-remove-button"
                    data-choices
                    // data-choices-removeItem
                    name="choices-multiple-remove-button"
                    multiple
                  >
                    <option defaultValue="Choice 1" select="true">
                      Choice 1
                    </option>
                    <option defaultValue="Choice 2">Choice 2</option>
                    <option defaultValue="Choice 3">Choice 3</option>
                    <option defaultValue="Choice 4">Choice 4</option>
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
                        &lt;select className=&quot;form-control&quot;
                        id=&quot;choices-multiple-remove-button&quot;
                        data-choices data-choices-removeItem
                        name=&quot;choices-multiple-remove-button&quot;
                        multiple&gt; &lt;option defaultValue=&quot;Choice 1&quot;
                        selected&gt;Choice 1&lt;/option&gt; &lt;option
                        defaultValue=&quot;Choice 2&quot;&gt;Choice 2&lt;/option&gt;
                        &lt;option defaultValue=&quot;Choice 3&quot;&gt;Choice
                        3&lt;/option&gt; &lt;option defaultValue=&quot;Choice
                        4&quot;&gt;Choice 4&lt;/option&gt; &lt;/select&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="multiple-groups">
                  Multiple select With Option groups
                  <a className="anchor-link" href="#default">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Set
                  <code>
                    data-choices data-choices-multiple-groups="true" multiple
                  </code>
                  attribute.
                </p>

                <div className="w-50 mb-3">
                  <label
                    htmlFor="choices-multiple-groups"
                    className="form-label text-muted"
                  >
                    Option groups
                  </label>
                  <select
                    className="form-control"
                    id="choices-multiple-groups"
                    name="choices-multiple-groups"
                    data-choices
                    data-choices-multiple-groups="true"
                    multiple
                  >
                    <option defaultValue="">Choose a city</option>
                    <optgroup label="UK">
                      <option defaultValue="London">London</option>
                      <option defaultValue="Manchester">Manchester</option>
                      <option defaultValue="Liverpool">Liverpool</option>
                    </optgroup>
                    <optgroup label="FR">
                      <option defaultValue="Paris">Paris</option>
                      <option defaultValue="Lyon">Lyon</option>
                      <option defaultValue="Marseille">Marseille</option>
                    </optgroup>
                    <optgroup label="DE" disabled>
                      <option defaultValue="Hamburg">Hamburg</option>
                      <option defaultValue="Munich">Munich</option>
                      <option defaultValue="Berlin">Berlin</option>
                    </optgroup>
                    <optgroup label="US">
                      <option defaultValue="New York">New York</option>
                      <option defaultValue="Washington" disabled>
                        Washington
                      </option>
                      <option defaultValue="Michigan">Michigan</option>
                    </optgroup>
                    <optgroup label="SP">
                      <option defaultValue="Madrid">Madrid</option>
                      <option defaultValue="Barcelona">Barcelona</option>
                      <option defaultValue="Malaga">Malaga</option>
                    </optgroup>
                    <optgroup label="CA">
                      <option defaultValue="Montreal">Montreal</option>
                      <option defaultValue="Toronto">Toronto</option>
                      <option defaultValue="Vancouver">Vancouver</option>
                    </optgroup>
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
                        &lt;label htmlFor=&quot;choices-multiple-groups&quot;
                        className=&quot;form-label text-muted&quot;&gt;Option
                        groups&lt;/label&gt; &lt;select
                        className=&quot;form-control&quot;
                        id=&quot;choices-multiple-groups&quot;
                        name=&quot;choices-multiple-groups&quot; data-choices
                        data-choices-multiple-groups=&quot;true&quot;
                        multiple&gt; &lt;option defaultValue=&quot;&quot;&gt;Choose a
                        city&lt;/option&gt; &lt;optgroup
                        label=&quot;UK&quot;&gt; &lt;option
                        defaultValue=&quot;London&quot;&gt;London&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Manchester&quot;&gt;Manchester&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Liverpool&quot;&gt;Liverpool&lt;/option&gt;
                        &lt;/optgroup&gt; &lt;optgroup label=&quot;FR&quot;&gt;
                        &lt;option
                        defaultValue=&quot;Paris&quot;&gt;Paris&lt;/option&gt;
                        &lt;option defaultValue=&quot;Lyon&quot;&gt;Lyon&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Marseille&quot;&gt;Marseille&lt;/option&gt;
                        &lt;/optgroup&gt; &lt;optgroup label=&quot;DE&quot;
                        disabled&gt; &lt;option
                        defaultValue=&quot;Hamburg&quot;&gt;Hamburg&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Munich&quot;&gt;Munich&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Berlin&quot;&gt;Berlin&lt;/option&gt;
                        &lt;/optgroup&gt; &lt;optgroup label=&quot;US&quot;&gt;
                        &lt;option defaultValue=&quot;New York&quot;&gt;New
                        York&lt;/option&gt; &lt;option
                        defaultValue=&quot;Washington&quot;
                        disabled&gt;Washington&lt;/option&gt; &lt;option
                        defaultValue=&quot;Michigan&quot;&gt;Michigan&lt;/option&gt;
                        &lt;/optgroup&gt; &lt;optgroup label=&quot;SP&quot;&gt;
                        &lt;option
                        defaultValue=&quot;Madrid&quot;&gt;Madrid&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Barcelona&quot;&gt;Barcelona&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Malaga&quot;&gt;Malaga&lt;/option&gt;
                        &lt;/optgroup&gt; &lt;optgroup label=&quot;CA&quot;&gt;
                        &lt;option
                        defaultValue=&quot;Montreal&quot;&gt;Montreal&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Toronto&quot;&gt;Toronto&lt;/option&gt;
                        &lt;option
                        defaultValue=&quot;Vancouver&quot;&gt;Vancouver&lt;/option&gt;
                        &lt;/optgroup&gt; &lt;/select&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="text-input">
                  Text inputs{" "}
                  <a className="anchor-link" href="#text-input">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Set
                  <code>
                    data-choices data-choices-limit="Required Limit"
                    data-choices-removeItem
                  </code>
                  attribute.
                </p>
                <div className="w-50 mb-3">
                  <label
                    htmlFor="choices-text-remove-button"
                    className="form-label text-muted"
                  >
                    Set limit values with remove button
                  </label>
                  <input
                    className="form-control"
                    id="choices-text-remove-button"
                    data-choices
                    data-choices-limit="3"
                    // data-choices-removeItem
                    type="text"
                    defaultValue="Task-1"
                  />
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
                        &lt;label htmlFor=&quot;choices-text-remove-button&quot;
                        className=&quot;form-label text-muted&quot;&gt;Set limit
                        values with remove button&lt;/label&gt; &lt;input
                        className=&quot;form-control&quot;
                        id=&quot;choices-text-remove-button&quot; data-choices
                        data-choices-limit=&quot;3&quot; data-choices-removeItem
                        type=&quot;text&quot; defaultValue=&quot;Task-1&quot; /&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="unique-values">
                  Text inputs in Unique values only, no pasting
                  <a className="anchor-link" href="#unique-values">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Set
                  <code>data-choices data-choices-text-unique-true</code>
                  attribute.
                </p>
                <div className="w-50 mb-3">
                  <label
                    htmlFor="choices-text-unique-values"
                    className="form-label text-muted"
                  >
                    Unique values only, no pasting
                  </label>
                  <input
                    className="form-control"
                    id="choices-text-unique-values"
                    data-choices
                    data-choices-text-unique-true
                    type="text"
                    defaultValue="Project-A, Project-B"
                  />
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
                        &lt;label htmlFor=&quot;choices-text-unique-values&quot;
                        className=&quot;form-label text-muted&quot;&gt;Unique
                        values only, no pasting&lt;/label&gt; &lt;input
                        className=&quot;form-control&quot;
                        id=&quot;choices-text-unique-values&quot; data-choices
                        data-choices-text-unique-true type=&quot;text&quot;
                        defaultValue=&quot;Project-A, Project-B&quot; /&gt;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-1 anchor" id="disabled">
                  Disabled Text Inputs
                  <a className="anchor-link" href="#disabled">
                    #
                  </a>
                </h5>
                <p className="text-muted">
                  Set
                  <code>data-choices data-choices-text-disabled-true</code>
                  attribute.
                </p>
                <div className="w-50 mb-3">
                  <label
                    htmlFor="choices-text-disabled"
                    className="form-label text-muted"
                  >
                    Disabled
                  </label>
                  <input
                    className="form-control"
                    id="choices-text-disabled"
                    data-choices
                    data-choices-text-disabled-true
                    type="text"
                    defaultValue="josh@joshuajohnson.co.uk, joe@bloggs.co.uk"
                  />
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
                        &lt;label htmlFor=&quot;choices-text-disabled&quot;
                        className=&quot;form-label
                        text-muted&quot;&gt;Disabled&lt;/label&gt; &lt;input
                        className=&quot;form-control&quot;
                        id=&quot;choices-text-disabled&quot; data-choices
                        data-choices-text-disabled-true type=&quot;text&quot;
                        defaultValue=&quot;josh@joshuajohnson.co.uk,
                        joe@bloggs.co.uk&quot; /&gt;
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
                  <a href="#overview" className="nav-link">
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#basic" className="nav-link">
                    Basic Example{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#options-group" className="nav-link">
                    Option Groups Example
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#options-add-no-search" className="nav-link">
                    Options added via config with no search
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#options-add-no-sorting" className="nav-link">
                    Options added via config with no sorting
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#multiple-select" className="nav-link">
                    Multiple select input
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#multiple-select-remove" className="nav-link">
                    Multiple select With remove button input
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#multiple-groups" className="nav-link">
                    Multiple select With Option groups
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#text-input" className="nav-link">
                    Text inputs{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#unique-values" className="nav-link">
                    Text inputs in Unique values only, no pasting
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#disabled" className="nav-link">
                    Disabled Text Inputs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- end row --> */}
      </div>
      <Footer />
    </div>
  );
};

export default ChoiceSelect;
