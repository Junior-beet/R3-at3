const numAle1 = parseInt(prompt("Digite o primeiro número:"));
const numAle2 = parseInt(prompt("Digite o segundo número:"));

if (!isNaN(numAle1) && !isNaN(numA)) {
  let inicio;
  let fim;

  if (num1 < num2) {
    inicio = num1;
    fim = num2;
  } else {
    inicio = num2;
    fim = num1;
  }

  let pares = "";

  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
      pares += i + " ";
    }
  }

  alert("Números pares entre " + inicio + " e " + fim + ": " + pares);
} else {
  alert("Você digitou um número inválido.");
}

