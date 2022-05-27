import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}

const botaoImporta = document.querySelector('#botao-importa'); //capturando o botao-importa com o querySelector
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => { //adicionando o evento de clicar para acionar a execução do método importaDados de negociacao-controller.ts
        controller.importaDados(); //chamando o método que está em negociacao-controller
    })
} else {
    throw Error('Botão importa não foi encontrado');
}