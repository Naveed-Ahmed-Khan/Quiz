import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";

const Dashboard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar
        open={open}
        setOpen={setOpen}
        showBackdrop={showBackdrop}
        setShowBackdrop={setShowBackdrop}
        setIsChatOpen={setIsChatOpen}
        isChatOpen={isChatOpen}
      />
      <Sidebar
        open={open}
        setOpen={setOpen}
        showBackdrop={showBackdrop}
        setShowBackdrop={setShowBackdrop}
      />
      <div className="flex-auto pt-14 md:pt-0 md:ml-[17rem] relative overflow-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
