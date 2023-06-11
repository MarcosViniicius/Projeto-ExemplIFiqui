var title = document.querySelector("#title");
var spaceCalc = document.querySelector("#space-calc");

function openCalc1() {
  title.innerHTML = "Calculadora de Molaridade";
  spaceCalc.innerHTML =
    '<p>Deixe o campo que você deseja descobrir o valor em branco para receber um resultado.</p><br><form><label for="massaSoluto">Massa do Soluto (g):</label><input type="number" id="massaSoluto" /><br /><br /><label for="massaMolar">Massa Molar (g/mol):</label><input type="number" id="massaMolar" /><br /><br /><label for="volumeLitros">Volume em Litros (L):</label><input type="number" id="volumeLitros" /><br /><br /><label for="molaridade">Molaridade (M):</label><input type="number" id="molaridade" /><br /><br /><button type="button" onclick="calcularMolaridade()">Calcular</button></form> <br><p id="resultado"></p>';

  const modal = document.getElementById("modal-container");
  const fecharBtn = document.getElementById("fechar");

  modal.classList.add("mostrar");

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      return; // Impede que o modal seja fechado ao clicar fora dele
    }
  });

  fecharBtn.addEventListener("click", () => {
    closeModal();
  });

  function closeModal() {
    modal.classList.remove("mostrar");
    localStorage.setItem("fechaModal", "true");
  }
}
function openCalc2() {
  title.innerHTML = "Calculadora de OH- e H+";
  spaceCalc.innerHTML =
    '<form id="calculadoraForm" style="font-size: 12px"><h2>Porcentagem de OH- e H+</h2><label for="solutoOH">Quantidade de OH-:</label><input type="number" id="solutoOH" name="solutoOH" required />  <label for="solutoH">Quantidade de H+:</label><input type="number" id="solutoH" name="solutoH" required /> <button type="submit">Calcular Porcentagem</button><div id="resultadoPorcentagem" style="font-size: 16px;"></div></form><form id="molsForm" style="font-size: 12px"><h2>Quantidade de Mols</h2><label for="massaOH">Massa de OH- (em gramas):</label><input type="number" id="massaOH" name="massaOH" required />  <label for="massaMolarOH">Massa Molar de OH- (g/mol):</label><input type="number" id="massaMolarOH" name="massaMolarOH" required /><label for="massaH">Massa de H+ (em gramas):</label><input type="number" id="massaH" name="massaH" required />  <label for="massaMolarH">Massa Molar de H+ (g/mol):</label><input type="number" id="massaMolarH" name="massaMolarH" required /><button type="submit">Calcular Mols</button></form><br><div id="resultadoMols"></div>';

  document
    .getElementById("calculadoraForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      var solutoOH = parseInt(document.getElementById("solutoOH").value);
      var solutoH = parseInt(document.getElementById("solutoH").value);

      var resultadoPorcentagem = calcularPorcentagemOH(solutoOH, solutoH);
      var porcentagemOH = resultadoPorcentagem.porcentagemOH;
      var porcentagemH = resultadoPorcentagem.porcentagemH;

      document.getElementById("resultadoPorcentagem").innerHTML =
        "Porcentagem de OH-: " +
        porcentagemOH +
        "%<br>" +
        "Porcentagem de H+: " +
        porcentagemH +
        "%<br>";
    });

  document.getElementById("molsForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var massaOH = parseInt(document.getElementById("massaOH").value);
    var massaMolarOH = parseFloat(
      document.getElementById("massaMolarOH").value
    );
    var massaH = parseInt(document.getElementById("massaH").value);
    var massaMolarH = parseFloat(document.getElementById("massaMolarH").value);

    var molsOH = calcularMolsOH(massaOH, massaMolarOH);
    var molsH = calcularMolsH(massaH, massaMolarH);

    document.getElementById("resultadoMols").innerHTML =
      "Quantidade de mols de OH-: " +
      molsOH.toFixed(2) +
      " mol<br>" +
      "Quantidade de mols de H+: " +
      molsH.toFixed(2) +
      " mol<br>";
  });

  function calcularPorcentagemOH(solutoOH, solutoH) {
    var total = solutoOH + solutoH;
    var porcentagemOH = (solutoOH / total) * 100;
    var porcentagemH = (solutoH / total) * 100;

    return {
      porcentagemOH: porcentagemOH.toFixed(2),
      porcentagemH: porcentagemH.toFixed(2),
    };
  }

  function calcularMolsOH(massaOH, massaMolarOH) {
    return massaOH / massaMolarOH;
  }

  function calcularMolsH(massaH, massaMolarH) {
    return massaH / massaMolarH;
  }

  const modal = document.getElementById("modal-container");
  const fecharBtn = document.getElementById("fechar");

  modal.classList.add("mostrar");

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      return; // Impede que o modal seja fechado ao clicar fora dele
    }
  });

  fecharBtn.addEventListener("click", () => {
    closeModal();
  });

  function closeModal() {
    modal.classList.remove("mostrar");
    localStorage.setItem("fechaModal", "true");
  }
}
function openCalc3() {
  title.innerHTML = "Calculadora em desenvolvimento";
  spaceCalc.innerHTML =
    "Essa aba anda está em desenvolvimento! Volte novamente mais tarde!";
  const modal = document.getElementById("modal-container");
  const fecharBtn = document.getElementById("fechar");

  modal.classList.add("mostrar");

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      return; // Impede que o modal seja fechado ao clicar fora dele
    }
  });

  fecharBtn.addEventListener("click", () => {
    closeModal();
  });

  function closeModal() {
    modal.classList.remove("mostrar");
    localStorage.setItem("fechaModal", "true");
  }
}

const tabelaPeriodica = {
  H: 1.00784,
  He: 4.0026,
  Li: 6.94,
  Be: 9.01218,
  B: 10.81,
  C: 12.011,
  N: 14.007,
  O: 15.999,
  F: 18.998,
  Ne: 20.18,
  Na: 22.99,
  Mg: 24.305,
  Al: 26.982,
  Si: 28.085,
  P: 30.974,
  S: 32.06,
  Cl: 35.45,
  Ar: 39.948,
  K: 39.098,
  Ca: 40.078,
  Sc: 44.956,
  Ti: 47.867,
  V: 50.942,
  Cr: 51.996,
  Mn: 54.938,
  Fe: 55.845,
  Ni: 58.693,
  Co: 58.933,
  Cu: 63.546,
  Zn: 65.38,
  Ga: 69.723,
  Ge: 72.63,
  As: 74.922,
  Se: 78.971,
  Br: 79.904,
  Kr: 83.798,
  Rb: 85.468,
  Sr: 87.62,
  Y: 88.906,
  Zr: 91.224,
  Nb: 92.906,
  Mo: 95.95,
  Tc: 98,
  Ru: 101.07,
  Rh: 102.91,
  Pd: 106.42,
  Ag: 107.87,
  Cd: 112.41,
  In: 114.82,
  Sn: 118.71,
  Sb: 121.76,
  Te: 127.6,
  I: 126.9,
  Xe: 131.29,
  Cs: 132.91,
  Ba: 137.33,
  La: 138.91,
  Ce: 140.12,
  Pr: 140.91,
  Nd: 144.24,
  Pm: 145,
  Sm: 150.36,
  Eu: 152.92,
  Gd: 157.25,
  Tb: 158.93,
  Dy: 162.5,
  Ho: 164.93,
  Er: 167.26,
  Tm: 168.93,
  Yb: 173.05,
  Lu: 174.97,
  Hf: 178.49,
  Ta: 180.95,
  W: 183.84,
  Re: 186.21,
  Os: 190.23,
  Ir: 192.22,
  Pt: 195.08,
  Au: 196.97,
  Hg: 200.59,
  Tl: 204.38,
  Pb: 207.2,
  Bi: 208.98,
  Th: 232.04,
  Pa: 231.04,
  U: 238.03,
  Np: 237,
  Pu: 244,
  Am: 243,
  Cm: 247,
  Bk: 247,
  Cf: 251,
  Es: 252,
  Fm: 257,
  Md: 258,
  No: 259,
  Lr: 266,
  Rf: 267,
  Db: 270,
  Sg: 271,
  Bh: 270,
  Hs: 277,
  Mt: 276,
  Ds: 281,
  Rg: 280,
  Cn: 285,
  Nh: 284,
  Fl: 289,
  Mc: 288,
  Lv: 293,
  Ts: 294,
  Og: 294,
  // Adicione mais elementos e suas massas atômicas aqui
};
