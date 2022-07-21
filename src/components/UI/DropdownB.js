import {
  collection,
  collectionGroup,
  doc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { db } from "../../firebase-config";

export default function DropdownB({ children, isOpen, business }) {
  const { selectedUserInfo } = useStateContext();
  const navigate = useNavigate();
  console.log(business);
  //   console.log(selectedUserInfo);
  return (
    <div classname="flex items-center justify-end bg-transparent">
      <div className="relative inline-block">
        {/* <!-- Dropdown toggle button --> */}
        <div>{children}</div>
        {/* <!-- Dropdown menu --> */}
        {isOpen && (
          <div className="absolute right-0 z-30 p-2 overflow-hidden bg-white rounded-md shadow-lg drop-shadow-2xl w-80 ">
            <p className="text-primary-500">Disable</p>
            <p className="text-primary-500">Delete</p>
          </div>
        )}
      </div>
    </div>
  );
}
