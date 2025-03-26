import Header from "./components/header/Header.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contacts from "./pages/Contacts.jsx";
import { Route, Routes, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="app d-flex flex-column">
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.key}
          initial={{ opacity: 0 }} // Начальное состояние анимации
          animate={{ opacity: 1 }} // Анимация появления
          exit={{ opacity: 0 }} // Анимация исчезновения
          transition={{ duration: 0.5 }} // Длительность анимации
          className="app d-flex flex-column"
        >
          <Routes location={location}>
            <Route path="/" element={<About />} />
            <Route
              path="/projects"
              element={<Portfolio />}
            />
            <Route
              path="/contacts"
              element={<Contacts />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
