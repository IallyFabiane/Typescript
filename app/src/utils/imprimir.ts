import { Imprimivel } from './imprimivel.js';

export function imprimir(...objetos: Array<Imprimivel>) { //utilizando rest operator para passar um número desconhecido de parâmetros para a função imprimir
    for(let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}