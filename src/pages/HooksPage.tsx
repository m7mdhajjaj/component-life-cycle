import React, { useEffect, useState } from 'react';
const HomePage = () => {
    const [counter, setCounter] = useState(0);
    
    useEffect( ()=>{
        console.log("useEffect called ");
    }, []);
    // This useEffect will run only once when the component mounts
    console.log("hookspage component rendered");
    // This console log will run every time the component renders
    useEffect(() => {
        console.log("Counter value changed:", counter);
        // This effect will run every time the counter changes
        return () => {
            console.log("Cleanup for counter change effect");
            // This cleanup function will run before the next effect runs or when the component unmounts
        };
    }, [counter]);


  return (
    <div className="home-page">
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(prev=> prev + 1)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm font-medium transition duration-200">
        Increment Counter
      </button>
      <p>This is the Home Page</p>
    </div>
  );

};
export default HomePage;