import {
  HashRouter,
  Routes,
  Route,
  BrowserRouter,
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
  
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/ambassador-detail" element={<AmbassadorDetail />} />
      <Route path="/garage-website/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/*" element={<NotFound />}/>
    </Routes>
    
  );
}

export default App;
