import App from "../App.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import ContactUs from "../pages/ContactUs.jsx";
import Profile from "../pages/Profile.jsx";
import ProductList from "../pages/ProductList.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <ProductList />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "/product-list",
        element: <ProductList />,
        errorElement: <ErrorPage />,
      },
    ],
  },
];

export default routes;
