const cadastro = document.getElementById("cadastro-clientes");
const clientes = document.getElementById("visualizar");
const formBox = document.getElementById("form-box");
const table = document.getElementById("table-box");

cadastro.addEventListener("click", () => {
  if (cadastro.classList.contains("active")) {
    visibilidade(formBox, "invisible");
    cadastro.classList.remove("active");
  } else {
    visibilidade(formBox, "visivel");
    visibilidade(table, "invisible");
    clientes.classList.remove("active");
    cadastro.classList.add("active");
  }
});

clientes.addEventListener("click", () => {
  if (clientes.classList.contains("active")) {
    visibilidade(table, "invisible");
    clientes.classList.remove("active");
  } else {
    visibilidade(table, "visivel");
    visibilidade(formBox, "invisible");
    clientes.classList.add("active");
    cadastro.classList.remove("active");
  }
});

function visibilidade(elemento, visibilidade) {
  if (visibilidade === "visivel") {
    elemento.classList.add("show");
    elemento.classList.remove("invisible");
  } else {
    elemento.classList.add("invisible");
    elemento.classList.remove("show");
  }
}
