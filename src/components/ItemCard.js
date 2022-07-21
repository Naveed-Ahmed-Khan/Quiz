import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import balloon from "../assets/images/ballon.png";
import { useAuth } from "../contexts/AuthContext";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "./UI/Button";

const ItemCard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { locations, updateShowDetails } = useStateContext();
  const [filterValue, setFilterValue] = useState("");
  return (
    <div className="mx-auto max-w-[720px] px-0 xl:pl-8 ">
      <div className="">
        <div className="mb-0 xl:mb-2 sm:flex items-center justify-between w-full">
          <h2 className="text-2xl text-[#494949] font-semibold leading-tight">
            Items
          </h2>
          <div
            onClick={() => {
              if (currentUser.email === "admin@gmail.com") {
                navigate("/items");
              } else {
                navigate("/dashboard/items");
              }
            }}
            className="mt-6 sm:mt-0 text-end cursor-pointer"
          >
            <p className="font-semibold text-[#494949]">See all</p>
          </div>
        </div>

        <div className="w-full shadow-2xl rounded-3xl bg-white">
          {locations.length > 0 ? (
            <div className="p-4 sm:p-6 sm:h-[18rem]">
              <div className="sm:flex justify-between gap-4">
                <div className="w-full sm:w-[30%] gap-2 flex flex-col justify-between">
                  <img
                    className="object-cover h-40 rounded-3xl"
                    src={locations[0]?.image}
                    alt=""
                  />
                  <div className="hidden sm:block text-sm text-white">
                    <Button
                      onClick={() => {
                        if (currentUser.email === "admin@gmail.com") {
                          navigate("/items");
                        } else {
                          navigate("/dashboard/items");
                        }
                      }}
                      fullWidth
                      type={"button"}
                    >
                      Show more
                    </Button>
                  </div>
                </div>
                <div className="w-full sm:w-[70%] space-y-4">
                  <h5 className="text-lg font-medium text-[#464646] ">
                    {locations[0]?.name}
                  </h5>
                  <div className="flex space-x-5">
                    <p className="flex gap-1 text-xs items-center text-[#909090]">
                      <span>
                        <svg
                          className="object-contain h-4"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 11.05C0 12.155 0.845 13 1.95 13H11.05C12.155 13 13 12.155 13 11.05V5.85H0V11.05ZM11.05 1.3H9.75V0.65C9.75 0.26 9.49 0 9.1 0C8.71 0 8.45 0.26 8.45 0.65V1.3H4.55V0.65C4.55 0.26 4.29 0 3.9 0C3.51 0 3.25 0.26 3.25 0.65V1.3H1.95C0.845 1.3 0 2.145 0 3.25V4.55H13V3.25C13 2.145 12.155 1.3 11.05 1.3Z"
                            fill="#919191"
                          />
                        </svg>
                      </span>
                      {locations[0]?.date.toDate().toDateString()}
                    </p>
                    {/* <p className="flex gap-1 text-xs items-center text-[#909090]">
                    <span>
                      <svg
                        className="object-contain h-4"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 11.05C0 12.155 0.845 13 1.95 13H11.05C12.155 13 13 12.155 13 11.05V5.85H0V11.05ZM11.05 1.3H9.75V0.65C9.75 0.26 9.49 0 9.1 0C8.71 0 8.45 0.26 8.45 0.65V1.3H4.55V0.65C4.55 0.26 4.29 0 3.9 0C3.51 0 3.25 0.26 3.25 0.65V1.3H1.95C0.845 1.3 0 2.145 0 3.25V4.55H13V3.25C13 2.145 12.155 1.3 11.05 1.3Z"
                          fill="#919191"
                        />
                      </svg>
                    </span>
                    Dec 21, 2021
                  </p>
                  <p className="flex gap-1 text-xs items-center text-[#909090]">
                    <span>
                      <svg
                        className="object-contain h-4"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 11.05C0 12.155 0.845 13 1.95 13H11.05C12.155 13 13 12.155 13 11.05V5.85H0V11.05ZM11.05 1.3H9.75V0.65C9.75 0.26 9.49 0 9.1 0C8.71 0 8.45 0.26 8.45 0.65V1.3H4.55V0.65C4.55 0.26 4.29 0 3.9 0C3.51 0 3.25 0.26 3.25 0.65V1.3H1.95C0.845 1.3 0 2.145 0 3.25V4.55H13V3.25C13 2.145 12.155 1.3 11.05 1.3Z"
                          fill="#919191"
                        />
                      </svg>
                    </span>
                    Dec 21, 2021
                  </p> */}
                  </div>
                  <p className="text-xs text-[#585858] h-[6rem] overflow-auto scrollbar-thin scrollbar-thumb-gray-200">
                    {locations[0]?.description}
                  </p>
                  <div className="flex items-end justify-between mt-2">
                    <div className="sm:hidden block text-sm text-white">
                      <Button
                        onClick={() => {
                          if (currentUser.email === "admin@gmail.com") {
                            navigate("/items");
                          } else {
                            navigate("/dashboard/items");
                          }
                        }}
                        fullWidth
                        type={"button"}
                      >
                        Show more
                      </Button>
                    </div>
                    <div className="ml-0 sm:ml-auto text-sm text-white">
                      <Button
                        onClick={() => {
                          if (currentUser.email === "admin@gmail.com") {
                            navigate("/add-item");
                          } else {
                            navigate("/dashboard/add-item");
                          }
                        }}
                        fullWidth
                        type={"button"}
                      >
                        Add Items
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="sm:h-[18rem] flex flex-col items-center justify-center text-xl text-medium">
              No Items
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
