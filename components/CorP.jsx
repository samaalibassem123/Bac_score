import React from "react";
import Link from "next/link";
export default function CorP(props) {
  const BacName = props.bac;
  const BacLinkP = `/${BacName}/principale`;
  const BacLinkC = `/${BacName}/controle`;

  return (
    <div className="flex flex-col gap-24 font-ft select-none">
      <Link
        href={BacLinkP}
        title={BacName}
        className="  text-3xl sm:bg-white rounded-lg sm:text-black bg-black text-white border border-black p-5 sm:px-[100px]  tracking-wide text-center  outline-none hover:scale-105 transition-all delay-75  sm:hover:text-white sm:hover:bg-black"
      >
        Session Principale
      </Link>
      <Link
        href={BacLinkC}
        title={BacName}
        className="  text-3xl sm:bg-white rounded-lg sm:text-black bg-black text-white border border-black p-5 sm:px-[100px]  tracking-wide text-center   outline-none hover:scale-105 transition-all delay-75  sm:hover:text-white sm:hover:bg-black"
      >
        Session Controle
      </Link>
    </div>
  );
}
