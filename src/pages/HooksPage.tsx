import React, { useEffect, useState } from 'react';
const HomePage = () => {
    const [counter, setCounter] = useState(0);
    
    useEffect( ()=>{
        console.log("useEffect called ");
    });

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