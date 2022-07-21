import React, { useState } from "react";
import balloon from "../assets/images/ballon.png";
import Button from "./UI/Button";
// import { useStateContext } from "../contexts/ContextProvider";

export default function Item2({ rows }) {
  // const { users } = useStateContext();
  const [filterValue, setFilterValue] = useState("");

  return (
    <div className=" mx-auto max-w-[720px] px-0 sm:px-0">
      <div className="">
        <div className="sm:h-[21rem] w-full shadow-2xl rounded-3xl">
          <div className="p-4 sm:p-6 sm:h-[21rem]">
            <div className="sm:flex justify-between gap-4">
              <div
                className="w-full sm:w-[25%] sm:grid gap-2 place-items-center flex sm:grid-cols-2
              overflow-x-auto"
              >
                <img className="  col-span-full" src={balloon} alt="" />
                <img className=" " src={balloon} alt="" />
                <img className=" " src={balloon} alt="" />
              </div>
              <div className="w-full sm:w-[75%] text-lg font-medium text-[#464646] space-y-4">
                <h5>Hot Air Balloon Festival, Alsaka</h5>
                <div className="flex justify-between">
                  <p className="flex gap-2 text-xs items-center text-[#909090]">
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
                  <p className="flex gap-2 text-xs items-center text-[#909090]">
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
                  <p className="flex gap-2 text-xs items-center text-[#909090]">
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
                </div>
                <p className="text-sm text-[#585858] h-[9rem] overflow-auto scrollbar-thin scrollbar-thumb-gray-200">
                  A balloon release is a ceremonial event in which a number of
                  hydrogen- or helium-filled balloons are unleashed into the
                  sky. Balloon releases can be done as a prayer ceremony, to
                  create a photo opportunity, to raise awareness of a cause or
                  campaign, or as a competitive long-distance race.
                </p>
                <div className="flex w-full justify-end gap-6 mt-2 h-fit">
                  <div className="text-sm text-white">
                    <Button fullWidth type={"button"}>
                      Show more
                    </Button>
                  </div>
                  {/* <div className="text-sm text-white">
                    <Button fullWidth type={"button"}>
                      Add Items
                    </Button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
