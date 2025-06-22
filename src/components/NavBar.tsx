import React from "react";

const NavBar = () => {
  return (
    <div className="w-full md:h-12 sm:h-14 h-18 flex justify-between items-center xl:px-36 lg:px-12 md:px-12 sm:px-6 px-4 fixed top-0 bg-gray-900">
      <div className="flex items-center sm:gap-x-4 gap-x-2">
        <a
          href="#"
          className="md:text-2xl sm:text-xl text-lg text-yellow-500 hover:text-yellow-300"
        >
          Israel Adebayo
        </a>
        <i className="bx bx-sun md:text-3xl sm:text-2xl text-xl text-gray-200 sm:ml-4 ml-2 cursor-pointer"></i>
      </div>
    </div>
  );
};

export default NavBar;
