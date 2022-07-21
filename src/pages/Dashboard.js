import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import BackgroundDashboard from "../components/UI/BackgroundDashboard";
import DetailsSidebar from "../components/UI/DetailsSidebar";
// import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";
// import HomeBackground from "../components/HomeBackground";
// import { useStateContext } from "../contexts/ContextProvider";

const Dashboard = () => {
  // const { unReadMessages } = useStateContext();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showBackdrop, setShowBackdrop] = useState(false);

  return (
    <>
      <div>
        {/* <HomeBackground /> */}
        <BackgroundDashboard />

        <Sidebar
          open={open}
          setOpen={setOpen}
          showBackdrop={showBackdrop}
          setShowBackdrop={setShowBackdrop}
        />

        <Navbar
          open={open}
          setOpen={setOpen}
          showBackdrop={showBackdrop}
          setShowBackdrop={setShowBackdrop}
          setIsChatOpen={setIsChatOpen}
          isChatOpen={isChatOpen}
        />

        <DetailsSidebar />

        <div className="pt-14 md:pt-0 md:ml-40 relative overflow-auto ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
