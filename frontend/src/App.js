import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about/about";
import Event from "./components/event/event";
import Contact from "./components/contact";
import Navbar from "./components/navbar/navbar";
import Register from "./components/register/register";
import NoPage from "./components/noPage";
import Schedule from "./components/schedule/schedule";
import Dashboard from "./components/dashboard/dashboard";
import Events from "./components/dashboard/pages/events";
import Team from "./components/dashboard/pages/team";
import EventPass from "./components/dashboard/pages/eventpass";
import DashboardDrawer from "./components/dashboard/perm-drawer";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/event" element={<Event />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardDrawer />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/pass" element={<EventPass />} />
          <Route path="/dashboard/events" element={<Events />} />
          <Route path="/dashboard/team" element={<Team />} />
          <Route path="/dashboard/leaderboard" element="" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
