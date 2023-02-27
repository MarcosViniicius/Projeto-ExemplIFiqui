const elementos = {
  h: {
    Nome: "Hidrogênio",
    Numero_atomico: 1,
    Config_eletronica: "1s1",
    Familia: "Não-metal",
    Nox: 1,
  },

  He: {
    Nome: "Hélio",
    Numero_atomico: 2,
    Config_eletronica: "1s2",
    Familia: "Gás Nobre",
    Nox: "0 pois é um Gás Nobre",
  },

  Li: {
    Nome: "Lítio",
    Numero_atomico: 3,
    Config_eletronica: "1s2 2s1",
    Familia: "Metal Alcalino",
    Nox: 1,
  },

  Be: {
    Nome: "Berílio",
    Numero_atomico: 4,
    Config_eletronica: "1s2 2s2",
    Familia: "Metal Alcalinoterroso",
    Nox: 2,
  },

  b: {
    Nome: "Boro",
    Numero_atomico: 5,
    Config_eletronica: "1s2 2s2 2p1",
    Familia: "Semi-Metal",
    Nox: 3,
  },

  c: {
    Nome: "Carbono",
    Numero_atomico: 6,
    Config_eletronica: "1s2 2s2 2p2",
    Familia: "Não-Metal",
    Nox: 4,
  },

  n: {
    Nome: "Nitrogênio",
    Numero_atomico: 7,
    Config_eletronica: "1s2 2s2 2p3",
    Familia: "Não-Metal",
    Nox: -3,
  },

  o: {
    Nome: "Oxigênio",
    Numero_atomico: 8,
    Config_eletronica: "1s2 2s2 2p4",
    Familia: "Não-Metal",
    Nox: -2,
  },

  f: {
    Nome: "Flúor",
    Numero_atomico: 9,
    Config_eletronica: "1s2 2s2 2p5",
    Familia: "Halogênio",
    Nox: -1,
  },

  Ne: {
    Nome: "Neônio",
    Numero_atomico: 10,
    Config_eletronica: "1s2 2s2 2p6",
    Familia: "Gás Nobre",
    Nox: "0, pois é um Gás Nobre",
  },

  Na: {
    Nome: "Sódio",
    Numero_atomico: 11,
    Config_eletronica: "1s2 2s2 2p6 3s1",
    Familia: "Metal Alcalino",
    Nox: 1,
  },
  Mg: {
    Nome: "Magnésio",
    Numero_atomico: 12,
    Config_eletronica: "1s2 2s2 2p6 3s2",
    Familia: "Alcalino terroso",
    Nox: 2,
  },

  Al: {
    Nome: "Alumínio",
    Numero_atomico: 13,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p1",
    Familia: "Metal de transição",
    Nox: 3,
  },

  Si: {
    Nome: "Silício",
    Numero_atomico: 14,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p2",
    Familia: "Não metal",
    Nox: [4],
  },

  p: {
    Nome: "Fósforo",
    Numero_atomico: 15,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p3",
    Familia: "Não metal",
    Nox: [-3, 3, 5],
  },

  s: {
    Nome: "Enxofre",
    Numero_atomico: 16,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p4",
    Familia: "Não metal",
    Nox: [-2, 4, 6],
  },

  Cl: {
    Nome: "Cloro",
    Numero_atomico: 17,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p5",
    Familia: "Halogênio",
    Nox: [-1, 1, 5, 7],
  },

  Ar: {
    Nome: "Argônio",
    Numero_atomico: 18,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6",
    Familia: "Gás nobre",
    Nox: "0, pois é um Gás Nobre",
  },

  k: {
    Nome: "Potássio",
    Numero_atomico: 19,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s1",
    Familia: "Metal alcalino",
    Nox: 1,
  },

  Ca: {
    Nome: "Cálcio",
    Numero_atomico: 20,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2",
    Familia: "Alcalino terroso",
    Nox: 2,
  },
  Sc: {
    Nome: "Escandium",
    Numero_atomico: 21,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d1",
    Familia: "Alcalino terroso",
    Nox: [3],
  },

  Ti: {
    Nome: "Titânio",
    Numero_atomico: 22,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d2",
    Familia: "Transition Metal de transição",
    Nox: [4],
  },

  v: {
    Nome: "Vanádio",
    Numero_atomico: 23,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d3",
    Familia: "Metal de transição metal",
    Nox: [5],
  },

  Cr: {
    Nome: "Cobalto",
    Numero_atomico: 24,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d5",
    Familia: "Metal de transição metal",
    Nox: [2, 3, 6],
  },

  Mn: {
    Nome: "Manganês",
    Numero_atomico: 25,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d5",
    Familia: "Metal de transição metal",
    Nox: [2, 4, 7],
  },

  Fe: {
    Nome: "Ferro",
    Numero_atomico: 26,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d6",
    Familia: "Metal de transição",
    Nox: [2, 3],
  },

  Co: {
    Nome: "Cobalto",
    Numero_atomico: 27,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d7",
    Familia: "Metal de transição",
    Nox: [2, 3],
  },

  Ni: {
    Nome: "Níquel",
    Numero_atomico: 28,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d8",
    Familia: "Metal de transição",
    Nox: [2],
  },

  Cu: {
    Nome: "Cobre",
    Numero_atomico: 29,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10",
    Familia: "Metal de transição",
    Nox: [2],
  },
  Zn: {
    Nome: "Zinco",
    Numero_atomico: 30,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10",
    Familia: "Metal de transição",
    Nox: [2],
  },

  Ga: {
    Nome: "Gálio",
    Numero_atomico: 31,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p1",
    Familia: "Metal de transição",
    Nox: [1, 3],
  },

  Ge: {
    Nome: "Germânio",
    Numero_atomico: 32,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p2",
    Familia: "Metal de transição",
    Nox: [-4, 2, 4],
  },

  As: {
    Nome: "Arsênio",
    Numero_atomico: 33,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3",
    Familia: "Metal de transição",
    Nox: [-3, 3, 5],
  },

  Se: {
    Nome: "Selênio",
    Numero_atomico: 34,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p4",
    Familia: "Não-metal",
    Nox: [-2, 4, 6],
  },

  Br: {
    Nome: "Bromo",
    Numero_atomico: 35,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5",
    Familia: "Halogênio",
    Nox: [-1, 1, 5, 7],
  },

  Kr: {
    Nome: "Criptônio",
    Numero_atomico: 36,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6",
    Familia: "Gás Nobre",
    Nox: "0, pois é um Gás Nobre",
  },

  Rb: {
    Nome: "Rubídio",
    Numero_atomico: 37,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1",
    Familia: "Metal alcalino",
    Nox: [1],
  },
  Sr: {
    Nome: "Estrôncio",
    Numero_atomico: 38,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10",
    Familia: "Metal Alcalino Terroso",
    Nox: 2,
  },

  y: {
    Nome: "Itrio",
    Numero_atomico: 39,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6",
    Familia: "Metal de Transição",
    Nox: 3,
  },

  Zr: {
    Nome: "Zircônio",
    Numero_atomico: 40,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2",
    Familia: "Metal de Transição",
    Nox: 4,
  },

  Nb: {
    Nome: "Nióbio",
    Numero_atomico: 41,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d4",
    Familia: "Metal de Transição",
    Nox: 5,
  },

  Mo: {
    Nome: "Molibdênio",
    Numero_atomico: 42,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5",
    Familia: " Metal de Transição",
    Nox: 6,
  },

  Tc: {
    Nome: "Tecnécio",
    Numero_atomico: 43,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5 5p2",
    Familia: "Metal de Transição",
    Nox: 7,
  },

  Ru: {
    Nome: "Rutênio",
    Numero_atomico: 44,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d7",
    Familia: " Metal de Transição",
    Nox: 8,
  },

  Rh: {
    Nome: "Ródio",
    Numero_atomico: 45,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d8",
    Familia: "Metal de Transição",
    Nox: 9,
  },
  Pd: {
    Nome: "Paládio",
    Numero_atomico: 46,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6",
    Familia: "Metal de transição",
    Nox: [2, 4],
  },

  Ag: {
    Nome: "Prata",
    Numero_atomico: 47,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1",
    Familia: "Metal de transição",
    Nox: [1, 2],
  },

  Cd: {
    Nome: "Cádmio",
    Numero_atomico: 48,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2",
    Familia: "Metal de transição",
    Nox: [2],
  },

  In: {
    Nome: "Estanho",
    Numero_atomico: 49,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10",
    Familia: "Metal de transição",
    Nox: [3],
  },

  Sn: {
    Nome: "Chumbo",
    Numero_atomico: 50,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2",
    Familia: "Metal de transição",
    Nox: [-4, 2, 4],
  },

  Sb: {
    Nome: "Antimônio",
    Numero_atomico: 51,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3",
    Familia: "Semi-Metal",
    Nox: [-3, 3, 5],
  },

  Te: {
    Nome: "Telúrio",
    Numero_atomico: 52,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p4",
    Familia: "Semi-Metal",
    Nox: [-2, 2, 4, 6],
  },

  i: {
    Nome: "Iodo",
    Numero_atomico: 53,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p5",
    Familia: "Halogênio",
    Nox: [-1, 1, 5, 7],
  },
  Xe: {
    Nome: "Xenônio",
    Numero_atomico: 54,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6",
    Familia: "Gás Nobre",
    Nox: "0, pois é um Gás Nobre",
  },

  Cs: {
    Nome: "Césio",
    Numero_atomico: 55,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1",
    Familia: "Metal Alcalino",
    Nox: [1],
  },

  Ba: {
    Nome: "Bário",
    Numero_atomico: 56,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2",
    Familia: "Metal Alcalino Terroso",
    Nox: [2],
  },

  La: {
    Nome: "Lantânio",
    Numero_atomico: 57,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f1",
    Familia: "Lantanóides",
    Nox: [3],
  },

  Ce: {
    Nome: "Cério",
    Numero_atomico: 58,
    Config_eletronica:
      "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f1 5d1",
    Familia: "Lantanóides",
    Nox: [3, 4],
  },

  Pr: {
    Nome: "Praseodímio",
    Numero_atomico: 59,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3",
    Familia: "Lantanóides",
    Nox: [3],
  },

  Nd: {
    Nome: "Neodímio",
    Numero_atomico: 60,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f4",
    Familia: "Lantanóides",
    Nox: [3],
  },
  Pm: {
    Nome: "Prometium",
    Numero_atomico: 61,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f5",
    Familia: "Lanthanóides",
    Nox: [3],
  },

  Sm: {
    Nome: "Samario",
    Numero_atomico: 62,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f6",
    Familia: "Lanthanóides",
    Nox: [2, 3],
  },

  Eu: {
    Nome: "Europium",
    Numero_atomico: 63,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7",
    Familia: "Lanthanóides",
    Nox: [2, 3],
  },

  Gd: {
    Nome: "Gadolínio",
    Numero_atomico: 64,
    Config_eletronica:
      "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f7 5d1",
    Familia: "Lanthanóides",
    Nox: [1, 2, 3],
  },

  Tb: {
    Nome: "Térbio",
    Numero_atomico: 65,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f9",
    Familia: "Lanthanóides",
    Nox: [3],
  },

  Dy: {
    Nome: "Disprósio",
    Numero_atomico: 66,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f10",
    Familia: "Lanthanóides",
    Nox: [2, 3],
  },

  Ho: {
    Nome: "Hólmio",
    Numero_atomico: 67,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f11",
    Familia: "Lanthanóides",
    Nox: [3],
  },
  Erbium: {
    Nome: "Erbium",
    Numero_atomico: 68,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f12",
    Familia: "Lantanóide",
    Nox: [3],
  },

  Tm: {
    Nome: "Túrbio",
    Numero_atomico: 69,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f13",
    Familia: "Lantanóide",
    Nox: [3],
  },

  Yb: {
    Nome: "Itérbio",
    Numero_atomico: 70,
    Config_eletronica: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14",
    Familia: "Lantanóide",
    Nox: [3],
  },

  Lu: {
    Nome: "Lutécio",
    Numero_atomico: 71,
    Config_eletronica:
      "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1",
    Familia: "Lantanóide",
    Nox: [3],
  },

  Hf: {
    Nome: "Háfnio",
    Numero_atomico: 72,
    Config_eletronica:
      "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d2",
    Familia: "Metal de transição",
    Nox: [4],
  },

  Ta: {
    Nome: "Tântalo",
    Numero_atomico: 73,
    Config_eletronica:
      "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d3",
    Familia: "Metal de transição",
    Nox: [5],
  },

  w: {
    Nome: "Tungstênio",
    Numero_atomico: 74,
    Config_eletronica:
      "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d4",
    Familia: "Metal de transição",
    Nox: [6],
  },
  Re: {
    Nome: "Renio",
    Numero_atomico: "75",
    Config_eletronica: "[Xe] 4f14 5d5 6s2",
    Familia: "Metal de transição",
    Nox: "5",
  },

  Os: {
    Nome: "Osmio",
    Numero_atomico: "76",
    Config_eletronica: "[Xe] 4f14 5d6 6s2",
    Familia: "Metal de transição",
    Nox: "8",
  },

  Ir: {
    Nome: "Irídio",
    Numero_atomico: "77",
    Config_eletronica: "[Xe] 4f14 5d7 6s2",
    Familia: "Metal de transição",
    Nox: "9",
  },

  Pt: {
    Nome: "Platina",
    Numero_atomico: "78",
    Config_eletronica: "[Xe] 4f14 5d9 6s1",
    Familia: "Metal de transição",
    Nox: "10",
  },

  Au: {
    Nome: "Ouro",
    Numero_atomico: "79",
    Config_eletronica: "[Xe] 4f14 5d10 6s1",
    Familia: "Metal de transição",
    Nox: "11",
  },

  Hg: {
    Nome: "Mercúrio",
    Numero_atomico: "80",
    Config_eletronica: "[Xe] 4f14 5d10 6s2",
    Familia: "Metal de transição",
    Nox: "2",
  },

  Tl: {
    Nome: "Tálio",
    Numero_atomico: "81",
    Config_eletronica: "[Xe] 4f14 5d10 6s2 6p1",
    Familia: "Metal de transição",
    Nox: "3",
  },

  Pb: {
    Nome: "Chumbo",
    Numero_atomico: "82",
    Config_eletronica: "[Xe] 4f14 5d10 6s2 6p2",
    Familia: "Metal de transição",
    Nox: "4",
  },

  Bi: {
    Nome: "Bismuto",
    Numero_atomico: "83",
    Config_eletronica: "[Xe] 4f14 5d10 6s2 6p3",
    Familia: "Metal de transição",
    Nox: "5",
  },

  Po: {
    Nome: "Polônio",
    Numero_atomico: "84",
    Config_eletronica: "[Xe] 4f14 5d10 6s2 6p4",
    Familia: "Metal de transição",
    Nox: "6",
  },
  At: {
    Nome: "Astato",
    Numero_atomico: 85,
    Config_eletronica: "[Rn] 5f14 6d10 7s2 7p5",
    Familia: "Metais de transição",
    Nox: "-1",
  },

  Rn: {
    Nome: "Radônio",
    Numero_atomico: 86,
    Config_eletronica: "[Rn] 6d10 7s2 7p6",
    Familia: "Gases nobres",
    Nox: "0, pois é um Gás Nobre",
  },

  Fr: {
    Nome: "Francium",
    Numero_atomico: 87,
    Config_eletronica: "[Rn] 7s1",
    Familia: "Metais alcalinos",
    Nox: 1,
  },

  Ra: {
    Nome: "Rádio",
    Numero_atomico: 88,
    Config_eletronica: "[Rn] 7s2",
    Familia: "Metais alcalinoterrosos",
    Nox: 2,
  },

  Ac: {
    Nome: "Actinio",
    Numero_atomico: 89,
    Config_eletronica: "[Rn] 6d1 7s2",
    Familia: "Metais de transição",
    Nox: 3,
  },

  Th: {
    Nome: "Tório",
    Numero_atomico: 90,
    Config_eletronica: "[Rn] 6d2 7s2",
    Familia: "Metais de transição",
    Nox: 4,
  },

  Pa: {
    Nome: "Protactínio",
    Numero_atomico: 91,
    Config_eletronica: "[Rn] 5f2 6d1 7s2",
    Familia: "Metais de transição",
    Nox: 5,
  },

  u: {
    Nome: "Úranio",
    Numero_atomico: 92,
    Config_eletronica: "[Rn] 5f3 6d1 7s2",
    Familia: "Metais de transição",
    Nox: 6,
  },

  Np: {
    Nome: "Neptúnio",
    Numero_atomico: 93,
    Config_eletronica: "[Rn] 5f4 6d1 7s2",
    Familia: "Metais de transição",
    Nox: 7,
  },

  Pu: {
    Nome: "Plutônio",
    Numero_atomico: 94,
    Config_eletronica: "[Rn] 5f6 7s2",
    Familia: "Metais de transição",
    Nox: 8,
  },
  Am: {
    Nome: "Americium",
    Numero_atomico: 95,
    Config_eletronica: "[Rn] 5f7 7s2",
    Familia: "Metal de transição",
    Nox: "+3",
  },
  Bk: {
    Nome: "Berkelium",
    Numero_atomico: 97,
    Config_eletronica: "[Rn] 5f9 7s2",
    Familia: "Metal de transição",
    Nox: "+4",
  },

  Cf: {
    Nome: "Californium",
    Numero_atomico: 98,
    Config_eletronica: "[Rn] 5f10 7s2",
    Familia: "Metal de transição",
    Nox: "+3,+4",
  },

  Es: {
    Nome: "Einsteinium",
    Numero_atomico: 99,
    Config_eletronica: "[Rn] 5f11 7s2",
    Familia: "Metal de transição",
    Nox: "+3",
  },

  Fm: {
    Nome: "Fermium",
    Numero_atomico: 100,
    Config_eletronica: "[Rn] 5f12 7s2",
    Familia: "Metal de transição",
    Nox: "+3",
  },

  Md: {
    Nome: "Mendelevium",
    Numero_atomico: 101,
    Config_eletronica: "[Rn] 5f13 7s2",
    Familia: "Metal de transição",
    Nox: "+3",
  },

  No: {
    Nome: "Nobelium",
    Numero_atomico: 102,
    Config_eletronica: "[Rn] 5f14 7s2",
    Familia: "Metal de transição",
    Nox: "+2",
  },

  Lr: {
    Nome: "Lawrencium",
    Numero_atomico: 103,
    Config_eletronica: "[Rn] 5f14 7s2 7p1",
    Familia: "Metal de transição",
    Nox: "+3",
  },

  Rf: {
    Nome: "Rutherfordium",
    Numero_atomico: 104,
    Config_eletronica: "[Rn] 5f14 6d2 7s2",
    Familia: "Metal de transição",
    Nox: "+4",
  },

  Db: {
    Nome: "Dubnium",
    Numero_atomico: 105,
    Config_eletronica: "[Rn] 5f14 6d3 7s2",
    Familia: "Metal de transição",
    Nox: "+5",
  },

  Sg: {
    Nome: "Seaborgium",
    Numero_atomico: 106,
    Config_eletronica: "[Rn] 5f14 6d4 7s2",
    Familia: "Metal de transição",
    Nox: "+6",
  },

  Bh: {
    Nome: "Bohrium",
    Numero_atomico: 107,
    Config_eletronica: "[Rn] 5f14 6d5 7s2",
    Familia: "Metal de transição",
    Nox: "+7",
  },

  Hs: {
    Nome: "Hassium",
    Numero_atomico: 108,
    Config_eletronica: "[Rn] 5f14 6d6 7s2",
    Familia: "Metal de transição",
    Nox: "+8",
  },

  Mt: {
    Nome: "Meitnerium",
    Numero_atomico: 109,
    Config_eletronica: "[Rn] 5f14 6d7 7s2",
    Familia: "Metal de transição",
    Nox: "",
  },

  Ds: {
    Nome: "Darmstadtium",
    Numero_atomico: 110,
    Config_eletronica: "[Rn] 5f14 6d8 7s2",
    Familia: "Metal de transição",
    Nox: "...",
  },

  Rg: {
    Nome: "Roentgenium",
    Numero_atomico: 111,
    Config_eletronica: "[Rn] 5f14 6d9 7s2",
    Familia: "Metal de transição",
    Nox: "...",
  },

  Cn: {
    Nome: "Copernicium",
    Numero_atomico: 112,
    Config_eletronica: "[Rn] 5f14 6d10 7s2",
    Familia: "Metal de transição",
    Nox: "None",
  },

  Nh: {
    Nome: "Nihonium",
    Numero_atomico: 113,
    Config_eletronica: "[Rn] 5f14 6d10 7s2 7p1",
    Familia: " Metal de transição",
    Nox: "+3",
  },

  Fl: {
    Nome: "Flerovium",
    Numero_atomico: 114,
    Config_eletronica: "[Rn] 5f14 6d10 7s2 7p2",
    Familia: " Metal de transição",
    Nox: "None",
  },

  Mc: {
    Nome: "Moscovium",
    Numero_atomico: 115,
    Config_eletronica: "[Rn] 5f14 6d10 7s2 7p3",
    Familia: "Metal de transição",
    Nox: "None",
  },

  Lv: {
    Nome: "Livermorium",
    Numero_atomico: 116,
    Config_eletronica: "[Rn] 5f14 6d10 7s2 7p4",
    Familia: "Metal de transição",
    Nox: "None",
  },

  Ts: {
    Nome: "Tenessine",
    Numero_atomico: 117,
    Config_eletronica: "[Rn] 5f14 6d10 7s2",
    Familia: "Metal de transição",
    Nox: "+7",
  },

  Og: {
    Nome: "Oganesson",
    Numero_atomico: "118",
    Config_eletronica: "[Rn] 5f14 6d10 7s2",
    Familia: "Gases nobres",
    Nox: "...",
  },
};

const divexibicao = document.getElementById("divexibir");

const buttons = document.querySelectorAll(".grid-item");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", (event) => {
    const nomeElemento = event.target.dataset.nome;
    const elemento = elementos[nomeElemento];
    if (elemento) {
      divexibicao.innerHTML =
        "Nome: " +
        elemento.Nome +
        "<br>" +
        "Número Atômico: " +
        elemento.Numero_atomico +
        "<br>" +
        "Configuração Eletrônica: " +
        elemento.Config_eletronica +
        "<br>" +
        "Família: " +
        elemento.Familia +
        "<br>" +
        "Nox: " +
        elemento.Nox;
    }
  });
});
