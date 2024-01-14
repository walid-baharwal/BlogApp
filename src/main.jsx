import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  AddBlog,
  About,
  Home,
  SignIn,
  SignUp,
  Blog,
  AccountSetting,
  MyBlogs,
  EditBlog,
} from "./pages";
import Protected from "./components/AuthLayout.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path=""
        element={
          <Protected authentication={false}>
            <Home />
          </Protected>
        }
      />
      <Route
        path="add-blog"
        element={
          <Protected authentication>
            <AddBlog />
          </Protected>
        }
      />
      <Route path="about" element={<About />} />

      <Route
        path="signin"
        element={
          <Protected authentication={false}>
            <SignIn />
          </Protected>
        }
      />
      <Route
        path="signup"
        element={
          <Protected authentication={false}>
            <SignUp />
          </Protected>
        }
      />
      <Route
        path="accountsetting"
        element={
          <Protected authentication>
            <AccountSetting />
          </Protected>
        }
      />
      <Route
        path="myblogs"
       
        element={
          <Protected authentication>
            <MyBlogs />
          </Protected>
        }
      />
      <Route path="blog/:slug" element={<Blog />} />
      <Route path="editblog/:slug" element={<EditBlog/>} />
      {/* <Route
        path="github"
        loader={async ({ params }) => {
          return fetch(`https://api.github.com/users/walid-baharwal`).then(
            (response) => response.json()
          );
        }}
        element={<Blog/>}
      /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
