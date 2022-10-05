//Exercicio 1
console.log("Gab");
console.log("Gab");
console.log(`Gab`);
console.log(`Gab` + 1);
console.log("Gab" + " Zanini (ex1)");

//Exercicio 2
let num1 = 10;
let num2 = 20;
console.log(20);
console.log(1.5);
console.log(20 - 10);
console.log(`${num1 - num2} (ex2)`); //conta sem alterar valor das variaveis originais, nesse caso poderiam ate ser constantes

//Exercicio 3
let fome = 0;

if (fome >= 100) console.log("Parabéns, você está alimentado (ex3)");
else if (fome < 10) console.log("Você está com muita fome (ex3)");
else if (fome === 0) console.log("Se não comer você irá morrer (ex3)");

//Exercicio 4

let hasEaten = false;
let eat = 0;
let hungry = 100;

if (eat === 100 && hungry === 100) console.log("Você deve estar com verme (ex4)");
else {
  while (!hasEaten) {
    eat++;
    hungry--;
    if (eat >= 100 || hungry === 0) {
      hasEaten = true;
      console.log("Você está cheio (ex4)");
    }
  }
}

//Exercicio 5
console.log("gab" * 3);

