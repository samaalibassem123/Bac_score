"use client";
import React from "react";
import { CiCalculator1 } from "react-icons/ci";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Header(props) {
  return (
    <header className="flex sm:justify-start justify-center items-center shadow-xl  sm:p-10 py-10 pxl-5 select-none bg-white">
      <div className="flex items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1.5,
          }}
        >
          <CiCalculator1 className="h-[50px] sm:w-[100px] w-[50px]" />
        </motion.div>
        <motion.h1
          className="font-ft sm:text-4xl text-3xl font-bold"
          initial={{
            visibility: 0,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            visibility: 1,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 1.5,
          }}
        >
          <Link href="/">{props.title}</Link>
        </motion.h1>
      </div>
    </header>
  );
}
