import { Imprimivel } from '../utils/imprimivel.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Imprimivel { //a palavra-chave implements permite que implememntemos o comportamento de uma interface
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string { //organiza a exibição das negociações no console
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
