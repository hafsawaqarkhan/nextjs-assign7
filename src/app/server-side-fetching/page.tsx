import React from 'react'
interface Books{
  name : "string";
  type : "string";
  available : boolean,
}

const Page = async () => {
  const response= await fetch(" https://simple-books-api.glitch.me/books/");
const parsedResponse:Books[] = await response.json();

console.log("books >>>", parsedResponse);

  return (
<div> <h1 className=' flex justify-center text-3xl text-gray-500 font-bold mt-2  '>SERVER SIDE FETCHING</h1>
       <div className='grid md:grid-cols-3 mt-8 p-6 sm:grid-cols-1'>
        {parsedResponse.map((books, index) => (
        <div key={index} className=" border border-yellow-100 shadow-md gap-10  h-[200px] w-[250px] mb-6 
         hover:scale-110 sm:ml-5 bg-yellow-50">
          <p className='font-semibold text-center mb-2 mt-4 text-2xl underline text-orange-300'>{books.name}</p>
          <p className='font-medium  text-center mb-2 mt-4 text-xl'>Title: {books.type}</p>
          <p className='font-medium  text-center mb-2 mt-4 text-xl'>Available: {`${books.available}`}</p>
        </div>
      ))}
        </div></div>
      );
    };
    
    export default Page;
    

