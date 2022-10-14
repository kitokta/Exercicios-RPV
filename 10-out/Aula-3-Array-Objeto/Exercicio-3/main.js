//Exercicio 3
const onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2
}

for (prop in onibus) {
    console.log(`${prop}: ${onibus[prop]}`)
}