import { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar.tsx";
import HomePage from "./pages/HomePage.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import HooksPage from "./pages/HooksPage.tsx";
function App() {
  const [page, setPage] = useState("home");
  return (
    <div
      mx-auto
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold underline  text-center ">
        compnent life cycle
      </h1>
      <Navbar setPage={setPage} />
      <div className="container mx-auto p-4">
        {page === "home" && <HomePage />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
        {page === "HooksPage" && <HooksPage />}
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
/*
vidio 3  explain of the component life cycle (render)
     render is called every time the state or props change
     render is called after the constructor and before the componentDidMount
     render is used to return the JSX that will be rendered to the DOM
*/
/*
vidio 4  explain of the component life cycle (componentDidMount)
      componentDidMount is called after the component is rendered to the DOM
      componentDidMount is called only once when the component is created during the mounting phase
      componentDidMount is used to perform any side effects, such as fetching data from an API or setting up event listeners
      componentDidMount is called after the render method is called
*/
// vidio 5  explain of the component life cycle (componentDidUpdate)
/*
      componentDidUpdate is called after the component is updated
      componentDidUpdate is called every time the component is updated
      componentDidUpdate is used to perform any side effects, such as fetching data from an API or setting up event listeners
      */
/*
vidio 6  explain of the component life cycle (componentWillUnmount)
      componentWillUnmount is called before the component is removed from the DOM
      */
/*
vidio 7  explain of the component life cycle (useEffect)
      useEffect is a hook that allows you to perform side effects in functional components
        TODO useEffect( ()=>{
              console.log("useEffect called ");
          });
         ! here without parameters useEffect will run after every render
      */   
     
         
/*
vidio 8  explain of the component life cycle (useEffect with dependencies)
      useEffect with dependencies is a hook that allows you to perform side effects in functional components
      todo : [] is an empty array, which means that the effect will only run once when the component mounts
     todo : [counter] is an array with a single dependency, which means that the effect will run every time the counter changes
     todo if without parameters useEffect will run after every render
      */
// vidio 9  explain of the component life cycle (useEffect with cleanup function)
/*
      useEffect with cleanup function is a hook that allows you to perform side effects in functional components
      useEffect with cleanup function is used to perform any side effects, such as fetching data from an API or setting up event listeners
      منستعملو في حال المستخدم عمل طلب لصفحه ثم غير رايو وبدو يروح عصفحه تانيه والصفحه الاولى لساها موجوده في الذاكره
      */
/*
Abort Controller (Request Cancelation)
      AbortController is a built-in JavaScript API that allows you to cancel a fetch request
      AbortController is used to cancel a fetch request when the component unmounts or when the user navigates away from the page
      AbortController is used to prevent memory leaks and unnecessary network requests
      TODO : const controller = new AbortController();
            const signal = controller.signal;
            fetch("https://fakestoreapi.com/products",{signal})
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
      */     
export default App;
