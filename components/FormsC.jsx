"use client";

import React, { useState } from "react";
import Inputs from "./Inputs";
import { motion } from "framer-motion";
import { CiCircleRemove } from "react-icons/ci";

export default function FormsC(props) {
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

  {
    /*controle*/
  }
  const [MGC, setMGC] = useState("");
  const [FC, setFC] = useState("");
  const [AngC, setAngC] = useState("");
  const [AC, setAC] = useState("");
  const [PHC, setPHC] = useState("");
  const [TEC, setTEC] = useState("");
  const [EcC, setEcC] = useState("");
  const [GeC, setGeC] = useState("");
  const [AlgoC, setAlgoC] = useState("");
  const [SVTC, setSVTC] = useState("");
  const [SBC, setSBC] = useState("");
  const [MC, setMC] = useState("");
  const [SPC, setSPC] = useState("");
  const [SPsportC, setSPsportC] = useState("");
  const [EPC, setEPC] = useState("");
  const [STIC, setSTIC] = useState("");
  const [HGC, setHGC] = useState("");
  console.log(MG, MGC, F, FC, Ang, AngC, PH, PHC, HG, HGC, A, AC);

  const [res, setRes] = useState(0);
  const [promp, setpromp] = useState(false);
  const handleSumbit = (e) => {
    e.preventDefault();
    let ress = 0;
    switch (bacName) {
      case "Lettres":
        ress =
          (MG * 2 +
            MGC * 1 +
            (A * 2 + AC * 1) +
            (PH * 2 + PHC * 1) +
            (HG * 2 + HGC * 1) +
            (F * 2 + FC * 1) +
            (Ang * 2 + AngC * 1)) /
          3;
        break;
      case "Maths":
        ress =
          (MG * 2 +
            MGC * 1 +
            (M * 2 + MC * 1) +
            (SP * 2 + SPC * 1) +
            (SVT * 2 + SVTC * 1) +
            (F * 2 + FC * 1) +
            (Ang * 2 + AngC * 1)) /
          3;
        break;
      case "Science":
        ress =
          (MG * 2 +
            MGC * 1 +
            (M * 2 + MC * 1) +
            (SP * 2 + SPC * 1) +
            (SVT * 2 + SVTC * 1) +
            (F * 2 + FC * 1) +
            (Ang * 2 + AngC * 1)) /
          3;
        break;
      case "Eco":
        ress =
          (MG * 2 +
            MGC * 1 +
            (M * 2 + MC * 1) +
            (Ec * 2 + EcC * 1) +
            (Ge * 2 + GeC * 1) +
            (HG * 2 + HGC * 1) +
            (F * 2 + FC * 1) +
            (Ang * 2 + AngC * 1)) /
          3;
        break;
      case "Technique":
        ress =
          (MG * 2 +
            MGC * 1 +
            (M * 2 + MC * 1) +
            (TE * 2 + TEC * 1) +
            (SP * 2 + SPC * 1) +
            (F * 2 + FC * 1) +
            (Ang * 2 + AngC * 1)) /
          3;
        break;
      case "Info":
        ress =
          (MG * 2 +
            MGC * 1 +
            (M * 2 + MC * 1) +
            (Algo * 2 + AlgoC * 1) +
            (STI * 2 + STIC * 1) +
            (SP * 2 + SPC * 1) +
            (F * 2 + FC * 1) +
            (Ang * 2 + AngC * 1)) /
          3;
        break;
      case "Sport":
        ress =
          (MG * 2 +
            MGC * 1 +
            (SB * 2 + SBC * 1) +
            (SPsport * 2 + SPsportC * 1) +
            (EP * 2 + EPC * 1) +
            (SP * 2 + SPC * 1) +
            (PH * 2 + PHC * 1) +
            (F * 2 + FC * 1) +
            (Ang * 2 + AngC * 1)) /
          3;

        break;
    }

    setRes(ress);
    setpromp(true);
    const form = e.target;
    form.reset();
  };

  return (
    <>
      <p className=" backdrop-blur-sm bg-white/70 p-2 my-2 text-2xl w-full text-center">
        Session Principale
      </p>
      <form
        className=" rounded-lg  2xl:grid 2xl:grid-cols-3 flex flex-col w-full  bg-white select-none font-ft  gap-5 sm:p-5 p-2 sm:w-[55%]"
        onSubmit={handleSumbit}
      >
        <legend className=" text-xl  col-span-3">
          Entrez vos moyennes:{" "}
          <span className="text-sm ">
            les valeurs avec le virgule s'écrit sous la forme 00.00 pas 00,00
          </span>
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

        {(bacName === "Lettres" || bacName === "Sport") && (
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

        {(bacName === "Lettres" || bacName === "Eco") && (
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
          bacName === "Science" ||
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
        {bacName === "Lettres" && (
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
      </form>
      {/*session controle*/}

      <p className=" backdrop-blur-sm bg-white/70 p-2 my-2 text-2xl w-full text-center">
        Session Controle
      </p>
      <form
        className="rounded-lg  2xl:grid 2xl:grid-cols-3 flex flex-col w-full  bg-white select-none font-ft  gap-5 sm:p-5 p-2 sm:w-[55%]"
        onSubmit={handleSumbit}
      >
        <legend className=" text-xl  col-span-3">
          Entrez vos moyennes:{" "}
          <span className="text-sm ">
            Mettez 0 Dans la Matiere que vous ne refaites pas
          </span>
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
            setMGC(e.target.value);
          }}
        >
          <Inputs text="Moyenne de Bac S.Controle" />
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
            setFC(e.target.value);
          }}
        >
          <Inputs text="Francais Controle" />
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
            setAngC(e.target.value);
          }}
        >
          <Inputs text="Englais Contole" />
        </motion.div>

        {/*autsetres*/}

        {(bacName === "Lettres" || bacName === "Sport") && (
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
              setPHC(e.target.value);
            }}
          >
            <Inputs text="Philo Controle" />
          </motion.div>
        )}

        {(bacName === "Lettres" || bacName === "Eco") && (
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
              setHGC(e.target.value);
            }}
          >
            <Inputs text="Histoire Geo.C" />
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
              setMC(e.target.value);
            }}
          >
            <Inputs text="Math Controle" />
          </motion.div>
        )}
        {(bacName === "Maths" ||
          bacName === "Science" ||
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
              setSPC(e.target.value);
            }}
          >
            <Inputs text="Physique Controle" />
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
              setSVTC(e.target.value);
            }}
          >
            <Inputs text="Science de VT Controle" />
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
                setGeC(e.target.value);
              }}
            >
              <Inputs text="Gestion Controle" />
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
                setEcC(e.target.value);
              }}
            >
              <Inputs text="Eco Controle" />
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
              setTEC(e.target.value);
            }}
          >
            <Inputs text="Technique Controle" />
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
                setAlgoC(e.target.value);
              }}
            >
              <Inputs text="Algo Controle" />
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
                setSTIC(e.target.value);
              }}
            >
              <Inputs text="STI Controle" />
            </motion.div>
          </>
        )}
        {bacName === "Lettres" && (
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
              setAC(e.target.value);
            }}
          >
            <Inputs text="Arabe Controle" />
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
                setSBC(e.target.value);
              }}
            >
              <Inputs text="Science Biologie.C" />
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
                setSPsportC(e.target.value);
              }}
            >
              <Inputs text="Sp-Sport Controle" />
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
                setEPC(e.target.value);
              }}
            >
              <Inputs text="EP Controle" />
            </motion.div>
          </>
        )}
        <input
          type="submit"
          value="Calculer"
          className=" bg-gradient-to-tr from-green-400 to-gray-200 shadow-lg rounded-lg p-2 text-xl font-bold cursor-pointer hover:text-white transition-all duration-75 hover:scale-105"
        />
      </form>

      {/*promp*/}
      {promp && (
        <motion.div
          className=" fixed z-50 rounded-lg shadow-lg border border-gray-300   bg-white sm:w-[500px] w-full sm:h-[400px] p-2 flex flex-col  items-center gap-10 font-ft select-none"
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
