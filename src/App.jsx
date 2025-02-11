import { Navigate, Route, Routes } from "react-router";
import Header from "./app/components/header/Header";
import Projects from "./app/pages/Projects";
import Contacts from "./app/pages/Contacts";
import NotFound from "./app/pages/NotFound";
import AboutMe from "./app/pages/aboutMe/AboutMe";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={AboutMe} />
        <Route path="/portfolio" Component={Projects} />
        <Route path="/contacts" Component={Contacts} />
        <Route path="/404" Component={NotFound} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>

      {/* <button class="scroll-up" onclick="scrollUp()">
        <img
          src="./images/icons/arrow-up.svg"
          alt="arrow up"
        />
      </button> */}
    </>
  );
}

export default App;
