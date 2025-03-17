import Header from "./components/header/Header.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contacts from "./pages/Contacts.jsx";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="app d-flex flex-column">
      <Header />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
