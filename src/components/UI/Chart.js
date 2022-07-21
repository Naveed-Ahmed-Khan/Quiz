import React from "react";
import { PieChart, Pie, Legend, ResponsiveContainer } from "recharts";
import Select from "./Select";

const data = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
];

const renderColorfulLegendText = (value, entry) => {
  return (
    <span style={{ color: "#596579", fontWeight: 500, padding: "10px" }}>
      {value}
    </span>
  );
};

export default function Chart() {
  return (
    <div className="-mx-14 h-[19rem]">
      <div
        style={{
          width: "100%",
          maxWidth: "720px",
          margin: "0 auto",
          height: 285,
          position: "relative",
        }}
      >
        <div className="px-14">
          <h2 className="text-2xl mb-4 text-[#494949] font-semibold leading-tight">
            Statistics
          </h2>
          <div className="flex gap-2 w-full justify-center flex-wrap">
            <Select placeholder={"Business"}>
              <option>Business</option>
            </Select>
            <Select placeholder={"Monthly"}>
              <option>Monthly</option>
              <option>Annual</option>
            </Select>
          </div>
        </div>
        <div className="-z-10 absolute w-full h-full flex items-center justify-center -mt-3">
          <p className="text-black text-lg font-bold -mt-2">600</p>
          <div>
            <p className="text-[#B4B4B4] text-xl font-bold">/1000</p>
            <p className="text-[#B4B4B4] text-xs">milestone</p>
          </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              innerRadius={60}
              outerRadius={90}
              data={data}
              fill="#8884d8"
              label
              children
            />
            <Legend
              style={{ marginTop: "1rem" }}
              height={36}
              iconType="circle"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              iconSize={10}
              padding={5}
              formatter={renderColorfulLegendText}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
