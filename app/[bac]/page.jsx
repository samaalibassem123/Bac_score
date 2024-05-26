import React from "react";

import CorP from "@/components/CorP";

export default function ({ params }) {
  const bacName = params.bac;
  return (
    <div className=" h-full flex justify-center items-center">
      <CorP bac={bacName} />
    </div>
  );
}
