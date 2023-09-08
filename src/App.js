import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.js";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Profile from "./components/profile";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/profile" element={<Profile/>}></Route>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      </div>

  );
}

export default App;
