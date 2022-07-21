import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-calendar/dist/Calendar.css";

export default function DateTime({ dateValue, onDateValue }) {
  return (
    <div
      className={`w-full text-primary-500 text-base xl:text-lg text-opacity-60 bg-[#E6EBFF] border-2 border-[#E6EBFF] rounded-2xl outline-none ring-0 
    placeholder-primary-500 placeholder-opacity-40 placeholder:font-rublik placeholder:text-base xl:placeholder:text-lg
      focus:border-2 focus:border-primary-500 focus:border-opacity-40 caret-primary-500 shadow-xl
      py-3 px-12 transition-all duration-300`}
    >
      <DateTimePicker
        className={["bg-transparent"]}
        disableClock
        clearIcon={null}
        calendarIcon={null}
        onChange={onDateValue}
        value={dateValue}
      />
    </div>
  );
}
