import AboutUs from "@/pages/AboutUs/AboutUs";
import Products from "@/pages/AllProductPage/Products";
import HomePage from "../pages/Homepage/HomePage";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ProductDetails from "@/pages/ProductDetailPage/ProductDetail";
import Cart from "@/pages/CartPage/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/product-management",
        element: <ProductManagement />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
export default router;
