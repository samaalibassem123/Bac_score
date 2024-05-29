"use client";
import React from "react";
import FormsP from "@/components/FormsP";
import { motion } from "framer-motion";

export default function page({ params }) {
  const bacName = params.bac;
  const AnimatePage = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <>
      <motion.div
        variants={AnimatePage}
        initial="hidden"
        animate="visible"
        className="backdrop-blur-md bg-white/20 m-2 xl:h-[90%] h-full  p-2  flex flex-col justify-center items-center"
      >
        <FormsP bac={bacName} />
      </motion.div>
    </>
  );
}
