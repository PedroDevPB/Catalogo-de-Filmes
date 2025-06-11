// Página index.html
const catalogo = document.getElementById('catalogo');

if (catalogo) {
  fetch('http://localhost:3000/filmes')
    .then(res => res.json())
    .then(filmes => {
      filmes.forEach(filme => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
          <img src="${filme.imagem}" alt="${filme.titulo}">
          <h3>${filme.titulo}</h3>
          <p>${filme.descricao}</p>
        `;
        catalogo.appendChild(card);
      });
    })
    .catch(error => console.error("Erro ao carregar filmes:", error));
}

// Função para buscar filmes
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

// Página categorias.html
const categorias = document.getElementById('categorias');

if (categorias) {
  fetch('http://localhost:3000/filmes')
    .then(res => res.json())
    .then(filmes => {
      const agrupados = {};

      filmes.forEach(filme => {
        const cat = filme.categoria;
        if (!agrupados[cat]) agrupados[cat] = [];
        agrupados[cat].push(filme);
      });

      for (const categoria in agrupados) {
        const secao = document.createElement('section');
        secao.classList.add('categoria-bloco');

        const titulo = document.createElement('h2');
        titulo.textContent = categoria;
        titulo.classList.add('titulo-categoria');

        const linha = document.createElement('div');
        linha.classList.add('linha-filmes');

        agrupados[categoria].forEach(filme => {
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
        categorias.appendChild(secao);
      }
    })
    .catch(error => console.error("Erro ao carregar categorias:", error));
}
