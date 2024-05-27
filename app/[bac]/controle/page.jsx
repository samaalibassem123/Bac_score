import React from "react";
import { CiCalculator1 } from "react-icons/ci";
import FormsC from "@/components/FormsC";
export default function page({ params }) {
  return (
    <div className=" font-bold w-full h-fit flex flex-col py-2 items-center ">
      <FormsC bac={params.bac} />
    </div>
  );
}
