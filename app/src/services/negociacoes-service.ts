import { Negociacao } from '../models/negociacao.js';
import { NegociacoesDoDia } from './../interfaces/negociacao-do-dia.js';

export class NegociacoesService {
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')  //api globalmente disponível no navegador. Recebe como parâmetro o endereço da api
        .then(res =>  res.json()) //retorna assíncronamente uma resposta e essa resposta é convertida para um objeto json
        .then((dados: NegociacoesDoDia[]) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante)
            })
        })
    }
}