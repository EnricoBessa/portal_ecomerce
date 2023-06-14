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

      const title = document.createElement("h1");
      title.textContent = `${product.title}`;
      card.appendChild(title);

      const price = document.createElement("h2");
      price.textContent = `Preço: $${product.price}`;
      card.appendChild(price);

      const description = document.createElement("p");
      const maxWords = 30; // Define o número máximo de palavras para o limite
      const words = product.description.split(" ");
      const limitedDescription = words.slice(0, maxWords).join(" ");
      description.textContent = limitedDescription + (words.length > maxWords ? "..." : ""); // Adiciona reticências se houver mais palavras além do limite
      card.appendChild(description);

      const a = document.createElement("a");
      a.textContent = "Detalhes";
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
    const title = card.querySelector("h1").textContent.toLowerCase();

    if (title.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
