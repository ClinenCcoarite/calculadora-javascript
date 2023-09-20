const valorActual = document.getElementById("resultado");
const valorAnterior = document.getElementById("anterior");

const btn = document.querySelectorAll(".numero");
const op = document.querySelectorAll(".op");

const dele = document.querySelector(".flecha");
const deleAll = document.querySelector(".cero");


const display = new Operacion(valorActual, valorAnterior);

btn.forEach((boton) => {
    boton.addEventListener("click", () => {
        display.agregarNumero(boton.innerHTML);
    });
});
  
dele.addEventListener("click", () => display.borrar())
deleAll.addEventListener("click", () => display.borrarTodo())

op.forEach(boton => {
  boton.addEventListener('click', () => {
    display.computar(boton.value)
  }) 
})










