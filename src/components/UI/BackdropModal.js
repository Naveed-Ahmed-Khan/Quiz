import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Backdrop = ({ show, onClick, title, children }) => {
  const [isfadeoutDelay, setIsFadeoutDelay] = useState(false);

  const DURATION = 300; /* 75, 100, 150, 200, 300, 500, 700, 1000 */
  const TRANSITION = "ease-out"; /*ease-in, ease-out, ease-in-out, linear */

  useEffect(() => {
    if (show === false) {
      setTimeout(() => {
        setIsFadeoutDelay(true);
      }, DURATION);
    } else {
      setIsFadeoutDelay(false);
    }
  }, [show]);

  return (
    <>
      <div
        className={`fixed top-0 bottom-0 right-0 left-0 w-screen h-screen bg-black 
        transition-opacity dura duration-${DURATION} ${TRANSITION}
        ${show === true ? "opacity-80" : "opacity-0"}
        ${isfadeoutDelay === true ? "-z-50" : "z-40"}
        `}
        onClick={onClick}
      />
      <main
        className={`flex flex-col gap-2 fixed p-14 bg-primary-200 shadow-lg drop-shadow-xl rounded-md
        top-[30%] left-[10%] w-[80%] 
        sm:w-[35%] sm:left-[25%] 
        lg:w-[40%] lg:left-[30%]
        transition duration-${DURATION} ${TRANSITION}
        ${
          show === true
            ? "translate-y-0 opacity-100"
            : "-translate-y-20 opacity-0"
        }
        ${isfadeoutDelay === true ? "-z-40" : "z-40"}
        `}
      >
        <div className="grid place-content-center">
          <div className="mb-6 flex flex-col items-center">
            <svg
              width="40"
              height="27"
              viewBox="0 0 40 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.2926 16.038L34.2006 24.768C33.8041 25.4474 33.2365 26.011 32.5543 26.4026C31.8721 26.7943 31.0992 27.0002 30.3126 27H2.19056C1.8937 26.9999 1.6021 26.9216 1.34519 26.7728C1.08827 26.6241 0.87513 26.4102 0.727255 26.1528C0.579381 25.8954 0.502007 25.6036 0.502938 25.3067C0.503869 25.0098 0.583073 24.7185 0.732559 24.462L5.82456 15.733C6.22089 15.0534 6.78845 14.4896 7.47065 14.0978C8.15285 13.706 8.92585 13.4999 9.71256 13.5H37.8346C38.1315 13.4998 38.4233 13.5779 38.6804 13.7266C38.9375 13.8753 39.1508 14.0892 39.2987 14.3467C39.4467 14.6042 39.524 14.8962 39.5229 15.1932C39.5218 15.4901 39.4424 15.7816 39.2926 16.038Z"
                fill="#656EE7"
              />
              <path
                opacity="0.4"
                d="M11.188 11.25H34.25V7.875C34.25 6.97989 33.8944 6.12145 33.2615 5.48851C32.6286 4.85558 31.7701 4.5 30.875 4.5H19.625L15.125 0H3.875C2.97989 0 2.12145 0.355579 1.48851 0.988514C0.855579 1.62145 0.5 2.47989 0.5 3.375L0.5 22.925L5.357 14.6C5.9531 13.5822 6.80465 12.7378 7.82737 12.1502C8.85009 11.5626 10.0085 11.2523 11.188 11.25Z"
                fill="#656EE7"
              />
            </svg>

            <h2 className="mt-8 text-2xl font-bold text-secondary">{title}</h2>
          </div>
          {children}
        </div>
      </main>
    </>
  );
};

export default Backdrop;
