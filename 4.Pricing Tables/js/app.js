const radioCheckboxes = Array.from(document.querySelectorAll("[name='duration']"));
const priceTags = Array.from(document.querySelectorAll(".pricing__plan .price"));
const priceState = {
  monthly: [0.99, 2.99, 5.99],
  annually: [9.99, 29.9, 59.9]
};

function checkToggler() {
  return radioCheckboxes.filter(radioBtn => radioBtn.checked);
}

function handlePrice(e) {
  let duration;
  const toggler = checkToggler();
  console.log(toggler);
  if (Object.keys(toggler).length === 0) {
    duration = radioCheckboxes[0].dataset.price;
    priceTags.map((price, index) => {
      price.textContent = `${priceState[duration][index]}/${duration}`;
    });
  } else {
    duration = toggler[0].dataset.price;
    priceTags.map((price, index) => {
      price.textContent = `${priceState[duration][index]}/${duration}`;
    });
  }
}

radioCheckboxes.forEach(radioBtn => addEventListener("input", handlePrice));

handlePrice();
