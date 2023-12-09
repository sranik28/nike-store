import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { FaCartShopping } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { Menu } from "@headlessui/react";
import ProfileDropdown from "./ui/ProfileDropdown";

const NavBar = () => {
  return (
    <main className="container ">
      <div className="flex items-center justify-between px-3 py-3 ">
        <Link to="/">
          {" "}
          <h1 className="text-2xl font-semibold">Nike</h1>
        </Link>

        <ul className="flex items-center justify-between gap-6">
          <li className="text-base font-semibold ">
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Anywhere
            </NavLink>
          </li>
          <li className="text-base font-semibold ">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Any Week
            </NavLink>
          </li>
          <li className="flex">
            <input
              className="px-3 py-2 outline-none placeholder:px-2 rounded-s-full"
              placeholder="Add Guests"
            />
            <span className="p-3 text-xl text-white rounded-e-full bg-rose-500">
              <IoIosSearch />
            </span>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          {/* <Link to="/login">
            {" "}
            <button className="py-2 border-4 px-9 rounded-3xl">Login</button>
          </Link>
          <span className="text-xl">
            <FaCartShopping />
          </span> */}
          <ProfileDropdown />
        </div>
      </div>
    </main>
  );
};

export default NavBar;
