import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";

const HomePage = lazy(() => import("../pages/HomePage"));
const GuestbookPage = lazy(() => import("../pages/guestbook/GuestbookPage"));

const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const root = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={<Loading />}><HomePage /></Suspense>
    },
    {
        path: 'guestbook',
        element: <Suspense fallback={<Loading />}><GuestbookPage /></Suspense>
    },
    {
        path: '*',
        element: <Suspense fallback={<Loading />}><NotFoundPage /></Suspense>
    }
]);

export default root;