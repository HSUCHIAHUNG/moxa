import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/pages/Error";
import RootLayout from "@/layout/Root";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@/pages/HomePage"));
const Page1 = lazy(() => import("@/pages/Page1"));
const Dynamic = lazy(() => import("@/pages/Dynamic"));
const AutoPlay = lazy(() => import("@/pages/AutoPlay"));
const Validate = lazy(() => import("@/pages/Validate"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: (
          <Suspense fallback={"loading"}>
            <HomePage />
          </Suspense>
        ),
        path: "",
        exact: true,
      },
      {
        element: (
          <Suspense fallback={"loading"}>
            <Page1 />
          </Suspense>
        ),
        path: "page1", // 相對路徑
      },
      {
        element: (
          <Suspense fallback={"loading"}>
            <Dynamic />
          </Suspense>
        ),
        path: "page1/:id", // 相對路徑
      },
    ],
  },
  {
    element: (
      <Suspense fallback={"loading"}>
        <AutoPlay />
      </Suspense>
    ),
    path: "autoPlay", // 相對路徑
  },
  {
    element: (
      <Suspense fallback={"loading"}>
        <Validate />
      </Suspense>
    ),
    path: "validate", // 相對路徑
  },
]);

export default router;
