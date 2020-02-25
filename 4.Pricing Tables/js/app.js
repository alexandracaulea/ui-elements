const priceP = document.querySelectorAll(".price");
const radioButtons = Array.from(document.querySelectorAll("[name='duration']"));
const prices = {
  monthly: [0.99, 2.99, 5.99],
  annually: [9.99, 29.9, 59.9]
};

function displayPrice() {
  const checked = radioButtons.filter(radioBtn => radioBtn.checked);
  const periodPrice = checked[0].value;
  priceP.forEach((price, index) => (price.textContent = `$${prices[periodPrice][index]}/${periodPrice}`));
}

radioButtons.forEach(radioBtn => addEventListener("input", displayPrice));

displayPrice();
