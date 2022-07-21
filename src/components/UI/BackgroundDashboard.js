import React from "react";

export default function BackgroundDashboard() {
  return (
    <div>
      <div className="-z-40 bg-dark relative">
        <svg
          className="-z-30 fixed right-0 bottom-0 w-[25%] md:w-[20%] lg:w-[15%] "
          viewBox="0 0 240 594"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="372" cy="372" r="372" fill="#92B8FF" fill-opacity="0.2" />
        </svg>
      </div>
      <div className="-z-50 fixed bg-white h-screen w-screen" />
    </div>
  );
}
