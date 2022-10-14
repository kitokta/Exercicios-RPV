//Exercicio 8

const carroJSON = {
    "marca": "honda",
    "id": 1,
    "rodas": 4
}



for (props in carroJSON) {
    console.log(`${props}: ${carroJSON[props]}`)
}