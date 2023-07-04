import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <header class="text-gray-600 body-font bg-sky-200">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <h1 className="text-3xl font-medium tracking-wider">CRUD</h1>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="text-xl font-normal mr-5 hover:text-gray-900">
            <Link to="/">HOME</Link>
          </a>
        </nav>
        <form action="">
          <input type="text"
           placeholder="Type any..."
           className="p-2 rounded-l-xl shadow-md outline-none border-none"/>
        <button type="submit" className=" shadow-md inline-flex items-center bg-gray-100 border-0 p-2 px-3 focus:outline-none hover:bg-gray-200 rounded-r-xl text-base mt-4 md:mt-0">
          search
        </button>
        </form>
      </div>
    </header>
  );
}

export default Navbar;
