import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import FloatingInstagram from "./components/FloatingInstagram";
import Blogs from "./pages/blogs/Blogs";
import RefundAndCancellationPolicy from "./pages/RefundAndCancellationPolicy";
import Error from "./ErrorPage";
import BlogPage from "./pages/blogs/BlogPage";
import TestimonialsPage from "./pages/testimonials/TestimonialsPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OrderForm from "./pages/Order";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { useSiteData } from "./context/SiteDataContext";
import Home from "./pages/Home";

function App(): React.ReactElement {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
    },
    {
      path: "/blog/:id",
      element: <BlogPage />,
    },
    {
      path: "/testimonials",
      element: <TestimonialsPage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact-us",
      element: <Contact />,
    },
    {
      path: "/order/:pid",
      element: <OrderForm />,
    },
    {
      path: "/refund-Cancellation-policy",
      element: <RefundAndCancellationPolicy />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  const data = useSiteData();

  if (!data) {
    console.log(data);
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <RouterProvider router={router} />
      <FloatingWhatsApp
        phoneNumber={data.phoneNumber}
        accountName={data.name}
        avatar={data.pic}
        allowClickAway={true}
        allowEsc={true}
      />
      <FloatingInstagram />
    </>
  );
}
export default App;
