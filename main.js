let contador = 0;

const visitas = document.getElementById("visitas");
const botao = document.getElementById("btn");

botao.addEventListener("click", () => {
    contador++;
    visitas.textContent = contador;
});