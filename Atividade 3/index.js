const numero = parseInt(prompt("Digite um número para ver a tabuada de 1 a 10:"));

if (!isNaN(numero)) {
  let resultado = "";

  for (let i = 1; i <= 10; i++) {
    resultado += numero + " x " + i + " = " + (numero * i) + " | ";
  }

  alert("Tabuada de " + numero + ": " + resultado);
} else {
  alert("Você digitou um valor inválido.");
}