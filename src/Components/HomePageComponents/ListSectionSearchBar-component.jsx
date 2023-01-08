import React from "react";
import { FaSearch } from "react-icons/fa";

const ListSearchBar = ({ letters, setLetters }) => {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        className="w-full pl-3 pr-10 py-1 rounded-md text-gray-700 placeholder-gray-500 border-2 border-gray-300 focus:border-purple-500 focus:outline-none focus:bg-white"
        placeholder="Search..."
        value={letters}
        onChange={(e) => setLetters(e.target.value)}
      />
      <button type="button" className="absolute right-0 top-0 mt-2.5 mr-4">
        <FaSearch className="text-gray-500 hover:text-gray-600" />
      </button>
    </div>
  );
};

export default ListSearchBar;
