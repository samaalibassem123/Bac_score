"use client";
import React from "react";
import CorP from "@/components/CorP";
import { motion } from "framer-motion";

export default function ({ params }) {
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
    <motion.div
      variants={AnimatePage}
      initial="hidden"
      animate="visible"
      className=" h-screen flex justify-center items-center"
    >
      <CorP bac={bacName} />
    </motion.div>
  );
}
