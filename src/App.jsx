import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ActivityTimeline from "./components/ActivityTimeline/ActivityTimeline";
import SidebarTheme from "./components/SidebarTheme/SidebarTheme";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Loader from "./components/Loader";
import NotFound from "./components/NotFound";

import Home from "./pages/Home/Dashboard";
import ProductsList from "./pages/Products/ProductsList";
import AddProduct from "./pages/Products/AddProduct";
import ProductGrid from "./pages/Products/ProductGrid";
import ProductDetails from "./pages/Products/ProductDetails";
import ProductEdit from "./pages/Products/ProductEdit";

import CategoryList from "./pages/Category/CategoryList";
import CategoryEdit from "./pages/Category/CategoryEdit";
import AddCategory from "./pages/Category/AddCategory";

import Warehouse from "./pages/Inventory/Warehouse";
import ReceivedOrder from "./pages/Inventory/ReceivedOrder";

import OrderList from "./pages/Order/OrderList";
import OrderDetails from "./pages/Order/OrderDetails";
import OrderCart from "./pages/Order/OrderCart";
import CheckOut from "./pages/Order/CheckOut";

import PurchasesList from "./pages/Purchases/PurchasesList";
import PurchasesOrder from "./pages/Purchases/PurchasesOrder";
import PurchaseReturns from "./pages/Purchases/PurchaseReturns";

import AttributesList from "./pages/Attributes/AttributesList";
import AttributesEdit from "./pages/Attributes/AttributesEdit";
import AttributesAdd from "./pages/Attributes/AttributesAdd";

import InvoiceList from "./pages/Invoice/InvoiceList";
import InvoiceDetails from "./pages/Invoice/InvoiceDetails";
import AddInvoice from "./pages/Invoice/AddInvoice";

import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";

import CustomersList from "./pages/Customers/CustomersList";
import CustomersDetails from "./pages/Customers/CustomersDetails";

import SellersList from "./pages/Sellers/SellersList";
import SellerDetails from "./pages/Sellers/SellerDetails";
import SellerEdit from "./pages/Sellers/SellerEdit";
import AddSeller from "./pages/Sellers/AddSeller";

import RoleList from "./pages/Roles/RoleList";
import RoleEdit from "./pages/Roles/RoleEdit";
import RoleAdd from "./pages/Roles/RoleAdd";
import Permissions from "./pages/Permissions/Permissions";

import CouponsList from "./pages/Coupons/CouponsList";
import CouponsAdd from "./pages/Coupons/CouponsAdd";
import Reviews from "./pages/Reviews/Reviews";

import Calendar from "./pages/Calendar/Calendar";
import Todo from "./pages/Todo/Todo";

import HelpCenter from "./pages/Support/HelpCenter";
import FAQs from "./pages/Support/FAQs";
import PrivacyPolicy from "./pages/Support/PrivacyPolicy";

import ComingSoon from "./pages/Pages/ComingSoon";
import Timeline from "./pages/Pages/Timeline";
import Pricing from "./pages/Pages/Pricing";
import ErrorWithBody from "./pages/Pages/ErrorWithBody";

import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import ResetPassword from "./pages/Authentication/ResetPassword";
import LockScreen from "./pages/Authentication/LockScreen";
import Widgets from "./pages/Widgets/Widgets";

import Buttons from "./pages/BaseUI/Buttons";
import Accordion from "./pages/BaseUI/Accordion";
import Card from "./pages/BaseUI/Card";
import Carousel from "./pages/BaseUI/Carousel";
import Collapse from "./pages/BaseUI/Collapse";
import Modal from "./pages/BaseUI/Modal";
import Tabs from "./pages/BaseUI/Tabs";
import Toasts from "./pages/BaseUI/Toasts";
import Tooltips from "./pages/BaseUI/Tooltips";

import BasicElements from "./pages/Forms/BasicElements";
import Checkbox from "./pages/Forms/Checkbox";
import ChoiceSelect from "./pages/Forms/ChoiceSelect";
import Flatepicker from "./pages/Forms/Flatepicker";
import Editors from "./pages/Forms/Editors";
import BusinessForm from "./pages/Products/BusinessForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarEnabled, setIsSidebarEnabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const htmlElement = document.documentElement;
      const currentSize = htmlElement.getAttribute("data-menu-size");

      if (window.innerWidth <= 1140) {
        if (currentSize !== "hidden") {
          htmlElement.setAttribute("data-menu-size", "hidden");
        }
      } else {
        htmlElement.setAttribute("data-menu-size", "sm-hover-active");
      }
    };

    // Run once when mounted
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const htmlElement = document.documentElement;
  const bodyElement = document.body;

  // Handle toggle logic
  const handleToggle = () => {
    const dataMenuSize = htmlElement.getAttribute("data-menu-size");

    // Only execute the toggle logic if datamenusize is "hidden"
    if (dataMenuSize === "hidden") {
      if (isSidebarEnabled) {
        htmlElement.classList.remove("sidebar-enable");
        bodyElement.style.overflow = ""; // Reset overflow
      } else {
        htmlElement.classList.add("sidebar-enable");
        bodyElement.style.overflow = "hidden"; // Hide overflow
      }

      setIsSidebarEnabled(!isSidebarEnabled); // Toggle sidebar state
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BrowserRouter>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="wrapper">
            <Header handleTogglle={handleToggle} />
            <ActivityTimeline />
            <SidebarTheme />
            <SidebarMenu handleTogglle={handleToggle} />

            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/product-list" element={<ProductsList />}></Route>
              <Route path="/product-edit" element={<ProductEdit />}></Route>
              <Route path="/product-add" element={<AddProduct />}></Route>
              <Route path="/product-grid" element={<ProductGrid />}></Route>
              <Route
                path="/product-details"
                element={<ProductDetails />}
              ></Route>

              <Route path="/business-form" element={<BusinessForm />}></Route>

              <Route path="/category-list" element={<CategoryList />}></Route>
              <Route path="/category-edit" element={<CategoryEdit />}></Route>
              <Route path="/category-add" element={<AddCategory />}></Route>

              <Route
                path="/inventory-warehouse"
                element={<Warehouse />}
              ></Route>
              <Route
                path="/inventory-received-orders"
                element={<ReceivedOrder />}
              ></Route>

              <Route path="/orders-list" element={<OrderList />}></Route>
              <Route path="/order-detail" element={<OrderDetails />}></Route>
              <Route path="/order-cart" element={<OrderCart />}></Route>
              <Route path="/order-checkout" element={<CheckOut />}></Route>

              <Route path="/purchase-list" element={<PurchasesList />}></Route>
              <Route
                path="/purchase-order"
                element={<PurchasesOrder />}
              ></Route>
              <Route
                path="/purchase-returns"
                element={<PurchaseReturns />}
              ></Route>

              <Route
                path="/attributes-list"
                element={<AttributesList />}
              ></Route>
              <Route
                path="/attributes-edit"
                element={<AttributesEdit />}
              ></Route>
              <Route path="/attributes-add" element={<AttributesAdd />}></Route>

              <Route path="/invoice-list" element={<InvoiceList />}></Route>
              <Route
                path="/invoice-details"
                element={<InvoiceDetails />}
              ></Route>
              <Route path="/invoice-add" element={<AddInvoice />}></Route>

              <Route path="/settings" element={<Settings />}></Route>
              <Route path="/profile" element={<Profile />}></Route>

              <Route path="/customer-list" element={<CustomersList />}></Route>
              <Route
                path="/customer-details"
                element={<CustomersDetails />}
              ></Route>

              <Route path="/seller-list" element={<SellersList />}></Route>
              <Route path="/seller-details" element={<SellerDetails />}></Route>
              <Route path="/seller-edit" element={<SellerEdit />}></Route>
              <Route path="/seller-add" element={<AddSeller />}></Route>

              <Route path="/role-list" element={<RoleList />}></Route>
              <Route path="/role-edit" element={<RoleEdit />}></Route>
              <Route path="/role-add" element={<RoleAdd />}></Route>
              <Route path="/permissions" element={<Permissions />}></Route>

              <Route path="/coupons-list" element={<CouponsList />}></Route>
              <Route path="/coupons-add" element={<CouponsAdd />}></Route>
              <Route path="/review" element={<Reviews />}></Route>

              <Route path="/calendar" element={<Calendar />}></Route>
              <Route path="/app-todo" element={<Todo />}></Route>

              <Route path="/help-center" element={<HelpCenter />}></Route>
              <Route path="/faqs" element={<FAQs />}></Route>
              <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>

              <Route path="/coming-soon" element={<ComingSoon />}></Route>
              <Route path="/timeline" element={<Timeline />}></Route>
              <Route path="/pricing" element={<Pricing />}></Route>
              <Route path="/pages-404" element={<ErrorWithBody />}></Route>

              <Route path="/sign-in" element={<SignIn />}></Route>
              <Route path="/sign-up" element={<SignUp />}></Route>
              <Route path="/password" element={<ResetPassword />}></Route>
              <Route path="/lock-screen" element={<LockScreen />}></Route>
              <Route path="/widgets" element={<Widgets />}></Route>

              <Route path="/accordion" element={<Accordion />}></Route>
              <Route path="/buttons" element={<Buttons />}></Route>
              <Route path="/card" element={<Card />}></Route>
              <Route path="/carousel" element={<Carousel />}></Route>
              <Route path="/collapse" element={<Collapse />}></Route>
              <Route path="/modal" element={<Modal />}></Route>
              <Route path="/tabs" element={<Tabs />}></Route>
              <Route path="/toasts" element={<Toasts />}></Route>
              <Route path="/tooltips" element={<Tooltips />}></Route>

              <Route path="/forms-basic" element={<BasicElements />}></Route>
              <Route path="/checkbox-radio" element={<Checkbox />}></Route>
              <Route path="/forms-choices" element={<ChoiceSelect />}></Route>
              <Route path="/flatepicker" element={<Flatepicker />}></Route>
              <Route path="/forms-editors" element={<Editors />}></Route>

              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
