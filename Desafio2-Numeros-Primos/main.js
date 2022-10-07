const numero = prompt("Digite um numero:");
let quantidadeDivisor = 0;
let divisores = [];

for (let i = 2; i <= numero; i++) {
  //so testa se o i nao for o proprio numero
  if (i != numero) {
    //Se o resto for 0 sendo dividido por outro numero, ele tem um divisor
    if (numero % i === 0) {
      quantidadeDivisor++;
      divisores.push(i);
    }
  }
}

//Se não tiver nenhum divisor entre 2 e ele mesmo, é primo
if (quantidadeDivisor === 0) {
  alert("O número é primo");
} else {
  let string = "";
  //Pegando lista de divisores (fazendo assim por causa do alert, teria que ficar repetindo ele)
  for (const divisor of divisores) {
    string += `${divisor}, `;
  }
  string = string.slice(0, -2);
  alert(
    `O número não é primo ele tem ${quantidadeDivisor} divisores, sendo eles:  ${string}`
  );
}
