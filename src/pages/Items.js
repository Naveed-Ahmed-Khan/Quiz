import React, { useState } from "react";
import profile from "../assets/images/profile.png";
import Item2 from "../components/Item2";
import ItemCard from "../components/ItemCard";
import Button from "../components/UI/Button";
// import { useStateContext } from "../contexts/ContextProvider";
export default function Items() {
  // const { users } = useStateContext();

  const [filterValue, setFilterValue] = useState("");
  return (
    <div className="pt-[5vh] md:pt-[12vh] pb-10 w-full sm:max-w-screen-lg mx-auto">
      <div className="mb-4 sm:flex items-center justify-between w-full">
        <h2 className="text-2xl sm:text-3xl text-primary-500 font-semibold leading-tight">
          Items
        </h2>
        <div className="mt-6 sm:mt-0 text-end px-4">
          <div className="text-sm text-white">
            <Button fullWidth type={"button"}>
              <p className="text-xl">Add Items</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="h-full min-w-80 w-full rounded-3xl">
        <div className="px-2 sm:px-6 space-y-8">
          <Item2 />
          <Item2 />
          <Item2 />
          <Item2 />
          <Item2 />
          <Item2 />
          <Item2 />
          <Item2 />
        </div>
      </div>
    </div>
  );
}
