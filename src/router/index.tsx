import React from "react";
import { useRoutes } from "react-router-dom";
import { PATH } from "./path";

export const Router = () => {
  const router = useRoutes([
    {
      path: PATH.home,
      element: <Home />,
      children: [],
    },
    {
      path: PATH.recruitment,
      element: <Recruiment />,
      children: [],
    },
    {
      path: PATH.contact,
      element: <Contact />,
      children: [],
    },
    {
      path: PATH.library,
      element: <Library />,
      children: [],
    },
    {
      path: PATH.introduce,
      element: <Introduce />,
      children: [],
    },
    {
      path: PATH.news,
      element: <News />,
      children: [],
    },
    {
      path: PATH.product,
      element: <Products />,
      children: [],
    },
    {
      path: PATH.product,
      element: <Products />,
      children: [],
    },
    {
      path: PATH.product_detail,
      element: <ProductDetail />,
      children: [],
    },
  ]);
  return router;
};

const Home = React.lazy(() => import("../ui/page/Home"));
const Recruiment = React.lazy(() => import("../ui/page/Recruiment"));
const Contact = React.lazy(() => import("../ui/page/Contact"));
const Library = React.lazy(() => import("../ui/page/Library"));
const Introduce = React.lazy(() => import("../ui/page/Introduce"));
const News = React.lazy(() => import("../ui/page/News"));
const Products = React.lazy(() => import("../ui/page/Products"));
const ProductDetail = React.lazy(() => import("../ui/page/Products/detail"))
