import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./fonts/CooperHewitt-Book.otf";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Error from "./pages/Error/Error";
import CGU from "./pages/CGU/CGU";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/project/:key",
    element: <Project />,
    errorElement: <Error />
  },
  {
    path: "/error",
    element: <Error />
  },
  {
    path: "/cgu",
    element: <CGU />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
