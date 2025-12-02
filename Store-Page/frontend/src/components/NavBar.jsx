import React from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { FaRegMoon, FaRegSun } from "react-icons/fa6";
import useColorMode from "../hooks/useColorMode";
import { useUser } from "../hooks/useUser";
import { supabase } from "../lib/supabaseClient";

function NavBar() {
  const { mode, toggleColorMode } = useColorMode();
  const { user, setUser } = useUser();
  const role = user?.user_metadata?.role;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 w-full">
      <Link to={"/"}>
        <h1 className="text-xl font-bold text-red-300">Logo</h1>
      </Link>

      <div className="flex items-center gap-4">
        {role === "admin" && (
          <Link to="/create">
            <button className="flex items-center gap-1 text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
              <CiSquarePlus className="text-xl" />
              Create
            </button>
          </Link>
        )}

        {!user ? (
          <Link to={"/signin"}>
            <button className="text-2xl text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400">
              Kirjaudu
            </button>
          </Link>
        ) : (
          <>
            <span className="text-gray-900 dark:text-white">
              {user.email} ({role})
            </span>
            <button
              onClick={handleLogout}
              className="ml-2 text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-400"
            >
              Logout
            </button>
          </>
        )}

        <button
          onClick={toggleColorMode}
          className="text-xl text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 flex items-center justify-center"
        >
          {mode === "light" ? <FaRegSun /> : <FaRegMoon />}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
