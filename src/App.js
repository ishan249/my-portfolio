import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Layout from "./components/Layout";
import BlogDetailPage from "./components/Blogs/BlogDetail";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Blogs/:slug" element={<BlogDetailPage />} />

            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
