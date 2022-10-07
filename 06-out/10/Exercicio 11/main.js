// Exercicio 11

const idade = prompt("Digite sua idade:");

//So pergunta da CNH se tiver mais que 18
if (idade >= 18) {
  const cnh = prompt("Você tem CNH?");
  if (idade >= 18 && cnh.toLowerCase() === "nao") {
    alert("Você está preso");
  } else if (idade >= 18 && cnh.toLowerCase() === "sim") {
    alert("Você receberá uma multa");
  }
} else {
  alert("Seus pais serão responsabilizados");
}
