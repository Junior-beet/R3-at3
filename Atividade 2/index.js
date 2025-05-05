let soma = 0;

for (let i = 1; i <= 10; i++) {
  const numero = parseInt(prompt(`Digite o ${i}º número inteiro:`));

  if (!isNaN(numero)) {
    soma += numero;
  } else {
    alert("Você digitou um valor inválido. Será considerado como 0.");
  }
}

alert("A soma dos 10 números é: " + soma);