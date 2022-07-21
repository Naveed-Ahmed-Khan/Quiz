import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import profile from "../assets/images/profile.png";
import { useStateContext } from "../contexts/ContextProvider";
import { db } from "../firebase-config";
export default function Business({ rows }) {
  const { businesses, updateCheck } = useStateContext();
  const [disabled, setDisabled] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  return (
    <div className="pt-[5vh] md:pt-[12vh] w-full h-screen sm:max-w-screen-lg px-6 sm:px-8 sm:mx-auto">
      <div className="">
        <div className="mb-4 sm:flex items-center justify-between w-full">
          <h2 className="text-2xl sm:text-3xl text-primary-500 font-semibold leading-tight">
            Businesses
          </h2>
          <div className="mt-6 sm:mt-0 text-end">
            <form className="relative flex items-center md:flex-row w-full sm:w-fit md:space-x-3 md:space-y-0 ">
              <input
                type="text"
                className="text-white py-3 pl-2 pr-8 bg-transparent w-full sm:w-fit border-t-0 border-l-0 border-r-0 border-b-2 outline-none ring-0 focus:border-b-primary-dark focus:border-b-2 focus:ring-0"
                placeholder="Search"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
              <svg
                className="object-contain w-4 h-4 absolute right-2 text-inherit "
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.71 16.29L14.31 12.9C15.407 11.5025 16.0022 9.77666 16 8C16 6.41775 15.5308 4.87103 14.6518 3.55544C13.7727 2.23985 12.5233 1.21447 11.0615 0.608967C9.59966 0.00346625 7.99113 -0.15496 6.43928 0.153721C4.88743 0.462403 3.46197 1.22433 2.34315 2.34315C1.22433 3.46197 0.462403 4.88743 0.153721 6.43928C-0.15496 7.99113 0.00346625 9.59966 0.608967 11.0615C1.21447 12.5233 2.23985 13.7727 3.55544 14.6518C4.87103 15.5308 6.41775 16 8 16C9.77666 16.0022 11.5025 15.407 12.9 14.31L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29ZM2 8C2 6.81332 2.3519 5.65328 3.01119 4.66658C3.67047 3.67989 4.60755 2.91085 5.7039 2.45673C6.80026 2.0026 8.00666 1.88378 9.17055 2.11529C10.3344 2.3468 11.4035 2.91825 12.2426 3.75736C13.0818 4.59648 13.6532 5.66558 13.8847 6.82946C14.1162 7.99335 13.9974 9.19975 13.5433 10.2961C13.0892 11.3925 12.3201 12.3295 11.3334 12.9888C10.3467 13.6481 9.18669 14 8 14C6.4087 14 4.88258 13.3679 3.75736 12.2426C2.63214 11.1174 2 9.5913 2 8Z"
                  fill="white"
                />
              </svg>

              {/* <button
                className="flex-shrink-0 px-4  text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Filter
              </button> */}
            </form>
          </div>
        </div>
        <div className="h-[70vh] min-w-80 w-full inline-block shadow-2xl rounded-3xl">
          <div className="px-2 sm:px-6">
            <div className="py-4 px-0 sm:px-4 w-full grid grid-cols-5 text-lg text-black font-medium">
              <h3 className="col-span-2 text-left">Name</h3>
              <h3 className="col-span-2 ml-4 text-left hidden lg:block">
                Subscription Remaining
              </h3>
              <h3 className="col-span-2 ml-4 text-left block lg:hidden">
                Subscription
              </h3>
              <h3 className="col-span-1 text-right">{""}</h3>
            </div>
            <div className="h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 ">
              {businesses.map((business) => {
                let subscriptionRem = null;
                if (business.activeSubscription) {
                  subscriptionRem =
                    business.activeSubscription.expirationDate
                      .toDate()
                      .getTime() - Date.now();
                  console.log(new Date(subscriptionRem));
                  subscriptionRem = new Date(subscriptionRem);
                }
                // console.log(subscriptionRem);
                return (
                  <div
                    key={business.id}
                    className={`text-sm sm:text-base mb-3 px-0 sm:px-4 rounded bg-[#EEF7FF] w-full grid grid-cols-5 text-black font-medium ${
                      business.isDisabled ? "opacity-50" : "opacity-100"
                    }`}
                  >
                    <div className="col-span-2 flex items-center gap-2">
                      <img
                        className="object-contain h-8"
                        src={profile}
                        alt=""
                      />
                      <p className="py-3 text-left">{business.name}</p>
                    </div>
                    {subscriptionRem ? (
                      <p className="col-span-2 ml-4 py-3 text-left">
                        {subscriptionRem.getDate()} days:{" "}
                        {business.activeSubscription.name}
                      </p>
                    ) : (
                      <p className="col-span-2 ml-4 py-3 text-left">
                        {"Not subscribed"}
                      </p>
                    )}

                    <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1 py-1">
                      <button
                        onClick={async () => {
                          if (business.isDisabled) {
                            await updateDoc(
                              doc(collection(db, "users"), business.id),
                              {
                                isDisabled: false,
                              }
                            );
                            setDisabled(false);
                          } else {
                            await updateDoc(
                              doc(collection(db, "users"), business.id),
                              {
                                isDisabled: true,
                              }
                            );
                            setDisabled(true);
                          }
                          updateCheck();
                        }}
                        className="text-xs sm:text-sm border border-white text-white font-normal rounded-full sm:rounded-md px-2 py-1 bg-primary-500 hover:bg-primary-400"
                      >
                        {business.isDisabled ? "Enable" : "Disable"}
                      </button>
                      <button
                        onClick={async () => {
                          await deleteDoc(
                            doc(collection(db, "users"), business.id)
                          );
                          updateCheck();
                        }}
                        className="text-xs sm:text-sm hover:underline hover:underline-offset-2 text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
