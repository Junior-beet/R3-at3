const num = parseInt(prompt("Digite um número"));

if (isNaN(num) || num<=1) {
    alert("Erro, voce não escreveu um número invalido");
} else {
    let sequencia = ""
    for (let i = 1; i <= num; i++) {
    sequencia = sequencia + " " + i ;
        
    }
    alert(sequencia);

}
