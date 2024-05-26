"use client";

import React, { useState } from "react";
import Inputs from "./Inputs";
import { motion } from "framer-motion";
import { CiCircleRemove } from "react-icons/ci";
import {
  Clettre,
  Cscience,
  Cmaths,
  Ceco,
  Ctechnique,
  Cinfo,
  Csport,
} from "@/utils/Calc";

export default function FormsP(props) {
  const bacName = props.bac;

  const [MG, setMG] = useState("");
  const [F, setF] = useState("");
  const [Ang, setAng] = useState("");
  const [A, setA] = useState("");
  const [PH, setPH] = useState("");
  const [TE, setTE] = useState("");
  const [Ec, setEc] = useState("");
  const [Ge, setGe] = useState("");
  const [Algo, setAlgo] = useState("");
  const [SVT, setSVT] = useState("");
  const [SB, setSB] = useState("");
  const [M, setM] = useState("");
  const [SP, setSP] = useState("");
  const [SPsport, setSPsport] = useState("");
  const [EP, setEP] = useState("");
  const [STI, setSTI] = useState("");
  const [HG, setHG] = useState("");

  const [res, setRes] = useState(0);
  const [promp, setpromp] = useState(false);
  const handleSumbit = (e) => {
    e.preventDefault();
    let ress = 0;
    switch (bacName) {
      case "Lettsetres":
        ress = Clettre(MG, A, PH, HG, F, Ang);
        break;
      case "Maths":
        ress = Cmaths(MG, M, SP, SVT, F, Ang);
        break;
      case "Science":
        ress = Cscience(MG, M, SP, SVT, F, Ang);
        break;
      case "Eco":
        ress = Ceco(MG, Ec, Ge, M, HG, F, Ang);
        break;
      case "Technique":
        ress = Ctechnique(MG, TE, M, SP, F, Ang);
        break;
      case "Info":
        ress = Cinfo(MG, M, Algo, SP, STI, F, Ang);
        break;
      case "Sport":
        ress = Csport(MG, SB, SPsport, EP, SP, PH, F, Ang);
        break;
    }

    setRes(ress);
    setpromp(true);
    const form = e.target;
    form.reset();
  };

  return (
    <>
      <form
        className=" rounded-lg z-20  2xl:grid 2xl:grid-cols-3 flex flex-col w-full  bg-white select-none font-ft  gap-5 sm:p-5 p-2 sm:w-[55%]"
        onSubmit={handleSumbit}
      >
        <legend className=" text-xl underline col-span-3">
          Entrez vos moyenes:
        </legend>

        <motion.div
          initial={{
            opacity: 0,
            visibility: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            visibility: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          onChange={(e) => {
            setMG(e.target.value);
          }}
        >
          <Inputs text="Moyenne de Bac" />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            visibility: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            visibility: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          onChange={(e) => {
            setF(e.target.value);
          }}
        >
          <Inputs text="Francais" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            visibility: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            visibility: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          onChange={(e) => {
            setAng(e.target.value);
          }}
        >
          <Inputs text="Englais" />
        </motion.div>

        {/*autsetres*/}

        {(bacName === "Lettsetres" || bacName === "Sport") && (
          <motion.div
            initial={{
              opacity: 0,
              visibility: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              visibility: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            onChange={(e) => {
              setPH(e.target.value);
            }}
          >
            <Inputs text="Philo" />
          </motion.div>
        )}

        {(bacName === "Lettsetres" || bacName === "Eco") && (
          <motion.div
            initial={{
              opacity: 0,
              visibility: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              visibility: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            onChange={(e) => {
              setHG(e.target.value);
            }}
          >
            <Inputs text="Histoire Geo" />
          </motion.div>
        )}
        {(bacName === "Maths" ||
          bacName === "Science" ||
          bacName === "Eco" ||
          bacName === "Technique" ||
          bacName === "Info") && (
          <motion.div
            initial={{
              opacity: 0,
              visibility: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              visibility: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            onChange={(e) => {
              setM(e.target.value);
            }}
          >
            <Inputs text="Math" />
          </motion.div>
        )}
        {(bacName === "Maths" ||
          bacName === "Sience" ||
          bacName === "Eco" ||
          bacName === "Technique" ||
          bacName === "Info" ||
          bacName === "Sport") && (
          <motion.div
            initial={{
              opacity: 0,
              visibility: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              visibility: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            onChange={(e) => {
              setSP(e.target.value);
            }}
          >
            <Inputs text="Physique" />
          </motion.div>
        )}

        {(bacName === "Science" || bacName === "Maths") && (
          <motion.div
            initial={{
              opacity: 0,
              visibility: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              visibility: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            onChange={(e) => {
              setSVT(e.target.value);
            }}
          >
            <Inputs text="Science de VT" />
          </motion.div>
        )}

        {/*e5tissass*/}

        {bacName === "Eco" && (
          <>
            <motion.div
              initial={{
                opacity: 0,
                visibility: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                visibility: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              onChange={(e) => {
                setGe(e.target.value);
              }}
            >
              <Inputs text="Gestion" />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                visibility: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                visibility: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              onChange={(e) => {
                setEc(e.target.value);
              }}
            >
              <Inputs text="Eco" />
            </motion.div>
          </>
        )}

        {bacName === "Technique" && (
          <motion.div
            initial={{
              opacity: 0,
              visibility: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              visibility: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            onChange={(e) => {
              setTE(e.target.value);
            }}
          >
            <Inputs text="Technique" />
          </motion.div>
        )}

        {bacName === "Info" && (
          <>
            <motion.div
              initial={{
                opacity: 0,
                visibility: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                visibility: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              onChange={(e) => {
                setAlgo(e.target.value);
              }}
            >
              <Inputs text="Algo" />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                visibility: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                visibility: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              onChange={(e) => {
                setSTI(e.target.value);
              }}
            >
              <Inputs text="STI" />
            </motion.div>
          </>
        )}
        {bacName === "Lettsetres" && (
          <motion.div
            initial={{
              opacity: 0,
              visibility: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              visibility: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            onChange={(e) => {
              setA(e.target.value);
            }}
          >
            <Inputs text="Arabe" />
          </motion.div>
        )}

        {bacName === "Sport" && (
          <>
            <motion.div
              initial={{
                opacity: 0,
                visibility: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                visibility: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              onChange={(e) => {
                setSB(e.target.value);
              }}
            >
              <Inputs text="Science Biologie" />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                visibility: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                visibility: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              onChange={(e) => {
                setSPsport(e.target.value);
              }}
            >
              <Inputs text="Sp-Sport" />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                visibility: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                visibility: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              onChange={(e) => {
                setEP(e.target.value);
              }}
            >
              <Inputs text="EP" />
            </motion.div>
          </>
        )}

        <input
          type="submit"
          value="Calculer"
          className=" bg-gradient-to-tr from-green-400 to-gray-200 shadow-lg rounded-lg p-2 text-xl font-bold cursor-pointer hover:text-white transition-all duration-75 hover:scale-105"
        />
      </form>
      {promp && (
        <motion.div
          className=" z-50 rounded-lg shadow-lg border border-gray-300 absolute  bg-white sm:w-[500px] w-full sm:h-[400px] p-2 flex flex-col  items-center gap-10 font-ft select-none"
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <p className="w-full">
            <CiCircleRemove
              className=" float-right h-[50px] w-[50px] cursor-pointer hover:scale-105"
              onClick={() => setpromp(false)}
            />
          </p>
          <motion.div
            className="flex flex-col items-center"
            initial={{
              y: -5,
              opacity: 0,
              visibility: 0,
              scale: 0,
            }}
            animate={{
              y: 0,
              scale: 1,
              visibility: 1,
              opacity: 1,
            }}
            transition={{
              delay: 1.5,
              duration: 0.2,
            }}
          >
            <h1 className="text-4xl font-bold">Votre Score:</h1>
            <p className="text-4xl ">{res}</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{
              y: -5,
              opacity: 0,
              visibility: 0,
              scale: 0,
            }}
            animate={{
              y: 0,
              scale: 1,
              visibility: 1,
              opacity: 1,
            }}
            transition={{
              delay: 2,
              duration: 0.2,
            }}
          >
            <h1 className="text-2xl font-bold">Votre Score avec 7%:</h1>
            <p className="text-4xl  ">{res + (res * 7) / 100}</p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
