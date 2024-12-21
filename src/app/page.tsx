import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <header className="bg-yellow-50 font-semibold text-2xl h-14 flex items-center justify-center">
        <h1>Data Fetching Assignments</h1>
      </header>

      <div className="flex justify-center items-center mt-7">
     
        <Link href="/server-side-fetching">
          <button className="border border-black h-28 w-52 mr-4 text-center mb-36 mt-40 bg-yellow-100 hover:bg-yellow-200">
            SERVER SIDE <br /> DATA FETCHING
          </button>
        </Link>
        
       
        <Link href="/client-side-fetching">
          <button className="border border-black h-28 w-52 ml-4 text-center mb-36 mt-40 bg-yellow-100 hover:bg-yellow-200">
            CLIENT SIDE <br /> DATA FETCHING
          </button>
        </Link>
      </div>
      <footer className="bg-yellow-50 font-semibold text-2xl h-14 flex items-center justify-center">
        &copy; All rights reserved.
      </footer>
    </div>
  );
};

export default Page;
