fetch('filmes.json')
  .then(res => res.json())
  .then(filmes => {
    const container = document.getElementById('catalogo');
    filmes.forEach(filme => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <img src="${filme.imagem}" alt="${filme.titulo}">
        <h3>${filme.titulo}</h3>
        <p>${filme.descricao}</p>
      `;
      container.appendChild(card);
    });
  });
