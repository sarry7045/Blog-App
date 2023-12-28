import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Store from "./Store/Store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout, Login } from "./Components/Index.js";
import App from "./App.jsx";
import "./index.css";
// import { Login } from "./Components/Login.jsx";
// import { SignUp } from "./Components/SignUp.jsx";
import Home from "./Pages/Home.jsx";
import SignUp from "./Pages/SignUp.jsx";
import AllPost from "./Pages/AllPost.jsx";
import AddForm from "./Pages/AddForm.jsx";
import EditPost from "./Pages/EditPost.jsx";
import Post from "./Pages/Post.jsx";

const filesRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            <AllPost />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddForm />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      {/* <App /> */}
      <RouterProvider router={filesRouter} />
    </Provider>
  </React.StrictMode>
);

// https://cloud.appwrite.io/console/project-6510808711427e5834bd/overview/platforms
// https://cloud.mongodb.com/v2/65550cd08f562d58060af1b9#/clusters
