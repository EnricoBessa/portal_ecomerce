const cardsContainer = document.getElementById("cards-container");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    json.forEach((product) => {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = product.image;
      img.alt = "Imagem do produto";
      card.appendChild(img);

      const a = document.createElement("a");
      a.textContent = product.title;
      a.href = `product.html?id=${product.id}`;
      card.appendChild(a);

      cardsContainer.appendChild(card);
    });
  })
  .catch((error) => console.log(error));

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase();
  filterProducts(searchValue);
});

function filterProducts(searchValue) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    const title = card.querySelector("a").textContent.toLowerCase();

    if (title.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
