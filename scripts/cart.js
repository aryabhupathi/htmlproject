function addToCart() {
  let flavor = document.querySelector('input[name="flavor"]:checked').value;
  let subscription = document.querySelector(
    'input[name="subscription"]:checked'
  ).value;
  let notification = document.getElementById("notification");
  notification.innerText = `Added to Cart: ${flavor} - ${subscription}`;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}

