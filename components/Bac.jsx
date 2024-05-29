"use client";
import React from "react";
import Link from "next/link";

export default function Bac(props) {
  const bacname = props.bac;
  const linkimg = `/${bacname}.png`;
  const linkBac = `/${bacname}`;
  return (
    <div className="bg-white p-5 flex gap-5  flex-col sm:w-fit sm:h-[400px]   items-center justify-center rounded-lg ">
      <h1 className="text-2xl font-bold m-2">{bacname}</h1>
      <img
        src={linkimg}
        alt="refrech the page !"
        className="w-20 h-20 "
        title={bacname}
      />
      <Link
        href={linkBac}
        title={bacname}
        className="sm:w-auto w-full text-center  animate-bounce hover:animate-none rounded-lg border m-5 p-3 px-10  border-black text-lg hover:bg-black hover:text-white transition-all duration-75 hover:scale-110"
      >
        Start
      </Link>
    </div>
  );
}
