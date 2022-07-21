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

export default function Dropdown({ children, isNotification }) {
  const { selectedUserInfo } = useStateContext();
  const navigate = useNavigate();

  //   console.log(selectedUserInfo);
  return (
    <div class="flex items-center justify-center">
      <div class="relative inline-block bg">
        {/* <!-- Dropdown toggle button --> */}
        <div>{children}</div>
        {/* <!-- Dropdown menu --> */}
        {isNotification && (
          <div class="absolute -right-40 md:right-0 z-20 p-2 overflow-hidden bg-white rounded-md shadow-lg drop-shadow-2xl w-[300px] md:w-80">
            <div class=" max-h-[50vh] overflow-y-auto overflow-x-hidden">
              {selectedUserInfo[0]?.notifications?.length > 0 ? (
                <>
                  {selectedUserInfo[0]?.notifications.map((notification) => {
                    const title = notification.title;
                    let color = "gray";
                    if (title === "Success") {
                      color = "emerald";
                    } else if (title === "Failure") {
                      color = "red";
                    } else if (title === "Subscription") {
                      color = "emerald";
                    }
                    return (
                      <div
                        key={notification.id}
                        class={`flex items-center px-2 py-1 transition-all duration-300 transform border-b border-gray-300 hover:bg-gray-100`}
                      >
                        <div class={`h-12 w-1 bg-${color}-500`} />
                        <div class="py-2 ml-4">
                          <div class="">
                            <span class={`font-semibold text-${color}-500`}>
                              {notification.title}
                            </span>
                            <p className="text-sm text-gray-500">
                              {notification.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div
                  class={`flex items-center justify-center px-2 py-1 transition-all duration-300 transform border-b border-gray-300 hover:bg-gray-100`}
                >
                  <p className="">No Notifications</p>
                </div>
              )}
            </div>
            <button
              onClick={() => navigate("/subscription")}
              class="w-full mt-10 block py-2 font-bold text-center text-white bg-primary-500 bg-opacity-90  hover:underline"
            >
              Subscriptions
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
