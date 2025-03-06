import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../Views/Layout/Layout";
import Loader from "../Views/Layout/Loader/Loader.jsx";
import Aboutus from "../Views/Pages/Aboutus/Aboutus.jsx";
import TestsPages from "../Views/Pages/TestsPages/TestsPages.jsx";
// import Test from "../Views/Pages/Test/Test.jsx";
// import Tets from "../Views/Pages/Tets/Tets.jsx";
// import Error from "../Views/Layout/Error/Error";

const Home = lazy(() => import("../Views/Pages/Home/Home"));
const Tets = lazy(() => import("../Views/Pages/Tets/Tets.jsx"));
const Test = lazy(() => import("../Views/Pages/Test/Test.jsx"));
// const Result = lazy(() => import("../Views/Pages/Results/Result"));
// const Assessment = lazy(() => import("../Views/Pages/Assessment/Assessment"));
// const PDP = lazy(() => import("../Views/Pages/PDP/PDP"));

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      //   errorElement: <Error />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/test",
          element: (
            <Suspense fallback={<Loader />}>
              <Test />
            </Suspense>
          ),
        },
        {
          path: "/tet",
          element: (
            <Suspense fallback={<Loader />}>
              <Tets />
            </Suspense>
          ),
        },
        {
          path: "/testspage",
          element: (
            <Suspense fallback={<Loader />}>
              <TestsPages />
            </Suspense>
          ),
        },
        {
          path: "/aboutus",
          element: (
            <Suspense fallback={<Loader />}>
              <Aboutus />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
