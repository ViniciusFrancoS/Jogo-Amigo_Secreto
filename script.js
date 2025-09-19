//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//  Declaração do Array
let amigos = [];


//  Função para exibir a lista de amigos na tela
function atualizarLista() {
    // Obter o elemento da lista (<ul>)
    const listaUI = document.getElementById('listaAmigos');

    // Limpar a lista existente para evitar duplicados
    listaUI.innerHTML = '';

    // Percorrer o array de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Criar um elemento de lista (<li>) para cada amigo
        const amigoElemento = document.createElement('li');
        amigoElemento.textContent = amigos[i];
        
        // Adicionar o <li> criado à lista <ul> na tela
        listaUI.appendChild(amigoElemento);
    }
}


//  Função para adicionar amigos
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const campoNome = document.getElementById('amigo');
    const nomeAmigo = campoNome.value.trim();

    // Validar a entrada (campo não vazio)
    if (nomeAmigo === '') {
        alert("Por favor, insira um nome.");
        return;
    }

    // Validação extra: Nomes duplicados
    if (amigos.map(amigo => amigo.toLowerCase()).includes(nomeAmigo.toLowerCase())) {
        alert("Este nome já foi adicionado! Por favor, insira um nome diferente.");
        campoNome.value = '';
        return;
    }

    // Atualizar o array de amigos
    amigos.push(nomeAmigo);
    
    // Chama a função  para atualizar a tela após adicionar.
    atualizarLista();

    // Limpar o campo de entrada
    campoNome.value = '';
    campoNome.focus();
}


// Função para sortear um amigo
function sortearAmigo() {
    // Validar que há amigos disponíveis (pelo menos 2 para um sorteio)
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio.');
        return;
    }

    // Gerar um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    
    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceSorteado];

    // Mostrar o resultado
    const resultadoUI = document.getElementById('resultado');
    resultadoUI.innerHTML = `<p class="resultado-sorteio">O amigo secreto sorteado é: <strong>${amigoSorteado}!</strong></p>`;
}


// FUNÇÃO EXTRA: Reiniciar o jogo
function reiniciar() {
    // Limpa o array de amigos
    amigos = [];
    
    // Limpa o resultado do sorteio
    document.getElementById('resultado').innerHTML = '';
    
    // Limpa o campo de input
    document.getElementById('amigo').value = '';

    // Chama a função de atualização para garantir que a lista na tela fique vazia.
    atualizarLista();
}

//Vinicius Franco