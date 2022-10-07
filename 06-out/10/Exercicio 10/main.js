// Exercicio 10

let velocidade = prompt("Digite a velocidade que o veículo estava:")
let multa = 100;

if (velocidade <=80) {
    alert("Velocidade dentro da media permitida")
}

//Exemplos de mudanca de valor de multa a cada 10% a mais de velocidade
else if (velocidade > 80 && velocidade< 80 + (80*0.1) ) {
    alert(`Sua multa é de ${multa} reais`)
}

else if (velocidade >= 80 + (80*0.1) && velocidade< 80 + (80*0.2) ) {
    alert(`Sua multa é de ${multa + (multa*0.1)} reais`)
}

else if (velocidade >= 80 + (80*0.2)) {
    alert(`Sua multa é de ${multa + (multa*0.2)} reais`)
}
