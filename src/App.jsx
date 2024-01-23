import { Routes, Route } from "react-router-dom";
import CityPage from "./pages/CityPage";
import ErrorPage from "./pages/ErrorPage";
import WorldPage from "./pages/WorldPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/world" element={<WorldPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/city/:cityName" element={<CityPage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </>
  );
}

export default App;
