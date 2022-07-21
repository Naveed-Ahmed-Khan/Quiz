import { useState } from "react";
import BusinessTable from "../components/BusinessTable";
import EarningCard from "../components/EarningCard";
import ItemCard from "../components/ItemCard";
import Chart from "../components/UI/Chart";
import UsersTable from "../components/UsersTable";

const Home = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className="p-4 md:p-10 mt-[4.25rem] xl:mb-6 grid place-content-center grid-cols-1 gap-y-8 xl:gap-y-6 xl:gap-x-8 xl:grid-cols-12">
      <div className="xl:col-span-6">
        <UsersTable />
      </div>
      <div className="xl:col-span-6">
        <BusinessTable />
      </div>
      <div className="xl:col-span-5">
        <EarningCard />
      </div>
      <div className=" xl:col-span-2">
        <Chart />
      </div>
      <div className="xl:col-span-5">
        <ItemCard />
        {/* <UsersTable /> */}
      </div>
    </div>
  );
};

export default Home;
