import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products',
    element: <><Header/><h1>All Products</h1></>
  },
  {
    path: '*',
    element: <h1>not found!</h1>
  }
]);

export default router;