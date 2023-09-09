import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.js";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Profile from "./components/profile";
import View from "./components/View";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/view" element={<View />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
