import React, { useEffect, useState } from "react";

const Backdrop = ({ showBackdrop, onClick }) => {
  const [isfadeoutDelay, setIsFadeoutDelay] = useState(false);

  const DURATION = 300; /* 75, 100, 150, 200, 300, 500, 700, 1000 */
  const TRANSITION = "ease-out"; /*ease-in, ease-out, ease-in-out, linear */

  useEffect(() => {
    if (showBackdrop === false) {
      setTimeout(() => {
        setIsFadeoutDelay(true);
      }, DURATION);
    } else {
      setIsFadeoutDelay(false);
    }
  }, [showBackdrop]);

  return (
    <div
      className={`fixed top-0 bottom-0 right-0 left-0 w-screen h-screen bg-black 
  transition-opacity dura duration-${DURATION} ${TRANSITION}
  ${showBackdrop === true ? "opacity-80" : "opacity-0"}
  ${isfadeoutDelay === true ? "-z-[100]" : "z-[100]"}
  `}
      onClick={onClick}
    />
  );
};

export default Backdrop;
