"use client";
import React, { useEffect, useState } from "react";

interface Store {
  id : number;
  image: any
  title: string;
  price: number;
   description : string;
   category : string;
    rate : number;
    count : number;
   }


const page = () => {
  const [data, setData] = useState<Store[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
       "https://fakestoreapi.com/products"
      );
      const parsedResponse: Store[] = await response.json();
      
      setData(parsedResponse);
    };
    fetchData();
  }, []);

  return (
    <div> <h1 className=' flex justify-center text-3xl text-gray-500 font-bold mt-2 mb-4 '>CLIENT SIDE FETCHING</h1>
    <div className="grid grid-cols-1 md:grid-cols-2">
      {data.map((store, index) => (
        <div key={index} className=" gap-5 h-[700px] w-[500px]">
          <div key={store.id} className=' bg-yellow-50 p-5 rounded-md shadow-md text-center mt-4 ml-2'>
          <img src = {store.image} alt={store.title} className=" h-[250px] w-[250px] rounded-md 
          transition-transform duration-300 transform hover:scale-110"></img>
          <p><span className="font-semibold"> Title:</span> {store.title}</p>
          <p> <span className="font-semibold">Price:</span>Price: {store.price}</p>
          <p><span className="font-semibold" >Description:</span> {store.description}</p>
          <p><span className="font-semibold">Category: </span>{store.category}</p>
  
        </div></div>
      ))}
    </div></div>
  );
};

export default page;