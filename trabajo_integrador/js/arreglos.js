// Render foreach

let numeros_1 = [2, 4, 6];
let listaAlCuadrado = [];

function llenarLista() {
  numeros_1.forEach((numero) => {
    return listaAlCuadrado.push(Math.pow(numero, 2));
  });
}

llenarLista();

let renderOutputForeach = () => {
  document.getElementById("tdForeach").innerHTML = `[${listaAlCuadrado}]`;
};

document
  .getElementById("btnForeach")
  .addEventListener("click", renderOutputForeach);

// Render map

let numeros_2 = [4, 9, 16, 25];

let getOutputMap = () => {
  return numeros_2.map(Math.sqrt);
};

let renderOutputMap = () => {
  document.getElementById("tdMap").innerHTML = `[${getOutputMap()}]`;
};

document.getElementById("btnMap").addEventListener("click", renderOutputMap);

// Render concat

let marvel = ["Black Widow", "Iron Man", "Captain America"];
let dc = ["Wonder Woman", "Batman", "Harley Quinn"];

let getOutputConcat = () => {
  return marvel.concat(dc);
};

let renderOutputConcat = () => {
  document.getElementById("tdConcat").innerHTML = `[${getOutputConcat()}]`;
};

document
  .getElementById("btnConcat")
  .addEventListener("click", renderOutputConcat);

// Render Spread Operator

let getOutputSO1 = () => {
  return [...marvel, ...dc];
};

let renderOutputSO1 = () => {
  document.getElementById("tdSO#1").innerHTML = `[${getOutputSO1()}]`;
};

document.getElementById("btnSO#1").addEventListener("click", renderOutputSO1);

// ----------

let dc_duplicado = [...dc];

let renderOutputSO2 = () => {
  document.getElementById("tdSO#2").innerHTML = `[${dc_duplicado}]`;
};

document.getElementById("btnSO#2").addEventListener("click", renderOutputSO2);

// ----------

let dc_reverse = [...dc].reverse();

let renderOutputSO3 = () => {
  document.getElementById("tdSO#3").innerHTML = `[${dc_reverse}]`;
};

document.getElementById("btnSO#3").addEventListener("click", renderOutputSO3);

// ----------

let multiplicacion = (num1, num2, num3) => {
  return num1 * num2 * num3;
};

let numeros_3 = [10, 10, 2];

let renderOutputSO4 = () => {
  document.getElementById("tdSO#4").innerHTML = `${multiplicacion(
    ...numeros_3
  )}`;
};

document.getElementById("btnSO#4").addEventListener("click", renderOutputSO4);

// Render filter

let numeros_4 = [10, 14, 2, 100, 7, 25];

let getOutputFilter = () => {
  return numeros_4.filter((number) => number >= 10);
};

let renderOutputFilter = () => {
  document.getElementById("tdFilter").innerHTML = `[${getOutputFilter()}]`;
};

document
  .getElementById("btnFilter")
  .addEventListener("click", renderOutputFilter);

// Render find

let campeonesUCL = [
  {
    nombre: "Real Madrid",
    anio: 2018,
    pais: "España",
    cantidadDeVecesCampeon: 13,
  },
  {
    nombre: "Liverpool",
    anio: 2019,
    pais: "Inglaterra",
    cantidadDeVecesCampeon: 6,
  },
  {
    nombre: "Bayern Munich",
    anio: 2020,
    pais: "Alemania",
    cantidadDeVecesCampeon: 6,
  },
];

const campeon2019 = campeonesUCL.find((campeon) => {
  return campeon.anio === 2019;
});

let getOutputFind = () => {
  return campeon2019.nombre;
};

let renderOutputFind = () => {
  document.getElementById("tdFind").innerHTML = `${getOutputFind()}`;
};

document.getElementById("btnFind").addEventListener("click", renderOutputFind);

// Render reduce

let cantidadDeVecesCampeones = campeonesUCL.reduce((cantidadTotal, campeon) => {
  return cantidadTotal + campeon.cantidadDeVecesCampeon;
}, 0);

let getOutputReduce = () => {
  return cantidadDeVecesCampeones;
};

let renderOutputReduce = () => {
  document.getElementById("tdReduce").innerHTML = `${getOutputReduce()}`;
};

document
  .getElementById("btnReduce")
  .addEventListener("click", renderOutputReduce);
