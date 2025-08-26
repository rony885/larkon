/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const UL = ({ handleTogglle }) => {
  const location = useLocation(); // Get current URL path
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");

  // Ref for the active element
  const activeItemRef = useRef(null);


 // Scroll to active item when route changes
  useEffect(() => {
    setTimeout(() => {
      if (activeItemRef.current) {
        activeItemRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 50); // delay to allow sidebar/menu to open
  }, [location.pathname]);

  // Sync active menu and submenu with the current URL
  useEffect(() => {
    const path = location.pathname;
    // Define menu mappings based on paths
    const menuMappings = {
      "/": "dashboard",
      // Products
      "/product-list": "products",
      "/product-grid": "products",
      "/product-details": "products",
      "/product-edit": "products",
      "/product-add": "products",
      "/business-form": "products",
      // Category
      "/category-list": "category",
      "/category-edit": "category",
      "/category-add": "category",
      // Inventory
      "/inventory-warehouse": "inventory",
      "/inventory-received-orders": "inventory",
      // Orders
      "/orders-list": "orders",
      "/order-detail": "orders",
      "/order-cart": "orders",
      "/order-checkout": "orders",
      // Purchases
      "/purchase-list": "purchases",
      "/purchase-order": "purchases",
      "/purchase-returns": "purchases",
      // Attributes
      "/attributes-list": "attributes",
      "/attributes-edit": "attributes",
      "/attributes-add": "attributes",
      // Invoices
      "/invoice-list": "invoice",
      "/invoice-details": "invoice",
      "/invoice-add": "invoice",
      // Settings
      "/settings": "settings",
      // Profile
      "/profile": "profile",
      // Customer
      "/customer-list": "customers",
      "/customer-details": "customers",
      // Seller
      "/seller-list": "sellers",
      "/seller-details": "sellers",
      "/seller-edit": "sellers",
      "/seller-add": "sellers",
      // Role
      "/role-list": "roles",
      "/role-edit": "roles",
      "/role-add": "roles",
      // Permissions
      "/permissions": "permissions",
      // Coupons
      "/coupons-list": "coupons",
      "/coupons-add": "coupons",
      // Review
      "/review": "review",
      // Calendar
      "/calendar": "calendar",
      // Todo
      "/app-todo": "app-todo",
      // Help Center
      "/help-center": "help-center",
      // Faqs
      "/faqs": "faqs",
      // Privacy Policy
      "/privacy-policy": "privacy-policy",
      // Pages
      "/coming-soon": "pages",
      "/timeline": "pages",
      "/pricing": "pages",
      "/maintenance": "pages",
      // Authentication
      "/sign-in": "authentication",
      "/sign-up": "authentication",
      "/password": "authentication",
      "/lock-screen": "authentication",
      // Widgets
      "/widgets": "widgets",
      // Base UI
      "/accordion": "base-ui",
      "/buttons": "base-ui",
      "/card": "base-ui",
      "/carousel": "base-ui",
      "/collapse": "base-ui",
      "/modal": "base-ui",
      "/tabs": "base-ui",
      "/toasts": "base-ui",
      "/tooltips": "base-ui",
      // Forms
      "/forms-basic": "forms",
      "/checkbox-radio": "forms",
      "/forms-choices": "forms",
      "/flatepicker": "forms",
      "/forms-editors": "forms",
    };

    // Define submenu mappings based on paths
    const subMenuMappings = {
      "/": "",
      // Products
      "/product-list": "product-list",
      "/product-grid": "product-grid",
      "/product-details": "product-details",
      "/product-edit": "product-edit",
      "/product-add": "product-add",
      "/business-form": "products",
      // Category
      "/category-list": "category-list",
      "/category-edit": "category-edit",
      "/category-add": "category-add",
      // Inventory
      "/inventory-warehouse": "inventory-warehouse",
      "/inventory-received-orders": "inventory-received-orders",
      // Orders
      "/orders-list": "orders-list",
      "/order-detail": "order-detail",
      "/order-checkout": "order-checkout",
      // Purchases
      "/purchase-list": "purchase-list",
      "/purchase-returns": "purchase-returns",
      // Attributes
      "/attributes-list": "attributes-list",
      "/attributes-edit": "attributes-edit",
      "/attributes-add": "attributes-add",
      // Invoices
      "/invoice-list": "invoice-list",
      "/invoice-details": "invoice-details",
      // Settings
      "/settings": "settings",
      // Profile
      "/profile": "profile",
      // Customer
      "/customer-list": "customer-list",
      "/customer-details": "customer-details",
      // Sellers
      "/seller-list": "seller-list",
      "/seller-details": "seller-details",
      "/seller-edit": "seller-edit",
      "/seller-add": "seller-add",
      // Role
      "/role-list": "role-list",
      "/role-edit": "role-edit",
      "/role-add": "role-add",
      // Permissions
      "/permissions": "permissions",
      // Coupons
      "/coupons-list": "coupons-list",
      "/coupons-add": "coupons-add",
      // Review
      "/review": "review",
      // Calendar
      "/calendar": "calendar",
      // Todo
      "/app-todo": "app-todo",
      // Help Center
      "/help-center": "help-center",
      // Faqs
      "/faqs": "faqs",
      // Privacy Policy
      "/privacy-policy": "privacy-policy",
      // Pages
      "/coming-soon": "coming-soon",
      "/timeline": "timeline",
      "/pricing": "pricing",
      "/maintenance": "maintenance",
      // Authentication
      "/sign-in": "sign-in",
      "/sign-up": "sign-up",
      "/password": "password",
      "/lock-screen": "lock-screen",
      // Widgets
      "/widgets": "widgets",
      // Base UI
      "/accordion": "accordion",
      "/buttons": "buttons",
      "/card": "card",
      "/carousel": "carousel",
      "/collapse": "collapse",
      "/modal": "modal",
      "/tabs": "tabs",
      "/toasts": "toasts",
      "/tooltips": "tooltips",
      // Forms
      "/forms-basic": "forms-basic",
      "/checkbox-radio": "checkbox-radio",
      "/forms-choices": "forms-choices",
      "/flatepicker": "flatepicker",
      "/forms-editors": "flatepicker",
    };

    // Update active menu and active submenu based on the URL path
    if (path.startsWith("/product-update")) {
      setActiveMenu("products");
      setActiveSubMenu("product-update");
    } else if (path.startsWith("/product-stock")) {
      setActiveMenu("products");
      setActiveSubMenu("product-stock");
    } else {
      setActiveMenu(menuMappings[path] || "");
      setActiveSubMenu(subMenuMappings[path] || "");
    }
  }, [location.pathname]);

  // Handle submenu toggle (open/close)
  const handleSubMenuToggle = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? "" : menu));
  };

  return (
    <>
      <ul className="navbar-nav" id="navbar-nav">
        <li className="menu-title">General</li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "dashboard" ? "active" : ""}`}
            to="/"
               ref={location.pathname === "/" ? activeItemRef : null}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:widget-5-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Dashboard </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "products" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("products")}
            to="#sidebarProducts"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarProducts"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:t-shirt-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Products </span>
          </Link>

          <div
            className={`collapse ${activeMenu === "products" ? "show" : ""}`}
            id="sidebarProducts"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "product-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/product-list"
                  ref={activeSubMenu === "product-list" ? activeItemRef : null}
                >
                  List
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "product-grid" ? "active" : ""
                  }`}
                  to="/product-grid"
                  onClick={handleTogglle}
                >
                  Grid
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "product-details" ? "active" : ""
                  }`}
                  to="/product-details"
                  onClick={handleTogglle}
                >
                  Details
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "product-edit" ? "active" : ""
                  }`}
                  to="/product-edit"
                  onClick={handleTogglle}
                >
                  Edit
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "product-add" ? "active" : ""
                  }`}
                  to="/product-add"
                  onClick={handleTogglle}
                >
                  Create
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "business-form" ? "active" : ""
                  }`}
                  to="/business-form"
                  onClick={handleTogglle}
                >
                  Business Form
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "category" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("category")}
            to="#sidebarCategory"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarCategory"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:clipboard-list-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Category </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "category" ? "show" : ""}`}
            id="sidebarCategory"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "category-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/category-list"
                >
                  List
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "category-edit" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/category-edit"
                >
                  Edit
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "category-add" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/category-add"
                >
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "inventory" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("inventory")}
            to="#sidebarInventory"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarInventory"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:box-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Inventory </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "inventory" ? "show" : ""}`}
            id="sidebarInventory"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "inventory-warehouse" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/inventory-warehouse"
                >
                  Warehouse
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "inventory-received-orders"
                      ? "active"
                      : ""
                  }`}
                  onClick={handleTogglle}
                  to="/inventory-received-orders"
                >
                  Received Orders
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "orders" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("orders")}
            to="#sidebarOrders"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarOrders"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:bag-smile-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Orders </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "orders" ? "show" : ""}`}
            id="sidebarOrders"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "orders-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/orders-list"
                >
                  List
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "order-detail" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/order-detail"
                >
                  Details
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "order-cart" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/order-cart"
                >
                  Cart
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "order-checkout" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/order-checkout"
                >
                  Check Out
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "purchases" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("purchases")}
            to="#sidebarPurchases"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarPurchases"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:card-send-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Purchases </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "purchases" ? "show" : ""}`}
            id="sidebarPurchases"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "purchase-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/purchase-list"
                >
                  List
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "purchase-order" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/purchase-order"
                >
                  Order
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "purchase-returns" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/purchase-returns"
                >
                  Return
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "attributes" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("attributes")}
            href="#sidebarAttributes"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarAttributes"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:confetti-minimalistic-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Attributes </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "attributes" ? "show" : ""}`}
            id="sidebarAttributes"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "attributes-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/attributes-list"
                >
                  List
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "attributes-edit" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/attributes-edit"
                >
                  Edit
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "attributes-add" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/attributes-add"
                >
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "invoice" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("invoice")}
            to="#sidebarInvoice"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarInvoice"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:bill-list-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Invoices </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "invoice" ? "show" : ""}`}
            id="sidebarInvoice"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "invoice-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/invoice-list"
                >
                  List
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "invoice-details" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/invoice-details"
                >
                  Details
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "invoice-add" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/invoice-add"
                >
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "settings" ? "active" : ""}`}
            to="/settings"
            onClick={handleTogglle}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:settings-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Settings </span>
          </Link>
        </li>

        <li className="menu-title mt-2">Users</li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "profile" ? "active" : ""}`}
            to="/profile"
            onClick={handleTogglle}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:chat-square-like-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Profile </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "roles" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("roles")}
            to="#sidebarRoles"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarRoles"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:user-speak-rounded-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Roles </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "roles" ? "show" : ""}`}
            id="sidebarRoles"
          >
            <ul className="nav sub-navbar-nav">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link
                    className={`sub-nav-link  ${
                      activeSubMenu === "role-list" ? "active" : ""
                    }`}
                    onClick={handleTogglle}
                    to="/role-list"
                  >
                    List
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link
                    className={`sub-nav-link  ${
                      activeSubMenu === "role-edit" ? "active" : ""
                    }`}
                    onClick={handleTogglle}
                    to="/role-edit"
                  >
                    Edit
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link
                    className={`sub-nav-link  ${
                      activeSubMenu === "role-add" ? "active" : ""
                    }`}
                    onClick={handleTogglle}
                    to="/role-add"
                  >
                    Create
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${
              activeMenu === "permissions" ? "active" : ""
            }`}
            to="/permissions"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:checklist-minimalistic-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Permissions </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "customers" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("customers")}
            to="#sidebarCustomers"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarCustomers"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:users-group-two-rounded-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Customers </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "customers" ? "show" : ""}`}
            id="sidebarCustomers"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "customer-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/customer-list"
                >
                  List
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "customer-details" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/customer-details"
                >
                  Details
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "sellers" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("sellers")}
            to="#sidebarSellers"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarSellers"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:shop-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Sellers </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "sellers" ? "show" : ""}`}
            id="sidebarSellers"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "seller-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/seller-list"
                >
                  List
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "seller-details" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/seller-details"
                >
                  Details
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "seller-edit" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/seller-edit"
                >
                  Edit
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "seller-add" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/seller-add"
                >
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="menu-title mt-2">Other</li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "coupons" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("coupons")}
            to="#sidebarCoupons"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarCoupons"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:leaf-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Coupons </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "coupons" ? "show" : ""}`}
            id="sidebarCoupons"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "coupons-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/coupons-list"
                >
                  List
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "coupons-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/coupons-add"
                >
                  Add
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "review" ? "active" : ""}`}
            to="/review"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:chat-square-like-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Reviews </span>
          </Link>
        </li>

        <li className="menu-title mt-2">Other Apps</li>

        {/* <li className="nav-item">
          <Link className="nav-link" to="/apps-chat">
            <span className="nav-icon">
              <iconify-icon icon="solar:chat-round-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Chat </span>
          </Link>
        </li> */}

        {/* <li className="nav-item">
          <Link className="nav-link" to="/email">
            <span className="nav-icon">
              <iconify-icon icon="solar:mailbox-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Email </span>
          </Link>
        </li> */}

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "calendar" ? "active" : ""}`}
            to="/calendar"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:calendar-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Calendar </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "app-todo" ? "active" : ""}`}
            to="/app-todo"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:checklist-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Todo </span>
          </Link>
        </li>

        <li className="menu-title mt-2">Support</li>

        <li className="nav-item">
          <Link
            className={`nav-link ${
              activeMenu === "help-center" ? "active" : ""
            }`}
            to="/help-center"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:help-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Help Center </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "faqs" ? "active" : ""}`}
            to="/faqs"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:question-circle-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> FAQs </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${
              activeMenu === "privacy-policy" ? "active" : ""
            }`}
            to="/privacy-policy"
            ref={activeSubMenu === "privacy-policy" ? activeItemRef : null}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:document-text-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Privacy Policy </span>
          </Link>
        </li>

        <li className="menu-title mt-2">Custom</li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "pages" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("pages")}
            to="#sidebarPages"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarPages"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:gift-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Pages </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "pages" ? "show" : ""}`}
            id="sidebarPages"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "coming-soon" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/coming-soon"
                >
                  Coming Soon
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "timeline" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/timeline"
                >
                  Timeline
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "pricing" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "maintenance" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/maintenance"
                >
                  Maintenance
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "pages-404" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/pages-404"
                >
                  404 Error
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "authentication" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("authentication")}
            to="#sidebarAuthentication"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarAuthentication"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:lock-keyhole-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Authentication </span>
          </Link>
          <div
            className={`collapse ${
              activeMenu === "authentication" ? "show" : ""
            }`}
            id="sidebarAuthentication"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "sign-in" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/sign-in"
                      ref={activeSubMenu === "sign-in" ? activeItemRef : null}
                >
                  Sign In
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "sign-up" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/sign-up"
                >
                  Sign Up
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "password" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/password"
                >
                  Reset Password
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "lock-screen" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/lock-screen"
                >
                  Lock Screen
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "widgets" ? "active" : ""}`}
            to="/widgets"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:atom-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text">Widgets</span>
            <span className="badge bg-info badge-pill text-end">9+</span>
          </Link>
        </li>

        <li className="menu-title mt-2">Components</li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "base-ui" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("base-ui")}
            to="#sidebarBaseUI"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarBaseUI"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:bookmark-square-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Base UI </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "base-ui" ? "show" : ""}`}
            id="sidebarBaseUI"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "accordion" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/accordion"
                >
                  Accordion
                </Link>
              </li>

              {/* <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/alerts">
                  Alerts
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/avatar">
                  Avatar
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/badge">
                  Badge
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/breadcrumb">
                  Breadcrumb
                </Link>
              </li> */}

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "buttons" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/buttons"
                >
                  Buttons
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "card" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/card"
                >
                  Card
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "carousel" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/carousel"
                >
                  Carousel
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "collapse" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/collapse"
                >
                  Collapse
                </Link>
              </li>
              {/* <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/dropdown">
                  Dropdown
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/list-group">
                  List Group
                </Link>
              </li> */}
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "modal" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/modal"
                >
                  Modal
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "tabs" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/tabs"
                >
                  Tabs
                </Link>
              </li>

              {/* <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/offcanvas">
                  Offcanvas
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/pagination">
                  Pagination
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/placeholders">
                  Placeholders
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/popovers">
                  Popovers
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/progress">
                  Progress
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/scrollspy">
                  Scrollspy
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/spinners">
                  Spinners
                </Link>
              </li> */}

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "toasts" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/toasts"
                >
                  Toasts
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "tooltips" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/tooltips"
                >
                  Tooltips
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* <li className="nav-item">
          <Link
            className="nav-link menu-arrow"
            to="#sidebarExtendedUI"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarExtendedUI"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:case-round-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Advanced UI </span>
          </Link>
          <div className="collapse" id="sidebarExtendedUI">
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/ratings">
                  Ratings
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/sweetalert">
                  Sweet Alert
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/swiper-silder">
                  Swiper Slider
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/scrollbar">
                  Scrollbar
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" href="/toastify">
                  Toastify
                </Link>
              </li>
            </ul>
          </div>
        </li> */}

        <li className="nav-item">
          <Link
            className="nav-link menu-arrow"
            to="#sidebarCharts"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarCharts"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:pie-chart-2-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Charts </span>
          </Link>
          <div className="collapse" id="sidebarCharts">
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/charts-apex-area">
                  Area
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/charts-apex-bar">
                  Bar
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/charts-apex-bubble">
                  Bubble
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="charts-apex-candlestick">
                  Candlestick
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/charts-apex-column">
                  Column
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/charts-apex-heatmap">
                  Heatmap
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/charts-apex-line">
                  Line
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/charts-apex-mixed">
                  Mixed
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/charts-apex-timeline">
                  Timeline
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="charts-apex-boxplot">
                  Boxplot
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/charts-apex-treemap">
                  Treemap
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/charts-apex-pie">
                  Pie
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/charts-apex-radar">
                  Radar
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/charts-apex-radialbar">
                  RadialBar
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/charts-apex-scatter">
                  Scatter
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/charts-apex-polar-area">
                  Polar Area
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "forms" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("forms")}
            to="#sidebarForms"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarForms"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:book-bookmark-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Forms </span>
          </Link>
          <div
            className={`collapse ${activeMenu === "forms" ? "show" : ""}`}
            id="sidebarForms"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "forms-basic" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/forms-basic"
                >
                  Basic Elements
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "checkbox-radio" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/checkbox-radio"
                >
                  Checkbox &amp; Radio
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "forms-choices" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/forms-choices"
                >
                  Choice Select
                </Link>
              </li>
              {/* <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/forms-clipboard">
                  Clipboard
                </Link>
              </li> */}
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "flatepicker" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/flatepicker"
                >
                  Flatepicker
                </Link>
              </li>
              {/* <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/forms-validation">
                  Validation
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/forms-wizard">
                  Wizard
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/forms-fileuploads">
                  File Upload
                </Link>
              </li> */}
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "forms-editors" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/forms-editors"
                >
                  Editors
                </Link>
              </li>
              {/* <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/forms-input-mask">
                  Input Mask
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/forms-range-slider">
                  Slider
                </Link>
              </li> */}
            </ul>
          </div>
        </li>

        {/* 
        <li className="nav-item">
          <Link
            className="nav-link menu-arrow"
            to="#sidebarTables"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarTables"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:tuning-2-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Tables </span>
          </Link>
          <div className="collapse" id="sidebarTables">
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/tables-basic">
                  Basic Tables
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/tables-gridjs">
                  Grid Js
                </Link>
              </li>
            </ul>
          </div>
        </li> */}

        {/* <li className="nav-item">
          <Link
            className="nav-link menu-arrow"
            to="#sidebarMaps"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarMaps"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:streets-map-point-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Maps </span>
          </Link>
          <div className="collapse" id="sidebarMaps">
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/maps-google">
                  Google Maps
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link className="sub-nav-link" to="/maps-vector">
                  Vector Maps
                </Link>
              </li>
            </ul>
          </div>
        </li> */}
      </ul>
    </>
  );
};

export default UL;
