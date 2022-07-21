import React from "react";

export default function BackgroundPayment() {
  return (
    <div>
      <div className="-z-40 bg-dark relative">
        <svg
          className="-z-30 w-[45%] md:w-[35%]  fixed"
          viewBox="0 0 567 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="195" cy="140" r="372" fill="#92B8FF" fill-opacity="0.2" />
        </svg>
        <svg
          className="-z-20 w-[70%] md:w-[65%]  fixed"
          viewBox="0 0 1050 936"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="525"
            cy="411"
            r="525"
            fill="url(#paint0_radial_1_39)"
            fill-opacity="0.59"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1_39"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(525 411) rotate(90) scale(525)"
            >
              <stop stop-color="#013B8D" stop-opacity="0.37" />
              <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <svg
          className=" w-[30%] md:w-[15%] fixed right-0 bottom-0"
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
