import { createBrowserRouter } from "react-router";
import { CaseStudy } from "./components/CaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CaseStudy,
  },
]);
