import ContactPage from "../pages/ContactPage";
import FeedBackPage from "../pages/FeedBackPage";
import HomePage from "../pages/HomePage";
import ProjectsPages from "../pages/ProjectsPages";
import TechnologyPage from "../pages/TechnologyPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/projects", element: <ProjectsPages /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/feedback", element: <FeedBackPage /> },
  { path: "/technology", element: <TechnologyPage /> },
];

export default routes;
