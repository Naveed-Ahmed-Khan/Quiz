import React, { useState } from "react";
import image from "../assets/images/Islamabad.png";
import { useStateContext } from "../contexts/ContextProvider";
import FormGroup from "./UI/FormGroup";
import Select from "./UI/Select";
import SelectGroup from "./UI/SelectGroup";

export default function Gallery(props) {
  const { locations, updateShowDetails } = useStateContext();
  const [filterValue, setFilterValue] = useState("Places");
  console.log(filterValue);
  return (
    <div className="w-full sm:mr-auto sm:ml-auto xl:mr-auto xl:ml-0">
      <div className="">
        <div className="mb-4 xl:mb-8 items-center justify-between w-full">
          <div className="w-36 pt-4">
            <FormGroup horizontal>
              <SelectGroup
                noBorder
                className="bg-gray-200"
                placeholder="Places"
                name="filterValue"
                onChange={setFilterValue}
                options={[
                  {
                    value: "event",
                    label: "Events",
                  },
                  {
                    value: "restaurant",
                    label: "Restaurants",
                  },
                  {
                    value: "dining",
                    label: "Dinings",
                  },
                  {
                    value: "hotel",
                    label: "Hotels",
                  },
                ]}
              />
            </FormGroup>
          </div>
          {/* <h2 className="text-4xl text-primary-500 font-semibold leading-tight">
            Pakistan, Skardu
          </h2> */}
        </div>
        <div className="h-[18rem] md:w-full rounded-3xl">
          <div className="px-0">
            <div className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-transparent">
              {locations.length > 0 ? (
                locations?.map((location) => {
                  return (
                    <div key={location.id}>
                      {((filterValue === "Places" &&
                        location.type !== filterValue) ||
                        location.type === filterValue) && (
                        <div
                          onClick={() => {
                            updateShowDetails(location);
                          }}
                          className="relative w-48 h-60 rounded-3xl overflow-clip flex items-center justify-center"
                        >
                          <img
                            className="object-cover h-full w-full hover:scale-125 cursor-pointer transition-all duration-300"
                            src={location.image}
                            alt=""
                          />
                          <p className="absolute bottom-3 left-2 text-white text-sm">
                            {location.name}
                            {/* , {location.country} */}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="h-60 w-full flex items-center justify-center text-2xl text-primary-500">
                  No locations found
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="mt-8 w-20 border-b-8 border-dotted border-primary-500 " />
          </div>
        </div>
      </div>
    </div>
  );
}
