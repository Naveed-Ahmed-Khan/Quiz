import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
import pic from "../../assets/images/profile.png";
import Dropdown from "./Dropdown";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useStateContext } from "../../contexts/ContextProvider";
import admin from "../../assets/images/admin.png";

// import { useStateContext } from "../contexts/ContextProvider";

const Navbar = (props) => {
  const { selectedUserInfo, updateCheck } = useStateContext();
  const [isNotification, setIsNotification] = useState(false);

  const location = useLocation();
  // const navigate = useNavigate();

  return (
    <>
      {/* Mobile Navbar */}
      <div className="z-30 md:hidden fixed w-full flex items-center justify-between px-6 h-16 bg-primary-100">
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
        <div className="flex items-center bg-primary-100 rounded-xl">
          <div>
            <img className="mr-3" src={admin} alt="" />
          </div>
          <div>
            <p className="text-sm font-medium">Carlos Perderson</p>
            <p className="text-xs text-white text-opacity-60">Admin</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
