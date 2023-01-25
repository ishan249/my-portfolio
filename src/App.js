import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import About from "./components/About/About"
import Projects from "./components/Projects/Projects";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Homepage/>}/>
        <Route path = "/About" element={<About/>}/>
        <Route path ="/Projects" element ={<Projects/>}/>
        <Route path = "/Blogs" element ={<Blogs/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
