const calcular = document.getElementById("calc");

calcular.addEventListener("click", (e) => {
  e.preventDefault();

  if (calcular.innerHTML === "Calcular") {
    const nome = document.getElementById("nome");
    const idade = document.getElementById("idade");
    const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");
    const fieldset = document.getElementById("fieldset");

    //checando se algum campo está vazio:
    if (!nome.value || !idade.value || !peso.value || !altura.value) {
      const aviso = document.getElementById("aviso");
      fieldset.disabled = true;
      aviso.innerHTML = "Por favor, não deixe nenhum campo em branco";
      aviso.style.color = "red";

      setTimeout(() => {
        aviso.innerHTML = "Digite seus dados:";
        aviso.style.color = "#01303f";
        fieldset.disabled = false;
      }, 2000);
    } else {
      const aviso = document.getElementById("aviso");
      aviso.innerHTML = `Olá ${nome.value} (${idade.value}), esse é o seu resultado:`;

      calcular.innerHTML = "Voltar";
      const table = document.getElementById("resultado");
      visibilidade(table, "visible")
      visibilidade(fieldset, "invisible");
      const resultadoIMC = IMC(
        parseFloat(peso.value),
        parseFloat(altura.value / 100)
      );
      resultadoIMC.toFixed(2);
      if (resultadoIMC < 18.5) {
        const magreza = document.getElementById("magreza");
        magreza.style.backgroundColor = "red";
        magreza.style.color = "#fff";
      } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
        const normal = document.getElementById("normal");
        normal.style.backgroundColor = "red";
        normal.style.color = "#fff";
      } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
        const sobrepeso = document.getElementById("sobrepeso");
        sobrepeso.style.backgroundColor = "red";
        sobrepeso.style.color = "#fff";
      } else if (resultadoIMC >= 30 && resultadoIMC <= 39.9) {
        const obesidade = document.getElementById("obesidade");
        obesidade.style.backgroundColor = "red";
        obesidade.style.color = "#fff";
      } else {
        const obesidade = document.getElementById("obesidade-grave");
        obesidade.style.backgroundColor = "red";
        obesidade.style.color = "#fff";
      }
    }
  } else if (calcular.innerHTML === "Voltar") {
    calcular.innerHTML = "Calcular";
    resetTable();
  }
});

function IMC(peso, altura) {
  const resultadoIMC = peso / (altura * altura);
  return resultadoIMC;
}

function resetTable() {
  const row = document.getElementsByClassName("row");
  for (let i = 0; i < row.length; i++) {
    row[i].style.backgroundColor = "var(--form)";
    row[i].style.color = "var(--principal)";
  }

  const input = document.getElementsByClassName("input");
  for (let i = 0; i < input.length; i++) {
    input[i].style.backgroundColor = "#fff";
  }

  const table = document.getElementById("resultado");
  visibilidade(table, "invisible");

  const fieldset = document.getElementById("fieldset");
  visibilidade(fieldset, "visible");
  const aviso = document.getElementById("aviso");
  aviso.innerHTML = "Digite seus dados:";
}

//função pra controlar visibilidade de elementos.
function visibilidade(element, visibilidade) {
  if (visibilidade === "visible") {
    element.classList.add("visible");
    element.classList.remove("invisible");
  } else if (visibilidade === "invisible") {
    element.classList.remove("visible");
    element.classList.add("invisible");
  }
}
