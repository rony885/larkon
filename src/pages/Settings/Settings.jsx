import React from "react";
import Footer from "../../components/Footer";

const Settings = () => {
  return (
    <div className="page-content">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title d-flex align-items-center gap-1">
                  <iconify-icon
                    icon="solar:settings-bold-duotone"
                    className="text-primary fs-20"
                  ></iconify-icon>
                  General Settings
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="meta-name" className="form-label">
                          Meta Title
                        </label>
                        <input
                          type="text"
                          id="meta-name"
                          className="form-control"
                          placeholder="Title"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="meta-tag" className="form-label">
                          Meta Tag Keyword
                        </label>
                        <input
                          type="text"
                          id="meta-tag"
                          className="form-control"
                          placeholder="Enter word"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="themes" className="form-label">
                          Store Themes
                        </label>
                        <select
                          className="form-control"
                          id="themes"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Themes"
                        >
                          <option defaultValue="">Default</option>
                          <option defaultValue="Dark">Dark</option>
                          <option defaultValue="Minimalist">Minimalist</option>
                          <option defaultValue="High Contrast">High Contrast</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="layout" className="form-label">
                          Layout
                        </label>
                        <select
                          className="form-control"
                          id="layout"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Layout"
                        >
                          <option defaultValue="">Default</option>
                          <option defaultValue="Electronics">Electronics</option>
                          <option defaultValue="Fashion">Fashion</option>
                          <option defaultValue="Dining">Dining</option>
                          <option defaultValue="Interior">Interior</option>
                          <option defaultValue="Home">Home</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-12">
                    <div className="">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control bg-light-subtle"
                        id="description"
                        rows="4"
                        placeholder="Type description"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title d-flex align-items-center gap-1">
                  <iconify-icon
                    icon="solar:shop-2-bold-duotone"
                    className="text-primary fs-20"
                  ></iconify-icon>
                  Store Settings
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="store-name" className="form-label">
                          Store Name
                        </label>
                        <input
                          type="text"
                          id="store-name"
                          className="form-control"
                          placeholder="Enter name"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="owner-name" className="form-label">
                          Store Owner Full Name
                        </label>
                        <input
                          type="text"
                          id="owner-name"
                          className="form-control"
                          placeholder="Full name"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="schedule-number" className="form-label">
                        Owner Phone number
                      </label>
                      <input
                        type="number"
                        id="schedule-number"
                        name="schedule-number"
                        className="form-control"
                        placeholder="Number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="schedule-email" className="form-label">
                          Owner Email
                        </label>
                        <input
                          type="email"
                          id="schedule-email"
                          name="schedule-email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Full Address
                      </label>
                      <textarea
                        className="form-control bg-light-subtle"
                        id="address"
                        rows="3"
                        placeholder="Type address"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="your-zipcode" className="form-label">
                          Zip-Code
                        </label>
                        <input
                          type="number"
                          id="your-zipcode"
                          className="form-control"
                          placeholder="zip-code"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="choices-city" className="form-label">
                          City
                        </label>
                        <select
                          className="form-control"
                          id="choices-city"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select City"
                          name="choices-city"
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
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <form>
                      <label htmlFor="choices-country" className="form-label">
                        Country
                      </label>
                      <select
                        className="form-control"
                        id="choices-country"
                        data-choices
                        data-choices-groups
                        data-placeholder="Select Country"
                        name="choices-country"
                      >
                        <option defaultValue="">Choose a country</option>
                        <optgroup label="">
                          <option defaultValue="">United Kingdom</option>
                          <option defaultValue="Fran">France</option>
                          <option defaultValue="Netherlands">Netherlands</option>
                          <option defaultValue="U.S.A">U.S.A</option>
                          <option defaultValue="Denmark">Denmark</option>
                          <option defaultValue="Canada">Canada</option>
                          <option defaultValue="Australia">Australia</option>
                          <option defaultValue="India">India</option>
                          <option defaultValue="Germany">Germany</option>
                          <option defaultValue="Spain">Spain</option>
                          <option defaultValue="United Arab Emirates">
                            United Arab Emirates
                          </option>
                        </optgroup>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title d-flex align-items-center gap-1">
                  <iconify-icon
                    icon="solar:compass-bold-duotone"
                    className="text-primary fs-20"
                  ></iconify-icon>
                  Localization Settings
                </h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="choices-country1" className="form-label">
                          Country
                        </label>
                        <select
                          className="form-control"
                          id="choices-country1"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Country"
                          name="choices-country"
                        >
                          <option defaultValue="">Choose a country</option>
                          <optgroup label="">
                            <option defaultValue="">United Kingdom</option>
                            <option defaultValue="Fran">France</option>
                            <option defaultValue="Netherlands">Netherlands</option>
                            <option defaultValue="U.S.A">U.S.A</option>
                            <option defaultValue="Denmark">Denmark</option>
                            <option defaultValue="Canada">Canada</option>
                            <option defaultValue="Australia">Australia</option>
                            <option defaultValue="India">India</option>
                            <option defaultValue="Germany">Germany</option>
                            <option defaultValue="Spain">Spain</option>
                            <option defaultValue="United Arab Emirates">
                              United Arab Emirates
                            </option>
                          </optgroup>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="choices-language" className="form-label">
                          Language
                        </label>
                        <select
                          className="form-control"
                          id="choices-language"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select language"
                          name="choices-language"
                        >
                          <option defaultValue="">English</option>
                          <optgroup label="">
                            <option defaultValue="">Russian</option>
                            <option defaultValue="Arabic">Arabic</option>
                            <option defaultValue="Spanish">Spanish</option>
                            <option defaultValue="Turkish">Turkish</option>
                            <option defaultValue="German">German</option>
                            <option defaultValue="Armenian">Armenian</option>
                            <option defaultValue="Italian">Italian</option>
                            <option defaultValue="Catalán">Catalán</option>
                            <option defaultValue="Hindi">Hindi</option>
                            <option defaultValue="Japanese">Japanese</option>
                            <option defaultValue="French">French</option>
                          </optgroup>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="choices-currency" className="form-label">
                          Currency
                        </label>
                        <select
                          className="form-control"
                          id="choices-currency"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Currency"
                          name="choices-currency"
                        >
                          <option defaultValue="">Us Dollar</option>
                          <optgroup label="">
                            <option defaultValue="">Pound</option>
                            <option defaultValue="Indian Rupee">Indian Rupee</option>
                            <option defaultValue="Euro">Euro</option>
                            <option defaultValue="Australian Dollar">
                              Australian Dollar
                            </option>
                            <option defaultValue="Japanese Yen">Japanese Yen</option>
                            <option defaultValue="Korean Won">Korean Won</option>
                          </optgroup>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="choices-length" className="form-label">
                          Length Class
                        </label>
                        <select
                          className="form-control"
                          id="choices-length"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Length"
                          name="choices-length"
                        >
                          <option defaultValue="">Centimeter</option>
                          <optgroup label="">
                            <option defaultValue="">Millimeter</option>
                            <option defaultValue="Inch">Inch</option>
                          </optgroup>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-6">
                    <form>
                      <div className="">
                        <label htmlFor="choices-weight" className="form-label">
                          Weight Class
                        </label>
                        <select
                          className="form-control"
                          id="choices-weight"
                          data-choices
                          data-choices-groups
                          data-placeholder="Select Weight"
                          name="choices-weight"
                        >
                          <option defaultValue="">Kilogram</option>
                          <optgroup label="">
                            <option defaultValue="">Gram</option>
                            <option defaultValue="Pound">Pound</option>
                            <option defaultValue="Ounce">Ounce</option>
                          </optgroup>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title d-flex align-items-center gap-1">
                  <iconify-icon
                    icon="solar:box-bold-duotone"
                    className="text-primary fs-20"
                  ></iconify-icon>
                  Categories Settings
                </h4>
              </div>
              <div className="card-body">
                <p>Category Product Count</p>
                <div className="d-flex gap-2 align-items-center mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      No
                    </label>
                  </div>
                </div>
                <form>
                  <div className="mb-1 pb-1">
                    <label htmlFor="items-par-page" className="form-label">
                      Default Items Per Page
                    </label>
                    <input
                      type="number"
                      id="items-par-page"
                      className="form-control"
                      placeholder="000"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title d-flex align-items-center gap-1">
                  <iconify-icon
                    icon="solar:chat-square-check-bold-duotone"
                    className="text-primary fs-20"
                  ></iconify-icon>
                  Reviews Settings
                </h4>
              </div>
              <div className="card-body">
                <p>Allow Reviews</p>
                <div className="d-flex gap-2 align-items-center mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault3"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="flexRadioDefault4"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                      No
                    </label>
                  </div>
                </div>
                <p className="mt-3 pt-1">Allow Guest Reviews</p>
                <div className="d-flex gap-2 align-items-center mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault3"
                      id="flexRadioDefault5"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault5">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault3"
                      id="flexRadioDefault6"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault6">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title d-flex align-items-center gap-1">
                  <iconify-icon
                    icon="solar:ticket-bold-duotone"
                    className="text-primary fs-20"
                  ></iconify-icon>
                  Vouchers Settings
                </h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="min-vouchers" className="form-label">
                      Minimum Vouchers
                    </label>
                    <input
                      type="number"
                      id="min-vouchers"
                      className="form-control"
                      placeholder="000"
                      defaultValue="1"
                    />
                  </div>
                </form>
                <form>
                  <div className="">
                    <label htmlFor="mex-vouchers" className="form-label">
                      Maximum Vouchers
                    </label>
                    <input
                      type="number"
                      id="mex-vouchers"
                      className="form-control"
                      placeholder="000"
                      defaultValue="12"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title d-flex align-items-center gap-1">
                  <iconify-icon
                    icon="solar:ticket-sale-bold-duotone"
                    className="text-primary fs-20"
                  ></iconify-icon>
                  Tax Settings
                </h4>
              </div>
              <div className="card-body">
                <p>Prices with Tax</p>
                <div className="d-flex gap-2 align-items-center mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault4"
                      id="flexRadioDefault7"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault7">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault4"
                      id="flexRadioDefault8"
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault8">
                      No
                    </label>
                  </div>
                </div>
                <form>
                  <div className="mb-1 pb-1">
                    <label htmlFor="items-tax" className="form-label">
                      Default Tax Rate
                    </label>
                    <input
                      type="text"
                      id="items-tax"
                      className="form-control"
                      placeholder="000"
                      defaultValue="18%"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title d-flex align-items-center gap-1">
                  <iconify-icon
                    icon="solar:users-group-two-rounded-bold-duotone"
                    className="text-primary fs-20"
                  ></iconify-icon>
                  Customers Settings
                </h4>
              </div>
              <div className="card-body">
                <div className="row justify-content-between g-3">
                  <div className="col-lg-2 border-end">
                    <p>Customers Online</p>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault5"
                          id="flexRadioDefault9"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault9"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault5"
                          id="flexRadioDefault10"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault10"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 border-end">
                    <p>Customers Activity</p>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault6"
                          id="flexRadioDefault11"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault11"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault6"
                          id="flexRadioDefault12"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault12"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 border-end">
                    <p>Customer Searches</p>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault7"
                          id="flexRadioDefault13"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault13"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault7"
                          id="flexRadioDefault14"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault14"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 border-end">
                    <p>Allow Guest Checkout</p>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault8"
                          id="flexRadioDefault15"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault15"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault8"
                          id="flexRadioDefault16"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault16"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <p>Login Display Price</p>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault9"
                          id="flexRadioDefault17"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault17"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault9"
                          id="flexRadioDefault18"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault18"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <form>
                      <div className="">
                        <label htmlFor="login-attempts" className="form-label">
                          Max Login Attempts
                        </label>
                        <input
                          type="text"
                          id="login-attempts"
                          className="form-control"
                          placeholder="max"
                          defaultValue="1 hour"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-end">
          <a href="#!" className="btn btn-danger">
            Cancel
          </a>
          <a href="#!" className="btn btn-success">
            Save Change
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
