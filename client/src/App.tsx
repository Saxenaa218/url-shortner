import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const Admin = lazy(() => import("./components/Admin"));
const Redirector = lazy(() => import("./components/Redirector"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/:shortUrlId" element={<Redirector />} />
      </Routes>
    </Suspense>
  );
}

export default App;
