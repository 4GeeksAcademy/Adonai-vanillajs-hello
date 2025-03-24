import "bootstrap";
import "./style.css";

const divPrincipal = document.querySelector("#div-principal");

let carta = document.createElement("div");
carta.classList.add("carta");

let simboloArriba = document.createElement("div");
simboloArriba.classList.add("simboloArriba");

let numero = document.createElement("div");
numero.classList.add("numero");

let simboloAbajo = document.createElement("div");
simboloAbajo.classList.add("simboloAbajo");

carta.append(simboloArriba, numero, simboloAbajo);
divPrincipal.appendChild(carta);

window.onload = function() {
  const simbolos = ["♦", "♥", "♠", "♣"];
  const valorDeLaCarta = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  let indexDeValorDeSimbolo = Math.floor(Math.random() * simbolos.length);
  let indexDeValorDeCarta = Math.floor(Math.random() * valorDeLaCarta.length);

  let simboloSeleccionado = simbolos[indexDeValorDeSimbolo];

  simboloAbajo.innerText = simboloSeleccionado;
  simboloArriba.innerText = simboloSeleccionado;
  numero.innerText = valorDeLaCarta[indexDeValorDeCarta];

  // Si el símbolo es un corazón o diamante, cambiar color a rojo
  if (simboloSeleccionado === "♦" || simboloSeleccionado === "♥") {
    simboloArriba.style.color = "red";
    simboloAbajo.style.color = "red";
    numero.style.color = "red";
  } else {
    simboloArriba.style.color = "black";
    simboloAbajo.style.color = "black";
    numero.style.color = "black";
  }
};
