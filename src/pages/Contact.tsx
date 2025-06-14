import React, { use, useEffect, useState } from 'react';

const Contact = () => {

  const [products, setProducts] = useState([]);

 useEffect( ()=>{
  const controller = new AbortController();
  const signal = controller.signal;
        const fetchProducts = async () => {
            try {
                fetch("https://fakestoreapi.com/products",{signal})
                .then((response) => response.json())
                .then((data) => {
                    setProducts(data);
                });
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchProducts();
        return () => {
            controller.abort(); // Cleanup function to abort the fetch request
        }  

     });
  return (
    <div>
      {
        products.length ? products.map(({title}:{ title:string}) => (
          <div key={title} className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
        )) : <p className="text-center text-gray-500">No products available</p>
          
      }
    </div>
  );
}

export default Contact;