import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Error from "./Error";
import RestaurantDetail from "./RestaurantDetail";
import Register from "./Register";
const Grocery = lazy(() => import("./Grocery"));
const About = lazy(() => import("./About"));
import UserContextData from "../utils/UserContextData";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import CartList from "./CartList";

export const App = () => {
  const { LoggedInUser } = useContext(UserContextData);

  const [userInfo, setUserInfo] = useState(LoggedInUser);

  useEffect(() => {
    setUserInfo({
      name: "nandhu",
    });
  }, []);

  return (
    <Provider store={appStore}>
      <UserContextData.Provider value={{ LoggedInUser: userInfo, setUserInfo }}>
        <div className="applayout">
          <Header />
          <Outlet />
        </div>
      </UserContextData.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Page is loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Page is loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
      {
        path: "/cart",
        element: <CartList />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
