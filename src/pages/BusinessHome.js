import { useState } from "react";
import BusinessTable from "../components/BusinessTable";
import EarningCard from "../components/EarningCard";
import Gallery from "../components/Gallery";
import ItemCard from "../components/ItemCard";
import Chart from "../components/UI/Chart";
import DetailsSidebar from "../components/UI/DetailsSidebar";
import UsersTable from "../components/UsersTable";

const BusinessHome = () => {
  const [open, setOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <>
      <div className="p-4 md:p-14 grid place-content-center grid-cols-1 gap-y-8 xl:gap-y-6 xl:gap-x-8 xl:grid-cols-12">
        <div className="xl:col-span-12">
          <Gallery />
        </div>

        <div className="xl:col-span-5">
          <ItemCard />
        </div>
        <div className="xl:col-span-3">
          <Chart />
        </div>
        <div className="xl:col-span-4"></div>
      </div>
    </>
  );
};

export default BusinessHome;
