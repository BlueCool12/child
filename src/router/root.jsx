import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";

const Home = lazy(() => import("../pages/Home"));

const NotFound = lazy(() => import("../pages/NotFound"));

const root = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={Loading}><Home /></Suspense>
    },
    {
        path: '*',
        element: <Suspense fallback={Loading}><NotFound /></Suspense>
    }
]);

export default root;