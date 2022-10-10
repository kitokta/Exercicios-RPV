//Exercicio 10
function decremento(num) {
    for(let i = num; i >= 0; i--) {
        if (num%2===0) {
            console.log(`${num} é Par`)
        }
        num--
    }
}

decremento(100);