//principale
export const Clettre = (MG, A, PH, HG, F, Ang) => {
  return 4 * MG + 1.5 * A + 1.5 * PH + 1 * HG + 1 * F + 1 * Ang;
};

export const Cmaths = (MG, M, SP, SVT, F, Ang) => {
  return 4 * MG + 2 * M + 1.5 * SP + 0.5 * SVT + 1 * F + 1 * Ang;
};

export const Cscience = (MG, M, SP, SVT, F, Ang) => {
  return 4 * MG + 1 * M + 1.5 * SP + 1.5 * SVT + 1 * F + 1 * Ang;
};

export const Ceco = (MG, Ec, Ge, M, HG, F, Ang) => {
  return 4 * MG + 1.5 * Ec + 1.5 * Ge + 0.5 * M + 0.5 * HG + 1 * F + 1 * Ang;
};

export const Ctechnique = (MG, TE, M, SP, F, Ang) => {
  return 4 * MG + 1.5 * TE + 1.5 * M + 1 * SP + 1 * F + 1 * Ang;
};

export const Cinfo = (MG, M, Algo, SP, STI, F, Ang) => {
  return 4 * MG + 1.5 * M + 1.5 * Algo + 0.5 * SP + 0.5 * STI + 1 * F + 1 * Ang;
};

export const Csport = (MG, SB, SPsport, EP, SP, PH, F, Ang) => {
  return (
    4 * MG +
    1.5 * SB +
    1 * SPsport +
    0.5 * EP +
    0.5 * SP +
    0.5 * PH +
    1 * F +
    1 * Ang
  );
};
//controle
