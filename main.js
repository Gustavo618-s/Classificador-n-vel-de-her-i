let nome = "Guunters";
let nivelDoHeroi = 1786;
let nivel = "";

if (nivelDoHeroi < 1000) {
  nivel = "ferro";
} else if (nivelDoHeroi < 2000) {
  nivel = "bronze";
} else if (nivelDoHeroi < 3000) {
  nivel = "ouro";
} else if (nivelDoHeroi < 4000) {
  nivel = "platina";
} else if (nivelDoHeroi < 5000) {
  nivel = "ascendente";
} else if (nivelDoHeroi < 6000) {
  nivel = "imortal";
} else if (nivelDoHeroi < 7000) {
  nivel = "radiante";
}

console.log("O herói " + nome + " está no nível " + nivel);
