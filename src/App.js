import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/home/Home";
import AmbassadorDetail from "./routes/ambassador-detail/AmbassadorDetail";
import Events from "./routes/events/Events";
import EventDetail from "./routes/event-detail/EventDetail";
import Project from "./routes/projects/Project";
import ProjectDetail from "./routes/project-detail/ProjectDetail";
import NotFound from "./routes/not-found/NotFound";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/garage-website" element={<Home />} />
      <Route path="ambassador-detail" element={<AmbassadorDetail />} />
      <Route path="events" element={<Events />} />
      <Route path="events/:id" element={<EventDetail />} />
      <Route path="projects" element={<Project />} />
      <Route path="projects/:id" element={<ProjectDetail />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
