//Exercicio 6

const periodo = prompt("Em que período você estuda?\n(M) Matutino\n(V) Vespertino\n(N) Noturno");

switch(periodo.toUpperCase()) {
    case 'M': 
        alert("Bom dia!")
        break;
    case 'V': 
        alert("Boa tarde!");
        break;
    case 'N': 
        alert("Boa noite!");
        break;
    default:
        alert("Digite uma opção válida");
}