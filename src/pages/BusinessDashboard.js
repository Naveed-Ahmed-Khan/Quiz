import { collection, doc, query, updateDoc, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import BackgroundDashboard from "../components/UI/BackgroundDashboard";
import BusinessSidebar from "../components/UI/BusinessSidebar";
import DetailsSidebar from "../components/UI/DetailsSidebar";
// import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase-config";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import Alert from "../components/UI/Alert";
// import HomeBackground from "../components/HomeBackground";
// import { useStateContext } from "../contexts/ContextProvider";

const BusinessDashboard = () => {
  // const { unReadMessages } = useStateContext();
  const { currentUser } = useAuth();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const [showBackdrop, setShowBackdrop] = useState(false);

  const q = query(
    collection(db, "users"),
    where("businessId", "==", currentUser.uid || "")
  );
  // const fetchedData = await getDocs(q);
  const [selectedUserInfo] = useCollectionData(q, { idField: currentUser.uid });
  console.log(selectedUserInfo);

  const checkExpiration = async (activeSubscription) => {
    if (
      activeSubscription !== null &&
      activeSubscription.expirationDate.toDate().getTime() <
        new Date().getTime()
    ) {
      console.log("expired");
      try {
        await updateDoc(doc(collection(db, "users"), currentUser.uid), {
          ...selectedUserInfo,
          activeSubscription: null,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      // console.log("not expired");
      return;
    }
  };

  return (
    <>
      <div>
        {/* <HomeBackground /> */}
        <BackgroundDashboard />

        <BusinessSidebar
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
        />
        <DetailsSidebar
          open={open}
          setOpen={setOpen}
          showBackdrop={showBackdrop}
          setShowBackdrop={setShowBackdrop}
        />
        <div className="pt-14 md:pt-0 md:ml-40 relative overflow-auto ">
          <Outlet />
          {/* <div className="fixed bottom-6 right-6">
            <Alert title={"Success"} color={"emerald"}>
              <p className="text-sm text-gray-600">
                You successfully Subscribed
              </p>
            </Alert>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BusinessDashboard;
