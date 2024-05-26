"use client";
import React, { useState } from "react";
import { CgDanger } from "react-icons/cg";
import { CiCircleCheck } from "react-icons/ci";
export default function Inputs(props) {
  const text = props.text;
  const [n, setn] = useState("");
  const [ok, setok] = useState(true);

  const verif = () => {
    if (n === "" || n < "0" || n > "20" || isNaN(n)) {
      setok(false);
    } else {
      setok(true);
    }
  };

  return (
    <div className="flex  items-start justify-start">
      <input
        type="text"
        className=" bg-slate-100 p-1 px-5 outline-none shadow-md focus:shadow-lg w-full "
        placeholder={text}
        onChange={(e) => {
          setn(e.target.value);
        }}
        onBlur={verif}
      />
      {!ok ? (
        <span>
          <CgDanger className="m-2 bg-red-300 rounded-full" />
        </span>
      ) : (
        <span>
          <CiCircleCheck className="bg-origin-border bg-green-500 rounded-full m-2" />
        </span>
      )}
    </div>
  );
}
