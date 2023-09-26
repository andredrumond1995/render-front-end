const produtosList = document.getElementById('produtos-list');

const apiEndpoint = 'https://render-back-end.onrender.com/produtos'
// Função para buscar os produtos da API do backend
function buscarProdutos() {
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            exibirProdutos(data); // Chama a função exibirProdutos com os dados recebidos
        })
        .catch(error => console.error(error));
}

// Função para exibir os produtos na lista
function exibirProdutos(produtos) {
    produtosList.innerHTML = ''; // Limpa a lista
    produtos.forEach(produto => {
        const li = document.createElement('li');
        li.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
        produtosList.appendChild(li);
    });
}

// Chama a função para buscar os produtos quando a página carrega
buscarProdutos();