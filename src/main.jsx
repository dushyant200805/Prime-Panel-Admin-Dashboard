import { StrictMode } from 'react'
import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client'
import './index.css'

import $ from 'jquery'
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
// Set jQuery globally for plugins
window.jQuery = $;
window.$ = $;

// Dynamically import slimscroll after jQuery is global
import('jquery-slimscroll').catch(err => console.error('Failed to load slimscroll:', err));
import App from './App.jsx'
import DashBoardPage1 from "./pages/dashboard/DashBoardPage1.jsx";
import DashBoardPage2 from "./pages/dashboard//DashBoardPage2.jsx";
import DashBoardPage3 from "./pages/dashboard//DashBoardPage3.jsx";
import ChartPage from "./pages/chart/ChartPage.jsx";
import TablePage from "./pages/table/TablePage.jsx";
import ChatPage from "./pages/chat/ChatPage.jsx";
import EventCalendarPage from "./pages/event/EventCalendarPage.jsx";
import FormPage from "./pages/form/FormPage.jsx";
import WidgetsPage from "./pages/widgets/WidgetsPage.jsx";
import SettingPage from "./pages/setting/SettingPage.jsx";
import ProductPage from "./pages/product/ProductPage.jsx";
import FaqPage from "./pages/faq/FaqPage.jsx";
import TimeLinePage from "./pages/timeline/TimeLinePage.jsx";
import IndexPage from "./pages/indexpage/IndexPage.jsx";
import AddProductPage from "./pages/add product/AddProductPage.jsx";
import EditproductPage from "./pages/editproduct/EditproductPage.jsx";
import CartPage from "./pages/cart/CartPage.jsx";
import CheckOutPage from "./pages/checkout/CheckOutPage.jsx";
import ProductListPage from "./pages/productlist/ProductListPage.jsx";
import ProductDetailPage from "./pages/product-detail/ProductDetailPage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage.jsx";
import ForgetPass from "./pages/forgetpass/ForgetPasssPage.jsx";
import CreateAccountPage from "./pages/createaccount/CreateAccountPage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import NotFoundPage from "./pages/notfound/NotFoundPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App user={true}/>,
    children: [
      {
        path: "/",
        element: <DashBoardPage1 />,
      },
      {
        path: "/dashboard2",
        element: <DashBoardPage2 />,
      },
      {
        path: "/dashboard3",
        element: <DashBoardPage3 />,
      },
       {
        path: "/charts",
        element: <ChartPage />,
      },
      {
        path: "/tables",
        element: <TablePage />,
      },
      {
        path: "/chats",
        element: <ChatPage />,
      },
      {
        path: "/events",
        element: <EventCalendarPage />,
      },
       {
        path: "/forms",
        element: <FormPage />,
      },
       {
        path: "/widgets",
        element: <WidgetsPage />,
      },
       {
        path: "/settings",
        element: <SettingPage />,
      },
      {
        path: "/cards",
        element: <ProductPage />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
       {
        path: "/timeline",
        element: <TimeLinePage />,
      },
      {
        path: "/page1",
        element: <IndexPage />,
      },
      {
        path: "/addproduct",
        element: <AddProductPage />,
      },
      {
        path: "/editproduct",
        element: <EditproductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
       {
        path: "/checkout",
        element: <CheckOutPage />,
      },
      {
        path: "/product",
        element: <ProductListPage />,
      },
      {
        path: "/productdetail",
        element: <ProductDetailPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
  path: "/login",
  element: <App user={false} />,
  children: [
    {
      index: true,
      element: <LoginPage />,
    },
  ],
},
{
  path: "/createaccount",
  element: <App user={false} />,
  children: [
    {
      index: true,
      element: <CreateAccountPage />,
    },
  ],
},
{
  path: "/forgetpass",
  element: <App user={false} />,
  children: [
    {
      index: true,
      element: <ForgetPass />,
    },
  ],
},
 {
    path: "*",
    element: <NotFoundPage />,
  },
]);

let currentUrl = window.location.pathname;
router.subscribe((state) => {
  if (state.location.pathname !== currentUrl) {
    currentUrl = state.location.pathname;
    window.location.reload();
  }
});

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
