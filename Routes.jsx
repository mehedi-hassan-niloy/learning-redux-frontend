import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Home from "./src/Components/Home/Home/Home";
import Banner from "./src/Components/Home/Banner/Banner";
import Products from "./src/features/products/Products";
import ProductDetails from "./src/features/products/ProductDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/',
        element: <Banner></Banner>
      },
      {
        path: '/products',
        element: <Products></Products>
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails />,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      }

    ]
  },
]);