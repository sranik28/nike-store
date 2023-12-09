import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

export default function ProfileDropdown() {
  const user = null;
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex items-center justify-center">
            <FaUser size={20} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {user ? (
              <ProfileMenu />
            ) : (
              <>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={"/login"}>
                        <button
                          className={`${
                            active ? "bg-black  text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Login
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={"/register"}>
                        <button
                          className={`${
                            active ? "bg-black  text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Register
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
