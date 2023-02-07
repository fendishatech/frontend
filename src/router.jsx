import { createBrowserRouter } from "react-router-dom";

import {
  PublicLayout,
  Home,
  AboutUs,
  Blogs,
  BlogDetail,
  Jobs,
  JobDetail,
  Experiences,
  ExperienceDetail,
  Services,
  ServiceDetail,
  ContactUs,
} from "./views/public";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetail />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetail />,
      },
      {
        path: "/experiences",
        element: <Experiences />,
      },
      {
        path: "/experiences/:id",
        element: <ExperienceDetail />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetail />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
