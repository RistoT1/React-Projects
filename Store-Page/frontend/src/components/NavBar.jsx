import React from 'react'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { FaRegMoon, FaRegSun } from "react-icons/fa6";
import useColorMode from "../hooks/useColorMode";

function NavBar() {
   const { mode, toggleColorMode } = useColorMode()
   
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <Link to={"/"}>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Logo</h1>
      </Link>
      <div className="flex items-center gap-4">
        <Link to={"/create"}>
          <button className="text-2xl text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
            <CiSquarePlus />
          </button>
        </Link>
        <button 
          onClick={toggleColorMode}
          className="text-xl text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
        >
          {mode === "light" ? <FaRegSun/> : <FaRegMoon/>}
        </button>
      </div>
    </div>
  )
}

export default NavBar
