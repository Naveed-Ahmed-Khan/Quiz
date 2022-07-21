import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
import pic from "../../assets/images/profile.png";
import Dropdown from "./Dropdown";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useStateContext } from "../../contexts/ContextProvider";

// import { useStateContext } from "../contexts/ContextProvider";

const Navbar = (props) => {
  const { selectedUserInfo, updateCheck } = useStateContext();
  const [isNotification, setIsNotification] = useState(false);

  const location = useLocation();
  // const navigate = useNavigate();

  return (
    <>
      {/* Mobile Navbar */}
      <div className="z-30 md:hidden fixed w-full flex items-center justify-between px-6 h-16 bg-primary-500">
        <button
          onClick={() => {
            props.setOpen(!props.open);
            props.setShowBackdrop(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div>
          <div
            className={`flex gap-4 items-center hover:opacity-100 mx-auto hover:text-primary transition-all duration-300 bg-primary-500`}
          >
            <Dropdown isNotification={isNotification}>
              <div
                onClick={async () => {
                  setIsNotification((prev) => !prev);
                }}
                className="relative bg-primary-500"
              >
                <button
                  onClick={async () => {
                    if (selectedUserInfo[0]?.unreadNotifications > 0) {
                      await updateDoc(
                        doc(collection(db, "users"), selectedUserInfo[0].id),
                        {
                          unreadNotifications: 0,
                        }
                      );
                      updateCheck((prev) => !prev);
                    }
                  }}
                  className="bg-primary-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                {selectedUserInfo[0]?.unreadNotifications > 0 && (
                  <div
                    className="absolute w-5 h-5 bg-red-600 flex items-center justify-center rounded-full
                -top-3 -right-3"
                  >
                    <p className="text-xs font-medium text-white">
                      {selectedUserInfo[0]?.unreadNotifications}
                    </p>
                  </div>
                )}
              </div>
            </Dropdown>

            <img className="object-contain h-12" src={pic} alt="" />
            <div>
              <p className="text-white text-lg font-medium">Beyond</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="z-30 fixed hidden md:pl-52 md:pr-8 md:flex w-full items-center justify-between px-6 pt-10 pb-12 h-16 bg-white">
        {location.pathname === "/home" ||
        location.pathname === "/dashboard/home" ? (
          <div>
            <Search />
          </div>
        ) : (
          <div></div>
        )}

        <div>
          <div
            className={`flex gap-4 items-center hover:opacity-100 mx-auto hover:text-primary transition-all duration-300`}
          >
            <Dropdown isNotification={isNotification}>
              <div
                onClick={async () => {
                  setIsNotification((prev) => !prev);
                }}
                className="relative"
              >
                <button
                  onClick={async () => {
                    if (selectedUserInfo[0]?.unreadNotifications > 0) {
                      await updateDoc(
                        doc(collection(db, "users"), selectedUserInfo[0].id),
                        {
                          unreadNotifications: 0,
                        }
                      );
                      updateCheck((prev) => !prev);
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10 text-primary-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                {selectedUserInfo[0]?.unreadNotifications > 0 && (
                  <div
                    className="absolute w-5 h-5 bg-red-600 flex items-center justify-center rounded-full
                -top-3 -right-3"
                  >
                    <p className="text-xs font-medium text-white">
                      {selectedUserInfo[0]?.unreadNotifications}
                    </p>
                  </div>
                )}
              </div>
            </Dropdown>

            <img className="object-contain h-12" src={pic} alt="" />
            <div>
              <p className="text-primary-500 text-lg font-medium">Beyond</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
