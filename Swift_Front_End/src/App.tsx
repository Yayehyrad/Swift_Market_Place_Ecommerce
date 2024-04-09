import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Pages/AppLayout";

import ShopCategory from "./Pages/ShopCategory";
import Shop from "./Pages/Shop";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Login from "./Pages/auth/Login";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Shop /> },
      { path: "/Women", element: <ShopCategory /> },
      { path: "/Kids", element: <ShopCategory /> },
      { path: "/Men", element: <ShopCategory /> },
      { path: "/product", element: <Products /> },
      { path: "/product/:productid", element: <Products /> },
      { path: "/Cart", element: <Cart /> },
      { path: "/Login", element: <Login /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
