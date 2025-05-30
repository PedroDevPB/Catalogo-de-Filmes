// script para carregar o JSON e exibir os filmes
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

// script para carregar o JSON e exibir as categorias
fetch('categorias.json')
  .then(res => res.json())
  .then(categorias => {
    const container = document.getElementById('categorias');
    categorias.forEach(categoria => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <h3>${categoria.nome}</h3>
        <p>${categoria.descricao}</p>
      `;
      container.appendChild(card);
    });
  });

// Função para buscar filmes com base no título
function searchMovies() {
  const input = document.getElementById('campo-busca');
  const termoBusca = input.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const titulo = card.querySelector('h3');
    
    if (!titulo) return;

    const textoTitulo = titulo.textContent.toLowerCase();

    const corresponde = textoTitulo.includes(termoBusca);
    card.style.display = corresponde ? 'block' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('filmes.json')
    .then(res => res.json())
    .then(filmes => {
      const container = document.getElementById('categorias');
      const categorias = {};

      filmes.forEach(filme => {
        const cat = filme.categoria;
        if (!categorias[cat]) categorias[cat] = [];
        categorias[cat].push(filme);
      });

      // Cria as seções e as categorias
      for (const categoria in categorias) {
        const secao = document.createElement('section');
        secao.classList.add('categoria-bloco');

        const titulo = document.createElement('h2');
        titulo.textContent = categoria;
        titulo.classList.add('titulo-categoria');

        const linha = document.createElement('div');
        linha.classList.add('linha-filmes');

        categorias[categoria].forEach(filme => {
          const card = document.createElement('div');
          card.classList.add('card');

          card.innerHTML = `
            <img src="${filme.imagem}" alt="${filme.titulo}">
            <h3>${filme.titulo}</h3>
          `;
          linha.appendChild(card);
        });

        secao.appendChild(titulo);
        secao.appendChild(linha);
        container.appendChild(secao);
      }
    });
});