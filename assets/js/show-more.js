const elements = document.querySelectorAll(
  ".show-more-button-mat2, .show-more-button-mat1, .show-more-button, .show-more-button2"
);

function showMoreQui() {
  var cardsContainer = document.querySelector(".showMoreQui");
  var showMoreButton = document.querySelector(".show-more-button");
  var showMoreButton2 = document.querySelector(".show-more-button2");
  var landingqui = document.getElementById("landingqui");
  if (
    cardsContainer.style.display === "" ||
    cardsContainer.style.display === "none"
  ) {
    cardsContainer.style.display = "flex";
    showMoreButton.innerHTML = "";
    showMoreButton2.style.display = "flex";
    showMoreButton.style.border = "none";
    showMoreButton.style.cursor = "default";
    // Remover classe para desativar o efeito :hover
    showMoreButton.classList.remove("hover-active");
    cardsContainer.scrollIntoView({ behavior: "smooth" });
  } else {
    cardsContainer.style.display = "none";
    showMoreButton.innerHTML = "Mostrar mais";
    showMoreButton2.style.display = "none";
    showMoreButton.style.border = "";
    showMoreButton.style.cursor = "pointer";
    showMoreButton.classList.add("hover-active");
    landingqui.scrollIntoView({ behavior: "smooth" });
  }
}

function showMoreMat() {
  var cardsContainer = document.querySelector(".showMoreMat");
  var showMoreButton = document.querySelector(".show-more-button-mat1");
  var showMoreButton2 = document.querySelector(".show-more-button-mat2");
  var landingmat = document.getElementById("landingmat");

  if (
    cardsContainer.style.display === "" ||
    cardsContainer.style.display === "none"
  ) {
    cardsContainer.style.display = "flex";
    showMoreButton.innerHTML = "";
    showMoreButton2.style.display = "flex";
    showMoreButton.style.border = "none";
    showMoreButton.style.cursor = "default";
    // Remover classe para desativar o efeito :hover
    showMoreButton.classList.remove("hover-active");
    cardsContainer.scrollIntoView({ behavior: "smooth" });
  } else {
    cardsContainer.style.display = "none";
    showMoreButton.innerHTML = "Mostrar mais";
    showMoreButton2.style.display = "none";
    showMoreButton.style.border = "";
    showMoreButton.style.cursor = "pointer";
    // Remover classe para desativar o efeito :hover
    showMoreButton.classList.add("hover-active");
    landingmat.scrollIntoView({ behavior: "smooth" });
  }
}
