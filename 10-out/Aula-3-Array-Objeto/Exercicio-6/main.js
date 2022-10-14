//Exercicio 6
const array1 = [1,2,3,4,5];
const array2 = [1,2];

function verificarTamanho(array) {
    if(array.length >= 5) {
        console.log('MUITOS ELEMENTOS');
    } else {
        console.log('POUCOS ELEMENTOS')
    }
}

verificarTamanho(array1);
verificarTamanho(array2);