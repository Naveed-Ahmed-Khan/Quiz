import React, { useState } from "react";
import balloon from "../assets/images/ballon.png";
import Button from "./UI/Button";
import LineChart from "./UI/LineChart";
// import { useStateContext } from "../contexts/ContextProvider";

export default function EarningCard({ rows }) {
  // const { users } = useStateContext();

  const [filterValue, setFilterValue] = useState("");
  return (
    <div className="mx-auto max-w-[720px] px-0 xl:pr-8">
      <div className="">
        <div className="mb-0 xl:mb-2 sm:flex items-center justify-between w-full">
          <h2 className="text-2xl text-[#494949] font-semibold leading-tight">
            Earnings
          </h2>
          {/* <div className="mt-6 sm:mt-0 text-end">
            <p className="font-semibold text-[#494949]">See all</p>
          </div> */}
        </div>
        <div className="sm:h-[19rem] flex flex-col w-full shadow-2xl rounded-3xl bg-[#013b8d]">
          <div className=" mb-6 pl-4 pt-2">
            <p className="text-sm sm:text-base text-white font-semibold leading-tight">
              Earning by month
            </p>
          </div>
          <div className="sm:h-1/4 grid place-content-center">
            <h2 className="text-3xl sm:text-4xl text-white font-semibold leading-tight">
              $10,000.54
            </h2>
          </div>
          <div className="p-4 sm:p-6 sm:h-3/4">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
}
