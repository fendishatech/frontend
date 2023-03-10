import { createBrowserRouter } from "react-router-dom";

import {
  PublicLayout,
  Home,
  AboutUs,
  Blogs,
  BlogDetail,
  Jobs,
  JobDetail,
  ApplyForm,
  Experiences,
  ExperienceDetail,
  Services,
  ServiceDetail,
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
        path: "/apply/:id",
        element: <ApplyForm />,
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
    ],
  },
]);

export default router;
