import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Navbar/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Hero from "./Components/Hero";



function App() {
    return (
        <Router>
            <Navbar />
            <Hero/ >
            <Routes>
                <Route 
                    path="/Home" 
                    element={<Home />} />
                <Route 
                    path="/About" 
                    element={<About />} />
                <Route
                    path="/Contact"
                    element={<Contact />}
                />
            </Routes>
            <Footer />
        </Router>
    );
}
 
export default App;