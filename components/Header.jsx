"use client";
import React from "react";
import { CiCalculator1 } from "react-icons/ci";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex items-center shadow-xl  sm:p-10 py-10 pxl-5 select-none bg-white">
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
        <CiCalculator1 className="h-[50px] w-[100px]" />
      </motion.div>
      <motion.h1
        className="font-ft text-4xl font-bold"
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
        score BAC_TN
      </motion.h1>
    </header>
  );
}
