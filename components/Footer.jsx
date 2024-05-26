import React from "react";
import { MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="p-2 m-0 rounded-sm  bg-black text-white select-none">
      <p className="m-2 tracking-wide h-f flex flex-col items-center gap-2">
        Created By Bassem Samaali Contact:{" "}
        <span className="flex items-center gap-1 hover:bg-slate-100 hover:text-black cursor-text select-text">
          <MdEmail />
          samaalibassem123@gmail.com |
          <FaDiscord />
          .besbes
        </span>
      </p>
    </footer>
  );
}
