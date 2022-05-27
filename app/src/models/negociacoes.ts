import { Modelo } from './../interfaces/modelo';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Modelo<Negociacoes>{ //a palavra-chave implements permite que implememntemos o comportamento de uma interface
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public ehIgual(negociacoes: Negociacoes): boolean{
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista())
    }

    public paraTexto(): string { //organiza a exibição das negociações no console
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
