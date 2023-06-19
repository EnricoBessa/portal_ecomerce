const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(res => res.json())
  .then(product => {
    const productDetails = document.getElementById('productDetails');

    const title = document.createElement('h2');
    title.textContent = product.title;
    productDetails.appendChild(title);

    const price = document.createElement('p');
    price.textContent = `Preço: $${product.price}`;
    productDetails.appendChild(price);

    const description = document.createElement('p');
    description.textContent = `Descrição: ${product.description}`;
    productDetails.appendChild(description);

    const category = document.createElement('p');
    category.textContent = `Categoria: ${product.category}`;
    productDetails.appendChild(category);

    const image = document.createElement('img');
    image.src = product.image;
    image.classList.add('img-produto'); // Adiciona a classe "img-produto" à imagem
    productDetails.appendChild(image);

    const rating = document.createElement('p');
    rating.textContent = `Avaliação: ${product.rating.rate} (${product.rating.count} views)`;
    productDetails.appendChild(rating);
  })
  .catch(error => console.log(error));
