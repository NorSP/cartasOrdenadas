/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let button = document.getElementById("ordenar");
  let button2 = document.getElementById("aceptar");
  const palos = ["♦", "♥", "♠", "♣"];
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let ordenar = [];
  let input = document.getElementById("inputparasabercartas");
  let container = document.getElementById("container");
  //write your code here

  function randomCardGenerator() {
    container.innerHTML = "";

    for (let i = 0; i < input.value; i++) {
      let randomPalos = palos[Math.floor(Math.random() * palos.length)];
      let randomNumeros = numeros[Math.floor(Math.random() * numeros.length)];

      container.innerHTML += `<div class="card-body card">
      <div>
          <h1 id="palo">${randomPalos}</h1></h1>
      </div>
      <div>
          <h1 id="numero">${randomNumeros}</h1>

      </div>
      <div>
          <h1 id="palo2">${randomPalos}</h1>

      </div>
  </div>`;
      ordenar.push({
        palo: randomPalos,
        numero: randomNumeros
      });
    }
    console.log(ordenar);
  }
  button2.addEventListener("click", randomCardGenerator);

  const bubbleSort = arr => {
    let wall = arr.length - 1;
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        //compare the adjacent positions, if the right one is bigger, we have to swap
        if (arr[index].numero > arr[index + 1].numero) {
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
        }
        index++;
      }
      wall--; //decrease the wall for optimization
    }
    return arr;
  };
  button.addEventListener("click", function() {
    let nuevoArrayOrdenado = bubbleSort(ordenar);
    console.log("funciona");
    console.log(nuevoArrayOrdenado);
  });
};
