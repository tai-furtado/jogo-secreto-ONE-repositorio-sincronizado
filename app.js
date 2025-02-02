// O código ABAIXO foi transformado na função exibirTextoNaTela, que está no arquivo funcoes.js
// let titulo = document.querySelector('h1'); // Seleciona o elemento h1
// titulo.innerHTML = 'Jogo do número secreto'; // Altera o conteúdo do h1
// let paragrafo = document.querySelector('p'); // Seleciona o elemento p
// paragrafo.innerHTML = 'Escolha um número de 1 a 100 e tente a sorte adivinhando o número secreto!'; // Altera o conteúdo do p

// A tag/elemento do HTML é sempre a letra que vem após o símbolo de "menor que". Ex.: a tag/elemento <h1>
// O conteúdo do HTML é o que está entre a tag de abertura e a tag de fechamento. Ex.: o conteúdo do <h1> é "Jogo do número secreto"

let listaDeNumerosSorteados = []; // Cria um array vazio chamado listaDeNumerosSorteados
let numeroLimite = 100; // Cria uma variável chamada numeroLimite e atribui o valor 10
let numeroSecreto = gerarNumeroSecreto(); // Chama a função gerarNumeroSecreto e armazena o número secreto gerado na variável numeroSecreto (linha 15)
console.log (numeroSecreto); // Exibe o número secreto no console
let tentativas = 1;

function exibirTextoNaTela(tag, texto) { // Criação de uma função chamada exibirTextoNaTela que recebe dois parâmetros: tag e texto
    let campo = document.querySelector(tag); // Seleciona o elemento tag
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); // Adiciona a voz ao texto
}

function exibirMensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo do número secreto'); // Chama a função exibirTextoNaTela passando dois argumentos: 'h1' e 'Jogo do número secreto'
    exibirTextoNaTela('p', 'Escolha um número de 1 a ' + numeroLimite + ' e tente a sorte adivinhando o número secreto!'); // Chama a função exibirTextoNaTela passando dois argumentos: 'p' e 'Escolha um número de 1 a 100 e tente a sorte adivinhando o número secreto!'
}

exibirMensagemInicial(); // Chama a função exibirMensagemInicial

function verificarChute() { // Chama a função verificarChute que foi criada no HTML, linha 27. A indicação de que é uma função é o par de parênteses "()" ao final.
    // Sempre que for utilizar uma função é necessário chamar ela através do "function", chamanr o nome da função lembrando do parenteses e abrir e fechar chaves para indicar o que eu quero que esta função execute.
    let chute = document.querySelector('input').value; // Seleciona o input e armazena o valor digitado na variável chute
    
    if (chute == numeroSecreto) { // Verifica se o chute é igual ao número secreto
        exibirTextoNaTela('h1', 'Acertou!'); // Chama a função exibirTextoNaTela passando dois argumentos: 'h1' e 'Acertou!'
        let palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas'; // Cria uma variável chamada palavraTentativas e armazena a palavra
        let mensagemTentativas = 'Parabéns, você descobriu o número secreto com ' + tentativas + ' ' + palavraTentativas + ' !'; // Cria uma variável chamada mensagemTentativas e armazena a mensagem
        exibirTextoNaTela('p', mensagemTentativas); // Chama a função exibirTextoNaTela passando dois argumentos: 'p' e 'Parabéns! Você acertou o número secreto!'
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilita o botão reiniciar
        } else {
            if (chute > numeroSecreto) { // Verifica se o chute é maior que o número secreto
                exibirTextoNaTela('h1', 'Um pouco menos...'); // Chama a função exibirTextoNaTela passando dois argumentos: 'h1' e 'Errou!'
                    exibirTextoNaTela('p', 'O número secreto é menor que o chute!');// Chama a função exibirTextoNaTela passando dois argumentos: 'p' e 'O número secreto é menor que o chute!'
            } else{
                exibirTextoNaTela('h1', 'Um pouco mais...'); // Chama a função exibirTextoNaTela passando dois argumentos: 'h1' e 'Errou!'
                    exibirTextoNaTela('p', 'O número secreto é maior que o chute!'); // Chama a função exibirTextoNaTela passando dois argumentos: 'p' e 'O número secreto é maior que o chute!'
            }
            tentativas++; // Incrementa a variável tentativas
            limparCampo(); // Chama a função limparCampo
        }
}

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1); // Retorna o número secreto gerado
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; // Armazena a quantidade de elementos na lista de números sorteados

    if (quantidadeDeElementosNaLista == numeroLimite) { // Verifica se a quantidade de elementos na lista de números sorteados é igual a 10
        listaDeNumerosSorteados = []; // Limpa a lista de números sorteados
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { // Verifica se o número gerado já foi sorteado}
        return gerarNumeroSecreto(); // Chama a função gerarNumeroSecreto
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // Adiciona o número gerado ao array listaDeNumerosSorteados
        console.log(listaDeNumerosSorteados); // Exibe a lista de números sorteados no console
        return numeroEscolhido; // Retorna o número gerado
    }
}

function limparCampo() {
    document.querySelector('input').value = ''; // Limpa o campo de input
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto(); // Chama a função gerarNumeroSecreto e armazena o número secreto gerado na variável numeroSecreto
    limparCampo(); // Chama a função limparCampo
    tentativas = 1; // Reseta a variável tentativas
    exibirMensagemInicial(); // Chama a função exibirMensagemInicial
    document.getElementById('reiniciar').setAttribute('disabled', true); // Desabilita o botão reiniciar
}