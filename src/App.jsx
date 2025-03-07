import Header from "./components/header/Header.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contacts from "./pages/Contacts.jsx";

function App() {
  return (
    <div className="app d-flex flex-column justify-content-between">
      <Header />
      <About />
      {/* <Portfolio />
      <Contacts /> */}
    </div>
  );
}

export default App;
