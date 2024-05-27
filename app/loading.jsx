import React from "react";
import { CiCalculator1 } from "react-icons/ci";
export default function loading() {
  return (
    <div className=" select-none  text-4xl font-bold w-full h-screen flex justify-center items-center ">
      <CiCalculator1 className="h-[50px] sm:w-[100px] w-[50px] animate-bounce" />
      <p>Loading...</p>
    </div>
  );
}
