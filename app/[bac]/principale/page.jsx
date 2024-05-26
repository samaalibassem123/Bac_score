import React from "react";
import FormsP from "@/components/FormsP";
export default function page({ params }) {
  const bacName = params.bac;

  return (
    <>
      <div className=" -z-20 backdrop-blur-md bg-white/20 m-2 xl:h-[90%] h-fit  p-2  flex flex-col justify-center items-center">
        <FormsP bac={bacName} />
        <p>Created By Bassem Samaali</p>
      </div>
    </>
  );
}
