// Obtendo os elementos do DOM
const searchBtn = document.getElementById('search-btn');
const addBtn = document.getElementById('add-btn');
const searchInput = document.getElementById('search-input');
const addInput = document.getElementById('add-input');
const resultList = document.getElementById('result-list');

// Lista simulada de dados (poderia ser de um banco de dados, por exemplo)
let items = ['Filme 1', 'Filme 2', 'Filme 3', 'Filme 4'];

// Função para renderizar os itens na tela
function renderFilmes(filteredIFilme) {
    resultList.innerHTML = ''; 
    // Limpar lista anterior

    filteredItems.forEach(filme => {
        const li = document.createElement('li');
        li.textContent = item;
        resultList.appendChild(li);
    });
}

// Exibir todos os itens inicialmente
renderItems(filmes);

// Função de busca
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredItems = filmes.filter(filme => filme.toLowerCase().includes(searchTerm));
    renderFilmes(filteredFilmes);
});

// Função para adicionar um item à lista
addBtn.addEventListener('click', () => {
    const newItem = addInput.value.trim();
    if (newItem && !itemfilme.includes(newItem)) {
        items.push(newItem);
        renderFilmes(items);
        addInput.value = '';
         // Limpar o campo de entrada
    } else {
        alert('Por favor, insira um filme válido ou que ainda não exista na lista.');
    }
});
