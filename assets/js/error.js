document.addEventListener("DOMContentLoaded", function () {
  var elemento = document.getElementById("error");
  elemento.style.display = "block";
  elemento.style.opacity = "100%";
  elemento.style.transition = "10s";
  elemento.style.color = "red";
});

setTimeout(function () {
  var mensagemElemento = document.getElementById("error");
  mensagemElemento.style.opacity = "0";
}, 1000);
