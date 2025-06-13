import { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar.tsx";
import HomePage from "./pages/HomePage.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
function App() {

  return (
    <div
      mx-auto
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold underline  text-center ">
        compnent life cycle
      </h1>
      <Navbar />
      <div className="container mx-auto p-4">
        <HomePage />
        <About />
        <Contact />
        </div>
    </div>
  );
  
  
}

/*
vidio 2  explain of the component life cycle (constructor)
mounting phase (constructor, render, componentDidMount )
     here we are using the constructor to initialize the state
     constructor is called only once when the component is created during the mounting phase 
     constructor is used to initialize the state and bind the methods
*/
export default App;
