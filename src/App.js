import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import RestaurantMenu from "./Component/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Shimmer from "./Component/Shimmer";
import Login from "./Component/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Component/Cart";
import Alert from "./Component/Alert";

const Body = lazy(() => import("./Component/Body"));

const AppLayout = () => (
  <Provider store={appStore}>
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <div className="w-100 relative bottom-5 left-280">
        <Alert />
      </div>
    </div>
  </Provider>
);

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
