"use client";
import Header from "@/components/Header";
import Bac from "@/components/Bac";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className=" font-ft select-none h-full">
      <Header />
      <div className="flex h-[80%] justify-center  items-center">
        <section className=" w-full flex items-center justify-center sm:flex-row flex-col gap-2 backdrop-blur-sm p-5 flex-wrap  bg-white/30 m-5">
          <motion.div
            initial={{
              y: -10,
              opacity: 0,
              visibility: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              visibility: 1,
            }}
            transition={{
              delay: 2,
              duration: 0.5,
            }}
          >
            <Bac bac="Maths" />
          </motion.div>

          <motion.div
            initial={{
              y: -10,
              opacity: 0,
              visibility: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              visibility: 1,
            }}
            transition={{
              delay: 2.5,
              duration: 0.5,
            }}
          >
            <Bac bac="Eco" />
          </motion.div>

          <motion.div
            initial={{
              y: -10,
              opacity: 0,
              visibility: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              visibility: 1,
            }}
            transition={{
              delay: 3,
              duration: 0.5,
            }}
          >
            <Bac bac="Info" />
          </motion.div>

          <motion.div
            initial={{
              y: -10,
              opacity: 0,
              visibility: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              visibility: 1,
            }}
            transition={{
              delay: 3.5,
              duration: 0.5,
            }}
          >
            <Bac bac="Lettres" />
          </motion.div>

          <motion.div
            initial={{
              y: -10,
              opacity: 0,
              visibility: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              visibility: 1,
            }}
            transition={{
              delay: 4,
              duration: 0.5,
            }}
          >
            <Bac bac="Sport" />
          </motion.div>

          <motion.div
            initial={{
              y: -10,
              opacity: 0,
              visibility: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              visibility: 1,
            }}
            transition={{
              delay: 4.5,
              duration: 0.5,
            }}
          >
            <Bac bac="Technique" />
          </motion.div>

          <motion.div
            initial={{
              y: -10,
              opacity: 0,
              visibility: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              visibility: 1,
            }}
            transition={{
              delay: 5,
              duration: 0.5,
            }}
          >
            <Bac bac="Science" />
          </motion.div>
        </section>
      </div>
    </main>
  );
}
