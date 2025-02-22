document.getElementById("my-form").addEventListener("submit", function (e) {
  e.preventDefault();
  this.style.backgroundColor = "red";
  document.body.classList.add("bg-dark");

  let itemsList = document.querySelector(".items");
  if (itemsList.lastElementChild) {
    let newHeading = document.createElement("h1");
    newHeading.textContent = "Hello";
    itemsList.replaceChild(newHeading, itemsList.lastElementChild);
  }
});
