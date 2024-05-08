import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./routes/home/Home";
import AmbassadorDetail from "./routes/ambassadors/AmbassadorDetail";
import EventsOverview from "./routes/eventsOverview/EventsOverview";
import EventDetail from "./routes/events/EventDetail";
import ProjectsOverview from "./routes/projectsOverview/ProjectsOverview";
import ProjectDetail from "./routes/projects/ProjectDetail";
import NotFound from "./routes/notFound/NotFound";
import Facilities from "./routes/facilities/Facilities";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="/ambassadors/:id" element={<AmbassadorDetail />} />
          <Route path="/events" element={<EventsOverview />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/projects" element={<ProjectsOverview />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
