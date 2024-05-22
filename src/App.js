import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Categories from "./Categories";
import Suppliers from "./Suppliers";
import Home from "./Home";

function App() {
  return (
    <div id="main-container">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Suppliers" element={<Suppliers />} />
      </Routes>
    </div>
  );
}
export default App;
