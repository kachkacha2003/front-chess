// Change Lorem in 30 and 56 lines with your website name


import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

const AdminNavber = (props) => {
  const history = useHistory();
  const [isopen, setopen] = useState(false);

  const Hamburger = () => {
    setopen(!isopen);
  };
  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishList");
    window.location.href = "/";
  };

  return (
    <Fragment>
      <nav className="sticky z-10 flex md:items-center shadow-md justify-between pr-4 md:pr-8 py-4 lg:px-8 top-0 w-full bg-white">
        <div className="hidden lg:block">
          <span
            onClick={(e) => history.push("/admin/dashboard")}
            style={{ letterSpacing: "0.70rem" }}
            className="flex items-left  font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2 text-center"
          >
            Lorem
          </span>
        </div>
        {/* Small Screen Show */}
        <div className="lg:hidden flex items-center pl-4 md:pl-8">
          <svg
            id="hamburgerBtn"
            className="md:hidden w-8 h-8 cursor-pointer text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={Hamburger}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span
            onClick={(e) => history.push("/admin/dashboard")}
            style={{ letterSpacing: "0.10rem" }}
            className="flex items-left  font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2 text-center"
          >
            Lorem
          </span>
        </div>
        {/* Both Screen show */}
        <div className="flex items-center z-[120]">
          {/* Logout Button Dropdown */}
          <div className="userDropdownBtn hover:bg-gray-200 px-2 py-2 rounded-lg relative">
            <svg
              className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="userDropdown absolute right-0 mt-1 bg-gray-200 rounded">
              <li className="flex flex-col text-gray-700">
                <span
                  onClick={(e) => history.push("/")}
                  className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                >
                  <span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </span>
                  <span>Shop</span>
                </span>

                <span
                  onClick={(e) => logout()}
                  className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                >
                  <span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </span>
                  <span>Logout</span>
                </span>
              </li>
            </div>
          </div>
        </div>
        {/* Mobile Navber */}

        <div
          className={
            isopen
              ? "px-3 fixed top-[68px] w-full z-[100] rounded-[0px_0px_17px_17px] pb-2 shadow-md bg-white lg:hidden"
              : "hidden px-1 pb-2 md:pb-0 md:px-10 lg:hidden"
          }
        >
          <div className="flex flex-col text-gray-600">
            <span
              className="font-medium text-lg tracking-widest hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer"
              onClick={(e) => history.push("/admin/dashboard")}
            >
              Dashboard
            </span>

            <span
              className="font-medium text-lg tracking-widest hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer"
              onClick={(e) => history.push("/admin/dashboard/categories")}
            >
              Categories
            </span>
            <span
              className="font-medium text-lg tracking-widest hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer"
              onClick={(e) => history.push("/admin/dashboard/products")}
            >
              Product
            </span>
            <span
              className="font-medium text-lg tracking-widest hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer"
              onClick={(e) => history.push("/admin/dashboard/orders")}
            >
              Order
            </span>
            <span
              className="font-medium text-lg tracking-widest hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer"
              onClick={(e) => history.push("/admin/dashboard/users")}
            >
              Users
            </span>
          </div>
        </div>
        {/* End Mobile Navber */}
      </nav>
    </Fragment>
  );
};

export default AdminNavber;
