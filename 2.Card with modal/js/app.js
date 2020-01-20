const cardButton = document.querySelector("button");
const modal = document.querySelector(".modal");
const modalInner = document.querySelector(".modal-inner");

function handleButtonClick(e) {
  const button = e.currentTarget;
  const card = button.closest(".card");
  const name = card.querySelector("h1").textContent;
  const price = card.querySelector(".price").textContent;

  modalInner.innerHTML = `
    <h2>The product was added in the cart</h2>
    <button class="close">&times;</button>
    <h3>${name}</h3>
    <span>${price}</span>
  `;

  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}

function handleInnerButton(e) {
  const button = e.target.closest("button");
  if (button) {
    closeModal();
  }
}

function handleClickingOutsideModal(e) {
  const isOutside = !e.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
}

function handleKeyPress(e) {
  if (e.key === "Escape") {
    closeModal();
  }
}

modal.addEventListener("click", handleClickingOutsideModal);
modalInner.addEventListener("click", handleInnerButton);
cardButton.addEventListener("click", handleButtonClick);
window.addEventListener("keydown", handleKeyPress);
