const modal = document.querySelector(".modal");
const modalInner = document.querySelector(".modal__inner");
const addToCardButton = document.querySelector(".addToCard");
let previousActiveElement;

function openModal(e) {
  const button = e.currentTarget;
  const card = button.closest(".card");
  const productName = card.querySelector("h1").textContent;
  const productPrice = card.querySelector(".price").textContent;
  const modalProductName = modalInner.querySelector(".modal__product-name");
  const modalProductPrice = modalInner.querySelector(".modal__product-price");
  previousActiveElement = document.activeElement;

  Array.from(document.body.children).forEach(child => {
    if (child !== modal) {
      child.inert = true;
    }
  });

  modal.classList.add("open");
  modalProductName.textContent = productName;
  modalProductPrice.textContent = productPrice;
  modalInner.querySelector("button").focus();
}

function closeModal() {
  Array.from(document.body.children).forEach(child => {
    if (child !== modal) {
      child.inert = false;
    }
  });

  modal.classList.remove("open");
  previousActiveElement.focus();
}

function handleInnerButton(e) {
  const button = e.target.closest("button");
  if (button) {
    closeModal();
  }
}

function handleClickingOutsideModal(e) {
  const isOutside = !e.target.closest(".modal__inner");
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
addToCardButton.addEventListener("click", openModal);
window.addEventListener("keydown", handleKeyPress);
