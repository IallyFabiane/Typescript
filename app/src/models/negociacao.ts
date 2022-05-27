import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao extends Imprimivel {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {
        super(); //chamando o constructor de Imprimivel
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public paraTexto(): string { //organiza a exibição das negociações no console
        return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}
       `;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao { //passando string para números
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}