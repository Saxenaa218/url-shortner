import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Redirector from "./components/Redirector";
import Admin from "./components/Admin";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/:shortUrlId" element={<Redirector />} />
    </Routes>
  );
}

export default App;
