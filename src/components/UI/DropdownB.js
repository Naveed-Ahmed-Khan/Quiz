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

export default function DropdownB({ children, id, selectedItem }) {
  const { selectedUserInfo } = useStateContext();
  const navigate = useNavigate();
  // console.log(selectedItem);
  return (
    <div className="">
      <div className="relative inline-block">
        {/* <!-- Dropdown toggle button --> */}
        <div>
          <svg
            width="4"
            height="14"
            viewBox="0 0 4 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.56689 1.98345C3.56689 1.01614 2.7507 0.199951 1.78339 0.199951C0.785798 0.199951 -0.000106048 1.01614 -0.00010609 1.98345C-0.000106134 2.98105 0.816085 3.76695 1.78339 3.76695C2.7507 3.76695 3.56689 2.98105 3.56689 1.98345V1.98345Z"
              fill="white"
            />
            <path
              d="M3.56689 11.7178C3.56689 10.7202 2.7507 9.93433 1.78339 9.93433C0.785798 9.93433 -0.000106048 10.7505 -0.00010609 11.7178C-0.000106132 12.6851 0.785798 13.5013 1.78339 13.5013C2.7507 13.5013 3.56689 12.6851 3.56689 11.7178Z"
              fill="white"
            />
            <path
              d="M3.56689 6.94049C3.56689 5.94289 2.7507 5.15698 1.78339 5.15698C0.785798 5.15698 -0.000106048 5.97318 -0.00010609 6.94049C-0.000106134 7.93808 0.816085 8.72399 1.78339 8.72399C2.7507 8.72399 3.56689 7.93796 3.56689 6.94049Z"
              fill="white"
            />
          </svg>
        </div>
        {/* <!-- Dropdown menu --> */}
        {selectedItem && id === selectedItem.id && (
          <div className="absolute space-y-3 -right-1 top-4 z-30 p-4 border border-primary-200 bg-primary-100 text-white rounded-md shadow-lg drop-shadow-2xl w-44 ">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
