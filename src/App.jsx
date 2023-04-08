import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Joblist from "./pages/Joblist";
import Contact from "./pages/Contact";
import Topnavbar from "./components/GeneralComponents/Topnavbar";
import Navigationbar from "./components/GeneralComponents/Navigationbar";
import FooterComponent from "./components/GeneralComponents/FooterComponent";
function App() {
  return (
    <div className="App">
      <Topnavbar />
      <Navigationbar />
      <div className="mt-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joblist" element={<Joblist />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
