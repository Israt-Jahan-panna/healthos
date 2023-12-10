import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <div className="max-w-[1600px] mx-auto font-EBGaramond">
        <div className="navbar bg-white w-full shadow-md">
          <div className="navbar-start">
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/jHbLGND/Health-OS-Logo-H-480x76.png"
                alt=""
              />
            </div>
            <div className="dropdown ">
              <label
                tabIndex={0}
                className="lg:hidden "
                onClick={toggleDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              {isDropdownOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2   w-52"
                >
                  <li>
                    <a
                      className="text-lg  text-black hover:text-gray-500"
                      href="#"
                    >
                      <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? " hover:text-gray-500 underline"
                            : ""
                        }
                      >
                        Home
                      </NavLink>
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="navbar hidden lg:flex justify-center">
            <ul className=" menu-horizontal  ">
              <li>
                <a
                  className="text-xl font-bold text-black hover:text-gray-500"
                  href="#"
                >
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? " hover:text-gray-500 underline"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                </a>
              </li>
            </ul>
          </div>
          <div
            className="navbar-end  gap-4 
          "
          >
            <Link to={"/registration"}>
              <a className=" mb-2  rounded-lg bg-gradient-to-tr bg-[#00bf58] p-3 lg:py-2 lg:px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Registration
              </a>
            </Link>
            <Link to={"/login"}>
              <a className=" mb-2  rounded-lg bg-gradient-to-tr bg-[#00bf58] lg:py-2 lg:px-6 p-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Log In
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
